import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, ChevronLeft, Send } from 'lucide-react';
import SEO from '../../components/SEO';
import { StepIdentity, StepArchetypes, StepBrand, StepEssence, StepExploration, StepInsights } from './FormSteps';

export default function Experience() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    flavour: '',
    fruit: '',
    fruitType: '',
    sweetener: '',
    factor: '',
    experiment: '',
    brandPreference: '',
    fusionLike: '',
    kiwiFeedback: '',
    pineappleFeedback: ''
  });

  const totalSteps = 6;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step < totalSteps - 1) {
      setStep(step + 1);
      return;
    }

    setIsSubmitting(true);
    
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeZR_oXLBGjD_1c1-cZZCkFC26H4EQwNm5rluQWO7mk5-8bZA/formResponse";
    
    const googleFormData = new URLSearchParams();
    googleFormData.append("entry.1189114566", formData.name);
    googleFormData.append("entry.1975996042", formData.age);
    googleFormData.append("entry.746004691", formData.email);
    googleFormData.append("entry.2082126541", formData.phone);
    googleFormData.append("entry.1965373462", formData.flavour);
    googleFormData.append("entry.1955944037", formData.fruit);
    googleFormData.append("entry.2087072764", formData.brandPreference);
    googleFormData.append("entry.508644815", formData.fruitType);
    googleFormData.append("entry.557192922", formData.sweetener);
    googleFormData.append("entry.535221252", formData.factor);
    googleFormData.append("entry.2038497598", formData.experiment);
    googleFormData.append("entry.762485441", formData.fusionLike);
    googleFormData.append("entry.1074291345", formData.kiwiFeedback);
    googleFormData.append("entry.652300913", formData.pineappleFeedback);

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: googleFormData
      });
      
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1500);
    } catch (error) {
      console.error("Submission failed:", error);
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  if (submitted) {
    return (
      <main className="pt-32 md:pt-48 pb-24 md:pb-32 min-h-screen px-8 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl glass-card backdrop-blur-3xl p-16 rounded-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient" />
          <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-8 animate-pulse" />
          <h2 className="font-headline text-5xl text-on-surface mb-6 italic text-gradient-gold">Submission Received</h2>
          <p className="font-body text-lg text-on-surface-variant/70 leading-relaxed mb-12">
            Your insights have been added to our studio ledger. As a token of our gratitude, you will receive a 
            <span className="text-primary italic"> Private Tasting Invitation</span> via email shortly.
          </p>
          <button 
            onClick={() => {
              setSubmitted(false);
              setStep(0);
            }}
            className="font-label text-[10px] tracking-[0.4em] uppercase text-primary border border-primary/20 px-12 py-4 hover:bg-primary/5 transition-all"
          >
            Return to Studio
          </button>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="pt-24 md:pt-48 pb-16 md:pb-32 min-h-screen relative overflow-hidden px-6 md:px-8 selection:bg-primary/10 bg-surface text-on-surface">
      <SEO  
        title="The Tasting Experience | A Journey through Silk" 
        description="Immerse yourself in the cinematic textures and tasting notes of our artisanal collection. Experience the luxury of real fruit and real cocoa." 
      />
      
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-30" />

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="mb-12 md:mb-20 space-y-4 md:space-y-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-end gap-4 text-on-surface/40">
            <div className="flex items-center gap-4">
              <span className="font-label text-[9px] md:text-[10px] uppercase tracking-widest">Progress</span>
              <div className="w-24 md:w-32 h-1 bg-on-surface/10 rounded-full overflow-hidden">
                <motion.div 
                   className="h-full bg-gold-gradient shadow-[0_0_10px_rgba(233,193,119,0.3)]"
                   initial={{ width: 0 }}
                   animate={{ width: `${(step / (totalSteps - 1)) * 100}%` }}
                />
              </div>
              <span className="font-label text-[9px] md:text-[10px] text-primary tabular-nums tracking-widest">{String(step + 1).padStart(2, '0')} / {String(totalSteps).padStart(2, '0')}</span>
            </div>
          </div>
          <motion.h1 
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-4xl md:text-7xl font-light text-on-surface tracking-tighter leading-tight"
          >
            The <span className="italic text-gradient-gold text-5xl md:text-8xl">Artisanal</span> <span className="block md:inline">Inquiry</span>
          </motion.h1>
        </header>

        <div className="glass-card p-8 md:p-16 rounded-sm relative overflow-hidden bg-white/40 border-primary/10 shadow-xl-light">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/5" />



          
          <form onSubmit={handleSubmit} className="min-h-[400px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {step === 0 && <StepIdentity key="step0" formData={formData} setFormData={setFormData} />}
              {step === 1 && <StepArchetypes key="step1" formData={formData} setFormData={setFormData} />}
              {step === 2 && <StepBrand key="step2" formData={formData} setFormData={setFormData} />}
              {step === 3 && <StepEssence key="step3" formData={formData} setFormData={setFormData} />}
              {step === 4 && <StepExploration key="step4" formData={formData} setFormData={setFormData} />}
              {step === 5 && <StepInsights key="step5" formData={formData} setFormData={setFormData} />}
            </AnimatePresence>

            <footer className="mt-16 pt-8 border-t border-on-surface/5 flex flex-wrap gap-4 items-center justify-between">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 0}
                className={`flex items-center gap-2 font-label text-[10px] uppercase tracking-widest transition-all ${step === 0 ? 'opacity-0 cursor-default' : 'text-on-surface/40 hover:text-primary'}`}
              >
                <ChevronLeft className="w-3 h-3" />
                Previous Arc
              </button>


              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`bg-primary text-on-primary px-10 py-4 rounded-sm font-label text-[10px] tracking-[0.4em] uppercase font-bold shadow-xl flex items-center gap-4 group hover:bg-primary-container transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                    Transmitting...
                  </>
                ) : step === totalSteps - 1 ? (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Complete Inquiry
                  </>
                ) : (
                  <>
                    Next Phase
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </>
                ) }
              </motion.button>
            </footer>
          </form>
        </div>

        <p className="mt-12 text-center font-body text-[10px] text-on-surface-variant font-light italic opacity-40">
          Step {step + 1} of {totalSteps} — Confidential Studio Investigation
        </p>

        <div className="mt-32 flex items-center justify-center opacity-10">
           <img src="/favicon.png" alt="Logo Watermark" className="w-24 h-24 grayscale brightness-50" />
        </div>
      </div>
    </main>
  );
}
