'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Spriy4nshu' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/priy4nshu/' },
    { name: 'Kaggle', url: 'https://www.kaggle.com/priyanshu403' },
    // Add more social links as needed
  ];

  const footerLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-card-bg border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="#home" className="text-2xl font-bold gradient-text">
              Priyanshu
            </Link>
            <p className="text-sm text-foreground/70 mt-2">
              Developer, designer, and creator.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-8 mt-8 md:mt-0"
          >
            <div>
              <h4 className="font-medium mb-3">Navigate</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <motion.li key={link.name} variants={item}>
                    <Link
                      href={link.url}
                      className="text-sm text-foreground/70 hover:text-accent-light transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3">Connect</h4>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <motion.li key={link.name} variants={item}>
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground/70 hover:text-accent-light transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="pt-8 mt-8 border-t border-border/50 text-center text-sm text-foreground/50"
        >
          <p>© {currentYear} Priyanshu. All rights reserved.</p>
          <p className="mt-1">
            <Link
              href="https://priyanshu.id"
              className="hover:text-accent-light transition-colors"
            >
              priyanshu.id
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
