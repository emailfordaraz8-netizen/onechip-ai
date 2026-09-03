import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  className = "",
}) => {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[#35F2B0] ${className}`}
    >
      {children}
    </span>
  );
};

interface TechnicalLabelProps {
  label: string;
  value?: string;
  active?: boolean;
  className?: string;
}

export const TechnicalLabel: React.FC<TechnicalLabelProps> = ({
  label,
  value,
  active = false,
  className = "",
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.15em] uppercase ${className}`}
    >
      {active && (
        <span className="w-1 h-1 rounded-full bg-[#35F2B0] animate-pulse" />
      )}
      <span className="text-[#49655D]">{label}</span>
      {value && <span className="text-[#35F2B0]">{value}</span>}
    </div>
  );
};
