import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "../data/case-studies";
import { GridBackground } from "../components/ui/GridBackground";
import { GlowOrb } from "../components/ui/GlowOrb";
import { FinalCTA } from "../components/sections/FinalCTA";

const CaseStudyDetail: React.FC<{ cs: typeof caseStudies[0] }> = ({ cs }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={cs.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="lg:col-span-2"
      >
        <div className="p-8 border border-[rgba(70,150,125,0.15)] bg-[rgba(6,16,14,0.4)] h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-[9px] tracking-widest uppercase text-[#49655D]">
                  {cs.number}
                </span>
                <span className="font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 border border-[rgba(53,242,176,0.2)] text-[#35F2B0]">
                  DEMO SYSTEM
                </span>
              </div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#49655D] mb-3">
                {cs.category}
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-[#F0F7F4] tracking-tight">
                {cs.title}
              </h3>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#35F2B0] mb-3">
                Challenge
              </div>
              <p className="text-[#8EA8A0] text-sm leading-relaxed">{cs.challenge}</p>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#35F2B0] mb-3">
                Solution
              </div>
              <p className="text-[#8EA8A0] text-sm leading-relaxed">{cs.solution}</p>
            </div>
          </div>

          {/* Workflow */}
          <div className="mb-8">
            <div className="font-mono text-[10px] tracking-widest uppercase text-[#35F2B0] mb-4">
              Workflow
            </div>
            <div className="space-y-2">
              {cs.workflow.map((step, i) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="font-mono text-[9px] text-[#49655D] shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[#8EA8A0] text-sm">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="mb-8">
            <div className="font-mono text-[10px] tracking-widest uppercase text-[#35F2B0] mb-4">
              Outcomes
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cs.outcome.map((o) => (
                <div key={o} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#35F2B0] mt-1 shrink-0" />
                  <span className="text-[#F0F7F4] text-sm">{o}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[9px] tracking-widest uppercase px-2 py-1 border border-[rgba(70,150,125,0.12)] text-[#49655D]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const WorkPage: React.FC = () => {
  const [activeCase, setActiveCase] = useState(caseStudies[0]);

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <GridBackground />
        <GlowOrb size={600} x="70%" y="40%" opacity={0.05} />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0]">
              — SELECTED SYSTEMS
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl font-light text-[#F0F7F4] leading-tight tracking-tight mb-6"
          >
            Systems we&apos;ve built.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#8EA8A0] text-lg max-w-lg leading-relaxed"
          >
            Conceptual demonstrations of the intelligent systems Onechip.ai builds for modern businesses.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 flex items-center gap-2"
          >
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#49655D]">
              All systems below are demo concepts
            </span>
          </motion.div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Selector */}
            <div className="space-y-px">
              {caseStudies.map((cs, i) => (
                <motion.button
                  key={cs.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveCase(cs)}
                  className={`w-full text-left p-6 border-l-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0] ${
                    activeCase.id === cs.id
                      ? "border-[#35F2B0] bg-[rgba(53,242,176,0.04)]"
                      : "border-[rgba(70,150,125,0.1)] hover:border-[rgba(70,150,125,0.3)]"
                  }`}
                  aria-pressed={activeCase.id === cs.id}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[9px] tracking-widest uppercase text-[#49655D]">
                      {cs.number}
                    </span>
                    <span className="font-mono text-[8px] tracking-widest uppercase px-1.5 py-0.5 border border-[rgba(53,242,176,0.15)] text-[#35F2B0] opacity-70">
                      DEMO
                    </span>
                  </div>
                  <div className="font-mono text-[9px] tracking-widest uppercase text-[#49655D] mb-2">
                    {cs.category}
                  </div>
                  <h3
                    className={`text-sm font-medium transition-colors duration-300 ${
                      activeCase.id === cs.id ? "text-[#35F2B0]" : "text-[#F0F7F4]"
                    }`}
                  >
                    {cs.title}
                  </h3>
                </motion.button>
              ))}
            </div>

            {/* Detail */}
            <CaseStudyDetail cs={activeCase} />
          </div>
        </div>
      </section>

      {/* All case studies list */}
      <section className="py-20 border-t border-[rgba(70,150,125,0.08)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-light text-[#F0F7F4] mb-10">All Systems</h2>
          <div className="space-y-px bg-[rgba(70,150,125,0.06)]">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#020807] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:bg-[rgba(6,16,14,0.8)] transition-all duration-300"
              >
                <span className="font-mono text-[9px] text-[#49655D] shrink-0">{cs.number}</span>
                <div className="flex-1">
                  <div className="font-mono text-[9px] tracking-widest uppercase text-[#49655D] mb-1">
                    {cs.category}
                  </div>
                  <h3 className="text-[#F0F7F4] font-medium group-hover:text-[#35F2B0] transition-colors">
                    {cs.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 shrink-0">
                  {cs.tags.slice(0, 2).map((t) => (
                    <span key={t} className="font-mono text-[8px] tracking-widest uppercase px-2 py-0.5 border border-[rgba(70,150,125,0.1)] text-[#49655D]">
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => { setActiveCase(cs); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="shrink-0 flex items-center gap-2 text-[#49655D] group-hover:text-[#35F2B0] transition-colors font-mono text-[10px] tracking-widest uppercase focus:outline-none"
                >
                  View System <ArrowRight size={12} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-[rgba(70,150,125,0.08)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-[#F0F7F4] mb-4">
            Ready to build your system?
          </h2>
          <p className="text-[#8EA8A0] mb-8 max-w-md mx-auto">
            These demos represent the type of intelligent systems we build for real businesses.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#35F2B0] text-[#020807] font-semibold text-sm tracking-wider uppercase hover:bg-[#50FFC2] transition-all duration-300"
          >
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
};

export default WorkPage;
