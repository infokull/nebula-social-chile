import { useState, useRef, useEffect } from "react";
import { Upload, Image as ImageIcon, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { uploadImage } from "@/lib/storage";
import { useAuth } from "@/hooks/useAuth";
import { useAdmin } from "@/hooks/useAdmin";
import { supabase } from "@/integrations/supabase/client";

interface ImageReplacerProps {
  imageKey: string;
  defaultContent?: React.ReactNode;
  className?: string;
  aspectRatio?: "video" | "square" | "auto" | "portrait";
  staticSrc?: string;
}

export const ImageReplacer = ({
  imageKey,
  defaultContent,
  className,
  aspectRatio = "video",
  staticSrc,
}: ImageReplacerProps) => {
  const { user } = useAuth();
  const { isAdmin } = useAdmin();
  const [cloudImage, setCloudImage] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load image from cloud storage on mount
  useEffect(() => {
    const checkCloudImage = async () => {
      // Check for common extensions
      const extensions = ["png", "jpg", "jpeg", "webp", "gif"];
      for (const ext of extensions) {
        const { data } = supabase.storage
          .from("site-images")
          .getPublicUrl(`${imageKey}.${ext}`);
        
        // Check if image exists by trying to fetch it
        try {
          const response = await fetch(data.publicUrl, { method: "HEAD" });
          if (response.ok) {
            setCloudImage(`${data.publicUrl}?t=${Date.now()}`);
            return;
          }
        } catch {
          // Continue to next extension
        }
      }
    };
    
    checkCloudImage();
  }, [imageKey]);

  const displayImage = staticSrc || cloudImage;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!isAdmin) {
      toast.error("Solo administradores pueden editar el contenido");
      return;
    }

    setIsUploading(true);
    const { url, error } = await uploadImage(file, imageKey);
    setIsUploading(false);

    if (error) {
      toast.error(`Error: ${error}`);
      return;
    }

    if (url) {
      setCloudImage(`${url}?t=${Date.now()}`);
      toast.success("Imagen subida permanentemente");
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isAdmin) {
      return; // Non-admins can't edit
    }
    fileInputRef.current?.click();
  };

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    auto: "",
    portrait: "aspect-[3/4]",
  };

  // Only admins see the interactive cursor
  const isEditable = isAdmin;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl group",
        isEditable && "cursor-pointer",
        aspectClasses[aspectRatio],
        className
      )}
      onMouseEnter={() => isEditable && setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={isEditable ? handleClick : undefined}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {displayImage ? (
        <img
          src={displayImage}
          alt="Custom"
          className={cn(
            "w-full",
            aspectRatio === "auto" ? "h-auto object-contain" : "h-full object-cover"
          )}
        />
      ) : (
        defaultContent || (
          <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
          </div>
        )
      )}

      {/* Hover overlay - only for admins */}
      {isEditable && (
        <div
          className={cn(
            "absolute inset-0 bg-navy/80 flex flex-col items-center justify-center transition-opacity duration-200",
            isHovering ? "opacity-100" : "opacity-0"
          )}
        >
          {isUploading ? (
            <span className="text-white text-sm">Subiendo...</span>
          ) : (
            <>
              <Upload className="w-8 h-8 text-white mb-2" />
              <span className="text-white text-sm font-medium text-center px-4">
                {displayImage ? "Reemplazar imagen" : "Subir imagen"}
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
};
