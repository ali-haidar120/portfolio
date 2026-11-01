import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Sparkles, 
  Award, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';

export default function Education() {
  const edu = education[0];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3 mb-4" />
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Building strong theoretical, algorithmic, and software engineering foundations at International Islamic University Islamabad.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all duration-300 relative overflow-hidden"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500" />

            <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-base font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-col sm:items-end gap-1.5">
                <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                  {edu.period}
                </span>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-500/20">
                  {edu.status}
                </span>
              </div>
            </div>

            {/* Academic Standing Banner */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-center justify-between flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Cumulative Grade Point Average
                  </span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">
                    CGPA: {edu.cgpa}
                  </span>
                </div>
              </div>

              <div className="text-xs font-mono text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                Department of Computer Science
              </div>
            </div>

            {/* Coursework & Competency Highlights */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Core Academic Modules & Subjects</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {edu.focus.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
