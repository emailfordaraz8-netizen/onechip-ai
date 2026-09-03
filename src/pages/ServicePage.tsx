import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { services } from "../data/services";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { GridBackground } from "../components/ui/GridBackground";
import { GlowOrb } from "../components/ui/GlowOrb";
import { NetworkSystem } from "../components/NetworkSystem";

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#8EA8A0] mb-4">Service not found.</p>
          <Link to="/" className="text-[#35F2B0] hover:underline">
            Return home
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const nextService = services[(currentIndex + 1) % services.length];

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden pt-24">
        <GridBackground />
        <GlowOrb size={600} x="70%" y="40%" opacity={0.06} />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30" aria-hidden="true">
          <NetworkSystem animated={true} centralCore={true} nodeCount={8} />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to right, #020807 40%, transparent 100%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-[#49655D] hover:text-[#35F2B0] transition-colors"
            >
              <ArrowLeft size={12} />
              Services
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0]">
              {service.number} — SERVICE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-light text-[#F0F7F4] leading-tight tracking-tight mb-6"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-[#8EA8A0] max-w-xl leading-relaxed"
          >
            {service.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#35F2B0] text-[#020807] font-semibold text-sm tracking-wider uppercase hover:bg-[#50FFC2] transition-all duration-300"
            >
              Build This System
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0] mb-6 block">
                — CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#F0F7F4] mb-8 leading-tight">
                What this system can do
              </h2>
              <ul className="space-y-3">
                {service.capabilities.map((cap, i) => (
                  <motion.li
                    key={cap}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#35F2B0] mt-1.5 shrink-0" />
                    <span className="text-[#8EA8A0] text-sm">{cap}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0] mb-6 block">
                — USE CASES
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#F0F7F4] mb-8 leading-tight">
                Where it creates value
              </h2>
              <ul className="space-y-3">
                {service.useCases.map((uc, i) => (
                  <motion.li
                    key={uc}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                    className="flex items-start gap-3 p-4 border border-[rgba(70,150,125,0.1)] hover:border-[rgba(53,242,176,0.2)] transition-colors"
                  >
                    <ArrowRight size={14} className="text-[#35F2B0] mt-0.5 shrink-0" />
                    <span className="text-[#F0F7F4] text-sm">{uc}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 border-t border-[rgba(70,150,125,0.08)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0] mb-4 block">
              — HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#F0F7F4] leading-tight">
              From discovery to deployment
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.howItWorks.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-[rgba(70,150,125,0.12)] bg-[rgba(6,16,14,0.4)]"
              >
                <div className="font-mono text-[10px] tracking-widest text-[#35F2B0] mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-[#F0F7F4] text-sm leading-relaxed">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-[rgba(70,150,125,0.08)]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0] mb-4 block">
              — FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#F0F7F4]">
              Questions about {service.title}
            </h2>
          </motion.div>
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* CTA + Next service */}
      <section className="py-24 border-t border-[rgba(70,150,125,0.08)]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-light text-[#F0F7F4] mb-4 leading-tight">
              Ready to build this system?
            </h2>
            <p className="text-[#8EA8A0] mb-8 max-w-md">
              Tell us about your business and we'll design a {service.title.toLowerCase()} system around your specific workflows.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#35F2B0] text-[#020807] font-semibold text-sm tracking-wider uppercase hover:bg-[#50FFC2] transition-all duration-300"
            >
              Start a Project <ArrowRight size={16} />
            </Link>
          </div>

          <div className="shrink-0">
            <div className="font-mono text-[9px] tracking-widest uppercase text-[#49655D] mb-3">
              NEXT SERVICE
            </div>
            <Link
              to={`/services/${nextService.slug}`}
              className="group flex items-center gap-4 p-6 border border-[rgba(70,150,125,0.12)] hover:border-[rgba(53,242,176,0.25)] transition-all duration-300"
            >
              <div>
                <div className="font-mono text-[9px] tracking-widest uppercase text-[#35F2B0] mb-1">
                  {nextService.number}
                </div>
                <div className="text-[#F0F7F4] font-medium group-hover:text-[#35F2B0] transition-colors">
                  {nextService.title}
                </div>
              </div>
              <ArrowRight size={16} className="text-[#49655D] group-hover:text-[#35F2B0] group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
