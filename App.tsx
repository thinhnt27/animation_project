import React, { useState } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import ProcessStepComponent from './components/ProcessStepComponent';
import Footer from './components/Footer';
import Drawer from './components/Drawer';
import { PROCESS_STEPS } from './constants';
import { SubSection } from './types'; // Corrected import for SubSection

const App: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<SubSection | null>(null);

  const handleOpenDrawer = (subSection: SubSection) => {
    setDrawerContent(subSection);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    // Optionally clear content after animation for better performance/state management
    setTimeout(() => setDrawerContent(null), 400); 
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-brand-gold selection:text-black font-sans">
      <Navigation />
      
      <main>
        <Hero />
        
        <div className="relative">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStepComponent 
              key={step.id} 
              step={step} 
              index={index}
              onOpenDrawer={handleOpenDrawer} 
            />
          ))}
        </div>
      </main>

      <Footer />
      <Drawer 
        isOpen={isDrawerOpen} 
        onClose={handleCloseDrawer} 
        content={drawerContent} 
      />
    </div>
  );
};

export default App;