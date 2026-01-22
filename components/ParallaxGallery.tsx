import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxGalleryProps {
  images: string[];
}

const ParallaxGallery: React.FC<ParallaxGalleryProps> = ({ images }) => {
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

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const col1 = images.filter((_, i) => i % 3 === 0);
  const col2 = images.filter((_, i) => i % 3 === 1);
  const col3 = images.filter((_, i) => i % 3 === 2);

  const y1 = useTransform(smoothScroll, [0, 1], [0, -200]);
  const y2 = useTransform(smoothScroll, [0, 1], [0, 100]);
  const y3 = useTransform(smoothScroll, [0, 1], [0, -150]);

  if (!container) return <div className="min-h-screen bg-black" />;

  return (
    <div ref={containerRef} className="w-full relative min-h-[120vh] overflow-hidden py-20">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-6 md:px-12 max-w-[1800px] mx-auto">
        <motion.div style={{ y: y1 }} className="flex flex-col gap-8">
          {col1.map((src, idx) => (
            <GalleryItem key={`col1-${idx}`} src={src} index={idx} />
          ))}
        </motion.div>
        <motion.div style={{ y: y2 }} className="flex flex-col gap-8 md:pt-48">
          {col2.map((src, idx) => (
            <GalleryItem key={`col2-${idx}`} src={src} index={idx} />
          ))}
        </motion.div>
        <motion.div style={{ y: y3 }} className="flex flex-col gap-8">
          {col3.map((src, idx) => (
            <GalleryItem key={`col3-${idx}`} src={src} index={idx} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const GalleryItem: React.FC<{ src: string; index: number }> = ({ src, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative group overflow-hidden rounded-sm bg-brand-gray/20"
    >
      <div className="aspect-[3/4] w-full overflow-hidden">
        <img 
          src={src} 
          alt="Gallery Art" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <span className="text-white/80 font-serif italic tracking-widest text-sm border-b border-brand-gold pb-1">View Detail</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ParallaxGallery;