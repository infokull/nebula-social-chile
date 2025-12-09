import { useState, useRef, useEffect } from "react";
import { Upload, Video, Lock, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { AdminLogin } from "./AdminLogin";
import { supabase } from "@/integrations/supabase/client";

interface VideoReplacerProps {
  videoKey: string;
  defaultContent?: React.ReactNode;
  className?: string;
}

const uploadVideo = async (
  file: File,
  videoKey: string
): Promise<{ url: string | null; error: string | null }> => {
  try {
    const ext = file.name.split(".").pop();
    const fileName = `${videoKey}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("site-images")
      .upload(fileName, file, {
        upsert: true,
      });

    if (uploadError) {
      return { url: null, error: uploadError.message };
    }

    const { data } = supabase.storage
      .from("site-images")
      .getPublicUrl(fileName);

    return { url: data.publicUrl, error: null };
  } catch (err) {
    return { url: null, error: "Error al subir el video" };
  }
};

export const VideoReplacer = ({
  videoKey,
  defaultContent,
  className,
}: VideoReplacerProps) => {
  const { user } = useAuth();
  const [cloudVideo, setCloudVideo] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Load video from cloud storage on mount
  useEffect(() => {
    const checkCloudVideo = async () => {
      const extensions = ["mp4", "webm", "mov"];
      for (const ext of extensions) {
        const { data } = supabase.storage
          .from("site-images")
          .getPublicUrl(`${videoKey}.${ext}`);

        try {
          const response = await fetch(data.publicUrl, { method: "HEAD" });
          if (response.ok) {
            setCloudVideo(`${data.publicUrl}?t=${Date.now()}`);
            return;
          }
        } catch {
          // Continue to next extension
        }
      }
    };

    checkCloudVideo();
  }, [videoKey]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!user) {
      setShowLogin(true);
      return;
    }

    // Validate file type
    if (!file.type.startsWith("video/")) {
      toast.error("Por favor selecciona un archivo de video");
      return;
    }

    setIsUploading(true);
    const { url, error } = await uploadVideo(file, videoKey);
    setIsUploading(false);

    if (error) {
      toast.error(`Error: ${error}`);
      return;
    }

    if (url) {
      setCloudVideo(`${url}?t=${Date.now()}`);
      toast.success("Video subido permanentemente");
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

  return (
    <>
      <div
        className={cn(
          "relative overflow-hidden rounded-xl cursor-pointer group aspect-video",
          className
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="video/mp4,video/webm,video/quicktime"
          onChange={handleFileChange}
          className="hidden"
        />

        {cloudVideo ? (
          <video
            ref={videoRef}
            src={cloudVideo}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          defaultContent || (
            <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
              <Video className="w-12 h-12 text-muted-foreground/50" />
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
            <span className="text-white text-sm">Subiendo video...</span>
          ) : user ? (
            <>
              <Upload className="w-8 h-8 text-white mb-2" />
              <span className="text-white text-sm font-medium text-center px-4">
                {cloudVideo ? "Reemplazar video" : "Subir video MP4"}
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

        {/* Play icon when video is present but not hovering */}
        {cloudVideo && !isHovering && (
          <div className="absolute bottom-3 right-3 bg-navy/60 rounded-full p-2">
            <Play className="w-4 h-4 text-white" fill="white" />
          </div>
        )}
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
