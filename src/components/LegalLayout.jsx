import { motion } from 'framer-motion';
import SEO from './SEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const LegalLayout = ({ title, seoProps, children }) => {
  return (
    <main className="bg-surface min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-8">
      <SEO {...seoProps} />
      <div className="max-w-2xl mx-auto space-y-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center space-y-3"
        >
          <span className="font-label text-primary uppercase text-[9px] tracking-[0.5em]">Studio Documents</span>
          <h1 className="font-headline text-3xl md:text-5xl italic text-on-surface tracking-tight">{title}</h1>
          <p className="font-body text-primary/60 uppercase text-[9px] tracking-[0.3em]">Fruits Company</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="space-y-10"
        >
          {children}
        </motion.div>
      </div>
    </main>
  );
};

export default LegalLayout;
