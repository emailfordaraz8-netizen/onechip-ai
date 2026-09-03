import React from "react";
import { motion } from "framer-motion";

const statusItems = [
  { label: "AI AGENTS", status: "ACTIVE" },
  { label: "AUTOMATIONS", status: "RUNNING" },
  { label: "INTEGRATIONS", status: "CONNECTED" },
  { label: "INTELLIGENCE", status: "ONLINE" },
];

export const SystemStatus: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative border-y border-[rgba(70,150,125,0.1)] bg-[rgba(6,16,14,0.6)] py-5"
      aria-label="System status"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
          {/* Status indicator */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-[#35F2B0]" />
                <div className="absolute inset-0 rounded-full bg-[#35F2B0] animate-ping opacity-50" />
              </div>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#49655D]">
                SYSTEM STATUS
              </span>
            </div>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#35F2B0]">
              ● ONLINE
            </span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-[rgba(70,150,125,0.2)]" aria-hidden="true" />

          {/* Status items */}
          <div className="flex flex-wrap gap-6 sm:gap-10">
            {statusItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="flex items-center gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-[#35F2B0] opacity-60" />
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#49655D]">
                  {item.label}
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#35F2B0] opacity-60">
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
