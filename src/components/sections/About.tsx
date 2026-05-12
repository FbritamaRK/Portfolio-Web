import { motion } from 'motion/react';
import { ArrowRight, Code, Eye, MonitorSmartphone, Zap, Quote } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <MonitorSmartphone className="text-sky-blue" size={24} />,
      title: "Front-End Development",
      description: "Building responsive and modern web interfaces using React and Tailwind.",
      bgColor: "bg-sky-blue/10",
    },
    {
      icon: <Eye className="text-mint" size={24} />,
      title: "Web Accessibility Analysis",
      description: "Auditing and improving accessibility for everyone to use seamlessly.",
      bgColor: "bg-mint/10",
    },
    {
      icon: <Code className="text-lavender" size={24} />,
      title: "UI/UX & Design",
      description: "Translating beautiful designs into pixel-perfect and intuitive code.",
      bgColor: "bg-lavender/10",
    },
    {
      icon: <Zap className="text-peach" size={24} />,
      title: "Performance Optimization",
      description: "Making websites faster, lighter, and better for all devices.",
      bgColor: "bg-peach/10",
    }
  ];

  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 py-16">
      <div className="glass-card p-6 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left - Storytelling */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-soft-purple/10 text-soft-purple font-medium text-sm mb-2">
              About Me
            </div>
            
            <h2 className="heading text-3xl sm:text-4xl font-bold leading-tight">
              Curious mind. <br/>Clean code. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-sky-blue">Inclusive design.</span>
            </h2>
            
            <p className="text-secondary leading-relaxed text-base">
              I'm passionate about Front-End Development and Web Accessibility. I believe great websites are not just beautiful, but also accessible for everyone regardless of their abilities. I enjoy turning complex ideas into meaningful digital experiences.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-6 p-5 rounded-[1.5rem] border border-white/60 bg-white/40 backdrop-blur-md shadow-sm transition-colors relative overflow-hidden group cursor-default"
            >
              <Quote className="absolute top-4 right-4 text-white group-hover:text-lavender/10 transition-colors" size={48} strokeWidth={1} />
              <p className="italic text-sm text-primary font-medium relative z-10 leading-relaxed pr-8">
                "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect."
              </p>
              <div className="flex items-center gap-2 mt-4 relative z-10">
                 <div className="w-5 h-px bg-lavender/50" />
                 <p className="text-[10px] font-bold text-lavender tracking-wider uppercase">Tim Berners-Lee</p>
              </div>
            </motion.div>
          </div>

          {/* Center - Mini Avatar */}
          <div className="lg:col-span-2 flex justify-center lg:justify-center">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="w-40 h-40 rounded-full border-4 border-white shadow-xl shadow-black/5 overflow-hidden bg-bg-tertiary flex items-center justify-center relative"
            >
              <img 
                src="https://api.dicebear.com/9.x/micah/svg?seed=FebriRaka2&backgroundColor=eef2ff&baseColor=f9c9b6&clothing=hoodie&clothingColor=ffffff&eyes=glasses,smiling" 
                alt="Avatar" 
                className="w-full h-full object-cover scale-110 mt-4"
              />
              <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none"></div>
            </motion.div>
          </div>

          {/* Right - Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-5 rounded-[1.5rem] border border-white hover:shadow-xl hover:shadow-lavender/5 transition-all text-left"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${feature.bgColor}`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-primary text-sm mb-1.5">{feature.title}</h3>
                <p className="text-secondary text-xs leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
