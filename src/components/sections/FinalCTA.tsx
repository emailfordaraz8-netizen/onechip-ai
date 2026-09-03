import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { NetworkSystem } from "../NetworkSystem";
import { GridBackground } from "../ui/GridBackground";

export const FinalCTA: React.FC = () => {
  return (
    <section
      className="relative py-40 md:py-56 overflow-hidden"
      aria-label="Final call to action"
    >
      <GridBackground />

      {/* Network background */}
      <div className="absolute inset-0 opacity-40" aria-hidden="true">
        <NetworkSystem animated={true} centralCore={false} nodeCount={20} />
      </div>

      {/* Atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(53,242,176,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 20%, #020807 85%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0]">
            <span className="w-6 h-px bg-[#35F2B0] opacity-60" />
            SYSTEM READY
            <span className="w-6 h-px bg-[#35F2B0] opacity-60" />
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F0F7F4] leading-[1.05] tracking-tight mb-8"
        >
          What could your business
          <br />
          <span className="text-[#8EA8A0] font-extralight">stop doing manually?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-[#8EA8A0] text-base leading-relaxed mb-12 max-w-lg mx-auto"
        >
          Tell us what slows your team down.
          <br />
          We'll help you identify what AI can take off your plate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#35F2B0] text-[#020807] font-semibold text-sm tracking-wider uppercase hover:bg-[#50FFC2] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020807]"
          >
            Start a Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="mailto:onechipai@gmail.com"
            className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#8EA8A0] hover:text-[#35F2B0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0] rounded"
          >
            onechipai@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};
