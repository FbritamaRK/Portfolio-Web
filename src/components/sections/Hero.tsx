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
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary font-bold text-sm border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-mint border border-black"></span>
            </span>
            Front-End Developer & Accessibility Enthusiast
          </div>

          <h1 className="heading text-5xl sm:text-6xl lg:text-[5rem] font-bold leading-tight text-primary">
            Hi, I'm <br />
            <span className="whitespace-nowrap">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-sky-blue">
                Febritama Raka
              </span><span className="inline-block animate-wave origin-[70%_70%] ml-2">👋</span>
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
            <a href="#projects" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-lavender text-white font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-[2px] active:translate-x-[2px] active:shadow-none">
              View My Work
              <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-peach text-primary font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-[2px] active:translate-x-[2px] active:shadow-none">
              Download CV
              <Download size={20} strokeWidth={3} className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-5 mt-8">
            {[
              { icon: <Github size={22} strokeWidth={2.5} />, href: "https://github.com", label: "GitHub" },
              { icon: <Linkedin size={22} strokeWidth={2.5} />, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: <Mail size={22} strokeWidth={2.5} />, href: "mailto:hello@febritamaraka.dev", label: "Email" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (idx * 0.1), duration: 0.5 }}
                className="group relative w-12 h-12 rounded-full border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-none hover:bg-mint"
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
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-2xl flex items-center justify-center mix-blend-multiply mb-15 ml-10"
            >
              <img 
                src="/src/img/3.png" 
                alt="Febritama Raka - Character Illustration" 
                className="w-[800px] md:w-[900px] lg:w-[1000px] h-auto object-contain select-none pointer-events-none"
              />
          </motion.div>
   

          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-10 right-4 lg:-right-8 bg-peach p-4 rounded-2xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center text-primary">
              <LineChart size={20} className="text-primary" strokeWidth={2.5} />
            </div>
            <div>
              <div className="w-16 h-2 bg-black rounded-none mb-2"></div>
              <div className="w-10 h-2 bg-black rounded-none"></div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-16 left-0 lg:-left-12 bg-mint px-5 py-3 rounded-xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 z-20 mb-15"
          >
            <div className="w-8 h-8 rounded-lg border-2 border-black bg-white flex items-center justify-center text-primary">
              <Accessibility size={16} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-sm text-primary">100% Accessible</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-1/2 -right-4 lg:-right-12 bg-sky-blue p-3 rounded-2xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-20"
          >
            <div className="w-12 h-12 rounded-xl border-2 border-black bg-white flex items-center justify-center text-primary">
              <Code2 size={24} strokeWidth={2.5} />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
