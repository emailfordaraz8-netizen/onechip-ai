import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ } from "../../data/faqs";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-px">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-[rgba(70,150,125,0.12)]"
        >
          <button
            className="w-full flex items-start justify-between gap-4 py-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0] focus-visible:ring-inset"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span className="flex items-start gap-4">
              <span className="font-mono text-[10px] text-[#49655D] mt-1 shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={`text-base font-medium transition-colors duration-300 ${
                  openIndex === index ? "text-[#35F2B0]" : "text-[#F0F7F4] group-hover:text-[#35F2B0]"
                }`}
              >
                {faq.question}
              </span>
            </span>
            <span className="shrink-0 mt-1">
              {openIndex === index ? (
                <Minus size={16} className="text-[#35F2B0]" />
              ) : (
                <Plus size={16} className="text-[#8EA8A0] group-hover:text-[#35F2B0] transition-colors" />
              )}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="pb-6 pl-10 text-[#8EA8A0] leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
