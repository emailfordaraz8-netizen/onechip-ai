import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "../../data/services";
import { GlowOrb } from "../ui/GlowOrb";

const ServiceIcon: React.FC<{ type: string }> = ({ type }) => {
  const icons: Record<string, React.ReactNode> = {
    agent: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="3" stroke="#35F2B0" strokeWidth="1" fill="none" />
        <circle cx="10" cy="10" r="7" stroke="#35F2B0" strokeWidth="0.5" strokeOpacity="0.4" fill="none" />
        <line x1="10" y1="3" x2="10" y2="5" stroke="#35F2B0" strokeWidth="0.8" strokeOpacity="0.6" />
        <line x1="17" y1="10" x2="15" y2="10" stroke="#35F2B0" strokeWidth="0.8" strokeOpacity="0.6" />
        <line x1="10" y1="17" x2="10" y2="15" stroke="#35F2B0" strokeWidth="0.8" strokeOpacity="0.6" />
        <line x1="3" y1="10" x2="5" y2="10" stroke="#35F2B0" strokeWidth="0.8" strokeOpacity="0.6" />
      </svg>
    ),
    automation: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 10 L8 6 L12 10 L16 6" stroke="#35F2B0" strokeWidth="1" strokeLinecap="round" fill="none" />
        <path d="M4 14 L8 10 L12 14 L16 10" stroke="#35F2B0" strokeWidth="0.5" strokeLinecap="round" fill="none" strokeOpacity="0.4" />
        <circle cx="4" cy="10" r="1.5" fill="#35F2B0" fillOpacity="0.6" />
        <circle cx="16" cy="6" r="1.5" fill="#35F2B0" fillOpacity="0.6" />
      </svg>
    ),
    chatbot: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="4" width="14" height="10" rx="1" stroke="#35F2B0" strokeWidth="0.8" fill="none" />
        <path d="M7 17 L10 14 L13 17" stroke="#35F2B0" strokeWidth="0.8" fill="none" />
        <line x1="6" y1="8" x2="14" y2="8" stroke="#35F2B0" strokeWidth="0.8" strokeOpacity="0.5" />
        <line x1="6" y1="11" x2="11" y2="11" stroke="#35F2B0" strokeWidth="0.8" strokeOpacity="0.5" />
      </svg>
    ),
    workflow: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="4" cy="5" r="1.5" fill="#35F2B0" fillOpacity="0.8" />
        <circle cx="10" cy="10" r="1.5" fill="#35F2B0" fillOpacity="0.8" />
        <circle cx="16" cy="5" r="1.5" fill="#35F2B0" fillOpacity="0.8" />
        <circle cx="16" cy="15" r="1.5" fill="#35F2B0" fillOpacity="0.8" />
        <line x1="4" y1="5" x2="10" y2="10" stroke="#35F2B0" strokeWidth="0.6" strokeOpacity="0.4" />
        <line x1="16" y1="5" x2="10" y2="10" stroke="#35F2B0" strokeWidth="0.6" strokeOpacity="0.4" />
        <line x1="10" y1="10" x2="16" y2="15" stroke="#35F2B0" strokeWidth="0.6" strokeOpacity="0.4" />
      </svg>
    ),
    integration: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="7" width="6" height="6" rx="0.5" stroke="#35F2B0" strokeWidth="0.8" fill="none" />
        <rect x="12" y="7" width="6" height="6" rx="0.5" stroke="#35F2B0" strokeWidth="0.8" fill="none" />
        <line x1="8" y1="10" x2="12" y2="10" stroke="#35F2B0" strokeWidth="0.8" strokeOpacity="0.6" />
        <circle cx="10" cy="10" r="1" fill="#35F2B0" />
      </svg>
    ),
    custom: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <polygon points="10,2 18,7 18,13 10,18 2,13 2,7" stroke="#35F2B0" strokeWidth="0.8" fill="none" />
        <circle cx="10" cy="10" r="2" fill="#35F2B0" fillOpacity="0.7" />
        <line x1="10" y1="2" x2="10" y2="8" stroke="#35F2B0" strokeWidth="0.4" strokeOpacity="0.4" />
        <line x1="18" y1="7" x2="12" y2="9" stroke="#35F2B0" strokeWidth="0.4" strokeOpacity="0.4" />
      </svg>
    ),
  };

  return (
    <div className="w-10 h-10 flex items-center justify-center border border-[rgba(70,150,125,0.2)] rounded-sm">
      {icons[type] || icons.agent}
    </div>
  );
};

const ServiceCard: React.FC<{ service: typeof services[0]; index: number }> = ({
  service,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
    >
      <Link
        to={`/services/${service.slug}`}
        className="group relative flex flex-col h-full p-6 border border-[rgba(70,150,125,0.12)] bg-[rgba(6,16,14,0.4)] hover:border-[rgba(53,242,176,0.25)] hover:bg-[rgba(6,16,14,0.6)] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0]"
        aria-label={`View ${service.title} service`}
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-6">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#49655D]">
            {service.number}
          </span>
          <ServiceIcon type={service.icon} />
        </div>

        {/* Content */}
        <h3 className="text-lg font-medium text-[#F0F7F4] mb-3 tracking-tight group-hover:text-[#35F2B0] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-sm text-[#8EA8A0] leading-relaxed flex-1">
          {service.shortDescription}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-[#35F2B0] opacity-30 group-hover:opacity-80 transition-opacity duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-[#49655D] group-hover:text-[#35F2B0] transition-colors duration-300">
            <span className="font-mono text-[10px] tracking-widest uppercase">View</span>
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>

        {/* Hover gradient */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(53,242,176,0.03) 0%, transparent 60%)",
            }}
          />
        </div>
      </Link>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      aria-label="Services"
      className="relative py-32 md:py-40 overflow-hidden"
    >
      <GlowOrb size={700} x="20%" y="60%" opacity={0.04} />

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
              — WHAT WE BUILD
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-[#F0F7F4] leading-tight tracking-tight"
          >
            We build systems,
            <br />
            <span className="text-[#8EA8A0] font-extralight">not just software.</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(70,150,125,0.08)]">
          {services.map((service, i) => (
            <div key={service.id} className="bg-[#020807]">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
