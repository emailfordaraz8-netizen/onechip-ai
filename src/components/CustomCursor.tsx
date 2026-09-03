import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [nodeHovered, setNodeHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const posRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA";
      const isNode = target.closest("[data-node]");
      setHovered(!!isInteractive);
      setNodeHovered(!!isNode);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [visible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{ x: pos.x - (nodeHovered ? 20 : hovered ? 16 : 4), y: pos.y - (nodeHovered ? 20 : hovered ? 16 : 4) }}
      animate={{
        opacity: visible ? 1 : 0,
        width: nodeHovered ? 40 : hovered ? 32 : 8,
        height: nodeHovered ? 40 : hovered ? 32 : 8,
      }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      <div
        className={`rounded-full transition-all duration-150 ${
          nodeHovered
            ? "w-10 h-10 border border-[#35F2B0] bg-transparent"
            : hovered
            ? "w-8 h-8 bg-[#35F2B0] opacity-80"
            : "w-2 h-2 bg-[#35F2B0]"
        }`}
        style={{ boxShadow: hovered || nodeHovered ? "0 0 12px rgba(53,242,176,0.6)" : "0 0 4px rgba(53,242,176,0.8)" }}
      />
    </motion.div>
  );
};
