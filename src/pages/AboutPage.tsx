import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { GridBackground } from "../components/ui/GridBackground";
import { GlowOrb } from "../components/ui/GlowOrb";
import { NetworkSystem } from "../components/NetworkSystem";
import { FinalCTA } from "../components/sections/FinalCTA";

const beliefs = [
  {
    label: "AI SHOULD SERVE PEOPLE",
    text: "The goal isn't to replace people with AI. The goal is to remove the repetitive, low-value work that prevents people from doing what they're actually good at.",
  },
  {
    label: "SYSTEMS OVER FEATURES",
    text: "Individual tools don't create intelligent operations. Connected systems do. We think in systems, not in isolated features.",
  },
  {
    label: "SIMPLICITY IS HARD",
    text: "Making powerful technology feel simple takes more work than making it feel complex. We do that work so your team doesn't have to.",
  },
  {
    label: "BUILD FOR REALITY",
    text: "Every business operates differently. AI that works in theory but not in practice creates more problems than it solves. We build for how businesses actually run.",
  },
];

const AboutPage: React.FC = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden pt-24">
        <GridBackground />
        <GlowOrb size={700} x="60%" y="40%" opacity={0.05} />

        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25" aria-hidden="true">
          <NetworkSystem animated={true} centralCore={true} nodeCount={12} />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to right, #020807 45%, transparent 100%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0]">
              — ABOUT
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F0F7F4] leading-[1.05] tracking-tight mb-6"
          >
            One intelligent layer
            <br />
            <span className="text-[#8EA8A0] font-extralight">for modern business.</span>
          </motion.h1>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 relative">
        <GlowOrb size={500} x="20%" y="50%" opacity={0.04} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0] mb-6 block">
                — OUR PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#F0F7F4] leading-tight mb-8">
                AI as an intelligent layer between people, tools and processes.
              </h2>
              <p className="text-[#8EA8A0] leading-relaxed mb-6">
                Onechip.ai builds AI systems that sit between people, tools and business processes. We don't sell generic software. We design intelligent infrastructure specific to each business.
              </p>
              <p className="text-[#8EA8A0] leading-relaxed mb-6">
                Most businesses already have the tools they need. What they lack is the intelligent layer that connects those tools, removes the manual work between them, and makes the entire operation function as one coherent system.
              </p>
              <p className="text-[#8EA8A0] leading-relaxed">
                That layer is what we build.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-80"
            >
              <NetworkSystem animated={true} centralCore={true} nodeCount={10} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="py-24 border-t border-[rgba(70,150,125,0.08)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0] mb-4 block">
              — WHAT WE BELIEVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#F0F7F4] leading-tight">
              How we think about AI
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {beliefs.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-[rgba(70,150,125,0.12)] bg-[rgba(6,16,14,0.3)]"
              >
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#35F2B0] mb-4">
                  {b.label}
                </div>
                <p className="text-[#8EA8A0] text-sm leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Human + AI */}
      <section className="py-24 border-t border-[rgba(70,150,125,0.08)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0] mb-6 block">
              — HUMAN + AI
            </span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#F0F7F4] leading-tight mb-8">
              The goal isn't to replace people.
            </h2>
            <p className="text-[#8EA8A0] text-lg leading-relaxed mb-6">
              The goal is to remove unnecessary repetitive work so people can focus on higher-value decisions — the kind that require human judgment, creativity and relationships.
            </p>
            <p className="text-[#8EA8A0] text-lg leading-relaxed">
              AI handles the repetition. People handle the direction.
            </p>

            <div className="mt-12 flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="w-12 h-12 border border-[rgba(70,150,125,0.2)] flex items-center justify-center mx-auto mb-3">
                  <div className="w-3 h-3 rounded-full bg-[#35F2B0] opacity-60" />
                </div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-[#49655D]">People</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-px bg-[rgba(53,242,176,0.2)]" />
                <div className="w-2 h-2 rounded-full bg-[#35F2B0]" />
                <div className="w-12 h-px bg-[rgba(53,242,176,0.2)]" />
              </div>
              <div className="text-center">
                <div className="w-12 h-12 border border-[rgba(53,242,176,0.3)] flex items-center justify-center mx-auto mb-3 bg-[rgba(53,242,176,0.04)]">
                  <div className="w-3 h-3 rounded-full bg-[#35F2B0]" />
                </div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-[#35F2B0]">AI System</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Onechip */}
      <section className="py-24 border-t border-[rgba(70,150,125,0.08)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0] mb-6 block">
              — WHY ONECHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#F0F7F4] leading-tight mb-6">
              The name reflects the idea.
            </h2>
            <p className="text-[#8EA8A0] leading-relaxed mb-6">
              Onechip.ai is named around a single concept: ONE INTELLIGENT SYSTEM. One connected layer that understands your business and acts on its behalf.
            </p>
            <p className="text-[#8EA8A0] leading-relaxed mb-8">
              Instead of ten disconnected tools doing ten separate things, one intelligent system coordinates all of them — making decisions, triggering actions and keeping operations moving.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#35F2B0] text-[#020807] font-semibold text-sm tracking-wider uppercase hover:bg-[#50FFC2] transition-all duration-300"
            >
              Start a Conversation <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {[
              { label: "BUILT FOR BUSINESS", value: "Real workflows, not prototypes" },
              { label: "AI FIRST", value: "Intelligence at every layer" },
              { label: "CONNECTED", value: "Every tool works together" },
              { label: "EVOLVING", value: "Systems grow with you" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-4 border border-[rgba(70,150,125,0.12)]"
              >
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#35F2B0]">
                  {item.label}
                </span>
                <span className="text-sm text-[#8EA8A0]">{item.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
};

export default AboutPage;
