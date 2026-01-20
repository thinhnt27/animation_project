import React from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import ProcessStepComponent from './components/ProcessStepComponent';
import Footer from './components/Footer';
import { PROCESS_STEPS } from './constants';

const App: React.FC = () => {
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
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;