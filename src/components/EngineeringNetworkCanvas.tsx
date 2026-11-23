import { useEffect, useRef } from 'react';

interface NodePoint {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  label?: string;
}

interface DataPulse {
  fromIdx: number;
  toIdx: number;
  progress: number;
  speed: number;
  color: string;
}

const NODE_SPECS: Array<{
  rx: number;
  ry: number;
  radius: number;
  color: string;
  label?: string;
}> = [
  { rx: 0.14, ry: 0.18, radius: 5, color: '#A8E6E1', label: 'Python Core' },
  { rx: 0.48, ry: 0.12, radius: 4.5, color: '#A5C9FF', label: 'Django API' },
  { rx: 0.84, ry: 0.2, radius: 5, color: '#C4B5FD', label: 'Nuke API' },
  { rx: 0.24, ry: 0.44, radius: 4, color: '#B8F2D8', label: 'PyQt / Qt' },
  { rx: 0.78, ry: 0.48, radius: 5.5, color: '#A8E6E1', label: 'OpenEXR' },
  { rx: 0.16, ry: 0.76, radius: 4.5, color: '#C4B5FD', label: 'Docker' },
  { rx: 0.52, ry: 0.84, radius: 5, color: '#B8F2D8', label: 'Validation' },
  { rx: 0.84, ry: 0.78, radius: 4.5, color: '#A5C9FF', label: 'Automation' },
  { rx: 0.36, ry: 0.28, radius: 3, color: '#A5C9FF' },
  { rx: 0.64, ry: 0.3, radius: 3, color: '#C4B5FD' },
  { rx: 0.34, ry: 0.66, radius: 3, color: '#A8E6E1' },
  { rx: 0.68, ry: 0.66, radius: 3, color: '#B8F2D8' },
];

const EDGES: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [0, 3],
  [0, 8],
  [1, 8],
  [1, 9],
  [2, 9],
  [2, 4],
  [3, 8],
  [3, 5],
  [3, 10],
  [4, 9],
  [4, 7],
  [4, 11],
  [5, 6],
  [5, 10],
  [6, 10],
  [6, 11],
  [6, 7],
  [7, 11],
  [8, 9],
  [10, 11],
];

export function EngineeringNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0.5,
    y: 0.5,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: NodePoint[] = [];
    let pulses: DataPulse[] = [];
    let rafId = 0;

    const initGraph = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width || 560;
      height = rect.height || 480;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes = NODE_SPECS.map((spec, idx) => {
        const bx = spec.rx * width;
        const by = spec.ry * height;
        return {
          x: bx,
          y: by,
          baseX: bx,
          baseY: by,
          vx: ((idx % 3) - 1) * 0.14 + 0.08,
          vy: (((idx + 1) % 3) - 1) * 0.14 - 0.06,
          radius: spec.radius,
          color: spec.color,
          label: spec.label,
        };
      });

      const pulseColors = ['#A8E6E1', '#C4B5FD', '#A5C9FF', '#B8F2D8'];
      pulses = EDGES.slice(0, 10).map((edge, idx) => ({
        fromIdx: edge[0],
        toIdx: edge[1],
        progress: (idx * 0.17) % 1,
        speed: 0.0028 + (idx % 4) * 0.0007,
        color: pulseColors[idx % pulseColors.length],
      }));
    };

    const drawFrame = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Subtle architectural coordinate grid
      ctx.strokeStyle = 'rgba(165, 201, 255, 0.05)';
      ctx.lineWidth = 1;
      const step = 48;
      ctx.beginPath();
      for (let gx = step; gx < width; gx += step) {
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, height);
      }
      for (let gy = step; gy < height; gy += step) {
        ctx.moveTo(0, gy);
        ctx.lineTo(width, gy);
      }
      ctx.stroke();

      const pointer = pointerRef.current;
      const px = pointer.x * width;
      const py = pointer.y * height;

      // Update node positions gently
      nodes.forEach((node, idx) => {
        if (!prefersReducedMotion) {
          const driftX = Math.sin(time * 0.0006 + idx * 1.1) * 7;
          const driftY = Math.cos(time * 0.00055 + idx * 0.9) * 7;
          let targetX = node.baseX + driftX;
          let targetY = node.baseY + driftY;

          if (pointer.active) {
            const dx = px - targetX;
            const dy = py - targetY;
            const dist = Math.hypot(dx, dy);
            if (dist < 190 && dist > 1) {
              const pull = ((190 - dist) / 190) * 14;
              targetX += (dx / dist) * pull;
              targetY += (dy / dist) * pull;
            }
          }

          node.x += (targetX - node.x) * 0.06;
          node.y += (targetY - node.y) * 0.06;
        } else {
          node.x = node.baseX;
          node.y = node.baseY;
        }
      });

      // Draw edges
      EDGES.forEach(([aIdx, bIdx]) => {
        const a = nodes[aIdx];
        const b = nodes[bIdx];
        if (!a || !b) return;
        const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        grad.addColorStop(0, 'rgba(168, 230, 225, 0.22)');
        grad.addColorStop(1, 'rgba(196, 181, 253, 0.22)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });

      // Draw flowing data packets along paths
      if (!prefersReducedMotion) {
        pulses.forEach((pulse) => {
          pulse.progress += pulse.speed;
          if (pulse.progress >= 1) {
            pulse.progress = 0;
            const nextEdge =
              EDGES[Math.floor(Math.random() * EDGES.length)];
            pulse.fromIdx = nextEdge[0];
            pulse.toIdx = nextEdge[1];
          }

          const a = nodes[pulse.fromIdx];
          const b = nodes[pulse.toIdx];
          if (!a || !b) return;

          const x = a.x + (b.x - a.x) * pulse.progress;
          const y = a.y + (b.y - a.y) * pulse.progress;

          const glow = ctx.createRadialGradient(x, y, 0, x, y, 10);
          glow.addColorStop(0, pulse.color);
          glow.addColorStop(1, 'rgba(11, 16, 32, 0)');
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(x, y, 10, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#F8FAFC';
          ctx.beginPath();
          ctx.arc(x, y, 2.2, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // Draw nodes and crisp minimal labels
      ctx.font = '500 11px "JetBrains Mono", monospace';
      ctx.textBaseline = 'middle';

      nodes.forEach((node) => {
        const halo = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 3.8
        );
        halo.addColorStop(0, `${node.color}55`);
        halo.addColorStop(1, 'rgba(11, 16, 32, 0)');
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        if (node.label) {
          const offsetX = node.x > width * 0.65 ? -10 : 12;
          ctx.textAlign = node.x > width * 0.65 ? 'right' : 'left';
          ctx.fillStyle = 'rgba(248, 250, 252, 0.78)';
          ctx.fillText(node.label, node.x + offsetX, node.y);
        }
      });

      if (!prefersReducedMotion) {
        rafId = window.requestAnimationFrame(drawFrame);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
        active: true,
      };
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    initGraph();
    if (prefersReducedMotion) {
      drawFrame(0);
    } else {
      rafId = window.requestAnimationFrame(drawFrame);
    }

    const resizeObserver = new ResizeObserver(() => {
      initGraph();
      if (prefersReducedMotion) drawFrame(0);
    });
    resizeObserver.observe(canvas);

    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-label="Interactive software and VFX pipeline node network visualization"
      className="h-full w-full block"
    />
  );
}
