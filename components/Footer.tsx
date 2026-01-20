import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-20 px-6 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
        <h2 className="text-3xl font-serif text-white">Join the Journey</h2>
        <p className="text-gray-400 max-w-lg">
          Animation is a collaborative art form. We are always looking for storytellers, artists, and engineers to help us create the next generation of films.
        </p>
        
        <button 
          onClick={scrollToTop}
          className="group flex items-center space-x-2 text-sm uppercase tracking-widest text-brand-gold hover:text-white transition-colors mt-12"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>

        <div className="w-full h-px bg-white/10 my-12" />

        <div className="flex flex-col md:flex-row justify-between w-full text-xs text-gray-500">
          <p>&copy; 2024 Animation Process Demo. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;