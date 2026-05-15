import { motion } from 'motion/react';
import { BookOpen, Briefcase, Code2, GraduationCap, LayoutPanelLeft, Sparkles, User, Zap, School, Building2 } from 'lucide-react';

export default function Journey() {
  const journeys = [
    { year: "2022", title: "Start HTML/CSS", subtitle: "Web Basics", icon: <Code2 size={20} strokeWidth={2.5} />, textColor: "text-sky-blue" },
    { year: "2022", title: "Styling & Layout", subtitle: "Flexbox, Grid", icon: <LayoutPanelLeft size={20} strokeWidth={2.5} />, textColor: "text-lavender" },
    { year: "2023", title: "Learn JavaScript", subtitle: "Interactivity", icon: <Zap size={20} strokeWidth={2.5} />, textColor: "text-peach" },
    { year: "2023", title: "Discover React", subtitle: "Components", icon: <Sparkles size={20} strokeWidth={2.5} />, textColor: "text-soft-pink" },
    { year: "2024", title: "Learn Accessibility", subtitle: "WCAG, A11y", icon: <User size={20} strokeWidth={2.5} />, textColor: "text-mint" },
    { year: "Now", title: "Keep Learning", subtitle: "& Improving", icon: <Briefcase size={20} strokeWidth={2.5} />, textColor: "text-primary" },
  ];

  const educations = [
    { period: "2019 - 2022", degree: "Science Major", school: "SMA Negeri 1 Ngemplak", description: "Graduated with honors. Passionate about basic algorithms and logic problem solving.", logo: <School className="text-secondary" size={24} /> },
    { period: "2022 - Present", degree: "Bachelor of Informatics", school: "Universitas Islam Indonesia", description: "Focusing on Front-End Development, Web Accessibility, and Human-Computer Interaction.", logo: <Building2 className="text-secondary" size={24} /> }
  ];

  return (
    <section id="journey" className="relative w-full max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-lavender/30 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-[25rem] h-[25rem] bg-mint/30 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[35rem] h-[35rem] bg-sky-blue/20 rounded-full blur-[120px] opacity-60"></div>
      </div>

      <div className="mb-16 text-center">
        <h2 className="text-xl font-bold bg-white/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/60 text-lavender shadow-[inset_1px_1px_3px_rgba(255,255,255,0.8)] inline-block mb-4">My Journey</h2>
        <p className="text-secondary font-medium">The path so far and the continuous learning process.</p>
      </div>

      <div className="relative max-w-5xl mx-auto pb-10">
        {/* Horizontal Line */}
        <div className="absolute top-[40%] left-0 w-full h-[2px] bg-white/50 shadow-[0_2px_4px_rgba(0,0,0,0.05)] -translate-y-1/2 rounded-full hidden md:block"></div>

        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-4 relative z-10 w-full">
          {journeys.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group relative flex-1"
            >
              {/* Desktop Connecting Line (Animated) */}
              {idx < journeys.length - 1 && (
                <div className="hidden md:block absolute top-[40%] left-[50%] w-full h-[3px] bg-gradient-to-r from-transparent via-lavender/40 to-transparent -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              )}

              {/* Year Label - Top */}
              <div className="text-xs font-bold text-primary mb-5 bg-[rgba(255,255,255,0.5)] backdrop-blur-md px-4 py-1.5 rounded-full border border-white/80 shadow-[0_4px_10px_rgba(0,0,0,0.03),inset_1px_1px_4px_rgba(255,255,255,1)] group-hover:bg-white/80 transition-all font-mono">
                {step.year}
              </div>

              {/* Node */}
              <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-[0_8px_20px_rgba(0,0,0,0.06),inset_2px_2px_8px_rgba(255,255,255,1),inset_-2px_-2px_8px_rgba(0,0,0,0.02)] border border-white backdrop-blur-xl ${
                idx === journeys.length - 1 ? 'bg-lavender/20 text-primary' : 'bg-white/40 text-primary'
              }`}>
                <div className={`${step.textColor} drop-shadow-sm`}>
                  {step.icon}
                </div>
              </div>

              {/* Details - Bottom */}
              <div className="w-full max-w-[140px] bg-white/40 backdrop-blur-xl p-4 rounded-2xl border border-white/60 shadow-[0_8px_25px_rgba(0,0,0,0.04),inset_2px_2px_5px_rgba(255,255,255,0.8)] group-hover:bg-white/60 group-hover:shadow-[0_12px_30px_rgba(139,92,246,0.1),inset_2px_2px_5px_rgba(255,255,255,1)] transition-all">
                <h4 className="font-bold text-primary text-[13px] mb-1 leading-tight">{step.title}</h4>
                <p className="text-[11px] text-secondary font-medium tracking-wide">{step.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 max-w-4xl mx-auto relative z-10">
        <h3 className="text-sm font-bold bg-white/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/60 text-navy shadow-[inset_1px_1px_3px_rgba(255,255,255,0.8)] mx-auto w-max mb-8 text-center flex items-center justify-center gap-2">
          <GraduationCap size={16} /> Education Background
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 border border-white/60 hover:bg-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_2px_2px_10px_rgba(255,255,255,0.8)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08),inset_2px_2px_10px_rgba(255,255,255,1)] transition-all flex flex-col group hover:-translate-y-1 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/70 to-transparent rounded-bl-[100px] pointer-events-none -z-10 group-hover:scale-110 transition-transform"></div>
               <div className="flex justify-between items-start mb-6 relative z-10">
                 <div className="w-12 h-12 bg-white/50 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/80 shadow-[0_4px_10px_rgba(0,0,0,0.03),inset_1px_1px_5px_rgba(255,255,255,1)] group-hover:shadow-[0_4px_15px_rgba(139,92,246,0.15)] group-hover:border-lavender/40 transition-all">
                    <div className="scale-75 opacity-70 group-hover:opacity-100 group-hover:text-lavender transition-all">
                      {edu.logo}
                    </div>
                 </div>
                 <span className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-xl text-[11px] font-bold text-secondary border border-white/80 shadow-[inset_1px_1px_3px_rgba(255,255,255,1)]">
                   {edu.period}
                 </span>
               </div>
               <div className="relative z-10">
                  <h4 className="font-bold text-primary text-base mb-1">{edu.degree}</h4>
                  <p className="text-[13px] font-bold text-sky-blue mb-4 bg-white/50 backdrop-blur-sm px-2.5 py-0.5 rounded-lg inline-block border border-white/60 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8)]">{edu.school}</p>
                  <p className="text-[13px] text-secondary leading-relaxed font-medium">{edu.description}</p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
