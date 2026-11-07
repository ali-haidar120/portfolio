import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, personalInfo } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { 
  FolderGit2, 
  ExternalLink, 
  Calendar, 
  CheckCircle, 
  Sparkles, 
  Code2, 
  Layers, 
  Database,
  Terminal,
  Eye
} from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Custom visual icon / header decorator per project
  const getProjectVisual = (projectId) => {
    switch (projectId) {
      case 'lms':
        return (
          <div className="h-44 sm:h-48 w-full bg-gradient-to-br from-slate-900 via-cyan-950/50 to-slate-900 p-4 rounded-xl border border-cyan-500/20 relative overflow-hidden flex flex-col justify-between group-hover:border-cyan-500/50 transition-all">
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-[10px] text-cyan-300">django-lms-portal/views.py</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                Django RBAC
              </span>
            </div>
            
            <div className="font-mono text-[11px] text-slate-300 space-y-1.5 opacity-90">
              <p className="text-cyan-400">@login_required</p>
              <p><span className="text-purple-400">def</span> <span className="text-blue-300">submit_assignment</span>(request, course_id):</p>
              <p className="pl-4 text-slate-400"># Verify student enrollment & deadline</p>
              <p className="pl-4"><span className="text-indigo-300">if</span> request.user.role == <span className="text-emerald-300">'STUDENT'</span>:</p>
              <p className="pl-8 text-amber-300">Assignment.objects.create(...)</p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-cyan-500/10 text-[10px] text-slate-400">
              <span>Authentication • Submissions • Gradebook</span>
              <span className="text-cyan-400">Full-Stack MVT</span>
            </div>
          </div>
        );

      case 'library':
        return (
          <div className="h-44 sm:h-48 w-full bg-gradient-to-br from-slate-900 via-indigo-950/50 to-slate-900 p-4 rounded-xl border border-indigo-500/20 relative overflow-hidden flex flex-col justify-between group-hover:border-indigo-500/50 transition-all">
            <div className="flex items-center justify-between border-b border-indigo-500/20 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-[10px] text-indigo-300">LibrarySystem.cpp</span>
              </div>
              <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/30">
                C++ / OOP
              </span>
            </div>
            
            <div className="font-mono text-[11px] text-slate-300 space-y-1.5 opacity-90">
              <p><span className="text-purple-400">class</span> <span className="text-blue-300">BookCirculation</span> : <span className="text-purple-400">public</span> <span className="text-yellow-300">LibraryRecord</span> {'{'}</p>
              <p className="pl-4"><span className="text-purple-400">virtual void</span> <span className="text-blue-300">issueBook</span>(int patronId);</p>
              <p className="pl-4"><span className="text-purple-400">virtual void</span> <span className="text-blue-300">calculateFines</span>(int daysOverdue);</p>
              <p>{'};'}</p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-indigo-500/10 text-[10px] text-slate-400">
              <span>Encapsulation • Polymorphism • File I/O</span>
              <span className="text-indigo-400">Systems Engine</span>
            </div>
          </div>
        );

      case 'inventory':
        return (
          <div className="h-44 sm:h-48 w-full bg-gradient-to-br from-slate-900 via-emerald-950/50 to-slate-900 p-4 rounded-xl border border-emerald-500/20 relative overflow-hidden flex flex-col justify-between group-hover:border-emerald-500/50 transition-all">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-[10px] text-emerald-300">inventory_schema.sql</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                Relational DB
              </span>
            </div>
            
            <div className="font-mono text-[11px] text-slate-300 space-y-1.5 opacity-90">
              <p className="text-indigo-300">SELECT p.product_name, s.supplier_name, o.stock</p>
              <p className="text-purple-300">FROM products p</p>
              <p className="text-blue-300">JOIN suppliers s ON p.supplier_id = s.id</p>
              <p className="text-emerald-300">WHERE p.stock_level &lt; p.reorder_threshold;</p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-emerald-500/10 text-[10px] text-slate-400">
              <span>3NF Normalization • Automated Queries</span>
              <span className="text-emerald-400">MS Access & SQL</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Software</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic & Development Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3 mb-4" />
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A showcase of hands-on software systems demonstrating full-stack architecture, object-oriented programming, and relational database design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 shadow-sm hover:shadow-glow-cyan transition-all duration-300 overflow-hidden"
            >
              
              {/* Card Visual Header */}
              <div className="p-4 bg-slate-100/50 dark:bg-slate-950/60 border-b border-slate-100 dark:border-slate-800">
                {getProjectVisual(project.id)}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      {project.badge}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Highlights tags */}
                <div className="space-y-1.5 pt-2">
                  {project.highlights.slice(0, 2).map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-400">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-950 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={project.isPlaceholderLink ? "View GitHub profile" : `View ${project.title} on GitHub`}
                    className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500 text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Deep-dive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}
