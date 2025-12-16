import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface DotPatternProps {
  className?: string;
  position: "left" | "right";
}

export const DotPattern = ({ className, position }: DotPatternProps) => {
  const dots = useMemo(() => {
    const result = [];
    const colors = [
      "bg-cyan-300",
      "bg-cyan-400",
      "bg-sky-300",
      "bg-sky-400",
      "bg-blue-300",
      "bg-blue-400",
      "bg-purple-300",
      "bg-pink-300",
    ];

    // Generate scattered small dots
    const totalDots = 50;
    
    for (let i = 0; i < totalDots; i++) {
      const sizeRandom = Math.random();
      const size = sizeRandom > 0.85 ? "w-2.5 h-2.5" : sizeRandom > 0.5 ? "w-2 h-2" : "w-1.5 h-1.5";
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Create organic distribution within the blob shape
      const top = 10 + Math.random() * 80;
      const left = 10 + Math.random() * 80;
      
      result.push(
        <div
          key={i}
          className={cn(
            "absolute rounded-full",
            size,
            color
          )}
          style={{
            top: `${top}%`,
            left: `${left}%`,
            opacity: 0.5 + Math.random() * 0.4,
          }}
        />
      );
    }
    
    return result;
  }, []);

  // Organic blob clip-path shapes
  const leftBlobPath = "polygon(30% 0%, 70% 5%, 95% 20%, 100% 50%, 90% 80%, 60% 100%, 20% 95%, 0% 70%, 5% 30%)";
  const rightBlobPath = "polygon(40% 0%, 80% 10%, 100% 40%, 95% 75%, 70% 100%, 30% 90%, 0% 60%, 10% 25%)";

  return (
    <div
      className={cn(
        "absolute pointer-events-none",
        position === "left" ? "-left-10 md:-left-5" : "-right-10 md:-right-5",
        className
      )}
      style={{
        clipPath: position === "left" ? leftBlobPath : rightBlobPath,
      }}
    >
      {dots}
    </div>
  );
};
