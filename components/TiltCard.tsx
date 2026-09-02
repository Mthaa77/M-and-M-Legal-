'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAngle?: number;
  glareEffect?: boolean;
  scaleOnHover?: number;
  perspective?: number;
}

export default function TiltCard({
  children,
  className = '',
  tiltAngle = 7,
  glareEffect = true,
  scaleOnHover = 1.015,
  perspective = 1100,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Raw cursor coordinates relative to card center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for fluid, premium tactile motion
  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 22 });

  // Compute 3D rotation angles
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${tiltAngle}deg`, `-${tiltAngle}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${tiltAngle}deg`, `${tiltAngle}deg`]);

  // Glare position and background gradient
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(circle at ${gx} ${gy}, rgba(228, 202, 146, 0.14) 0%, rgba(228, 202, 146, 0.04) 40%, transparent 70%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalized position from -0.5 (left/top) to 0.5 (right/bottom)
    const normalizedX = (e.clientX - rect.left) / width - 0.5;
    const normalizedY = (e.clientY - rect.top) / height - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ perspective: `${perspective}px` }}
      className="relative will-change-transform"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: scaleOnHover }}
        transition={{ duration: 0.2 }}
        className={`relative ${className}`}
      >
        {children}

        {/* Subtle Specular Gold Sheen Glare */}
        {glareEffect && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity duration-300 overflow-hidden"
            style={{
              background: glareBackground,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
