import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail, Accessibility, Code2, LineChart } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = [
    "Building inclusive web experiences.",
    "Crafting accessible interfaces.",
    "Clean code, modern design."
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, isDeleting]);

  const tick = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prev => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(2000); // Wait before deleting
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(100);
    } else {
      setTypingSpeed(100);
    }
  };

  return (
    <section id="home" className="w-full max-w-7xl mx-auto px-6 pt-40 pb-20 min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-6"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-navy font-medium text-sm border border-lavender/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
            </span>
            Front-End Developer & Accessibility Enthusiast
          </div>

          <h1 className="heading text-5xl sm:text-6xl lg:text-[5rem] font-bold leading-tight text-primary">
            Hi, I'm <br />
            <span className="whitespace-nowrap">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender to-soft-purple">
                Febritama
              </span> Raka <span className="inline-block animate-wave origin-[70%_70%] ml-2">👋</span>
            </span>
          </h1>

          <div className="h-8">
            <p className="text-xl sm:text-xl text-secondary font-medium font-mono">
              {text}<span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-secondary text-lg mt-2 max-w-lg leading-relaxed">
            I'm an Informatics student who loves crafting modern, accessible, and user-friendly websites. I believe great design should be usable by everyone.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a href="#projects" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-lavender text-white font-medium hover:shadow-lg hover:shadow-lavender/30 hover:-translate-y-1 transition-all active:scale-95">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-primary border border-black/10 font-medium hover:bg-bg-primary hover:-translate-y-1 transition-all active:scale-95 shadow-sm">
              Download CV
              <Download size={18} className="text-secondary group-hover:text-primary transition-colors" />
            </a>
          </div>

          <div className="flex items-center gap-5 mt-8">
            {[
              { icon: <Github size={22} />, href: "https://github.com", hoverClass: "hover:text-primary hover:border-primary hover:shadow-primary/20", label: "GitHub" },
              { icon: <Linkedin size={22} />, href: "https://linkedin.com", hoverClass: "hover:text-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[#0A66C2]/20", label: "LinkedIn" },
              { icon: <Mail size={22} />, href: "mailto:hello@febritamaraka.dev", hoverClass: "hover:text-lavender hover:border-lavender hover:shadow-lavender/20", label: "Email" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (idx * 0.1), duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative w-12 h-12 rounded-full border border-black/10 bg-white shadow-sm flex items-center justify-center text-secondary transition-colors duration-300 ${social.hoverClass}`}
              >
                <span className="relative z-10 transition-transform group-hover:scale-110 duration-300">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-lavender/20 via-sky-blue/20 to-mint/20 rounded-[4rem] blur-3xl opacity-60 mix-blend-multiply animate-pulse" style={{ animationDuration: '4s' }}></div>
          
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-md aspect-square bg-white shadow-2xl shadow-lavender/10 rounded-[3rem] p-4 flex items-center justify-center overflow-hidden border border-white/50 glass-card"
          >
            {/* The actual downloaded image or a beautiful placeholder */}
            <img 
              src="https://api.dicebear.com/9.x/micah/svg?seed=FebriRaka&backgroundColor=b6e3f4,c0aede,ffdfbf&baseColor=f9c9b6&clothing=hoodie&clothingColor=ffffff&eyes=glasses,smiling&mouth=smile" 
              alt="Febritama Raka - Character Illustration" 
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
          </motion.div>

          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-10 right-4 lg:-right-8 bg-white p-4 rounded-2xl shadow-xl shadow-black/5 border border-black/5 flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-soft-pink/20 flex items-center justify-center text-soft-pink">
              <LineChart size={20} />
            </div>
            <div>
              <div className="w-16 h-2 bg-black/5 rounded-full mb-2"></div>
              <div className="w-10 h-2 bg-black/5 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-16 left-0 lg:-left-12 bg-white px-5 py-3 rounded-xl shadow-xl shadow-black/5 border border-black/5 flex items-center gap-3 z-20"
          >
            <div className="w-8 h-8 rounded-lg bg-mint flex items-center justify-center text-white">
              <Accessibility size={16} />
            </div>
            <span className="font-semibold text-sm">100% Accessible</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-1/2 -right-4 lg:-right-12 bg-white p-3 rounded-2xl shadow-xl shadow-black/5 border border-black/5 z-20"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lavender to-soft-purple flex items-center justify-center text-white">
              <Code2 size={24} />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
