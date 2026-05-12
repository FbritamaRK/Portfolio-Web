import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const skills = [
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 95, color: '#E34F26' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 90, color: '#1572B6' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 85, color: '#F7DF1E' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 85, color: '#61DAFB' },
  { name: 'TailwindCSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', level: 90, color: '#06B6D4' },
  { name: 'Accessibility', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Web_Accessibility_Icon.svg', level: 90, color: '#8B5CF6' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', level: 80, color: '#F24E1E' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 85, color: '#181717' },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
        <div>
          <h2 className="text-xl font-bold text-lavender mb-1">My Skills</h2>
          <p className="text-secondary">Technologies I work with to build great experiences.</p>
        </div>
        <a href="#" className="flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors">
          View All Skills <ArrowRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            whileHover={{ scale: 1.03, boxShadow: `0 10px 30px -10px ${skill.color}30` }}
            className="bg-white rounded-2xl p-5 border border-black/5 hover:border-black/10 transition-all group cursor-default"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#FAFAFC] rounded-xl flex items-center justify-center p-2">
                <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <span className="font-semibold text-primary">{skill.name}</span>
            </div>
            
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs text-secondary font-medium">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-lavender to-sky-blue"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
