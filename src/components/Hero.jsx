import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  Database 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriter effect loop
  useEffect(() => {
    const currentTitle = personalInfo.animatedTitles[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentTitle.length) {
          // Pause at end of text
          setTimeout(() => setIsDeleting(true), 1800);
          setTypingSpeed(50);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % personalInfo.animatedTitles.length);
          setTypingSpeed(90);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, typingSpeed]);

  const handleDownloadCV = () => {
    // Confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {
      // safe fallback
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 to-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-medium w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Software Engineering Roles & Internships</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500">Ali Haidar</span>
              </h1>
              
              {/* Typewriter subtitle */}
              <div className="h-10 sm:h-12 flex items-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-mono">
                    {displayText}
                  </span>
                  <span className="inline-block w-0.5 h-6 ml-1 bg-cyan-500 animate-pulse align-middle" />
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
            >
              Building digital experiences through code, creativity, and continuous learning. 7th-semester Computer Science student at International Islamic University Islamabad crafting modern web systems, robust backends, and efficient software solutions.
            </motion.p>

            {/* Location & Quick Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-500" />
                <span>{personalInfo.location}</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600" />
              <div className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-indigo-400" />
                <span>IIUI • 3.02 CGPA</span>
              </div>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-medium shadow-md shadow-cyan-900/20 hover:shadow-glow-cyan transition-all duration-300 transform active:scale-95 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.cvPath}
                download="Ali-Haidar-CV.pdf"
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 font-medium transition-all duration-300 active:scale-95 shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-500" />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80"
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 font-mono">
                Connect
              </span>
              
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shadow-sm"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Visual / Real Profile Presentation */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[380px] sm:max-w-[420px]"
            >
              
              {/* Outer decorative gradient border ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 rounded-3xl blur-lg opacity-30 dark:opacity-45 group-hover:opacity-100 transition duration-1000 animate-pulse-slow"></div>

              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden p-3.5">
                
                {/* Code Editor Header Bar */}
                <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-100 dark:border-slate-800/80 mb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    AliHaidar.developer
                  </span>
                  <div className="flex items-center text-[10px] text-emerald-500 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-ping"></span>
                    online
                  </div>
                </div>

                {/* Photograph Presentation */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-900">
                  <img
                    src={personalInfo.photoPath}
                    alt="Ali Haidar - Software Engineer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Bottom caption overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/10 text-white">
                    <p className="text-xs font-semibold flex items-center justify-between">
                      <span>Ali Haidar</span>
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                        7th Semester BSCS
                      </span>
                    </p>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      IIUI • Full Stack & C++ Systems
                    </p>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Backend</p>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">Django</p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Core</p>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">C++ / Python</p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Database</p>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">SQL / Mongo</p>
                  </div>
                </div>

              </div>

              {/* Floating Accent Chip */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2.5 rounded-xl shadow-xl flex items-center gap-2 animate-float-slow">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-500">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-900 dark:text-white leading-tight">Problem Solver</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Clean & Scalable Code</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
