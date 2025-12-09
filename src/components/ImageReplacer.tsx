import { useState, useRef } from "react";
import { Upload, Image as ImageIcon, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface ImageReplacerProps {
  imageKey: string;
  defaultContent?: React.ReactNode;
  className?: string;
  aspectRatio?: "video" | "square" | "auto";
  staticSrc?: string; // Para imágenes estáticas del repo
}

export const ImageReplacer = ({
  imageKey,
  defaultContent,
  className,
  aspectRatio = "video",
  staticSrc,
}: ImageReplacerProps) => {
  const [tempImage, setTempImage] = useState<string | null>(() => {
    return localStorage.getItem(`nebula-image-${imageKey}`);
  });
  const [isHovering, setIsHovering] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Usar imagen estática si existe, sino la temporal de localStorage
  const displayImage = staticSrc || tempImage;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        localStorage.setItem(`nebula-image-${imageKey}`, base64);
        setTempImage(base64);
        
        // Descargar archivo para que el usuario lo agregue al repo
        const link = document.createElement('a');
        link.href = URL.createObjectURL(file);
        link.download = `${imageKey}.${file.name.split('.').pop()}`;
        link.click();
        
        toast.success(
          `Imagen guardada temporalmente. El archivo "${link.download}" se descargó. Agrégalo a src/assets/images/ en tu repo de GitHub.`,
          { duration: 8000 }
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    auto: "",
  };

  return (
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
        <Upload className="w-8 h-8 text-white mb-2" />
        <span className="text-white text-sm font-medium text-center px-4">
          {displayImage ? "Reemplazar imagen" : "Subir imagen"}
        </span>
        {tempImage && !staticSrc && (
          <span className="text-white/70 text-xs mt-1">(temporal)</span>
        )}
      </div>
    </div>
  );
};
