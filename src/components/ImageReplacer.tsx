import { useState, useRef, useEffect } from "react";
import { Upload, Image as ImageIcon, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { uploadImage } from "@/lib/storage";
import { useAuth } from "@/hooks/useAuth";
import { AdminLogin } from "./AdminLogin";
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
  const [cloudImage, setCloudImage] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
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

    if (!user) {
      setShowLogin(true);
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
    if (!user) {
      setShowLogin(true);
      return;
    }
    fileInputRef.current?.click();
  };

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    auto: "",
    portrait: "aspect-[3/4]",
  };

  return (
    <>
      <div
        className={cn(
          "relative overflow-hidden rounded-xl cursor-pointer group",
          aspectClasses[aspectRatio],
          className
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleClick}
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
            className="w-full h-full object-cover"
          />
        ) : (
          defaultContent || (
            <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
            </div>
          )
        )}

        {/* Hover overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-navy/80 flex flex-col items-center justify-center transition-opacity duration-200",
            isHovering ? "opacity-100" : "opacity-0"
          )}
        >
          {isUploading ? (
            <span className="text-white text-sm">Subiendo...</span>
          ) : user ? (
            <>
              <Upload className="w-8 h-8 text-white mb-2" />
              <span className="text-white text-sm font-medium text-center px-4">
                {displayImage ? "Reemplazar imagen" : "Subir imagen"}
              </span>
            </>
          ) : (
            <>
              <Lock className="w-8 h-8 text-white mb-2" />
              <span className="text-white text-sm font-medium text-center px-4">
                Inicia sesión para editar
              </span>
            </>
          )}
        </div>
      </div>

      {/* Login modal */}
      {showLogin && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowLogin(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <AdminLogin onClose={() => setShowLogin(false)} />
          </div>
        </div>
      )}
    </>
  );
};
