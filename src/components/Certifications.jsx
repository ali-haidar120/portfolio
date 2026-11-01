import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications, languages } from '../data/portfolioData';
import { 
  Award, 
  Calendar, 
  Languages as LanguagesIcon, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle, 
  Building2, 
  ExternalLink,
  Eye,
  X,
  Download,
  FileCheck2,
  BadgeCheck,
  Maximize2
} from 'lucide-react';

export default function Certifications() {
  const [activeCertModal, setActiveCertModal] = useState(null);
  const cert = certifications[0];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveCertModal(null);
    };
    if (activeCertModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCertModal]);

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
          
          {/* Certification Card (7 Cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-full p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 shadow-sm hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
                    <span>Verified Credential</span>
                    <span className="text-slate-300 dark:text-slate-700">|</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">Sr. No: {cert.serialNo}</span>
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Title & Organization Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-indigo-500 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 block mb-0.5">
                      {cert.award}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                      <Building2 className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>{cert.issuer}, {cert.institution}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Certificate Preview Card */}
                <div 
                  onClick={() => setActiveCertModal(cert)}
                  className="group relative cursor-pointer mb-6 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-md"
                >
                  <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt="Certificate of Participation - Full Stack Development" 
                      className="w-full h-full object-cover object-top filter brightness-[0.97] dark:brightness-90 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end justify-between p-4">
                      <div className="text-white">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-300">
                          <BadgeCheck className="w-4 h-4 text-cyan-400" />
                          <span>Air University CPD Certificate</span>
                        </div>
                        <p className="text-xs text-slate-300">Awarded to {cert.recipient}</p>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-xs shadow-lg group-hover:bg-cyan-400 transition-colors">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Document</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core Competencies */}
                <div className="space-y-2.5">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                    Core Curriculum Competencies
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cert.skillsLearned.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Footer Info */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>Authorized: {cert.signatoryRole}</span>
                </div>
                <button
                  onClick={() => setActiveCertModal(cert)}
                  className="font-mono text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Certificate</span>
                </button>
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
              className="h-full p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 shadow-sm hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all duration-300 flex flex-col justify-between"
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
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-between hover:border-cyan-500/30 transition-colors"
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

      {/* Certificate Modal / Lightbox */}
      <AnimatePresence>
        {activeCertModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCertModal(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-950/50">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                      {activeCertModal.workshopTitle}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {activeCertModal.institution} • Sr. No: {activeCertModal.serialNo}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activeCertModal.image}
                    download="Ali-Haidar-FullStack-Certificate.jpg"
                    className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    title="Download Certificate"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                  <a
                    href={activeCertModal.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    title="Open Full Image"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => setActiveCertModal(null)}
                    className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Certificate Image Body */}
              <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-slate-100/50 dark:bg-slate-950/60">
                <img
                  src={activeCertModal.image}
                  alt={activeCertModal.title}
                  className="max-h-[68vh] w-auto max-w-full rounded-xl shadow-lg border border-slate-200/80 dark:border-slate-800 object-contain"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50 flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
                <span>Awarded to <strong>{activeCertModal.recipient}</strong> ({activeCertModal.date})</span>
                <span className="font-mono text-cyan-600 dark:text-cyan-400">Signed by {activeCertModal.signatoryRole}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
