"use client";

import { useEffect, useRef, useCallback } from "react";

interface MatrixRainProps {
  opacity?: number;
}

const CHARACTERS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン" +
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
  "0123456789" +
  "!@#$%^&*()_+-=[]{}|;:,.<>?" +
  "가나다라마바사아자차카타파하";

export default function MatrixRain({ opacity = 0.15 }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const dropsRef = useRef<number[]>([]);
  const lastTimeRef = useRef<number>(0);

  const getRandomChar = useCallback(() => {
    return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  }, []);

  const initDrops = useCallback((columnCount: number) => {
    const drops: number[] = [];
    for (let i = 0; i < columnCount; i++) {
      drops[i] = Math.random() * -100;
    }
    return drops;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fontSize = 14;
    let columns: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      dropsRef.current = initDrops(columns);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = (timestamp: number) => {
      // FPS limiting (approximately 30fps for performance)
      if (timestamp - lastTimeRef.current < 33) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }
      lastTimeRef.current = timestamp;

      // Semi-transparent black to create fade effect
      ctx.fillStyle = `rgba(0, 0, 0, 0.05)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set green color with glow effect
      ctx.fillStyle = "#00ff00";
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
      ctx.shadowBlur = 2;
      ctx.shadowColor = "#00ff00";

      for (let i = 0; i < dropsRef.current.length; i++) {
        const char = getRandomChar();
        const x = i * fontSize;
        const y = dropsRef.current[i] * fontSize;

        // Vary the green intensity for depth effect
        const brightness = Math.random();
        if (brightness > 0.9) {
          ctx.fillStyle = "#ffffff"; // Occasional white flash
        } else if (brightness > 0.7) {
          ctx.fillStyle = "#00ff00"; // Bright green
        } else {
          ctx.fillStyle = "#008800"; // Dim green
        }

        ctx.fillText(char, x, y);

        // Reset drop when it goes off screen
        if (y > canvas.height && Math.random() > 0.975) {
          dropsRef.current[i] = 0;
        }

        dropsRef.current[i]++;
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [getRandomChar, initDrops]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        opacity,
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
