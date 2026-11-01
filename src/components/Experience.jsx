import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '../data/portfolioData';
import { 
  Briefcase, 
  HeartHandshake, 
  Calendar, 
  Sparkles, 
  CheckCircle,
  Building,
  Users,
  ShieldCheck,
  Eye,
  FileCheck2,
  Download,
  ExternalLink,
  X,
  Maximize2,
  UserCheck
} from 'lucide-react';

export default function Experience() {
  const [activeLetterModal, setActiveLetterModal] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveLetterModal(null);
    };
    if (activeLetterModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLetterModal]);

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
                    <div className="flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-1">
                      {isVolunteer ? <Users className="w-4 h-4 shrink-0" /> : <Building className="w-4 h-4 shrink-0" />}
                      <span>{exp.company}</span>
                    </div>

                    {/* Supervisor & Department Metadata (if available) */}
                    {exp.department && (
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-3 space-y-0.5 font-mono">
                        <div>Dept: <span className="text-slate-700 dark:text-slate-300 font-medium">{exp.department}</span></div>
                        {exp.supervisor && (
                          <div className="flex items-center gap-1 text-[11px] text-slate-600 dark:text-slate-400">
                            <UserCheck className="w-3 h-3 text-cyan-500" />
                            <span>Mentor: {exp.supervisor}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Primary Quote/Summary */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 italic">
                      "{exp.description}"
                    </p>

                    {/* Letter Preview Box if available */}
                    {exp.letterImage && (
                      <div 
                        onClick={() => setActiveLetterModal(exp)}
                        className="group relative cursor-pointer mb-4 p-2.5 rounded-xl border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 dark:bg-slate-800/60 dark:hover:bg-slate-800 transition-all duration-300 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shrink-0 bg-white shadow-sm">
                            <img 
                              src={exp.letterImage} 
                              alt="Internship Letter Preview" 
                              className="w-full h-full object-cover object-top filter group-hover:scale-110 transition-transform duration-300" 
                            />
                          </div>
                          <div className="truncate">
                            <div className="flex items-center gap-1 text-xs font-semibold text-slate-900 dark:text-white">
                              <ShieldCheck className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                              <span className="truncate">Internship Completion Letter</span>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono truncate">
                              Ref: {exp.referenceNo}
                            </p>
                          </div>
                        </div>
                        <span className="shrink-0 inline-flex items-center gap-1 text-xs font-medium text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500">
                          <Eye className="w-3.5 h-3.5" />
                          <span>View</span>
                        </span>
                      </div>
                    )}

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

      {/* Internship Letter Modal Lightbox */}
      <AnimatePresence>
        {activeLetterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLetterModal(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-950/50">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                      Internship Completion Letter
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {activeLetterModal.company} • Ref: {activeLetterModal.referenceNo}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {activeLetterModal.letterPdf && (
                    <a
                      href={activeLetterModal.letterPdf}
                      download="Kohistan-Builders-Internship-Letter.pdf"
                      className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                      title="Download Official PDF"
                    >
                      <Download className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={activeLetterModal.letterImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    title="Open Full Image"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => setActiveLetterModal(null)}
                    className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Letter Image Body */}
              <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-slate-100/50 dark:bg-slate-950/60">
                <img
                  src={activeLetterModal.letterImage}
                  alt="Internship Completion Letter"
                  className="max-h-[70vh] w-auto max-w-full rounded-xl shadow-lg border border-slate-200/80 dark:border-slate-800 object-contain bg-white"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50 flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
                <span>Issued by <strong>{activeLetterModal.company}</strong> ({activeLetterModal.letterDate})</span>
                <span className="font-mono text-cyan-600 dark:text-cyan-400">Signed by {activeLetterModal.signatory}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
