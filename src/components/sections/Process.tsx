import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GlowOrb } from "../ui/GlowOrb";

const steps = [
  { number: "01", title: "DISCOVER", description: "Understand the business, workflow and bottlenecks." },
  { number: "02", title: "ARCHITECT", description: "Design the system around the actual operation." },
  { number: "03", title: "BUILD", description: "Develop, integrate and test the system." },
  { number: "04", title: "EVOLVE", description: "Launch, improve and expand as the business grows." },
];

export const Process: React.FC = () => {
  return (
    <section
      className="relative py-32 md:py-40 overflow-hidden"
      aria-label="Process"
    >
      <GlowOrb size={600} x="20%" y="50%" opacity={0.04} />

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
              — HOW IT WORKS
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-[#F0F7F4] leading-tight tracking-tight"
          >
            From bottleneck
            <br />
            <span className="text-[#8EA8A0] font-extralight">to intelligent system.</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-6 left-6 right-6 h-px bg-[rgba(70,150,125,0.1)]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative"
              >
                {/* Node */}
                <div className="relative z-10 w-12 h-12 flex items-center justify-center border border-[rgba(70,150,125,0.2)] bg-[#020807] mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#35F2B0] opacity-70" />
                  {/* Active line below for mobile */}
                  <div className="md:hidden absolute top-full left-1/2 w-px h-8 bg-[rgba(53,242,176,0.15)] -translate-x-1/2" />
                </div>

                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#35F2B0] mb-2">
                  {step.number}
                </div>
                <h3 className="text-lg font-medium text-[#F0F7F4] mb-3 tracking-wider">
                  {step.title}
                </h3>
                <p className="text-sm text-[#8EA8A0] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-center gap-6"
        >
          <Link
            to="/process"
            className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#35F2B0] hover:text-[#50FFC2] transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0] rounded"
          >
            View Full Process →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
