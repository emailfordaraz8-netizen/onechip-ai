import React from "react";
import { motion } from "framer-motion";
import { faqs } from "../../data/faqs";
import { FAQAccordion } from "../ui/FAQAccordion";
import { GlowOrb } from "../ui/GlowOrb";

export const FAQSection: React.FC = () => {
  return (
    <section
      id="faq"
      className="relative py-32 md:py-40 overflow-hidden"
      aria-label="Frequently asked questions"
    >
      <GlowOrb size={500} x="80%" y="40%" opacity={0.04} />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0]">
              — COMMON QUESTIONS
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-[#F0F7F4] leading-tight tracking-tight"
          >
            Questions about
            <br />
            <span className="text-[#8EA8A0] font-extralight">intelligent systems.</span>
          </motion.h2>
        </div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <FAQAccordion faqs={faqs} />
        </motion.div>
      </div>
    </section>
  );
};
