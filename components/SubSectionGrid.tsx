import React from 'react';
import { motion } from 'framer-motion';
import { SubSection } from '../types';

interface SubSectionGridProps {
  subSections: SubSection[];
  onOpenDrawer: (subSection: SubSection) => void;
}

const SubSectionGrid: React.FC<SubSectionGridProps> = ({ subSections, onOpenDrawer }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 px-6 md:px-0 max-w-7xl mx-auto">
      {subSections.map((subSection, idx) => (
        <motion.div
          key={subSection.id}
          className="relative group cursor-pointer aspect-[4/3] rounded-md overflow-hidden shadow-xl bg-brand-gray/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          onClick={() => onOpenDrawer(subSection)}
          aria-label={`Open details for ${subSection.title}`}
        >
          <img
            src={subSection.imageUrl}
            alt={subSection.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center p-4">
            <h3 className="font-serif text-3xl text-white text-center drop-shadow-lg opacity-80 group-hover:opacity-100 transition-opacity">
              {subSection.title}
            </h3>
          </div>
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-gold transition-colors duration-300 rounded-md" />
        </motion.div>
      ))}
    </div>
  );
};

export default SubSectionGrid;