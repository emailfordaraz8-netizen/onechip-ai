import React from "react";

interface GlowOrbProps {
  size?: number;
  x?: string;
  y?: string;
  opacity?: number;
  color?: string;
  className?: string;
}

export const GlowOrb: React.FC<GlowOrbProps> = ({
  size = 600,
  x = "50%",
  y = "50%",
  opacity = 0.06,
  color = "#35F2B0",
  className = "",
}) => {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      aria-hidden="true"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity,
        borderRadius: "50%",
        filter: "blur(40px)",
      }}
    />
  );
};
