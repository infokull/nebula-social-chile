import { cn } from "@/lib/utils";

interface DotPatternProps {
  className?: string;
  position: "left" | "right";
}

export const DotPattern = ({ className, position }: DotPatternProps) => {
  const dots = [];
  const colors = [
    "bg-purple",
    "bg-coral",
    "bg-purple/60",
    "bg-coral/60",
    "bg-orange-400",
    "bg-purple/40",
    "bg-coral/40",
  ];

  // Generate random dots
  for (let i = 0; i < 35; i++) {
    const size = Math.random() > 0.7 ? "w-2 h-2" : "w-1.5 h-1.5";
    const color = colors[Math.floor(Math.random() * colors.length)];
    const top = Math.random() * 100;
    const left = position === "left" ? Math.random() * 60 : 40 + Math.random() * 60;
    
    dots.push(
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
          opacity: 0.4 + Math.random() * 0.6,
        }}
      />
    );
  }

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
