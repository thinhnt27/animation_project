import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { SubSection } from '../types';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  content: SubSection | null;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, content }) => {
  if (!content) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer Content */}
          <motion.div
            className="relative w-full max-w-md lg:max-w-lg bg-brand-dark p-8 md:p-12 shadow-2xl overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
              aria-label="Close drawer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col gap-8">
              <h2 className="font-serif text-5xl md:text-6xl text-brand-gold leading-tight uppercase tracking-tight">
                {content.title}
              </h2>
              <img
                src={content.imageUrl}
                alt={content.title}
                className="w-full h-auto object-cover rounded-md shadow-lg"
              />
              <p className="text-gray-300 text-lg leading-relaxed">
                {content.description}
              </p>
              
              {/* Optional: Add more details or a call to action */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-gray-500 text-sm">
                  Explore further details about this process phase.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;