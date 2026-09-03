import React from "react";
import { motion } from "framer-motion";
import { GlowOrb } from "../ui/GlowOrb";

const outcomes = [
  {
    label: "LESS MANUAL WORK",
    description: "Repetitive tasks handled automatically, freeing your team for higher-value decisions.",
    indicator: "HIGH IMPACT",
  },
  {
    label: "FASTER RESPONSE",
    description: "Customers, leads and enquiries get instant, intelligent responses at any time.",
    indicator: "ALWAYS ON",
  },
  {
    label: "CONNECTED WORKFLOWS",
    description: "Your tools share data and trigger each other automatically — no gaps in between.",
    indicator: "INTEGRATED",
  },
  {
    label: "BETTER CUSTOMER EXPERIENCE",
    description: "Consistent, intelligent interactions across every touchpoint your customers use.",
    indicator: "SEAMLESS",
  },
  {
    label: "MORE CONSISTENT OPERATIONS",
    description: "Systems execute processes exactly the same way, every time, without variation.",
    indicator: "RELIABLE",
  },
  {
    label: "DESIGNED TO SCALE",
    description: "Infrastructure built to grow with your business without rebuilding from scratch.",
    indicator: "FUTURE READY",
  },
];

export const Results: React.FC = () => {
  return (
    <section
      className="relative py-32 md:py-40 overflow-hidden border-t border-[rgba(70,150,125,0.08)]"
      aria-label="Results and outcomes"
    >
      <GlowOrb size={600} x="50%" y="50%" opacity={0.04} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0] mb-4 block">
            — WHAT CHANGES
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#F0F7F4] leading-tight tracking-tight">
            What intelligent systems
            <br />
            <span className="text-[#8EA8A0] font-extralight">change for your business.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#F0F7F4] group-hover:text-[#35F2B0] transition-colors duration-300">
                  {o.label}
                </h3>
                <span className="font-mono text-[8px] tracking-widest uppercase text-[#35F2B0] opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  {o.indicator}
                </span>
              </div>
              <div className="w-full h-px bg-[rgba(70,150,125,0.12)] mb-4 relative overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.5, duration: 1.2, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 bg-[#35F2B0] opacity-30"
                />
              </div>
              <p className="text-[#8EA8A0] text-sm leading-relaxed">
                {o.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
