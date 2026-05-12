import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full max-w-[1400px] mx-auto px-6 py-8 mt-auto pb-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden bg-bg-secondary border-2 border-white shadow-sm">
             <img src="https://api.dicebear.com/9.x/micah/svg?seed=FebriRaka2&backgroundColor=eef2ff&baseColor=f9c9b6&clothing=hoodie&clothingColor=ffffff" alt="Febritama Raka" className="w-full h-full object-cover scale-110 mt-1"/>
          </div>
          <div>
            <h3 className="font-bold text-lavender text-sm flex items-center gap-1.5">
              Febritama Raka
            </h3>
            <p className="text-[10px] text-secondary mt-0.5">
              Building inclusive<br/>web experiences.
            </p>
          </div>
        </div>

        {/* Center */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[11px] font-bold text-primary">
          <a href="#home" className="hover:text-lavender transition-colors">Home</a>
          <a href="#about" className="hover:text-lavender transition-colors">About</a>
          <a href="#skills" className="hover:text-lavender transition-colors">Skills</a>
          <a href="#projects" className="hover:text-lavender transition-colors">Projects</a>
          <a href="#accessibility" className="hover:text-lavender transition-colors">Accessibility</a>
          <a href="#journey" className="hover:text-lavender transition-colors">Journey</a>
          <a href="#contact" className="hover:text-lavender transition-colors">Contact</a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <p className="text-[10px] text-secondary font-medium">
            &copy; {new Date().getFullYear()} Febritama Raka. All rights reserved.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-xl bg-lavender/10 flex items-center justify-center text-lavender hover:bg-lavender hover:text-white transition-all shadow-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
