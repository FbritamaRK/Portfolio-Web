import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Accessibility from './components/sections/Accessibility';
import Journey from './components/sections/Journey';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-lavender/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-sky-blue/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-mint/20 blur-[150px]" />
      </div>

      <Navbar />
      
      <main className="relative z-10 flex flex-col items-center">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Accessibility />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
