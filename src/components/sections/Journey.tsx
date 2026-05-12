import { motion } from 'motion/react';
import { BookOpen, Briefcase, Code2, GraduationCap, LayoutPanelLeft, Sparkles, User, Zap, School, Building2 } from 'lucide-react';

export default function Journey() {
  const journeys = [
    { year: "2022", title: "Start HTML/CSS", subtitle: "Web Basics", icon: <Code2 size={16} />, color: "bg-sky-blue/20 text-sky-blue" },
    { year: "2022", title: "Styling & Layout", subtitle: "Flexbox, Grid", icon: <LayoutPanelLeft size={16} />, color: "bg-lavender/20 text-lavender" },
    { year: "2023", title: "Learn JavaScript", subtitle: "Interactivity", icon: <Zap size={16} />, color: "bg-peach/20 text-peach" },
    { year: "2023", title: "Discover React", subtitle: "Components", icon: <Sparkles size={16} />, color: "bg-soft-pink/20 text-soft-pink" },
    { year: "2024", title: "Learn Accessibility", subtitle: "WCAG, A11y", icon: <User size={16} />, color: "bg-mint/20 text-mint" },
    { year: "Now", title: "Keep Learning", subtitle: "& Improving", icon: <Briefcase size={16} />, color: "bg-primary text-white" },
  ];

  const educations = [
    { period: "2019 - 2022", degree: "Science Major", school: "SMA Negeri 1", description: "Graduated with honors. Passionate about basic algorithms and logic problem solving.", logo: <School className="text-secondary" size={24} /> },
    { period: "2022 - Present", degree: "Bachelor of Informatics", school: "University of Technology", description: "Focusing on Front-End Development, Web Accessibility, and Human-Computer Interaction.", logo: <Building2 className="text-secondary" size={24} /> }
  ];

  return (
    <section id="journey" className="w-full max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      <div className="mb-16 text-center">
        <h2 className="text-xl font-bold text-soft-purple mb-2">My Journey</h2>
        <p className="text-secondary">The path so far and the continuous learning process.</p>
      </div>

      <div className="relative max-w-5xl mx-auto pb-10">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black/5 -translate-y-1/2 rounded-full hidden md:block"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative z-10">
          {journeys.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group relative w-full md:w-auto"
            >
              {/* Desktop Connecting Line (Animated) */}
              {idx < journeys.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-[50%] w-full h-[2px] bg-gradient-to-r from-transparent via-lavender/50 to-transparent -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              )}

              {/* Year Label - Top */}
              <div className="text-xs font-bold text-secondary mb-4 bg-bg-secondary px-3 py-1 rounded-full border border-black/5 group-hover:border-lavender/30 transition-colors">
                {step.year}
              </div>

              {/* Node */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-sm border border-white ${step.color}`}>
                {step.icon}
              </div>

              {/* Details - Bottom */}
              <div className="w-28">
                <h4 className="font-semibold text-primary text-sm mb-1">{step.title}</h4>
                <p className="text-[11px] text-secondary font-medium tracking-wide">{step.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <h3 className="text-sm font-bold text-lavender mb-6 text-center flex items-center justify-center gap-2">
          <GraduationCap size={16} /> Education Background
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {educations.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-5 border border-black/5 hover:border-lavender/30 transition-all flex flex-col shadow-sm group hover:shadow-md"
            >
               <div className="flex justify-between items-start mb-4">
                 <div className="w-10 h-10 bg-bg-secondary rounded-xl flex items-center justify-center border border-black/5 group-hover:bg-lavender/5 group-hover:border-lavender/20 transition-colors">
                    <div className="scale-75 opacity-70 group-hover:opacity-100 group-hover:text-lavender transition-all">
                      {edu.logo}
                    </div>
                 </div>
                 <span className="px-2.5 py-1 bg-bg-primary rounded-lg text-[10px] font-bold text-secondary border border-black/5">
                   {edu.period}
                 </span>
               </div>
               <div>
                  <h4 className="font-bold text-primary text-sm mb-1">{edu.degree}</h4>
                  <p className="text-[11px] font-bold text-soft-purple mb-2.5">{edu.school}</p>
                  <p className="text-[11px] text-secondary leading-relaxed">{edu.description}</p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
