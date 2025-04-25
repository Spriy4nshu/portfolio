'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Send form data to the API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if response is ok before trying to parse JSON
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error('Failed to send message. Server returned an error.');
      }

      const data = await response.json();
      
      // Use the success message from the server response
      console.log('Success:', data.message);

      // Form submitted successfully
      setIsSubmitted(true);
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.01,
      boxShadow: '0 0 0 2px rgba(0, 112, 243, 0.2)',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
      },
    },
    idle: {
      scale: 1,
      boxShadow: 'none',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        ease: 'easeOut',
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-0">
      <AnimatePresence>
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="text-center p-8 rounded-xl bg-card-bg border border-border"
          >
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1, rotate: [0, 10, 0] }} 
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl mb-4"
            >
              ✓
            </motion.div>
            <h3 className="text-xl font-bold mb-2">Thank you!</h3>
            <p className="text-foreground/80">
              Your message has been sent successfully. I&apos;ll get back to you as soon as possible.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-2 bg-accent text-white rounded-full hover:bg-accent-light transition-colors"
              onClick={() => setIsSubmitted(false)}
            >
              Send another message
            </motion.button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <motion.input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                variants={inputVariants}
                whileFocus="focus"
                initial="idle"
                animate="idle"
                className="block w-full px-4 py-3 rounded-lg border border-border bg-card-bg/50 focus:outline-none"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <motion.input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                variants={inputVariants}
                whileFocus="focus"
                initial="idle"
                animate="idle"
                className="block w-full px-4 py-3 rounded-lg border border-border bg-card-bg/50 focus:outline-none"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                variants={inputVariants}
                whileFocus="focus"
                initial="idle"
                animate="idle"
                className="block w-full px-4 py-3 rounded-lg border border-border bg-card-bg/50 focus:outline-none resize-none"
              />
            </motion.div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm"
              >
                {error}
              </motion.div>
            )}

            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-light transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
