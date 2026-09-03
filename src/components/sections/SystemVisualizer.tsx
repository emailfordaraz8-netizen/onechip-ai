import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlowOrb } from "../ui/GlowOrb";

interface SystemNode {
  id: string;
  label: string;
  angle: number;
  radius: number;
  info: string;
}

const systemNodes: SystemNode[] = [
  { id: "website", label: "Website", angle: 0, radius: 42, info: "Captures leads, serves content and routes visitors into your system." },
  { id: "whatsapp", label: "WhatsApp", angle: 45, radius: 42, info: "AI-powered conversations via WhatsApp Business API." },
  { id: "crm", label: "CRM", angle: 90, radius: 42, info: "Automatically updates contacts, deals and pipelines." },
  { id: "calendar", label: "Calendar", angle: 135, radius: 42, info: "Books and manages appointments without manual input." },
  { id: "email", label: "Email", angle: 180, radius: 42, info: "Intelligent email routing, replies and sequences." },
  { id: "database", label: "Database", angle: 225, radius: 42, info: "Stores, retrieves and processes business data intelligently." },
  { id: "agent", label: "AI Agent", angle: 270, radius: 42, info: "The intelligence layer that understands, decides and acts." },
  { id: "automation", label: "Automation", angle: 315, radius: 42, info: "Executes workflows and processes without human intervention." },
];

const toRad = (deg: number) => (deg * Math.PI) / 180;

export const SystemVisualizer: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeNode, setActiveNode] = useState<SystemNode | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(300);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setSize(Math.min(w * 0.85, 480));
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const r = size / 2;
  const nodeR = size * 0.42;
  const svgSize = size;

  const getNodePos = (node: SystemNode) => ({
    x: r + nodeR * Math.cos(toRad(node.angle - 90)),
    y: r + nodeR * Math.sin(toRad(node.angle - 90)),
  });

  const handleNodeInteraction = (node: SystemNode) => {
    if (activeNode?.id === node.id) {
      setActiveNode(null);
      setHoveredNode(null);
    } else {
      setActiveNode(node);
      setHoveredNode(node.id);
    }
  };

  return (
    <section
      className="relative py-32 md:py-40 overflow-hidden"
      aria-label="System visualizer"
    >
      <GlowOrb size={800} x="50%" y="50%" opacity={0.05} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-[#F0F7F4] leading-tight tracking-tight"
          >
            Everything connected.
            <br />
            <span className="text-[#8EA8A0] font-extralight">One intelligent system.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[#49655D] font-mono text-[10px] tracking-widest uppercase"
          >
            Hover any node to see its role
          </motion.p>
        </div>

        {/* Visualizer */}
        <div ref={containerRef} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* SVG network */}
          <div className="flex-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
              style={{ width: svgSize, height: svgSize }}
            >
              <svg
                width={svgSize}
                height={svgSize}
                viewBox={`0 0 ${svgSize} ${svgSize}`}
                className="absolute inset-0"
                aria-hidden="true"
              >
                {/* Connection lines */}
                {systemNodes.map((node) => {
                  const pos = getNodePos(node);
                  const isHovered = hoveredNode === node.id;
                  return (
                    <line
                      key={`line-${node.id}`}
                      x1={r}
                      y1={r}
                      x2={pos.x}
                      y2={pos.y}
                      stroke={isHovered ? "rgba(53,242,176,0.5)" : "rgba(53,242,176,0.1)"}
                      strokeWidth={isHovered ? 1 : 0.5}
                      className="transition-all duration-300"
                    />
                  );
                })}

                {/* Orbit rings */}
                <circle cx={r} cy={r} r={nodeR} stroke="rgba(53,242,176,0.05)" strokeWidth="0.5" fill="none" />
                <circle cx={r} cy={r} r={nodeR * 0.6} stroke="rgba(53,242,176,0.04)" strokeWidth="0.5" fill="none" />

                {/* Central core */}
                <circle cx={r} cy={r} r={28} fill="rgba(53,242,176,0.05)" />
                <circle cx={r} cy={r} r={20} fill="rgba(53,242,176,0.08)" />
                <circle cx={r} cy={r} r={12} fill="rgba(53,242,176,0.15)" />
                <circle cx={r} cy={r} r={6} fill="#35F2B0" />

                {/* Nodes */}
                {systemNodes.map((node) => {
                  const pos = getNodePos(node);
                  const isHovered = hoveredNode === node.id;
                  return (
                    <g key={node.id}>
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={isHovered ? 16 : 12}
                        fill={isHovered ? "rgba(53,242,176,0.15)" : "rgba(53,242,176,0.06)"}
                        stroke={isHovered ? "rgba(53,242,176,0.6)" : "rgba(53,242,176,0.2)"}
                        strokeWidth="0.8"
                        className="transition-all duration-300"
                      />
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={4}
                        fill={isHovered ? "#35F2B0" : "rgba(53,242,176,0.5)"}
                        className="transition-all duration-300"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Node labels — HTML overlay */}
              {systemNodes.map((node) => {
                const pos = getNodePos(node);
                const isHovered = hoveredNode === node.id;
                const isRight = pos.x > r;
                const isBottom = pos.y > r;

                return (
                  <button
                    key={node.id}
                    data-node
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none group`}
                    style={{ left: pos.x, top: pos.y, width: 80, height: 80 }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => { setHoveredNode(null); }}
                    onClick={() => handleNodeInteraction(node)}
                    aria-label={`${node.label}: ${node.info}`}
                  >
                    <span
                      className={`
                        absolute whitespace-nowrap font-mono text-[10px] tracking-widest uppercase transition-all duration-300
                        ${isHovered ? "text-[#35F2B0]" : "text-[#49655D]"}
                        ${isBottom ? "top-[calc(50%+18px)]" : "bottom-[calc(50%+18px)]"}
                        ${isRight ? "left-1/2" : "right-1/2"}
                      `}
                    >
                      {node.label}
                    </span>
                  </button>
                );
              })}

              {/* Core label */}
              <div
                className="absolute pointer-events-none"
                style={{
                  left: r,
                  top: r,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="text-center mt-10">
                  <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-[#35F2B0] whitespace-nowrap">
                    ONECHIP CORE
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Info panel */}
          <div className="flex-1 lg:max-w-xs">
            <AnimatePresence mode="wait">
              {activeNode ? (
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 border border-[rgba(53,242,176,0.2)] bg-[rgba(6,16,14,0.6)]"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#35F2B0]" />
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#35F2B0]">
                      {activeNode.label} / CONNECTED
                    </span>
                  </div>
                  <p className="text-[#8EA8A0] text-sm leading-relaxed">
                    {activeNode.info}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[rgba(70,150,125,0.12)]">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#35F2B0] animate-pulse" />
                      <span className="font-mono text-[9px] tracking-widest text-[#49655D] uppercase">
                        NODE / ACTIVE
                      </span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 border border-[rgba(70,150,125,0.08)] bg-[rgba(6,16,14,0.3)]"
                >
                  <p className="text-[#49655D] text-sm leading-relaxed font-mono">
                    Select any node to see how it connects to the intelligent core.
                  </p>
                  <div className="mt-6 space-y-2">
                    {systemNodes.slice(0, 4).map((n) => (
                      <div key={n.id} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#35F2B0] opacity-30" />
                        <span className="font-mono text-[9px] tracking-widest uppercase text-[#49655D]">
                          {n.label}
                        </span>
                      </div>
                    ))}
                    <div className="font-mono text-[9px] tracking-widest uppercase text-[#49655D] opacity-40 pl-3">
                      + {systemNodes.length - 4} more
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
