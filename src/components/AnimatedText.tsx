'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  text: string | ReactNode;
  className?: string;
  once?: boolean;
  delay?: number;
}

export default function AnimatedText({ text, className = '', once = false, delay = 0 }: AnimatedTextProps) {
  // For string text, split into words
  const words = typeof text === 'string' ? text.split(' ') : null;

  // Animation variants
  const container = {
    hidden: {},
    visible: (i = 1) => ({
      transition: { staggerChildren: 0.12, delayChildren: delay * 0.1 }
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words ? (
        <div className="inline-block">
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-1"
              variants={child}
            >
              {word}{' '}
            </motion.span>
          ))}
        </div>
      ) : (
        <motion.div variants={child}>{text}</motion.div>
      )}
    </motion.div>
  );
}
