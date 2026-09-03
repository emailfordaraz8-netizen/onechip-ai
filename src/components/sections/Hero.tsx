import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { HeroNetwork } from "./HeroNetwork";
import { GridBackground } from "../ui/GridBackground";
import { GlowOrb } from "../ui/GlowOrb";


const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" as const },
  }),
};

export const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <GridBackground />
      <GlowOrb size={900} x="50%" y="45%" opacity={0.05} />
      <GlowOrb size={400} x="50%" y="50%" opacity={0.07} />

      {/* Network visual */}
      <div className="absolute inset-0" aria-hidden="true">
        <HeroNetwork />
      </div>

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, #020807 80%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <span className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0]">
            <span className="w-6 h-px bg-[#35F2B0] opacity-60" />
            A LIVING SYSTEM
            <span className="w-6 h-px bg-[#35F2B0] opacity-60" />
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F0F7F4] leading-[1.05] tracking-tight mb-6"
        >
          Your business,
          <br />
          <span className="font-extralight text-[#8EA8A0]">growing on its own.</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-base sm:text-lg text-[#8EA8A0] leading-relaxed mb-12 max-w-xl mx-auto"
        >
          AI agents, automation and intelligent systems
          <br className="hidden sm:block" />
          that keep your business moving while you sleep.
        </motion.p>

        <motion.div
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#35F2B0] text-[#020807] font-semibold text-sm tracking-wider uppercase hover:bg-[#50FFC2] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020807]"
          >
            Build Your System
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/#services"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[rgba(70,150,125,0.3)] text-[#F0F7F4] font-mono text-[11px] tracking-[0.15em] uppercase hover:border-[#35F2B0] hover:text-[#35F2B0] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0]"
          >
            Explore Systems
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#49655D]">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#35F2B0] to-transparent"
        />
      </motion.div>
    </section>
  );
};
