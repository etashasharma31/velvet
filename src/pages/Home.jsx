import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, ShoppingBag } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { products } from '../lib/data';

export default function Home() {
  const featuredProducts = products.filter(p => p.id === 5 || p.id === 6);

  return (
    <main className="overflow-hidden">
      <SEO 
        title="Velvet Artisanal Chocolatier | Pure Cacao, Refined Elegance" 
        description="Experience the fine art of artisanal chocolatiering at Velvet & Fruits Company. Discover our signature fruit-infused collections, hand-tempered with elegance in high-contrast clarity." 
      />
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img 
            className="w-full h-full object-cover brightness-[0.85] contrast-[1.05] scale-[1.02]" 
            src="/hero-velvet.png" 
            alt="Artisanal Cocoa" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-surface/10 to-surface"></div>
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-on-surface leading-tight">
              Born from silence,<br/>
              <motion.span 
                className="italic text-primary"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                crafted in shadow.
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center gap-8"
          >
            <Link to="/collections">
              <motion.button 
                whileHover={{ scale: 1.05, shadow: "0 20px 40px rgba(233,193,119,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-gradient text-on-primary px-12 py-5 rounded-sm font-label uppercase tracking-widest text-[10px] font-semibold flex items-center gap-3 transition-opacity duration-300"
              >
                Explore Collections
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-48 px-6 bg-surface relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span 
            className="font-label text-primary tracking-[0.4em] uppercase text-[10px] mb-12 block opacity-70"
            initial={{ letterSpacing: "-0.2em", opacity: 0 }}
            whileInView={{ letterSpacing: "0.4em", opacity: 0.7 }}
            transition={{ duration: 1.5 }}
          >
            The Essence
          </motion.span>
          <blockquote className="font-headline text-3xl md:text-5xl lg:text-6xl font-light italic text-on-surface leading-relaxed tracking-tight">
            "True chocolate is not merely a confection; it is a resonance of the earth, a symphony played in the key of deep cacao and whispered fruit, born from the patience of an artisan's soul."
          </blockquote>
        </motion.div>
      </section>


    </main>

  );
}
