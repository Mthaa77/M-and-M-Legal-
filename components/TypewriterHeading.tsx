'use client';

import React, { useEffect, useState } from 'react';
import { motion, useInView, Variants } from 'motion/react';

export interface TypewriterSegment {
  text: string;
  className?: string;
  italic?: boolean;
  highlight?: boolean;
}

interface TypewriterHeadingProps {
  segments: (string | TypewriterSegment)[];
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  delay?: number;
  staggerSpeed?: number;
  cursorColor?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

export default function TypewriterHeading({
  segments,
  className = '',
  as = 'h1',
  delay = 0.2,
  staggerSpeed = 0.03,
  cursorColor = '#ECCF9B',
  showCursor = true,
  onComplete
}: TypewriterHeadingProps) {
  const containerRef = React.useRef<HTMLHeadingElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-40px' });
  const [isDone, setIsDone] = useState(false);

  // Normalize segments into array of objects
  const normalizedSegments: TypewriterSegment[] = segments.map((seg) => {
    if (typeof seg === 'string') {
      return { text: seg };
    }
    return seg;
  });

  // Calculate total characters for timing completion
  const totalChars = normalizedSegments.reduce((acc, seg) => acc + seg.text.length, 0);

  useEffect(() => {
    if (!isInView) return;
    const totalDurationMs = (delay + totalChars * staggerSpeed + 0.4) * 1000;
    const timer = setTimeout(() => {
      setIsDone(true);
      if (onComplete) onComplete();
    }, totalDurationMs);

    return () => clearTimeout(timer);
  }, [isInView, delay, totalChars, staggerSpeed, onComplete]);

  // Motion variants for container and character stamps
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerSpeed,
        delayChildren: delay
      }
    }
  };

  const charVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 3,
      filter: 'blur(0.8px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.08,
        ease: 'easeOut'
      }
    }
  };

  const Component = motion[as];

  return (
    <Component
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`relative ${className}`}
    >
      {normalizedSegments.map((segment, segIdx) => {
        // Split segment by newline to handle line breaks properly
        const lines = segment.text.split('\n');

        return (
          <span key={segIdx} className={segment.className || ''}>
            {lines.map((line, lineIdx) => {
              // Split line into words to prevent word-break issues
              const words = line.split(' ');

              return (
                <React.Fragment key={`line-${segIdx}-${lineIdx}`}>
                  {words.map((word, wordIdx) => {
                    const isLastWord = wordIdx === words.length - 1;
                    const chars = Array.from(word);

                    return (
                      <span
                        key={`word-${segIdx}-${lineIdx}-${wordIdx}`}
                        className="inline-block whitespace-nowrap"
                      >
                        {chars.map((char, charIdx) => (
                          <motion.span
                            key={`c-${segIdx}-${lineIdx}-${wordIdx}-${charIdx}`}
                            variants={charVariants}
                            className="inline-block"
                          >
                            {char}
                          </motion.span>
                        ))}
                        {!isLastWord && (
                          <motion.span
                            variants={charVariants}
                            className="inline-block"
                          >
                            &nbsp;
                          </motion.span>
                        )}
                      </span>
                    );
                  })}
                  {lineIdx < lines.length - 1 && (
                    <br key={`br-${segIdx}-${lineIdx}`} className="hidden sm:inline" />
                  )}
                </React.Fragment>
              );
            })}
          </span>
        );
      })}

      {/* Classic Legal Drafting Typewriter Carriage Cursor */}
      {showCursor && (
        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isDone ? [1, 0] : [1, 0, 1]
          }}
          transition={{
            repeat: isDone ? 3 : Infinity,
            repeatType: 'reverse',
            duration: 0.6,
            ease: 'easeInOut'
          }}
          className="inline-block w-[2.5px] sm:w-[3.5px] h-[0.78em] align-baseline ml-1 rounded-sm shadow-gold-glow"
          style={{
            backgroundColor: cursorColor
          }}
        />
      )}
    </Component>
  );
}
