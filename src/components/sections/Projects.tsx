import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ExternalLink, Github, X, Check, Accessibility } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const projects = [
    {
      title: "Accessibility Checker Dashboard",
      description: "Web app to analyze and improve website accessibility.",
      fullDescription: "A comprehensive dashboard that analyzes websites for WCAG compliance. It provides actionable feedback, contrast ratio analysis, and semantic structure checking to ensure web apps are usable by everyone.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "TailwindCSS", "A11y"],
      score: 98,
      features: ["Real-time contrast checking", "ARIA roles auditing", "Exportable reports", "Interactive charts with Recharts"]
    },
    {
      title: "Responsive Landing Page",
      description: "Modern & responsive landing page for digital agency.",
      fullDescription: "A high-converting, lightning-fast landing page built entirely without heavy frameworks. It utilizes clean modern CSS layout techniques including Grid and Flexbox, paired with vanilla JS for smooth interactions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tags: ["HTML", "CSS", "JS"],
      score: 96,
      features: ["0 Lighthouse layout shift (CLS)", "Performance optimized", "Custom smooth scrolling", "Minimal dependencies"]
    },
    {
      title: "UI Redesign Project",
      description: "Redesigning a banking website with accessibility in mind.",
      fullDescription: "A complete overhaul of a legacy banking application interface. The primary goal was to enhance usability for elderly users and those with visual impairments by using WCAG AAA compliant colors and scalable typography.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
      tags: ["Figma", "A11y"],
      score: 93,
      features: ["Design system creation", "Component-based architecture", "High-contrast theme", "Focus-state redesign"]
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website to showcase my work.",
      fullDescription: "This exact website! A modern portfolio with a pastel futuristic aesthetic. Designed to be lightweight, fully responsive, and highly accessible, showcasing my journey and capabilities as a front-end developer.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "TailwindCSS"],
      score: 100,
      features: ["Framer Motion animations", "Fully responsive layout", "Semantic HTML5", "Custom SVG illustrations"]
    },
    {
      title: "Dark Mode Web App",
      description: "Task management app with dark mode & great UX.",
      fullDescription: "A minimalist daily task management application with a built-in dark mode toggle. It uses React's Context API to manage the global theme state without prop drilling, ensuring a seamless user experience.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Context API"],
      score: 95,
      features: ["Global state management", "Local storage persistence", "Drag and drop reordering", "Keyboard shortcuts"]
    },
  ];

  const getTagColor = (tag: string) => {
    switch(tag) {
      case 'React':
      case 'TailwindCSS':
        return 'bg-sky-blue/10 text-sky-blue';
      case 'HTML':
        return 'bg-peach/10 text-peach';
      case 'CSS':
        return 'bg-mint/10 text-mint';
      case 'JS':
        return 'bg-[#F7DF1E]/20 text-[#B8A514]';
      case 'Context API':
        return 'bg-sky-blue/10 text-sky-blue';
      default:
        return 'bg-soft-purple/10 text-soft-purple';
    }
  };

  return (
    <>
      <section id="projects" className="w-full max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-lavender">Featured Projects</h2>
          <a href="#" className="flex items-center gap-1 text-sm font-semibold text-lavender hover:text-soft-purple transition-colors">
            View All Projects <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group flex flex-col bg-white rounded-3xl p-5 border border-black/5 hover:border-lavender/30 hover:shadow-xl hover:shadow-lavender/10 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-bg-secondary relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Header: Title & Score */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-bold text-primary text-sm leading-tight group-hover:text-lavender transition-colors">
                  {project.title}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-mint flex items-center justify-center font-bold text-primary text-xs">
                  {project.score}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-secondary mb-4 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${getTagColor(tag)}`}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer Buttons */}
              <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-bold text-lavender group-hover:text-soft-purple transition-colors">
                   View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-primary/20 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] z-10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-bg-primary hover:text-lavender transition-colors shadow-sm"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-bg-secondary hidden sm:block">
                 <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="w-full md:w-3/5 p-8 sm:p-10 lg:p-12 overflow-y-auto flex flex-col">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="flex gap-2">
                       {selectedProject.tags.map((tag, idx) => (
                         <span key={idx} className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${getTagColor(tag)}`}>
                           {tag}
                         </span>
                       ))}
                    </div>
                    <div className="ml-auto w-auto px-3 py-1 bg-mint/10 border border-mint/20 rounded-full flex items-center gap-1.5 font-bold text-mint text-xs">
                        <Accessibility size={12} /> Score {selectedProject.score}
                    </div>
                 </div>

                 <h3 className="heading text-2xl sm:text-3xl font-bold text-primary mb-4">{selectedProject.title}</h3>
                 
                 <p className="text-secondary text-sm sm:text-base leading-relaxed mb-8">
                   {selectedProject.fullDescription}
                 </p>

                 <div className="mb-8">
                    <h4 className="text-sm border-b border-black/5 pb-2 font-bold text-primary mb-4">Key Features</h4>
                    <ul className="space-y-3">
                       {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-secondary">
                             <Check size={16} className="text-mint mt-0.5 flex-shrink-0" />
                             <span>{feature}</span>
                          </li>
                       ))}
                    </ul>
                 </div>

                 <div className="mt-auto pt-6 flex items-center gap-4 border-t border-black/5">
                    <a href="#" className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-lavender text-white font-semibold hover:bg-soft-purple hover:shadow-lg hover:shadow-lavender/20 transition-all">
                       <ExternalLink size={18} /> Live Demo
                    </a>
                    <a href="#" className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-6 py-3 rounded-xl border border-black/10 text-primary font-semibold hover:bg-bg-primary transition-all">
                       <Github size={18} /> Source Code
                    </a>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
