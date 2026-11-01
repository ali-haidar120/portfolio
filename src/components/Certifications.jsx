import { motion } from 'framer-motion';
import { certifications, languages } from '../data/portfolioData';
import { 
  Award, 
  Calendar, 
  Languages as LanguagesIcon, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle,
  Building2,
  ExternalLink
} from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/40 border-y border-slate-200/60 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Credentials & Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications & Languages
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3 mb-4" />
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Professional development qualifications verified by recognized institutions and language proficiencies for global collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Certification Card (8 Cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-full p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
                    Verified Credential
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                    <span>August 2025</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-indigo-500 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Full Stack Web Development
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                      <Building2 className="w-4 h-4" />
                      <span>Air University Islamabad</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Comprehensive professional training curriculum focused on full-stack web architectures, dynamic user interfaces, modern web standards, server-side communication, and backend database integrations.
                </p>

                {/* Key Skills */}
                <div className="space-y-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                    Core Curriculum Competencies
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {certifications[0].skillsLearned.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Issued by Air University</span>
                <span className="font-mono text-cyan-600 dark:text-cyan-400 font-medium">Valid & Authenticated</span>
              </div>
            </motion.div>
          </div>

          {/* Languages Card (5 Cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-full p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                      <LanguagesIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Languages
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Spoken & Written Communication
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Equipped for both local team leadership and international collaboration with fluent English capabilities and native Urdu communication.
                </p>

                {/* Languages List */}
                <div className="space-y-4">
                  {languages.map((lang) => (
                    <div
                      key={lang.language}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">
                          {lang.language}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {lang.proficiency}
                        </p>
                      </div>
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-cyan-600 dark:text-cyan-400">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Ready for remote and distributed team coordination</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
