import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const skills = [
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 90, color: '#E34F26' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 90, color: '#1572B6' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 85, color: '#F7DF1E' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 85, color: '#61DAFB' },
  { name: 'TailwindCSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', level: 90, color: '#06B6D4' },
   { name: 'Accessibility', logo: 'data:image/png;base64,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', level: 90, color: '#8B5CF6' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', level: 80, color: '#F24E1E' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 85, color: '#181717' },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
        <div>
          <h2 className="text-xl font-bold text-lavender mb-1">My Skills</h2>
          <p className="text-primary font-medium border-l-4 border-sky-blue pl-3">Technologies I work with to build great experiences.</p>
        </div>
        {/* <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm font-bold text-primary hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-sky-blue active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all">
          View All Skills <ArrowRight size={18} strokeWidth={3} />
        </a> */}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="bg-white rounded-2xl p-5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all group cursor-default"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white border-2 border-black rounded-xl flex items-center justify-center p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-primary">{skill.name}</span>
            </div>
            
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs text-primary font-bold">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2.5 w-full bg-white border-2 border-black rounded-none overflow-hidden relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-blue to-navy border-r-2 border-black"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
