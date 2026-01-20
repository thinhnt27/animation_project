import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    // Wrap around logic
    if (newDirection === 1) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    } else {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full group overflow-hidden bg-brand-gray/20">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            scale: { duration: 0.4 }
          }}
          className="absolute inset-0 w-full h-full object-cover"
          alt={`${alt} - Image ${currentIndex + 1}`}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      
      {/* Overlay controls - only visible if more than 1 image */}
      {images.length > 1 && (
        <>
            {/* Progress Indicators */}
            <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-brand-gold' : 'w-4 bg-white/50 hover:bg-white'}`}
                    />
                ))}
            </div>

            {/* Navigation Buttons (Desktop) */}
            <div className="absolute inset-0 z-10 hidden md:flex items-center justify-between px-4 pointer-events-none">
                <button 
                    onClick={() => paginate(-1)}
                    className="pointer-events-auto p-3 rounded-full bg-black/20 backdrop-blur-md text-white/70 hover:text-white hover:bg-black/50 transition-all opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button 
                    onClick={() => paginate(1)}
                    className="pointer-events-auto p-3 rounded-full bg-black/20 backdrop-blur-md text-white/70 hover:text-white hover:bg-black/50 transition-all opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

             {/* Count indicator */}
             <div className="absolute top-6 right-6 z-20 px-3 py-1 bg-black/40 backdrop-blur-md rounded text-xs font-sans tracking-widest text-white/90">
                {currentIndex + 1} / {images.length}
             </div>
        </>
      )}
      
      {/* Vignette Overlay for cinematic feel */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none" />
    </div>
  );
};

// Animation Helpers
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default ImageCarousel;