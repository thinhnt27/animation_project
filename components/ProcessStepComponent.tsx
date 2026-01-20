import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ProcessStep } from '../types';
import ImageCarousel from './ImageCarousel';
import ParallaxGallery from './ParallaxGallery';
import HorizontalScrollGallery from './HorizontalScrollGallery';

interface ProcessStepProps {
  step: ProcessStep;
  index: number;
}

const ProcessStepComponent: React.FC<ProcessStepProps> = ({ step, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainer(containerRef.current);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: container ? { current: container } : undefined,
    offset: ["start end", "end start"]
  });

  const scrollY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const yText = useTransform(scrollY, [0, 1], [100, -100]);
  const yNumber = useTransform(scrollY, [0, 1], [0, -200]);
  
  const isEven = index % 2 === 0;

  const allImages = step.gallery && step.gallery.length > 0 
    ? step.gallery 
    : (step.imageUrl ? [step.imageUrl] : []);

  if (step.layout === 'horizontal-scroll') {
      return (
        <section id={step.id} className="relative bg-black w-full overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6 py-32 text-center z-10 relative">
                 <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="h-[1px] w-12 bg-brand-gold/50" />
                    <span className="text-brand-gold font-serif italic text-xl">{step.number}</span>
                    <span className="h-[1px] w-12 bg-brand-gold/50" />
                </div>
                <h2 className="font-serif text-5xl md:text-8xl text-white mb-8 uppercase tracking-tight">{step.title}</h2>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">{step.description}</p>
            </div>
            <HorizontalScrollGallery images={allImages} />
        </section>
      )
  }

  if (step.layout === 'full-width-gallery') {
    return (
      <section 
        ref={containerRef}
        id={step.id}
        className="relative w-full min-h-screen bg-black flex flex-col items-center py-24 md:py-32"
      >
          <div className="w-full max-w-4xl mx-auto px-6 text-center mb-16 relative z-10">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
                <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="h-[1px] w-12 bg-brand-gold/50" />
                    <span className="text-brand-gold font-serif italic text-xl">{step.number}</span>
                    <span className="h-[1px] w-12 bg-brand-gold/50" />
                </div>
                <h2 className="font-serif text-5xl md:text-8xl text-white mb-8">{step.title}</h2>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">{step.description}</p>
             </motion.div>
          </div>
          <ParallaxGallery images={allImages} />
      </section>
    );
  }

  if (allImages.length === 0) {
      return (
        <section 
            ref={containerRef}
            id={step.id}
            className="relative w-full min-h-[70vh] bg-black flex items-center justify-center py-24 overflow-hidden border-y border-white/5"
        >
             <div className="w-full max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div style={{ y: yText }} className="flex flex-col items-center">
                    <span className="text-[15vw] leading-none font-serif font-bold text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                        {step.number}
                    </span>
                    
                    <span className="text-brand-gold font-serif italic text-2xl mb-4">{step.number}</span>
                    <h2 className="font-serif text-6xl md:text-8xl text-white mb-8 relative z-10">{step.title}</h2>
                    <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto relative z-10">
                        {step.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mt-12 relative z-10">
                        {step.details.map((detail, idx) => (
                            <span key={idx} className="text-sm uppercase tracking-[0.2em] text-gray-500 border border-white/10 px-4 py-2 rounded-full">
                                {detail}
                            </span>
                        ))}
                    </div>
                </motion.div>
             </div>
        </section>
      )
  }

  return (
    <section 
      ref={containerRef}
      id={step.id}
      className="relative w-full min-h-screen bg-black flex items-center justify-center py-24 md:py-32 overflow-hidden"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}>
          <motion.div className="w-full md:w-5/12 relative z-20 mix-blend-difference" style={{ y: yText }}>
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20%" }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                <div className="flex items-center space-x-4 mb-8">
                  <motion.div variants={{ hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.8 } } }} className="flex items-center space-x-3">
                    <span className="text-brand-gold font-serif italic text-xl">{step.number}</span>
                    <span className="h-[1px] w-24 bg-brand-gold/50" />
                  </motion.div>
                </div>
                <motion.h2 variants={{ hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }} className="font-serif text-5xl md:text-8xl text-white mb-8 leading-[0.9] tracking-tight uppercase">
                  {step.title}
                </motion.h2>
                <motion.div variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }} className="space-y-8">
                  <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light max-w-md">{step.description}</p>
                  <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-8">
                    {step.details.map((detail, idx) => (
                      <span key={idx} className="text-xs uppercase tracking-[0.2em] text-gray-500">{detail}</span>
                    ))}
                  </div>
                </motion.div>
             </motion.div>
          </motion.div>
          <div className="w-full md:w-7/12 relative">
            <motion.div style={{ y: yNumber }} className={`absolute -top-40 ${isEven ? '-right-20' : '-left-20'} z-0 pointer-events-none hidden md:block opacity-10`}>
              <span className="text-[20rem] font-serif font-bold text-white select-none">{step.number}</span>
            </motion.div>
            <motion.div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl bg-brand-gray/10" initial={{ clipPath: 'inset(100% 0 0 0)' }} whileInView={{ clipPath: 'inset(0% 0 0 0)' }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 1.2 }}>
              <ImageCarousel images={allImages} alt={step.title} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessStepComponent;