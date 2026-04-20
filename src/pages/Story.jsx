import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SEO from '../components/SEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

export default function Story() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={containerRef} className="bg-surface relative selection:bg-primary/30 selection:text-primary">
      <SEO 
        title="Our Brand Narrative | Heritage & Philosophy" 
        description="Learn about the philosophy and heritage of Velvet & Fruits Company—where every creation is a resonance of the earth, born from artisan's silence." 
      />
      {/* 1. Quad Grid - Hero Replacement & Modular Belief System */}
      <section className="pt-12 pb-24 md:pt-16 md:pb-48 px-6 md:px-8 max-w-[1400px] mx-auto mt-4 md:mt-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-48 items-start">
          {/* Top Left */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-8"
          >
            <span className="font-label text-primary/50 uppercase text-[9px] tracking-[0.4em]">The Essence</span>
            <h1 className="font-headline text-4xl md:text-6xl text-on-surface tracking-tight leading-tight">
              Life doesn't come with <span className="italic text-primary">subtitles.</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant/80 leading-loose tracking-wide font-light">
              "There are moments when words fall short—when 'sorry' feels too heavy to carry, when 'I love you' never quite makes it out, and when all you really need is to feel understood."
            </p>
          </motion.div>

          {/* Top Right */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-8 md:pt-32"
          >
            <span className="font-label text-primary/50 uppercase text-[9px] tracking-[0.4em]">The Difference</span>
            <h2 className="font-headline text-4xl md:text-6xl text-on-surface tracking-tight leading-tight">
              Velvet doesn't try to <span className="italic text-primary">impress you.</span>
            </h2>
            <p className="font-body text-lg text-on-surface-variant/80 leading-loose tracking-wide font-light">
              "It understands you. It melts like the emotions you can't explain and comforts like a hug that arrives exactly when you need it."
            </p>
          </motion.div>

          {/* Bottom Left - Our Belief */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <span className="font-label text-primary/50 uppercase text-[9px] tracking-[0.4em]">Section 01 / Belief</span>
            <h2 className="font-headline text-4xl md:text-6xl text-on-surface tracking-tight leading-tight">
              Not every emotion needs <span className="italic text-primary">to be said.</span>
            </h2>
            <p className="font-body text-lg text-on-surface-variant/80 leading-loose tracking-wide font-light">
              At Velvet, we believe some emotions are simply meant to be felt. In a world that's loud, fast, and constantly demanding attention, we chose something softer. We chose to listen, to slow down, and to understand.
            </p>
          </motion.div>

          {/* Bottom Right - Our Purpose */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-8 md:pt-32"
          >
            <span className="font-label text-primary/50 uppercase text-[9px] tracking-[0.4em]">Section 02 / Purpose</span>
            <h2 className="font-headline text-4xl md:text-6xl text-on-surface tracking-tight leading-tight italic">
              A new language of <span className="text-primary not-italic font-label tracking-widest text-2xl uppercase opacity-80">presence.</span>
            </h2>
            <p className="font-body text-lg text-on-surface-variant/80 leading-loose tracking-wide font-light">
              We're not here to sell chocolate; we're here to shift how people feel. A single piece of Velvet can say "I'm here," "I care," "I understand" without asking you to say anything at all.
            </p>
          </motion.div>
        </div>
      </section>



    </main>
  );
}

