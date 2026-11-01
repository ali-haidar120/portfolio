import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { 
  Code2, 
  Terminal, 
  Braces, 
  Database, 
  FileCode, 
  Palette, 
  Layers, 
  Globe, 
  Layout, 
  Server, 
  HardDrive, 
  GitBranch, 
  Laptop, 
  UploadCloud, 
  Cloud, 
  FileSpreadsheet, 
  Cpu, 
  Box, 
  Network, 
  Users,
  Sparkles,
  Search
} from 'lucide-react';
import { Github } from './Icons';

const iconMap = {
  Code2,
  Terminal,
  Braces,
  Database,
  FileCode,
  Palette,
  Layers,
  Globe,
  Layout,
  Server,
  HardDrive,
  GitBranch,
  Github,
  Laptop,
  UploadCloud,
  Cloud,
  FileSpreadsheet,
  Cpu,
  Box,
  Network,
  Users
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'web', label: 'Web Development' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'tools', label: 'Tools & DevOps' },
    { id: 'competencies', label: 'Competencies' }
  ];

  // Filter skills based on category and search query
  const filteredCategories = skillsData.categories
    .filter(cat => activeCategory === 'all' || cat.id === activeCategory)
    .map(cat => ({
      ...cat,
      skills: cat.skills.filter(skill =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.focus.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/40 border-y border-slate-200/60 dark:border-slate-850">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Expertise & Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3 mb-4" />
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Practical development tools, programming languages, and engineering concepts honed through university studies and hands-on projects.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-xl bg-slate-200/70 dark:bg-slate-900/80 border border-slate-300/70 dark:border-slate-800 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by skill or tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 text-slate-900 dark:text-white placeholder:text-slate-400"
            />
          </div>

        </div>

        {/* Categorized Grids */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 shadow-sm hover:shadow-glow-cyan transition-all group"
                    >
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-cyan-500/10 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="font-semibold text-slate-900 dark:text-white text-sm">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal pl-0.5">
                        {skill.focus}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="py-12 text-center text-slate-500 dark:text-slate-400">
              No skills found matching "{searchQuery}". Try a different keyword.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
