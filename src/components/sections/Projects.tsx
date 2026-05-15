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
      case 'Context API':
        return 'bg-[#E0F2FE]/80 text-[#3b82f6]';
      case 'HTML':
        return 'bg-[#FFEDD5]/80 text-[#f97316]';
      case 'CSS':
        return 'bg-[#D1FAE5]/80 text-[#10b981]';
      case 'JS':
        return 'bg-[#FEF9C3]/80 text-[#ca8a04]';
      case 'Figma':
      case 'A11y':
        return 'bg-[#F3E8FF]/80 text-[#8b5cf6]';
      default:
        return 'bg-[#F3E8FF]/80 text-[#8b5cf6]';
    }
  };

  return (
    <>
      <section id="projects" className="relative w-full max-w-[1500px] mx-auto px-6 py-24 overflow-hidden">
        {/* Frost Background blobs */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-0 right-1/3 w-[40rem] h-[30rem] bg-lavender/10 rounded-full blur-[100px] opacity-70"></div>
          <div className="absolute bottom-0 left-1/4 w-[30rem] h-[25rem] bg-mint/10 rounded-full blur-[100px] opacity-60"></div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-lavender  drop-shadow-sm">Featured Projects</h2>
          {/* <a href="#" className="flex items-center gap-2 text-sm font-bold text-lavender hover:text-soft-purple transition-all bg-white/40 px-5 py-2.5 rounded-full border border-white/60 backdrop-blur-md shadow-[inset_1px_1px_3px_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.02)] hover:bg-white/60 hover:-translate-y-0.5">
            View All Projects <ArrowRight size={18} strokeWidth={2.5} />
          </a> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 relative z-10">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group flex flex-col bg-white/50 backdrop-blur-xl rounded-[32px] p-5 border border-white/80 hover:bg-white/70 hover:border-white shadow-[0_8px_30px_rgba(0,0,0,0.03),inset_1px_1px_4px_rgba(255,255,255,0.8)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(139,92,246,0.1),inset_1px_1px_4px_rgba(255,255,255,1)] transition-all duration-300 overflow-hidden relative"
            >
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Thumbnail */}
              <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-6 bg-white/60 relative shadow-[inset_2px_2px_10px_rgba(0,0,0,0.03),0_4px_10px_rgba(0,0,0,0.02)] border border-white/60">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded-[24px]"
                />
              </div>

              {/* Header: Title & Score */}
              <div className="flex items-start justify-between gap-3 mb-3 relative z-10">
                <h3 className="font-bold text-primary text-[16px] leading-tight group-hover:text-lavender transition-colors drop-shadow-sm flex-1">
                  {project.title}
                </h3>
                <div className="flex-shrink-0 w-9 h-9 rounded-full border-[1.5px] border-mint bg-white/70 backdrop-blur-sm flex items-center justify-center font-bold text-primary text-[13px] shadow-[0_2px_5px_rgba(0,0,0,0.05),inset_1px_1px_2px_rgba(255,255,255,1)]">
                  {project.score}
                </div>
              </div>

              {/* Description */}
              <p className="text-[13.5px] font-medium text-secondary mb-6 leading-relaxed flex-1 relative z-10">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6 mt-auto relative z-10">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className={`px-3 py-1.5 rounded-full text-[11px] font-bold shadow-[0_2px_5px_rgba(0,0,0,0.02),inset_1px_1px_3px_rgba(255,255,255,1)] border border-white/60 backdrop-blur-md ${getTagColor(tag)}`}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer Buttons */}
              <div className="pt-4 border-t border-black/5 flex items-center justify-between relative z-10">
                <span className="flex items-center gap-1.5 text-[14px] font-bold text-lavender group-hover:text-soft-purple transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                   View Details <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto mt-20">
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
              className="relative w-full max-w-4xl bg-[#f0f3fa]/90 backdrop-blur-xl border border-white/80 rounded-[2.5rem] overflow-hidden shadow-[15px_15px_30px_rgba(0,0,0,0.1),-15px_-15px_30px_rgba(255,255,255,0.8),inset_4px_4px_10px_rgba(255,255,255,0.8),inset_-4px_-4px_10px_rgba(0,0,0,0.03)] flex flex-col md:flex-row max-h-[90vh] z-10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-11 h-11 bg-[#f0f3fa] rounded-full flex items-center justify-center text-primary shadow-[4px_4px_10px_rgba(0,0,0,0.08),-4px_-4px_10px_rgba(255,255,255,0.9),inset_2px_2px_4px_rgba(255,255,255,1),inset_-2px_-2px_4px_rgba(0,0,0,0.05)] hover:text-lavender transition-all active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,1)]"
              >
                <X size={20} strokeWidth={2.5} />
              </button>

              <div className="w-full md:w-2/5 p-4 sm:p-6 pb-0 md:pr-0 md:pb-6 flex flex-col">
                 <div className="relative w-full h-48 sm:h-56 md:h-full bg-white/30 rounded-[2rem] overflow-hidden shadow-[inset_4px_4px_10px_rgba(0,0,0,0.08),inset_-4px_-4px_10px_rgba(255,255,255,0.9)] border border-white/50 p-2">
                   <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover rounded-[1.5rem]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-[2rem]"></div>
                 </div>
              </div>
              
              <div className="w-full md:w-3/5 p-6 sm:p-8 lg:p-10 lg:pl-8 overflow-y-auto flex flex-col items-start text-left">
                 <div className="flex flex-wrap items-center gap-3 mb-6 bg-white/40 px-4 py-2.5 rounded-2xl shadow-[inset_2px_2px_6px_rgba(255,255,255,0.8),inset_-2px_-2px_6px_rgba(0,0,0,0.05)] border border-white/50">
                    <div className="flex gap-2">
                       {selectedProject.tags.map((tag, idx) => (
                         <span key={idx} className={`px-3 py-1 rounded-full text-[11px] font-bold shadow-[2px_2px_5px_rgba(0,0,0,0.05),-2px_-2px_5px_rgba(255,255,255,0.8)] ${getTagColor(tag)} bg-white/60 backdrop-blur-sm`}>
                           {tag}
                         </span>
                       ))}
                    </div>
                    <div className="w-px h-6 bg-black/10 mx-1 rounded-full"></div>
                    <div className="flex items-center gap-1.5 font-bold text-mint text-xs">
                        <Accessibility size={14} strokeWidth={2.5} /> Score {selectedProject.score}
                    </div>
                 </div>

                 <h3 className="heading text-3xl sm:text-4xl font-bold text-primary mb-4 drop-shadow-sm leading-tight">{selectedProject.title}</h3>
                 
                 <div className="bg-white/40 p-5 rounded-3xl shadow-[inset_4px_4px_10px_rgba(0,0,0,0.04),inset_-4px_-4px_10px_rgba(255,255,255,0.8)] border border-white/50 mb-6 w-full">
                   <p className="text-secondary text-sm sm:text-base font-medium leading-relaxed">
                     {selectedProject.fullDescription}
                   </p>
                 </div>

                 <div className="mb-8 w-full bg-white/40 p-5 rounded-3xl shadow-[inset_2px_2px_10px_rgba(255,255,255,0.8),inset_-2px_-2px_10px_rgba(0,0,0,0.04)] border border-white/50">
                    <h4 className="text-sm font-bold text-primary mb-4">Key Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                       {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-sm text-secondary font-medium">
                             <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-[2px_2px_5px_rgba(0,0,0,0.05),-2px_-2px_5px_rgba(255,255,255,0.8)] flex-shrink-0">
                                <Check size={12} strokeWidth={3} className="text-mint" />
                             </div>
                             <span>{feature}</span>
                          </li>
                       ))}
                    </ul>
                 </div>

                 <div className="mt-auto pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
                    <a href="#" className="flex-1 flex justify-center items-center gap-2 px-6 py-4 rounded-2xl bg-lavender text-white font-bold text-sm shadow-[6px_6px_15px_rgba(139,92,246,0.3),-4px_-4px_10px_rgba(255,255,255,0.8),inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-transform active:scale-[0.98] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.15)]">
                       <ExternalLink size={18} strokeWidth={2.5} /> Live Demo
                    </a>
                    <a href="#" className="flex-1 flex justify-center items-center gap-2 px-6 py-4 rounded-2xl bg-[#f0f3fa] text-primary font-bold text-sm shadow-[6px_6px_15px_rgba(0,0,0,0.05),-4px_-4px_10px_rgba(255,255,255,0.9),inset_2px_2px_4px_rgba(255,255,255,1),inset_-2px_-2px_4px_rgba(0,0,0,0.02)] border border-white/50 hover:scale-[1.02] transition-transform active:scale-[0.98] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,1)]">
                       <Github size={18} strokeWidth={2.5} /> Source Code
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
