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
    ];

    // Generate scattered small dots
    const totalDots = 40;
    
    for (let i = 0; i < totalDots; i++) {
      // Mix of sizes - mostly small
      const sizeRandom = Math.random();
      const size = sizeRandom > 0.85 ? "w-2.5 h-2.5" : sizeRandom > 0.5 ? "w-2 h-2" : "w-1.5 h-1.5";
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Scatter dots vertically across the area
      const top = 5 + Math.random() * 90;
      const left = position === "left" 
        ? 5 + Math.random() * 55 
        : 40 + Math.random() * 55;
      
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
            opacity: 0.4 + Math.random() * 0.5,
          }}
        />
      );
    }
    
    return result;
  }, [position]);

  return (
    <div
      className={cn(
        "absolute pointer-events-none",
        position === "left" ? "left-0" : "right-0",
        className
      )}
    >
      {dots}
    </div>
  );
};
