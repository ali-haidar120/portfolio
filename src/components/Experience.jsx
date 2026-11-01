import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';
import { 
  Briefcase, 
  HeartHandshake, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle,
  Building,
  Users
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work & Leadership Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3 mb-4" />
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Practical industry internship experience complemented by student society leadership and operational execution.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500/50 before:to-transparent">
          
          {experiences.map((exp, idx) => {
            const isVolunteer = exp.isVolunteer;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                } gap-6 md:gap-0 pl-10 md:pl-0`}
              >
                
                {/* Timeline Center Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 z-10 flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-full border-4 ${
                    isVolunteer 
                      ? 'border-indigo-500/30 bg-indigo-500 text-white' 
                      : 'border-cyan-500/30 bg-cyan-500 text-white'
                  } shadow-md flex items-center justify-center`}>
                    {isVolunteer ? (
                      <HeartHandshake className="w-3.5 h-3.5" />
                    ) : (
                      <Briefcase className="w-3.5 h-3.5" />
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${
                  isEven ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'
                }`}>
                  <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all duration-300">
                    
                    {/* Header info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                        isVolunteer
                          ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20'
                          : 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20'
                      }`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
                      {isVolunteer ? <Users className="w-4 h-4" /> : <Building className="w-4 h-4" />}
                      <span>{exp.company}</span>
                    </div>

                    {/* Primary Quote/Summary */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 italic">
                      "{exp.description}"
                    </p>

                    {/* Bullet Responsibilities */}
                    <div className="space-y-2 mb-4">
                      {exp.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech & Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
