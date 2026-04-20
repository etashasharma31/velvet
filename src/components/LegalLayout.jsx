import { motion } from 'framer-motion';
import SEO from './SEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const LegalLayout = ({ title, seoProps, children }) => {
  return (
    <main className="bg-surface min-h-screen pt-32 md:pt-40 pb-20 md:pb-24 px-6 md:px-8">
      <SEO {...seoProps} />
      <div className="max-w-3xl mx-auto space-y-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center space-y-4"
        >
          <span className="font-label text-primary uppercase text-[10px] tracking-[0.5em]">Studio Documents</span>
          <h1 className="font-headline text-5xl md:text-7xl italic text-on-surface tracking-tight">{title}</h1>
          <p className="font-body text-primary/60 uppercase text-[10px] tracking-[0.3em]">Velvet & Fruits Company</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          {children}
        </motion.div>
      </div>
    </main>
  );
};

export default LegalLayout;
