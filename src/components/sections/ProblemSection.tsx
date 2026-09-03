import React from "react";
import { motion } from "framer-motion";
import { GlowOrb } from "../ui/GlowOrb";

const problems = [
  "Missed leads",
  "Slow replies",
  "Manual data entry",
  "Disconnected tools",
  "Repetitive questions",
  "Follow-up tasks",
  "Appointment management",
  "Copy-paste workflows",
];

const outcomes = [
  { label: "Instant lead response", value: "AI handles enquiries 24/7" },
  { label: "Automated follow-up", value: "No lead left behind" },
  { label: "Connected data", value: "One source of truth" },
  { label: "Integrated tools", value: "Everything works together" },
];

export const ProblemSection: React.FC = () => {
  return (
    <section
      className="relative py-32 md:py-40 overflow-hidden"
      aria-label="Problem and solution"
    >
      <GlowOrb size={600} x="80%" y="30%" opacity={0.04} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#F0F7F4] leading-tight tracking-tight">
            Too much work
            <br />
            <span className="text-[#8EA8A0] font-extralight">still happens manually.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Problems */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#49655D]">
                FRAGMENTED
              </span>
              <div className="flex-1 h-px bg-[rgba(70,150,125,0.1)]" />
            </div>
            <div className="space-y-1">
              {problems.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="group flex items-center gap-4 py-4 border-b border-[rgba(70,150,125,0.08)] hover:border-[rgba(70,150,125,0.2)] transition-all duration-300"
                >
                  <span className="font-mono text-[9px] text-[#49655D] w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-[#49655D] group-hover:bg-[#35F2B0] transition-colors duration-300" />
                  <span className="text-[#8EA8A0] group-hover:text-[#F0F7F4] transition-colors duration-300">
                    {p}
                  </span>
                  <div className="ml-auto">
                    <span className="font-mono text-[9px] text-[#49655D] opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-widest">
                      MANUAL
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Connected state */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#35F2B0]">
                CONNECTED
              </span>
              <div className="flex-1 h-px bg-[rgba(53,242,176,0.15)]" />
            </div>

            <div className="relative">
              {/* Central core visual */}
              <div className="mb-8 flex items-center gap-6">
                <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-[rgba(53,242,176,0.15)] animate-ping" style={{ animationDuration: "3s" }} />
                  <div className="absolute inset-1 rounded-full border border-[rgba(53,242,176,0.2)]" />
                  <div className="w-3 h-3 rounded-full bg-[#35F2B0]" />
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-[#35F2B0] mb-1">
                    INTELLIGENT CORE / ACTIVE
                  </div>
                  <p className="text-[#8EA8A0] text-sm">
                    One system handles everything automatically.
                  </p>
                </div>
              </div>

              {/* Outcomes */}
              <div className="space-y-3">
                {outcomes.map((o, i) => (
                  <motion.div
                    key={o.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-start gap-4 p-4 border border-[rgba(53,242,176,0.1)] bg-[rgba(53,242,176,0.02)]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#35F2B0] mt-1.5 shrink-0" />
                    <div>
                      <div className="text-[#F0F7F4] text-sm font-medium mb-1">{o.label}</div>
                      <div className="text-[#49655D] text-xs font-mono tracking-wide">{o.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
