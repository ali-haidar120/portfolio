import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  Briefcase, 
  FolderGit2, 
  Terminal, 
  CheckCircle2, 
  Cloud, 
  Cpu, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function About() {
  const statIcons = [
    GraduationCap,
    Award,
    Briefcase,
    FolderGit2
  ];

  const highlights = [
    {
      title: "Full-Stack Web Engineering",
      description: "Hands-on experience building dynamic web apps using Django, JavaScript, Bootstrap, and modern frontend tools.",
      icon: Terminal,
      color: "from-cyan-500/20 to-cyan-500/5 text-cyan-500"
    },
    {
      title: "Strong Foundations in OOP & C++",
      description: "Rigorous academic and project background in data structures, algorithms, and modular object-oriented architecture.",
      icon: Cpu,
      color: "from-indigo-500/20 to-indigo-500/5 text-indigo-500"
    },
    {
      title: "Modern Database Management",
      description: "Designing normalized relational schemas (SQL, MS Access) and exploring NoSQL document storage with MongoDB.",
      icon: Briefcase,
      color: "from-emerald-500/20 to-emerald-500/5 text-emerald-500"
    },
    {
      title: "AI, DevOps & Cloud Aspirations",
      description: "Actively expanding knowledge into cloud deployments (Vercel, Railway), automated pipelines, and practical AI integrations.",
      icon: Cloud,
      color: "from-purple-500/20 to-purple-500/5 text-purple-500"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3 mb-4" />
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A 7th-semester Computer Science student driven by curiosity, engineering discipline, and a passion for practical problem solving.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {personalInfo.stats.map((stat, idx) => {
            const IconComponent = statIcons[idx % statIcons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">
                    <IconComponent className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase">
                    0{idx + 1}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1 font-mono">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.detail}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Content & Focus Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Detailed Narrative */}
          <div className="lg:col-span-6 space-y-6 bg-white dark:bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Engineering with Purpose & Precision
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {personalInfo.summary}
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {personalInfo.aboutExtended}
            </p>

            {/* Quick Points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Practical Problem-Solving:</strong> I enjoy breaking down complex specifications into clean, scalable architectures.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Continuous Learning Mindset:</strong> Constantly sharpening skills through university coursework, certifications, and hands-on side projects.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Collaborative Team Player:</strong> Active in university society operations, fostering effective communication and reliable delivery.
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 group"
              >
                <span>Get in touch for opportunities</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Core Pillars / Focus Areas */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-700 transition-all shadow-sm"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
