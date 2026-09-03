import React, { useEffect, useRef } from "react";

interface HeroNetworkProps {
  className?: string;
}

export const HeroNetwork: React.FC<HeroNetworkProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let time = 0;

    // Particles unused in this version but ready for expansion

    interface Node {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      radius: number;
      pulse: number;
      pulseSpeed: number;
      connections: number[];
      particleProgress: number;
      particleSpeed: number;
    }

    let nodes: Node[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.offsetWidth;
      h = parent.offsetHeight;
      canvas.width = w;
      canvas.height = h;

      const cx = w / 2;
      const cy = h / 2;

      // Core node
      const coreNode: Node = {
        x: cx,
        y: cy,
        baseX: cx,
        baseY: cy,
        radius: 6,
        pulse: 0,
        pulseSpeed: 0.025,
        connections: [],
        particleProgress: 0,
        particleSpeed: 0.004,
      };

      // Organic branch nodes
      const tempNodes: Node[] = [coreNode];
      const rings = [
        { count: 6, radius: Math.min(w, h) * 0.2, speed: 0.01 },
        { count: 8, radius: Math.min(w, h) * 0.38, speed: 0.006 },
      ];

      let nodeIdx = 1;
      rings.forEach((ring) => {
        for (let i = 0; i < ring.count; i++) {
          const angle =
            (i / ring.count) * Math.PI * 2 + Math.random() * 0.5 - 0.25;
          const rVariation = ring.radius * (0.85 + Math.random() * 0.3);
          const nx = cx + Math.cos(angle) * rVariation;
          const ny = cy + Math.sin(angle) * rVariation;

          tempNodes.push({
            x: nx,
            y: ny,
            baseX: nx,
            baseY: ny,
            radius: 1.5 + Math.random() * 2.5,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.008 + Math.random() * 0.015,
            connections: [0],
            particleProgress: Math.random(),
            particleSpeed: 0.002 + Math.random() * 0.004,
          });
          nodeIdx++;
        }
      });

      // Some cross-connections
      for (let i = 1; i < tempNodes.length; i++) {
        if (Math.random() > 0.7 && tempNodes.length > i + 1) {
          const j = 1 + Math.floor(Math.random() * (tempNodes.length - 1));
          if (j !== i && !tempNodes[i].connections.includes(j)) {
            tempNodes[i].connections.push(j);
          }
        }
      }

      nodes = tempNodes;
    };

    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, w, h);
      time += 0.008;

      // Subtle drift
      nodes.forEach((node) => {
        if (node === nodes[0]) return;
        node.x = node.baseX + Math.sin(time * 0.3 + node.pulse * 2) * 3;
        node.y = node.baseY + Math.cos(time * 0.25 + node.pulse * 2) * 3;
      });

      // Draw connections + particles
      nodes.forEach((node, i) => {
        node.connections.forEach((j) => {
          const target = nodes[j];
          if (!target) return;

          const dx = target.x - node.x;
          const dy = target.y - node.y;

          // Connection line
          const alpha =
            0.06 + Math.sin(time * 0.5 + i * 0.5) * 0.02;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = `rgba(53, 242, 176, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();

          // Particle traveling along connection
          const p = node.particleProgress;
          const px = node.x + dx * p;
          const py = node.y + dy * p;
          const pAlpha = 0.8 * Math.sin(p * Math.PI);

          if (pAlpha > 0.05) {
            const grd = ctx.createRadialGradient(px, py, 0, px, py, 5);
            grd.addColorStop(0, `rgba(53, 242, 176, ${pAlpha})`);
            grd.addColorStop(1, "rgba(53, 242, 176, 0)");
            ctx.beginPath();
            ctx.arc(px, py, 4, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();
          }

          node.particleProgress =
            (node.particleProgress + node.particleSpeed) % 1;
        });
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        const pulse = Math.sin(time * node.pulseSpeed * 80 + node.pulse);
        const radius = node.radius + pulse * 1.5;
        const alpha = i === 0 ? 1 : 0.5 + pulse * 0.3;

        // Glow halo
        const grd = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          radius * 5
        );
        grd.addColorStop(0, `rgba(53, 242, 176, ${alpha * 0.2})`);
        grd.addColorStop(1, "rgba(53, 242, 176, 0)");
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(53, 242, 176, ${alpha})`;
        ctx.fill();

        // Core extra rings
        if (i === 0) {
          [16, 28, 44].forEach((r, ri) => {
            const ringAlpha = (0.12 - ri * 0.03) + pulse * 0.05;
            ctx.beginPath();
            ctx.arc(node.x, node.y, r + pulse * (ri + 1) * 1.5, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(53, 242, 176, ${ringAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          });
        }
      });

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
};
