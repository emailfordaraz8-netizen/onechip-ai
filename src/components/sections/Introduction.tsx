import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { GlowOrb } from "../ui/GlowOrb";

const ConnectingNodes: React.FC<{ inView: boolean }> = ({ inView }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const progressRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const p = canvas.parentElement;
      if (!p) return;
      canvas.width = p.offsetWidth;
      canvas.height = p.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const nodes = [
      { x: 0.15, y: 0.2 },
      { x: 0.35, y: 0.7 },
      { x: 0.6, y: 0.15 },
      { x: 0.75, y: 0.65 },
      { x: 0.9, y: 0.35 },
      { x: 0.5, y: 0.5 }, // central
    ];

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      if (inView && progressRef.current < 1) {
        progressRef.current = Math.min(1, progressRef.current + 0.008);
      }

      const p = progressRef.current;
      const center = nodes[5];

      nodes.slice(0, 5).forEach((node, i) => {
        const nodeDelay = i / 5;
        const nodeProgress = Math.max(0, Math.min(1, (p - nodeDelay * 0.3) / 0.7));

        // Line from node to center
        const cx = center.x * w;
        const cy = center.y * h;
        const nx = node.x * w;
        const ny = node.y * h;

        if (nodeProgress > 0) {
          const ex = nx + (cx - nx) * nodeProgress;
          const ey = ny + (cy - ny) * nodeProgress;

          ctx.beginPath();
          ctx.moveTo(nx, ny);
          ctx.lineTo(ex, ey);
          ctx.strokeStyle = `rgba(53, 242, 176, ${0.15 * nodeProgress})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        // Node dot
        const alpha = 0.3 + nodeProgress * 0.5;
        const radius = 2 + nodeProgress * 2;
        const grd = ctx.createRadialGradient(nx, ny, 0, nx, ny, radius * 3);
        grd.addColorStop(0, `rgba(53, 242, 176, ${alpha})`);
        grd.addColorStop(1, "rgba(53, 242, 176, 0)");
        ctx.beginPath();
        ctx.arc(nx, ny, radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(nx, ny, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(53, 242, 176, ${alpha})`;
        ctx.fill();
      });

      // Central core
      const cx = center.x * w;
      const cy = center.y * h;
      const coreAlpha = p;
      const coreGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 30 * p);
      coreGrd.addColorStop(0, `rgba(53, 242, 176, ${coreAlpha * 0.3})`);
      coreGrd.addColorStop(1, "rgba(53, 242, 176, 0)");
      ctx.beginPath();
      ctx.arc(cx, cy, 30 * p, 0, Math.PI * 2);
      ctx.fillStyle = coreGrd;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx, cy, 4 * p, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(53, 242, 176, ${coreAlpha})`;
      ctx.fill();

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [inView]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
};

export const Introduction: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-40 overflow-hidden"
      aria-label="Introduction"
    >
      <GlowOrb size={600} x="80%" y="50%" opacity={0.04} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#F0F7F4] leading-[1.1] tracking-tight mb-8">
            Your business is already a system.
            <br />
            <span className="text-[#8EA8A0] font-extralight">
              It just shouldn't require
              <br />
              you to control every part of it.
            </span>
          </h2>
          <p className="text-[#8EA8A0] text-base leading-relaxed mb-6">
            Modern businesses run across dozens of tools,
            conversations and repetitive workflows.
          </p>
          <p className="text-[#8EA8A0] text-base leading-relaxed">
            Onechip.ai connects them into intelligent systems
            that can understand, decide and act.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <div className="w-1 h-1 rounded-full bg-[#35F2B0]" />
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#49655D]">
              ONE INTELLIGENT SYSTEM
            </span>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-80 lg:h-96"
        >
          <ConnectingNodes inView={inView} />
        </motion.div>
      </div>
    </section>
  );
};
