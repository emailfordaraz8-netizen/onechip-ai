import React from "react";
import { motion } from "framer-motion";
import { GlowOrb } from "../ui/GlowOrb";

const principles = [
  {
    title: "BUILT AROUND YOUR BUSINESS",
    description: "Not generic templates.",
    detail: "Every system is designed around your actual workflows, tools and team — not adapted from a one-size-fits-all solution.",
  },
  {
    title: "CONNECTED BY DESIGN",
    description: "Your tools should work together.",
    detail: "We build integrations that make your existing software communicate automatically — no more switching, copying or re-entering data.",
  },
  {
    title: "HUMAN-FRIENDLY",
    description: "Powerful technology without unnecessary complexity.",
    detail: "The best AI systems are invisible. They handle the work and stay out of the way. We build for people, not for demos.",
  },
  {
    title: "REAL WORKFLOWS",
    description: "Built around how teams actually operate.",
    detail: "We start by understanding how your team really works — not how a theoretical team should work — and build around that reality.",
  },
  {
    title: "DESIGNED TO EVOLVE",
    description: "Systems can grow with the business.",
    detail: "We build with scale in mind. As your business grows, your system can expand — new integrations, new automations, new intelligence.",
  },
  {
    title: "INTELLIGENT BY DEFAULT",
    description: "Automation where it creates real value.",
    detail: "We apply AI thoughtfully — where it genuinely removes friction. Not as a marketing feature, but as a practical tool for real operations.",
  },
];

export const WhyOnechip: React.FC = () => {
  return (
    <section
      className="relative py-32 md:py-40 overflow-hidden"
      aria-label="Why Onechip"
    >
      <GlowOrb size={700} x="50%" y="50%" opacity={0.04} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#F0F7F4] leading-tight tracking-tight">
            Technology should feel
            <br />
            <span className="text-[#8EA8A0] font-extralight">less complicated.</span>
          </h2>
        </motion.div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(70,150,125,0.08)]">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
              className="group bg-[#020807] p-8 hover:bg-[rgba(6,16,14,0.8)] transition-all duration-500"
            >
              {/* Number */}
              <div className="font-mono text-[9px] tracking-[0.2em] text-[#49655D] mb-6">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3 className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#35F2B0] mb-3">
                {p.title}
              </h3>

              {/* Short */}
              <p className="text-[#F0F7F4] text-sm font-medium mb-4">
                {p.description}
              </p>

              {/* Detail */}
              <p className="text-[#8EA8A0] text-sm leading-relaxed">
                {p.detail}
              </p>

              {/* Bottom line */}
              <div className="mt-6 w-6 h-px bg-[#35F2B0] opacity-30 group-hover:opacity-100 group-hover:w-12 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
