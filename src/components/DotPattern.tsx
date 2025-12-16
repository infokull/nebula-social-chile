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

    // Generate clustered dots with overlapping effect
    const clusters = 4;
    const dotsPerCluster = 4;
    
    for (let c = 0; c < clusters; c++) {
      // Base position for each cluster
      const clusterTop = 15 + c * 22;
      const clusterLeft = position === "left" 
        ? 10 + (c % 2) * 25 
        : 50 + (c % 2) * 25;
      
      for (let i = 0; i < dotsPerCluster; i++) {
        const size = Math.random() > 0.5 ? "w-6 h-6" : "w-5 h-5";
        const color = colors[Math.floor(Math.random() * colors.length)];
        // Small offset from cluster center for overlap effect
        const offsetTop = (Math.random() - 0.5) * 15;
        const offsetLeft = (Math.random() - 0.5) * 15;
        
        result.push(
          <div
            key={`${c}-${i}`}
            className={cn(
              "absolute rounded-full mix-blend-multiply",
              size,
              color
            )}
            style={{
              top: `${clusterTop + offsetTop}%`,
              left: `${clusterLeft + offsetLeft}%`,
              opacity: 0.5 + Math.random() * 0.3,
            }}
          />
        );
      }
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
