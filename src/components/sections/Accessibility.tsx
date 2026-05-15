import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight, Keyboard, Settings2, ShieldCheck, Speaker } from 'lucide-react';

export default function Accessibility() {
  return (
    <section id="accessibility" className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="heading text-3xl md:text-4xl font-bold text-primary mb-2">Accessibility Focus</h2>
          <p className="text-secondary text-lg">Designing inclusive digital experiences from the ground up.</p>
        </div>
        <a href="#" className="flex items-center gap-2 text-sm font-semibold text-mint hover:text-sky-blue transition-colors">
          Learn More About A11y <ArrowRight size={16} />
        </a>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
        
        {/* WCAG Card (1x1) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col group cursor-default"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-sky-blue border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-white">
              <ShieldCheck size={20} className="text-primary" strokeWidth={2.5} />
            </div>
            <h3 className="font-bold text-primary">WCAG 2.1</h3>
          </div>
          <ul className="space-y-3 flex-1 mt-2">
            {['Perceivable', 'Operable', 'Understandable', 'Robust'].map((principle, i) => (
              <li key={i} className="flex items-center justify-between text-sm font-bold text-primary">
                {principle}
                <CheckCircle2 size={18} strokeWidth={2.5} className="text-mint" />
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contrast Checker Card (1x1) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col group cursor-default"
        >
          <h3 className="font-bold text-primary mb-1">Contrast Ratio</h3>
          <p className="text-xs font-bold font-mono bg-peach border-2 border-black px-2 py-0.5 rounded-md inline-block w-max mb-6">WCAG AAA Level</p>
          
          <div className="flex items-end justify-between flex-1 pb-4">
            <div className="w-16 h-16 rounded-xl bg-primary border-2 border-black flex items-center justify-center text-white text-xl font-bold shadow-[4px_4px_0px_0px_rgba(139,92,246,1)]">
              Aa
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary heading">14.1</div>
              <div className="text-xs font-bold px-2 py-1 bg-mint border-2 border-black rounded mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">SUPERB</div>
            </div>
          </div>
        </motion.div>

        {/* Accessibility Score Card (2x1) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 lg:col-span-2 bg-white rounded-2xl p-6 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-8 group cursor-default"
        >
          {/* Circular Chart Placeholder */}
          <div className="relative w-32 h-32 flex-shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#000" strokeWidth="8" />
              <motion.circle 
                initial={{ strokeDashoffset: 251.2 }}
                whileInView={{ strokeDashoffset: 10 }} // approx 96%
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                cx="50" cy="50" r="40" fill="transparent" stroke="var(--color-mint)" strokeWidth="8" 
                strokeDasharray="251.2"
                strokeLinecap="square"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold heading text-primary">96</span>
              <span className="text-[10px] font-bold border-t-2 border-black pt-1 mt-1 block">/ 100</span>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-primary mb-2 text-lg">Overall Accessibility Score</h3>
            <p className="text-sm font-medium border-l-4 border-black pl-3 mb-4 leading-relaxed">
              Consistently achieving high lighthouse accessibility scores across all major projects.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded border-2 border-black bg-mint shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-primary text-xs font-bold">ARIA Roles</span>
              <span className="px-3 py-1 rounded border-2 border-black bg-sky-blue shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-primary text-xs font-bold">Semantic HTML</span>
            </div>
          </div>
        </motion.div>

        {/* Keyboard Navigation (2x1) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 lg:col-span-2 bg-white rounded-2xl p-6 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between group cursor-default"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-peach border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
              <Keyboard size={20} className="text-primary" strokeWidth={2.5} />
            </div>
            <h3 className="font-bold text-primary">Keyboard Navigation</h3>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 flex-1">
            <p className="text-sm font-medium border-l-4 border-black pl-3 leading-relaxed max-w-xs">
              Every interactive element is fully navigable without a mouse, ensuring a logical focus order and visible focus states.
            </p>
            
            <div className="flex items-center gap-2 border-2 border-black p-3 rounded-xl bg-lavender shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-lg flex items-center justify-center font-bold text-primary">Tab</div>
              <ChevronRight size={20} strokeWidth={3} className="text-primary" />
              <div className="w-12 h-12 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-lg flex items-center justify-center font-bold text-primary">Enter</div>
              <ChevronRight size={20} strokeWidth={3} className="text-primary" />
              <div className="w-12 h-12 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-lg flex items-center justify-center font-bold text-primary">Esc</div>
            </div>
          </div>
        </motion.div>

        {/* Screen Reader (1x1) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-6 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col group cursor-default"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-mint flex items-center justify-center text-primary">
              <Speaker size={20} strokeWidth={2.5} />
            </div>
            <h3 className="font-bold text-primary">Screen Reader</h3>
          </div>
          <p className="text-sm font-medium border-l-4 border-black pl-3 mt-2 mb-4 leading-relaxed">
            Optimized for VoiceOver, NVDA, and JAWS with proper semantic markup.
          </p>
          <div className="mt-auto flex items-center justify-center">
            <div className="w-full h-12 rounded-xl bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2">
               <div className="w-3 h-3 rounded-full border-2 border-black bg-peach animate-pulse"></div>
               <div className="w-3 h-3 rounded-full border-2 border-black bg-peach animate-pulse" style={{ animationDelay: '0.2s' }}></div>
               <div className="w-3 h-3 rounded-full border-2 border-black bg-peach animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </motion.div>

        {/* Highlight Card (1x1) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-lavender rounded-2xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 text-primary hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between cursor-default"
        >
          <div>
            <Settings2 size={28} strokeWidth={2.5} className="mb-4" />
            <h3 className="heading text-2xl font-bold mb-2">Inclusive by Design</h3>
          </div>
          <div className="bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-primary text-sm font-bold leading-relaxed">
              Building digital products that everyone can access and enjoy.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
