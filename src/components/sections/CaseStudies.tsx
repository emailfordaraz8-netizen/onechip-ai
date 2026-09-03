import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "../../data/case-studies";
import { GlowOrb } from "../ui/GlowOrb";

export const CaseStudies: React.FC = () => {
  return (
    <section
      className="relative py-32 md:py-40 overflow-hidden"
      aria-label="Case studies"
    >
      <GlowOrb size={600} x="30%" y="50%" opacity={0.04} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0]">
              — SELECTED SYSTEMS
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-[#F0F7F4] leading-tight tracking-tight"
          >
            Systems we&apos;ve built.
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="space-y-px bg-[rgba(70,150,125,0.06)]">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-[#020807]"
            >
              <Link
                to={`/work`}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 p-8 hover:bg-[rgba(6,16,14,0.8)] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0] focus-visible:ring-inset"
                aria-label={`View ${cs.title} case study`}
              >
                {/* Number */}
                <div className="shrink-0">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#49655D]">
                    {cs.number}
                  </span>
                </div>

                {/* Category + Demo badge */}
                <div className="shrink-0 w-40">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[8px] tracking-[0.2em] text-[#49655D] uppercase">
                      {cs.category}
                    </span>
                  </div>
                  <span className="inline-block font-mono text-[8px] tracking-widest uppercase px-2 py-1 border border-[rgba(53,242,176,0.2)] text-[#35F2B0] bg-[rgba(53,242,176,0.04)]">
                    DEMO SYSTEM
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-[#F0F7F4] mb-2 group-hover:text-[#35F2B0] transition-colors duration-300 tracking-tight">
                    {cs.title}
                  </h3>
                  <p className="text-[#8EA8A0] text-sm leading-relaxed">
                    {cs.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="shrink-0 hidden lg:flex flex-wrap gap-2 max-w-xs">
                  {cs.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] tracking-widest uppercase px-2 py-1 border border-[rgba(70,150,125,0.12)] text-[#49655D]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="shrink-0 flex items-center gap-2 text-[#49655D] group-hover:text-[#35F2B0] transition-colors duration-300">
                  <span className="font-mono text-[10px] tracking-widest uppercase hidden sm:block">
                    View System
                  </span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Link to work */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <Link
            to="/work"
            className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#35F2B0] hover:text-[#50FFC2] transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0] rounded"
          >
            View All Systems →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
