import { useState, useRef } from "react";
import { Upload, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageReplacerProps {
  imageKey: string;
  defaultContent?: React.ReactNode;
  className?: string;
  aspectRatio?: "video" | "square" | "auto";
}

export const ImageReplacer = ({
  imageKey,
  defaultContent,
  className,
  aspectRatio = "video",
}: ImageReplacerProps) => {
  const [image, setImage] = useState<string | null>(() => {
    return localStorage.getItem(`nebula-image-${imageKey}`);
  });
  const [isHovering, setIsHovering] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        localStorage.setItem(`nebula-image-${imageKey}`, base64);
        setImage(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
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

      {image ? (
        <img
          src={image}
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
        <span className="text-white text-sm font-medium">
          {image ? "Reemplazar imagen" : "Subir imagen"}
        </span>
      </div>
    </div>
  );
};
