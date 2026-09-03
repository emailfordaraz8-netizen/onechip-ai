import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { industries } from "../../data/industries";
import { GlowOrb } from "../ui/GlowOrb";

export const UseCases: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section
      className="relative py-32 md:py-40 overflow-hidden"
      aria-label="Use cases by industry"
    >
      <GlowOrb size={600} x="70%" y="50%" opacity={0.04} />

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
              — WHERE SYSTEMS HELP
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-[#F0F7F4] leading-tight tracking-tight"
          >
            Built for real
            <br />
            <span className="text-[#8EA8A0] font-extralight">business problems.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Industry selector */}
          <div className="space-y-px">
            {industries.map((industry, i) => (
              <motion.button
                key={industry.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setActiveIndustry(industry)}
                className={`w-full text-left flex items-center justify-between px-4 py-4 border-l-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0] ${
                  activeIndustry.id === industry.id
                    ? "border-[#35F2B0] bg-[rgba(53,242,176,0.04)] text-[#F0F7F4]"
                    : "border-[rgba(70,150,125,0.1)] text-[#8EA8A0] hover:border-[rgba(70,150,125,0.3)] hover:text-[#F0F7F4]"
                }`}
                aria-pressed={activeIndustry.id === industry.id}
              >
                <span className="text-sm font-medium">{industry.name}</span>
                {activeIndustry.id === industry.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35F2B0]" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Use case detail */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="p-8 border border-[rgba(70,150,125,0.15)] bg-[rgba(6,16,14,0.4)] h-full"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#35F2B0]">
                    {activeIndustry.name.toUpperCase()}
                  </span>
                </div>
                <p className="text-[#8EA8A0] text-sm mb-8">
                  {activeIndustry.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeIndustry.useCases.map((useCase, i) => (
                    <motion.div
                      key={useCase}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3 p-4 border border-[rgba(70,150,125,0.1)] bg-[rgba(53,242,176,0.02)]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#35F2B0] mt-1 shrink-0" />
                      <span className="text-[#F0F7F4] text-sm">{useCase}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[rgba(70,150,125,0.08)]">
                  <p className="text-[#49655D] text-xs font-mono tracking-wide">
                    AI systems can be applied across many business types. The examples above represent potential automation opportunities — not exclusive specializations.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
