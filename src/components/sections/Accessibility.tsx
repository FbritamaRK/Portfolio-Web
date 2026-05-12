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
          whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.15)", borderColor: "rgba(139, 92, 246, 0.3)" }}
          viewport={{ once: true }}
          className="bg-white rounded-[24px] p-6 border border-black/5 transition-colors flex flex-col group cursor-default"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-lavender/10 flex items-center justify-center text-lavender">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-bold text-primary">WCAG 2.1</h3>
          </div>
          <ul className="space-y-3 flex-1 mt-2">
            {['Perceivable', 'Operable', 'Understandable', 'Robust'].map((principle, i) => (
              <li key={i} className="flex items-center justify-between text-sm text-secondary">
                {principle}
                <CheckCircle2 size={16} className="text-mint" />
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contrast Checker Card (1x1) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.15)", borderColor: "rgba(139, 92, 246, 0.3)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[24px] p-6 border border-black/5 transition-colors flex flex-col group cursor-default"
        >
          <h3 className="font-bold text-primary mb-1">Contrast Ratio</h3>
          <p className="text-xs text-secondary mb-6">WCAG AAA Level</p>
          
          <div className="flex items-end justify-between flex-1 pb-4">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
              Aa
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary heading">14.1</div>
              <div className="text-xs font-semibold text-mint mt-1">SUPERB</div>
            </div>
          </div>
        </motion.div>

        {/* Accessibility Score Card (2x1) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.15)", borderColor: "rgba(139, 92, 246, 0.3)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 lg:col-span-2 bg-white rounded-[24px] p-6 border border-black/5 transition-colors flex items-center gap-8 group cursor-default"
        >
          {/* Circular Chart Placeholder */}
          <div className="relative w-32 h-32 flex-shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f3f4f6" strokeWidth="8" />
              <motion.circle 
                initial={{ strokeDashoffset: 251.2 }}
                whileInView={{ strokeDashoffset: 10 }} // approx 96%
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                cx="50" cy="50" r="40" fill="transparent" stroke="var(--color-mint)" strokeWidth="8" 
                strokeDasharray="251.2"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold heading text-primary">96</span>
              <span className="text-[10px] text-secondary font-medium">/ 100</span>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-primary mb-2 text-lg">Overall Accessibility Score</h3>
            <p className="text-sm text-secondary mb-4 leading-relaxed">
              Consistently achieving high lighthouse accessibility scores across all major projects.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 rounded-md bg-mint/10 text-mint text-xs font-semibold">ARIA Roles</span>
              <span className="px-2 py-1 rounded-md bg-sky-blue/10 text-sky-blue text-xs font-semibold">Semantic HTML</span>
            </div>
          </div>
        </motion.div>

        {/* Keyboard Navigation (2x1) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.15)", borderColor: "rgba(139, 92, 246, 0.3)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 lg:col-span-2 bg-white rounded-[24px] p-6 border border-black/5 transition-colors flex flex-col justify-between group cursor-default"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-soft-purple/10 flex items-center justify-center text-soft-purple">
              <Keyboard size={20} />
            </div>
            <h3 className="font-bold text-primary">Keyboard Navigation</h3>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 flex-1">
            <p className="text-sm text-secondary leading-relaxed max-w-xs">
              Every interactive element is fully navigable without a mouse, ensuring a logical focus order and visible focus states.
            </p>
            
            <div className="flex items-center gap-2 border border-black/10 p-3 rounded-2xl bg-bg-primary">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center font-semibold text-primary">Tab</div>
              <ChevronRight size={16} className="text-secondary" />
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center font-semibold text-primary">Enter</div>
              <ChevronRight size={16} className="text-secondary" />
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center font-semibold text-primary">Esc</div>
            </div>
          </div>
        </motion.div>

        {/* Screen Reader (1x1) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.15)", borderColor: "rgba(139, 92, 246, 0.3)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-[24px] p-6 border border-black/5 transition-colors flex flex-col group cursor-default"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-peach/10 flex items-center justify-center text-peach">
              <Speaker size={20} />
            </div>
            <h3 className="font-bold text-primary">Screen Reader</h3>
          </div>
          <p className="text-sm text-secondary mt-2 mb-4 leading-relaxed">
            Optimized for VoiceOver, NVDA, and JAWS with proper semantic markup.
          </p>
          <div className="mt-auto flex items-center justify-center">
            <div className="w-full h-12 rounded-xl bg-bg-secondary flex items-center justify-center gap-2">
               <div className="w-2 h-2 rounded-full bg-peach animate-pulse"></div>
               <div className="w-2 h-2 rounded-full bg-peach animate-pulse" style={{ animationDelay: '0.2s' }}></div>
               <div className="w-2 h-2 rounded-full bg-peach animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </motion.div>

        {/* Highlight Card (1x1) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.4)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-lavender to-soft-purple rounded-[24px] p-8 text-white flex flex-col justify-between cursor-default"
        >
          <div>
            <Settings2 size={28} className="mb-4 opacity-80" />
            <h3 className="heading text-2xl font-bold mb-2">Inclusive by Design</h3>
          </div>
          <p className="text-white/80 text-sm font-medium leading-relaxed">
            Building digital products that everyone can access and enjoy.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
