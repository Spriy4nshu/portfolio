'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import NavBar from '@/components/NavBar';
import AnimatedText from '@/components/AnimatedText';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  // Refs for scroll animations
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effects
  const { scrollYProgress: aboutScrollY } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  
  const aboutY = useTransform(aboutScrollY, [0, 1], [50, -50]);
  
  // Real project data from CV
  const projects = [
    {
      title: "Generative Replay with Compressed Features",
      description: "Implemented a Hippocampal Memory Indexing module to mimic brain memory storage for NLP tasks, improving task performance by 25% and reducing catastrophic forgetting by 40%.",
      imageSrc: "/project-ai.jpg",
      technologies: ["PyTorch", "BERT", "GPT-2", "LAMOL"],
      projectUrl: "https://github.com/Spriy4nshu/generative_replay",
      githubUrl: "https://github.com/Spriy4nshu/generative_replay"
    },
    {
      title: "Evaluating SpikeNet on Temporal Graphs",
      description: "Benchmarked SpikeNet on a 17M+ edge dynamic graph dataset, achieving 67% accuracy in edge and node property prediction while improving efficiency by 15%.",
      imageSrc: "/project-portfolio.jpg",
      technologies: ["SnnTorch", "Graph Neural Networks", "TGBN"],
      projectUrl: "https://github.com/Spriy4nshu/tgbn-spikenet",
      githubUrl: "https://github.com/Spriy4nshu/tgbn-spikenet"
    },
    {
      title: "Real-Time Vehicle Speed Detection",
      description: "Hosted a YOLOv7-based live-streaming web app on AWS using Flask, improving image throughput from 12 to 15 FPS with 25% enhanced detection accuracy.",
      imageSrc: "/project-ecommerce.jpg",
      technologies: ["Python", "YOLOv7", "Flask", "AWS", "FFmpeg"],
      projectUrl: "https://github.com/qm46/yolo-speed-estimation",
      githubUrl: "https://github.com/qm46/yolo-speed-estimation"
    },
    {
      title: "Car Renting Website - REYOCA",
      description: "Deployed a car rental website on AWS EC2 with authentication, session management, payment processing via Stripe API, and real-time tracking with Maps API.",
      imageSrc: "/project-website.jpg",
      technologies: ["Node.js", "MySQL", "AWS", "Maps API", "Stripe API"],
      projectUrl: "https://github.com/SoftwareG4/REYOCA",
      githubUrl: "https://github.com/SoftwareG4/REYOCA"
    }
  ];
  

  // Skills data grouped by category from CV
  const skills = {
    languages: ["Python", "R", "MATLAB", "C++", "Java", "JavaScript", "SQL", "NoSQL", "BASH"],
    "Machine Learning": ["PyTorch", "TensorFlow", "KERAS", "Computer Vision", "NLP", "LSTM", "SVM"],
    "Deep Learning": ["Reinforcement Learning", "StableBaseline-3", "Gymnasium", "Transformers", "Neural Networks"],
    "Data Engineering": ["Spark", "Hadoop", "ETL Pipelines", "Docker", "Kubernetes", "AWS"],
    frameworks: ["Flask", "Next.js", "React", "Node.js", "Spring Boot", "REST"],
    databases: ["MySQL", "MongoDB", "Firebase", "DynamoDB", "S3"]
  };

  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16 bg-gradient-to-br from-background via-background to-background-alt">
        {/* Background gradient effect */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent-light/20 rounded-full filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Text content with animation */}
        <div className="flex flex-col justify-center items-center text-center z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Hi, I&apos;m <span className="gradient-text">Priyanshu</span>
            </h1>
          </motion.div>
          
          <AnimatedText 
            text="Machine Learning Engineer & Software Developer" 
            className="text-xl sm:text-2xl md:text-3xl mb-8 text-foreground/80"
            delay={1}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-light transition-colors"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border border-border font-medium hover:bg-card-bg transition-colors"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
        
        {/* Abstract shapes */}
        <motion.div 
          className="absolute w-full h-full pointer-events-none z-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-accent/10 rounded-full"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
              animate={{
                x: [0, 10, -10, 0],
                y: [0, -10, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 10 - i,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: [0.3, 1, 0.3], 
            y: [0, 10, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            delay: 2
          }}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-foreground/70"
          >
            <path 
              d="M12 5L12 19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20 min-h-screen flex flex-col justify-center"
        ref={aboutRef}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedText 
            text="About Me" 
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              style={{ y: aboutY }}
              className="relative w-full h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/profile.jpg" // Add your profile image to public folder
                alt="Priyanshu"
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            
            <div>
              <AnimatedText 
                text="Machine Learning Engineer & Software Developer focused on AI solutions"
                className="text-xl font-medium mb-6"
                once={true}
                delay={0.2}
              />
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-foreground/80 mb-6"
              >
                I&apos;m a Software Developer and Machine Learning Engineer based in New Brunswick, NJ. My expertise spans machine learning, computer vision, and full-stack development. At the New Jersey Turnpike Authority, I implement API communication pipelines and work with geographic information systems. Previously, I worked as a Data Engineer at Kaaye Technologies, where I revamped predictive forecast models using Apache Spark.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-foreground/80 mb-8"
              >
                My research experience includes working as a Research Assistant at Rutgers University, developing classification models for turfgrass species and implementing real-time vehicle speed detection systems. I&apos;m passionate about developing practical AI solutions that bridge theoretical concepts with real-world applications. I&apos;ve contributed to various ML projects including generative replay models, spiking neural networks, and computer vision systems.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <a 
                  href="/resume.pdf" // Add your resume PDF to public folder
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full border border-border font-medium hover:bg-card-bg transition-colors"
                >
                  Download Resume
                  <svg 
                    className="ml-2 h-4 w-4" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card-bg" ref={projectsRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedText 
            text="My Projects" 
            className="text-3xl sm:text-4xl font-bold mb-4 text-center"
            once={true}
          />
          
          <AnimatedText 
            text="Some of my recent work" 
            className="text-lg text-foreground/70 mb-12 text-center"
            once={true}
            delay={0.2}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                index={index}
                {...project}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <motion.a
              href="https://github.com/Spriy4nshu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-light transition-colors"
            >
              See More on GitHub
              <svg 
                className="ml-2 h-4 w-4" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedText 
            text="My Skills" 
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            once={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card-bg rounded-xl p-6 border border-border"
              >
                <h3 className="text-xl font-bold mb-4 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 + index * 0.1 }}
                      className="px-3 py-1 bg-background rounded-full text-sm border border-border"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedText 
            text="Education" 
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            once={true}
          />
          
          <div className="grid grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card-bg rounded-xl p-6 border border-border"
            >
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Master of Science in Computer Science</h3>
                <span className="text-foreground/70">September 2022 - May 2024</span>
              </div>
              <h4 className="text-lg text-accent mb-2">Rutgers University, New Brunswick</h4>
              <p className="text-foreground/80">GPA: 3.92/4.0</p>
              <p className="text-foreground/80 mt-2">Research: Developed classification models for turfgrass species, created vehicle speed detection systems using YOLOv7</p>
              <p className="text-foreground/80 mt-2">Activities and societies: Astronomical Society and Chess Club</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card-bg rounded-xl p-6 border border-border"
            >
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Bachlor of Engineering in Electronics and Telecommunication</h3>
                <span className="text-foreground/70">August 2016 - May 2020</span>
              </div>
              <h4 className="text-lg text-accent mb-2">Mumbai University, Mumbai, India</h4>
              <p className="text-foreground/80">GPA: 3.76/4.0</p>
              <p className="text-foreground/80 mt-2">Robotics Competition 2016: Winner </p>
              <p className="text-foreground/80 mt-2">Activities and societies: Member of Extension Working Committee</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-background-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedText 
            text="Professional Experience" 
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            once={true}
          />
          
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card-bg rounded-xl p-6 border border-border"
            >
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Software Developer</h3>
                <span className="text-foreground/70">July 2024 - Present</span>
              </div>
              <h4 className="text-lg text-accent mb-4">New Jersey Turnpike Authority, Woodbridge, NJ</h4>
              <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                <li>Implemented an API communication pipeline between Enterprise Asset Management System (SOAP) and Fluid Management System (REST) to maintain and manage fluid dispense information at NJTA Depots</li>
                <li>Created a Linear Referencing System to incorporate new ramps acquired for Garden State Parkway routes by NJTA in enterprise geographic information system using ArcGIS Pro</li>
                <li>Designed a communication pipeline between Loadrite (Loader Weighing Scale System) and NWOS (NJTA Weather Operation System) to maintain Salt inventory during winter season</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card-bg rounded-xl p-6 border border-border"
            >
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Research Assistant</h3>
                <span className="text-foreground/70">April 2023 - May 2024</span>
              </div>
              <h4 className="text-lg text-accent mb-4">Plant Biology Department, Rutgers University, New Brunswick, NJ</h4>
              <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                <li>Modelled a VGG-19 classification model for phenotyping 7 different turfgrass species to improve the efficiency and remove a targeted bias of manual phenotyping</li>
                <li>Generated a Graphical Pedigree dataset for 12 species of turfgrass to obtain a Family link of any plant from any year using a recursive query to maintain dynamism</li>
                <li>Developed TurfCV, a Python library that takes an image of turfgrass/seed as input and analyzes the physical aspect (phenotype) and predicts (genotype) the future growth of the plant</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card-bg rounded-xl p-6 border border-border"
            >
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Research Assistant</h3>
                <span className="text-foreground/70">November 2023 - May 2024</span>
              </div>
              <h4 className="text-lg text-accent mb-4">Durandal Lab, Rutgers University, Piscataway, NJ</h4>
              <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                <li>Hosted a real-time live streaming web application on AWS EC2 using Flask by collecting frames from the PSDK module of YOLOv7, which resulted in converting them to 15fps video clips using FFmpeg, reducing latency by 20%</li>
                <li>Improved the efficiency of the number of images produced by the YOLOv7 module by 25%, which resulted in the detection of the speed of the vehicles from 12 images per second to 15 images per second, enhancing detection accuracy by 25%</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-card-bg rounded-xl p-6 border border-border"
            >
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Data Engineer</h3>
                <span className="text-foreground/70">November 2020 - October 2021</span>
              </div>
              <h4 className="text-lg text-accent mb-4">Kaaye Technologies LTD, Navi Mumbai, India</h4>
              <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                <li>Revamped predictive forecast and classification models (LSTM, SVM) by leveraging Apache Spark for efficient distributed data processing, which resulted in scalable data storage using MongoDB and reduced processing time by 40%</li>
                <li>Achieved model accuracies between 85-95% by analyzing historical data to identify past trends, which resulted in providing solutions to 5 retail-based clients, increasing their sales by an average of 15%</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-card-bg rounded-xl p-6 border border-border"
            >
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Machine Learning Intern</h3>
                <span className="text-foreground/70">February 2020 - August 2020</span>
              </div>
              <h4 className="text-lg text-accent mb-4">ValueFirst, Gurgaon, India</h4>
              <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                <li>Collaborated on an internal project to fully automate the employee onboarding process by reducing manual intervention by 35-50%, which resulted in efficient document verification and information extraction, saving significant time</li>
                <li>Built a Naive Bayes classifier for email spam detection by achieving 95% accuracy, which resulted in effective spam filtering</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedText 
            text="Publications" 
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            once={true}
          />
          
          <div className="bg-card-bg rounded-xl p-6 border border-border">
            <h3 className="text-xl font-bold mb-2">Classification of Grains and Quality Analysis using Deep Learning</h3>
            <p className="text-foreground/70 mb-4">International Journal of Engineering and Advanced Technology (IJEAT), October 2021</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <a 
                href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=fK656bEAAAAJ&citation_for_view=fK656bEAAAAJ:d1gkVwhDpl0C" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-accent text-white rounded-full text-sm hover:bg-accent-light transition-colors"
              >
                View on Google Scholar
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedText 
            text="Get In Touch" 
            className="text-3xl sm:text-4xl font-bold mb-4 text-center"
            once={true}
          />
          
          <AnimatedText 
            text="Have a question or want to work together?" 
            className="text-lg text-foreground/70 mb-12 text-center"
            once={true}
            delay={0.2}
          />
          
          <ContactForm />
          
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6">
            <a 
              href="mailto:pshrivastava403@outlook.com" 
              className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              pshrivastava403@outlook.com
            </a>
            <a 
              href="tel:+17325226490" 
              className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              +1 (732) 522-6490
            </a>
            <a 
              href="https://linkedin.com/in/priy4nshu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"></circle>
              </svg>
              linkedin.com/in/priy4nshu
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}