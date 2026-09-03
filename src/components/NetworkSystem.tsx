import React, { useEffect, useRef, useCallback } from "react";

interface Node {
  id: string;
  x: number;
  y: number;
  radius: number;
  pulsePhase: number;
  pulseSpeed: number;
  brightness: number;
  targetBrightness: number;
  connections: number[];
  particleProgress?: number;
  particleSpeed?: number;
}

interface NetworkSystemProps {
  className?: string;
  nodeCount?: number;
  animated?: boolean;
  centralCore?: boolean;
  width?: number;
  height?: number;
  interactive?: boolean;
}

export const NetworkSystem: React.FC<NetworkSystemProps> = ({
  className = "",
  nodeCount = 12,
  animated = true,
  centralCore = true,
  interactive: _interactive = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const timeRef = useRef<number>(0);

  const initNodes = useCallback((w: number, h: number) => {
    const nodes: Node[] = [];

    if (centralCore) {
      nodes.push({
        id: "core",
        x: w * 0.5,
        y: h * 0.5,
        radius: 6,
        pulsePhase: 0,
        pulseSpeed: 0.02,
        brightness: 1,
        targetBrightness: 1,
        connections: [],
        particleProgress: 0,
        particleSpeed: 0.003,
      });
    }

    const angleStep = (Math.PI * 2) / nodeCount;
    for (let i = 0; i < nodeCount; i++) {
      const angle = angleStep * i + Math.random() * 0.4 - 0.2;
      const minR = Math.min(w, h) * 0.18;
      const maxR = Math.min(w, h) * 0.42;
      const r = minR + Math.random() * (maxR - minR);
      nodes.push({
        id: `node-${i}`,
        x: w * 0.5 + Math.cos(angle) * r,
        y: h * 0.5 + Math.sin(angle) * r,
        radius: 2 + Math.random() * 2,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.008 + Math.random() * 0.012,
        brightness: 0.4 + Math.random() * 0.4,
        targetBrightness: 0.4 + Math.random() * 0.4,
        connections: centralCore ? [0] : [],
        particleProgress: Math.random(),
        particleSpeed: 0.002 + Math.random() * 0.003,
      });
    }

    // Add some cross connections
    for (let i = 1; i < nodes.length; i++) {
      if (Math.random() > 0.65) {
        const j = 1 + Math.floor(Math.random() * (nodes.length - 1));
        if (j !== i) {
          nodes[i].connections.push(j);
        }
      }
    }

    nodesRef.current = nodes;
  }, [nodeCount, centralCore]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      initNodes(canvas.width, canvas.height);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    const draw = () => {
      if (!canvas || !ctx) return;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);
      timeRef.current += 0.016;

      const nodes = nodesRef.current;

      // Draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach((j) => {
          const target = nodes[j];
          if (!target) return;

          const dx = target.x - node.x;
          const dy = target.y - node.y;
          // const dist = Math.sqrt(dx * dx + dy * dy);

          const alpha = 0.08 + Math.sin(timeRef.current * 0.5 + i * 0.3) * 0.03;

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = `rgba(53, 242, 176, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();

          // Traveling light particle
          if (animated && node.particleProgress !== undefined) {
            const progress = node.particleProgress!;
            const px = node.x + dx * progress;
            const py = node.y + dy * progress;
            const particleAlpha = 0.6 * Math.sin(progress * Math.PI);

            const gradient = ctx.createRadialGradient(px, py, 0, px, py, 4);
            gradient.addColorStop(0, `rgba(53, 242, 176, ${particleAlpha})`);
            gradient.addColorStop(1, "rgba(53, 242, 176, 0)");

            ctx.beginPath();
            ctx.arc(px, py, 3, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            node.particleProgress =
              (node.particleProgress! + (node.particleSpeed || 0.003)) % 1;
          }
        });
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        const pulse = Math.sin(timeRef.current * node.pulseSpeed * 60 + node.pulsePhase);
        const currentRadius = node.radius + pulse * 1.5;
        const alpha = node.brightness * (0.7 + pulse * 0.2);

        // Glow
        const glowRadius = currentRadius * 4;
        const glow = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          glowRadius
        );
        glow.addColorStop(0, `rgba(53, 242, 176, ${alpha * 0.3})`);
        glow.addColorStop(1, "rgba(53, 242, 176, 0)");
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core node
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(53, 242, 176, ${alpha})`;
        ctx.fill();

        // Core gets special treatment
        if (i === 0 && centralCore) {
          const coreGlow = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, 40
          );
          coreGlow.addColorStop(0, `rgba(53, 242, 176, 0.15)`);
          coreGlow.addColorStop(1, "rgba(53, 242, 176, 0)");
          ctx.beginPath();
          ctx.arc(node.x, node.y, 40, 0, Math.PI * 2);
          ctx.fillStyle = coreGlow;
          ctx.fill();

          // Outer ring
          ctx.beginPath();
          ctx.arc(node.x, node.y, 12 + pulse * 2, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(53, 242, 176, ${0.2 + pulse * 0.1})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(node.x, node.y, 20 + pulse * 3, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(53, 242, 176, ${0.08 + pulse * 0.04})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      if (animated) {
        animFrameRef.current = requestAnimationFrame(draw);
      }
    };

    if (animated) {
      animFrameRef.current = requestAnimationFrame(draw);
    } else {
      draw();
    }

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      ro.disconnect();
    };
  }, [animated, centralCore, initNodes]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
};
