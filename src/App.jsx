import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-cyan-500/30 selection:text-cyan-300">
        
        {/* Subtle grid background mesh overlay */}
        <div className="fixed inset-0 bg-grid-mesh pointer-events-none opacity-60 dark:opacity-40 -z-10" />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10 flex flex-col">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Back To Top Floating Action */}
        <BackToTop />

      </div>
    </ThemeProvider>
  );
}
