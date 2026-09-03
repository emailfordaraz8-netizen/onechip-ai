import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "../data/services";
import { GridBackground } from "../components/ui/GridBackground";
import { GlowOrb } from "../components/ui/GlowOrb";
import { FinalCTA } from "../components/sections/FinalCTA";

const ServicesIndexPage: React.FC = () => {
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
              — WHAT WE BUILD
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl font-light text-[#F0F7F4] leading-tight tracking-tight mb-6"
          >
            Intelligent systems
            <br />
            <span className="text-[#8EA8A0] font-extralight">built for your business.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#8EA8A0] text-lg max-w-xl leading-relaxed"
          >
            Every service we offer is a component of one larger intelligent system — designed to connect, automate and evolve with your business.
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(70,150,125,0.08)]">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                className="bg-[#020807]"
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex flex-col h-full p-8 hover:bg-[rgba(6,16,14,0.8)] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0] focus-visible:ring-inset"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#49655D]">
                      {service.number}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#35F2B0] opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h2 className="text-xl font-medium text-[#F0F7F4] mb-4 group-hover:text-[#35F2B0] transition-colors duration-300 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-sm text-[#8EA8A0] leading-relaxed flex-1 mb-8">
                    {service.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-6">
                    {service.capabilities.slice(0, 3).map((cap) => (
                      <span
                        key={cap}
                        className="font-mono text-[8px] tracking-widest uppercase px-2 py-1 border border-[rgba(70,150,125,0.1)] text-[#49655D]"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-[#49655D] group-hover:text-[#35F2B0] transition-colors duration-300">
                    <span className="font-mono text-[10px] tracking-widest uppercase">
                      Explore
                    </span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 border-t border-[rgba(70,150,125,0.08)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-light text-[#F0F7F4] mb-4 leading-tight">
              Not sure which system you need?
            </h2>
            <p className="text-[#8EA8A0] mb-8 leading-relaxed">
              Tell us what slows your team down and we'll identify the right combination of AI systems for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#35F2B0] text-[#020807] font-semibold text-sm tracking-wider uppercase hover:bg-[#50FFC2] transition-all duration-300"
            >
              Start a Project <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-3">
            {[
              "Discovery session to understand your business",
              "System architecture designed around your workflows",
              "Integration with your existing tools",
              "Launch and continuous improvement",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#35F2B0] mt-1.5 shrink-0" />
                <span className="text-[#8EA8A0] text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
};

export default ServicesIndexPage;
