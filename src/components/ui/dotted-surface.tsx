import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React, { useEffect, useRef } from "react";

type DottedSurfaceProps = React.HTMLAttributes<HTMLDivElement>;

type AnimationState = {
  frame: number;
  tick: number;
};

export function DottedSurface({ className, children, ...props }: DottedSurfaceProps) {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<AnimationState>({ frame: 0, tick: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    canvas.style.opacity = "0.8";

    container.appendChild(canvas);

    const context = canvas.getContext("2d");
    if (!context) {
      container.removeChild(canvas);
      return;
    }

    const separation = 36;
    const amplitude = 14;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const devicePixelRatio = window.devicePixelRatio || 1;

      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const draw = () => {
      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      if (width === 0 || height === 0) {
        stateRef.current.frame = requestAnimationFrame(draw);
        return;
      }

      context.clearRect(0, 0, width, height);

      const amountX = Math.ceil(width / separation) + 2;
      const amountY = Math.ceil(height / separation) + 2;

      const baseColor = theme === "dark" ? 200 : 25;
      const accentColor = theme === "dark" ? 255 : 90;
      const centerX = width / 2;
      const centerY = height / 2;

      for (let ix = 0; ix < amountX; ix += 1) {
        for (let iy = 0; iy < amountY; iy += 1) {
          const offsetX = ix * separation - (amountX * separation) / 2;
          const offsetY = iy * separation - (amountY * separation) / 2;

          const waveX = Math.sin((ix + stateRef.current.tick) * 0.35);
          const waveY = Math.sin((iy + stateRef.current.tick) * 0.45);
          const wave = waveX + waveY;

          const x = centerX + offsetX;
          const y = centerY + offsetY + wave * amplitude;
          const radius = Math.max(0.75, 1.6 + wave * 0.6);
          const lightness = Math.min(
            accentColor,
            Math.max(baseColor, baseColor + wave * 45),
          );
          const alpha = 0.25 + Math.min(0.55, Math.abs(wave) * 0.35);

          context.beginPath();
          context.fillStyle = `rgba(${lightness}, ${lightness}, ${lightness}, ${alpha})`;
          context.arc(x, y, radius, 0, Math.PI * 2);
          context.fill();
        }
      }

      stateRef.current.tick += 0.015;
      stateRef.current.frame = requestAnimationFrame(draw);
    };

    stateRef.current.tick = 0;
    draw();

    return () => {
      if (stateRef.current.frame) {
        cancelAnimationFrame(stateRef.current.frame);
      }
      resizeObserver.disconnect();
      if (canvas.parentElement === container) {
        container.removeChild(canvas);
      }
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none absolute inset-0", className)}
      {...props}
    >
      {children}
    </div>
  );
}
