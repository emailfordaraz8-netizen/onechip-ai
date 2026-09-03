import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { GlowOrb } from "../ui/GlowOrb";
import { NetworkSystem } from "../NetworkSystem";

export const AboutSection: React.FC = () => {
  return (
    <section
      className="relative py-32 md:py-40 overflow-hidden border-t border-[rgba(70,150,125,0.08)]"
      aria-label="About Onechip"
    >
      <GlowOrb size={700} x="70%" y="50%" opacity={0.04} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0] mb-6 block">
              — ABOUT ONECHIP.AI
            </span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#F0F7F4] leading-tight tracking-tight mb-8">
              One intelligent layer
              <br />
              <span className="text-[#8EA8A0] font-extralight">for modern business.</span>
            </h2>
            <p className="text-[#8EA8A0] leading-relaxed mb-6">
              Onechip.ai builds AI systems that sit between people, tools and business processes. We connect the fragmented parts of a business into one intelligent layer that can understand, decide and act.
            </p>
            <p className="text-[#8EA8A0] leading-relaxed mb-8">
              The goal isn't to replace people. The goal is to remove unnecessary repetitive work so people can focus on higher-value decisions.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.15em] uppercase text-[#35F2B0] hover:text-[#50FFC2] transition-colors"
            >
              Learn more about us <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Network visual */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-72 lg:h-96"
          >
            <NetworkSystem animated={true} centralCore={true} nodeCount={10} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
