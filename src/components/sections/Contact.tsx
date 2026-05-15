import { motion } from 'motion/react';
import { Send, MapPin, Mail, CheckCircle2, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-[1400px] mx-auto px-6 py-20 mb-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Card 1: Let's Connect + Form (spans 2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-black/5 shadow-sm flex flex-col md:flex-row gap-8">
          {/* Text Area */}
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-sm font-bold text-lavender mb-4">Let's Connect</h3>
            <h2 className="heading text-3xl font-bold text-primary mb-4 leading-tight">
              Let's build something<br/>
              amazing together! 🚀
            </h2>
            <p className="text-xs text-secondary leading-relaxed max-w-sm">
              I'm open to opportunities, collaborations, or just a friendly hello.
            </p>
          </div>
          
          {/* Form Area */}
          <div className="flex-1 flex flex-col justify-center">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 text-xs placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-lavender/50 focus:border-lavender transition-all shadow-sm"
                />
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 text-xs placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-lavender/50 focus:border-lavender transition-all shadow-sm"
                />
              </div>
              
              <textarea 
                rows={4}
                placeholder="Your Message"
                className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 text-xs placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-lavender/50 focus:border-lavender transition-all resize-none shadow-sm"
              ></textarea>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-lavender text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-soft-purple transition-colors text-sm shadow-md shadow-lavender/20"
              >
                Send Message <Send size={14} className="ml-1" />
              </motion.button>
            </form>
          </div>
        </div>

        {/* Card 2: Get in touch (spans 1 col) */}
        <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm flex flex-col justify-center">
          <h3 className="text-sm font-bold text-primary mb-6">Get in touch</h3>
          <div className="space-y-5">
            <a href="mailto:hello@febritamaraka.dev" className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center text-secondary bg-bg-secondary group-hover:bg-lavender group-hover:text-white transition-colors">
                <Mail size={14} />
              </div>
              <p className="text-xs font-semibold text-secondary group-hover:text-primary transition-colors">febriraka34@gmail.com</p>
            </a>
            <div className="flex items-center gap-3 group cursor-default">
              <div className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center text-secondary bg-bg-secondary group-hover:bg-navy group-hover:text-white transition-colors">
                <MapPin size={14} />
              </div>
              <p className="text-xs font-semibold text-secondary group-hover:text-primary transition-colors">Sleman, Daerah Istimewa Yogyakarta</p>
            </div>
            <div className="flex items-center gap-3 group cursor-default">
              <div className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center text-secondary bg-bg-secondary group-hover:bg-green group-hover:text-white transition-colors">
                <CheckCircle2 size={14} />
              </div>
              <p className="text-xs font-semibold text-secondary group-hover:text-primary transition-colors">Available for work</p>
            </div>
          </div>
        </div>

        {/* Card 3: Find me on (spans 1 col) */}
        <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm flex flex-col justify-center">
           <h3 className="text-sm font-bold text-primary mb-6">Find me on</h3>
           <div className="space-y-5">
             <a href="#" className="flex items-center justify-between group">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center text-primary bg-bg-secondary group-hover:bg-primary group-hover:text-white transition-colors">
                   <Github size={14} />
                 </div>
                 <p className="text-xs font-semibold text-secondary group-hover:text-primary transition-colors">GitHub</p>
               </div>
               <ArrowUpRight size={14} className="text-secondary opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
             </a>
             <a href="#" className="flex items-center justify-between group">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full border border-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] bg-bg-secondary group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                   <Linkedin size={14} />
                 </div>
                 <p className="text-xs font-semibold text-secondary group-hover:text-primary transition-colors">LinkedIn</p>
               </div>
               <ArrowUpRight size={14} className="text-secondary opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
             </a>
             <a href="https://www.instagram.com/rrkaaa._/" className="flex items-center justify-between group">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full border border-[#E1306C]/10 flex items-center justify-center text-[#E1306C] bg-bg-secondary group-hover:bg-gradient-to-tr group-hover:from-[#FD1D1D] group-hover:to-[#833AB4] group-hover:text-white transition-colors">
                   <Instagram size={14} />
                 </div>
                 <p className="text-xs font-semibold text-secondary group-hover:text-primary transition-colors">Instagram</p>
               </div>
               <ArrowUpRight size={14} className="text-secondary opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
             </a>
           </div>
        </div>

      </div>
    </section>
  );
}
