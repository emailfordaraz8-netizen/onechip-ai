import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { processSteps } from "../data/process";
import { GridBackground } from "../components/ui/GridBackground";
import { GlowOrb } from "../components/ui/GlowOrb";
import { FinalCTA } from "../components/sections/FinalCTA";

const ProcessPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <GridBackground />
        <GlowOrb size={600} x="70%" y="50%" opacity={0.05} />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0]">
              — HOW IT WORKS
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl font-light text-[#F0F7F4] leading-tight tracking-tight mb-6"
          >
            From discovery
            <br />
            <span className="text-[#8EA8A0] font-extralight">to intelligent system.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#8EA8A0] text-lg max-w-xl leading-relaxed"
          >
            Every project follows a structured process designed to deeply understand your business before building anything.
          </motion.p>
        </div>
      </section>

      {/* Interactive process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Step selector */}
            <div className="space-y-px">
              {processSteps.map((step, i) => (
                <motion.button
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left flex items-center gap-4 px-4 py-5 border-l-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0] ${
                    activeStep === i
                      ? "border-[#35F2B0] bg-[rgba(53,242,176,0.04)] text-[#35F2B0]"
                      : "border-[rgba(70,150,125,0.1)] text-[#8EA8A0] hover:border-[rgba(70,150,125,0.3)] hover:text-[#F0F7F4]"
                  }`}
                  aria-pressed={activeStep === i}
                >
                  <span className="font-mono text-[10px] tracking-[0.2em] w-8 shrink-0">
                    {step.number}
                  </span>
                  <span className="text-sm font-medium tracking-wider uppercase">
                    {step.title}
                  </span>
                  {activeStep === i && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#35F2B0] shrink-0" />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Step detail */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 border border-[rgba(70,150,125,0.15)] bg-[rgba(6,16,14,0.4)] h-full"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#35F2B0] mb-2">
                        PHASE {processSteps[activeStep].number}
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-light text-[#F0F7F4]">
                        {processSteps[activeStep].title}
                      </h2>
                    </div>
                    <div className="w-12 h-12 border border-[rgba(53,242,176,0.2)] flex items-center justify-center shrink-0">
                      <div className="w-3 h-3 rounded-full bg-[#35F2B0] opacity-70" />
                    </div>
                  </div>

                  <p className="text-[#8EA8A0] text-base leading-relaxed mb-8">
                    {processSteps[activeStep].description}
                  </p>

                  <div>
                    <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#35F2B0] mb-4">
                      What happens in this phase
                    </div>
                    <ul className="space-y-3">
                      {processSteps[activeStep].details.map((detail, i) => (
                        <motion.li
                          key={detail}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#35F2B0] mt-1.5 shrink-0" />
                          <span className="text-[#F0F7F4] text-sm">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Navigation */}
                  <div className="mt-8 pt-6 border-t border-[rgba(70,150,125,0.1)] flex items-center justify-between">
                    <button
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      className="font-mono text-[10px] tracking-widest uppercase text-[#49655D] hover:text-[#35F2B0] disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus:outline-none"
                    >
                      ← Previous
                    </button>
                    <span className="font-mono text-[9px] text-[#49655D]">
                      {activeStep + 1} / {processSteps.length}
                    </span>
                    <button
                      onClick={() => setActiveStep(Math.min(processSteps.length - 1, activeStep + 1))}
                      disabled={activeStep === processSteps.length - 1}
                      className="font-mono text-[10px] tracking-widest uppercase text-[#49655D] hover:text-[#35F2B0] disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus:outline-none"
                    >
                      Next →
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Process overview */}
      <section className="py-20 border-t border-[rgba(70,150,125,0.08)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-light text-[#F0F7F4] mb-10">Complete Process Overview</h2>
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="hidden lg:block absolute left-[3.5rem] top-0 bottom-0 w-px bg-[rgba(70,150,125,0.1)]" aria-hidden="true" />

            <div className="space-y-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="relative flex gap-8"
                >
                  {/* Node */}
                  <div className="relative z-10 w-14 h-14 flex-shrink-0 flex items-center justify-center border border-[rgba(70,150,125,0.2)] bg-[#020807]">
                    <div className="w-2 h-2 rounded-full bg-[#35F2B0] opacity-60" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 py-4">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="font-mono text-[10px] tracking-widest uppercase text-[#35F2B0]">
                        {step.number}
                      </span>
                      <h3 className="text-lg font-medium text-[#F0F7F4] tracking-wide">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#8EA8A0] text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[rgba(70,150,125,0.08)] text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-light text-[#F0F7F4] mb-4">
            Ready to start the process?
          </h2>
          <p className="text-[#8EA8A0] mb-8 max-w-md mx-auto">
            Every project begins with discovery. Tell us about your business and we'll design the right system.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#35F2B0] text-[#020807] font-semibold text-sm tracking-wider uppercase hover:bg-[#50FFC2] transition-all duration-300"
          >
            Start with Discovery <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
};

export default ProcessPage;
