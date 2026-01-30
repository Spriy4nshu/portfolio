'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  projectUrl: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  technologies,
  projectUrl,
  index,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut',
      }}
      viewport={{ once: true, margin: '-50px' }}
      className="card-hover rounded-xl overflow-hidden bg-card-bg border border-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Tech stack tags */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="inline-block px-2 py-1 text-xs bg-background/80 backdrop-blur-sm rounded-full"
            >
              {tech}
            </motion.span>
          ))}
          {technologies.length > 3 && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="inline-block px-2 py-1 text-xs bg-background/80 backdrop-blur-sm rounded-full"
            >
              +{technologies.length - 3} more
            </motion.span>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-foreground/80 mb-4 line-clamp-2">
          {description}
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors"
          >
            View Project
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
