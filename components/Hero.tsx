import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const scale = useTransform(scrollY, [0, 1000], [1.1, 1]); 

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      
      {/* Background Image */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" /> 
        <img 
          src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop" 
          alt="Film Set Lighting" 
          className="w-full h-full object-cover opacity-60"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity, y }}
        className="relative z-20 text-center max-w-6xl px-6"
      >
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] text-white leading-none tracking-tight mix-blend-overlay opacity-90 drop-shadow-2xl">
            The Process
          </h1>
        </motion.div>

        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-[1px] h-24 bg-brand-gold mx-auto my-8 origin-top"
        />

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="text-white/80 text-sm md:text-base uppercase tracking-[0.3em] font-light"
        >
          Technology &bull; Art &bull; Storytelling
        </motion.p>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 z-20 flex flex-col items-center gap-4"
      >
         <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll to Explore</span>
         <motion.div
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
         >
            <ChevronDown className="w-5 h-5 text-white" />
         </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;