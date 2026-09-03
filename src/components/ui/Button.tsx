import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  type = "button",
  disabled = false,
  ariaLabel,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020807] disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeClasses = {
    sm: "px-4 py-2 text-xs tracking-[0.1em]",
    md: "px-6 py-3 text-sm tracking-[0.08em]",
    lg: "px-8 py-4 text-sm tracking-[0.1em]",
  };

  const variantClasses = {
    primary:
      "bg-[#35F2B0] text-[#020807] hover:bg-[#50FFC2] font-semibold uppercase",
    secondary:
      "border border-[rgba(70,150,125,0.3)] text-[#F0F7F4] hover:border-[#35F2B0] hover:text-[#35F2B0] uppercase tracking-widest bg-transparent",
    ghost:
      "text-[#8EA8A0] hover:text-[#35F2B0] uppercase tracking-widest",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const MotionWrapper = ({ children: c }: { children: React.ReactNode }) => (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className="inline-flex"
    >
      {c}
    </motion.div>
  );

  if (href) {
    return (
      <MotionWrapper>
        <a href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </a>
      </MotionWrapper>
    );
  }

  return (
    <MotionWrapper>
      <button
        type={type}
        onClick={onClick}
        className={classes}
        disabled={disabled}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    </MotionWrapper>
  );
};
