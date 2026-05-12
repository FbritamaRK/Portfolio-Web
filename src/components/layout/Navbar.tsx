import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'accessibility', 'journey', 'contact'];
      // Use an offset to highlight early before the section fully hits the top
      const scrollPosition = window.scrollY + 300; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Accessibility', 'Journey', 'Contact'];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}
    >
      <div className={`flex items-center justify-between w-full max-w-7xl px-6 transition-all duration-300 glass ${scrolled ? 'py-3 rounded-[1.5rem] shadow-lg shadow-lavender/5' : 'py-4 rounded-[2rem]'}`}>
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-lavender to-soft-purple flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform">
            {'</>'}
          </div>
          <span className="heading font-bold text-xl tracking-tight group-hover:text-lavender transition-colors">Febritama Raka</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 relative">
          {navLinks.map((link) => {
            const id = link.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a 
                key={id} 
                href={`#${id}`} 
                className={`text-sm font-medium relative transition-colors ${isActive ? 'text-lavender' : 'text-secondary hover:text-primary'}`}
              >
                {link}
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-2.5 left-0 right-0 h-0.5 bg-lavender rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors text-secondary hover:text-primary"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Moon size={20} strokeWidth={2} /> : <Sun size={20} strokeWidth={2} />}
          </button>
          <a 
            href="#contact"
            className="hidden sm:flex items-center justify-center px-6 py-2.5 rounded-full bg-lavender text-white font-medium text-sm hover:shadow-lg hover:-translate-y-0.5 hover:shadow-lavender/30 transition-all active:scale-95"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </motion.header>
  );
}
