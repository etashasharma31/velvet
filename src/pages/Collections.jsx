import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../lib/data';
import { cn } from '../lib/utils';
import SEO from '../components/SEO';

export default function Collections() {
  const [activeFilter, setActiveFilter] = useState('VELVET KIWI chocolate');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = ['VELVET KIWI chocolate', 'VELVET Pineapple & Raisin', 'VELVET Dark Cranberry', 'VELVET Mango Dark'];

  const filteredProducts = products.filter(p => {
    const keyword = activeFilter.split(' ').pop().toLowerCase();
    return p.title.toLowerCase().includes(keyword);
  });

  // Reset index when filter changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeFilter]);

  const activeProduct = filteredProducts[0];
  const images = activeProduct?.images || [activeProduct?.img];

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="pt-24 md:pt-48 pb-20 md:pb-32 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen">
      <SEO 
        title="Winter Solstice Collections | Velvet Artisanal Chocolatier" 
        description="Explore our curated selections of fruit-infused chocolates, from Midnight Fig to Salted Umber. Hand-tempered with precision and elegantly packaged." 
      />
      <header className="mb-16 md:mb-24 space-y-6 max-w-3xl">
        <motion.h1 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-headline text-4xl md:text-6xl font-light tracking-tight text-on-surface"
        >
          The <span className="italic text-primary">Spotlight</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-body text-lg md:text-xl text-on-surface-variant/80 leading-relaxed font-light"
        >
          An immersive curation of our most decadent hero bars. 
          Spotlighting the cinematic textures and rare notes of our latest creations.
        </motion.p>
      </header>

      {/* Filters */}
      <section className="mb-32">
        <div className="flex flex-wrap gap-x-12 gap-y-6 items-center border-b border-on-surface/5 pb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative font-label text-xs tracking-[0.2em] uppercase transition-all duration-300 pb-3 ${
                activeFilter === filter 
                ? "text-primary font-bold" 
                : "text-on-surface-variant hover:text-primary opacity-60 hover:opacity-100"
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.div
                  layoutId="filter-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/40 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Spotlight Content Area */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {filteredProducts.map((p) => (
            <motion.section 
              key={p.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.4 } }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24"
            >
              {/* Product Image Section (60%) */}
              <div className="w-full lg:w-[60%] order-2 lg:order-1">
                <div className="relative group">
                  <motion.div 
                    className="aspect-square lg:aspect-4/5 overflow-hidden rounded-sm relative shadow-2xl flex items-center justify-center p-6 md:p-12 active:cursor-grabbing group/container"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(139,109,61,0.05) 0%, rgba(250,248,246,1) 100%)',
                      border: '1px solid rgba(139,109,61,0.1)'
                    }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Subtle Texture Overlay */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')]"></div>

                    {/* Animated Image Slider */}
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={currentImageIndex}
                        src={images[currentImageIndex]} 
                        alt={p.title} 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full object-contain grayscale-20 group-hover:grayscale-0 transition-all duration-3000 group-hover:scale-105"
                      />
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-surface opacity-30 pointer-events-none"></div>
                    
                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                      <div className="absolute inset-0 flex lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button 
                          onClick={handlePrev}
                          className="flex-1 flex items-center justify-start pl-6 group/arrow"
                          aria-label="Previous Image"
                        >
                          <div className="bg-on-surface/5 backdrop-blur-md p-4 rounded-full border border-on-surface/5 group-hover/arrow:bg-primary/10 transition-all">
                            <ChevronLeft className="w-6 h-6 text-on-surface/70" />
                          </div>
                        </button>
                        <button 
                          onClick={handleNext}
                          className="flex-1 flex items-center justify-end pr-6 group/arrow"
                          aria-label="Next Image"
                        >
                          <div className="bg-on-surface/5 backdrop-blur-md p-4 rounded-full border border-on-surface/5 group-hover/arrow:bg-primary/10 transition-all">
                            <ChevronRight className="w-6 h-6 text-on-surface/70" />
                          </div>
                        </button>
                      </div>
                    )}

                    {/* Pagination Dots */}
                    {images.length > 1 && (
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                        {images.map((_, idx) => (
                          <div 
                            key={idx}
                            className={cn(
                              "w-1.5 h-1.5 rounded-full transition-all duration-500",
                              idx === currentImageIndex ? "bg-primary w-6" : "bg-on-surface/20"
                            )}
                          />
                        ))}
                      </div>
                    )}


                  </motion.div>
                </div>
              </div>

              {/* Product Info Section (40%) */}
              <div className="w-full lg:w-[40%] flex flex-col gap-8 order-1 lg:order-2 text-center lg:text-left">
                <div className="space-y-4">
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-label text-[9px] tracking-widest uppercase border border-primary/20">
                      Hero Spotlight
                    </span>
                    <span className="font-label text-[9px] tracking-widest uppercase text-on-surface/40">Limited Collection</span>
                  </div>
                  
                  <h2 className="font-headline text-4xl md:text-5xl font-light text-on-surface tracking-tight leading-tight">
                    {p.title}
                  </h2>
                  {p.desc && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-label text-[10px] tracking-[0.3em] uppercase text-primary/80 font-bold"
                    >
                      {p.desc}
                    </motion.p>
                  )}
                  <p className="font-headline italic text-2xl text-primary tracking-tight">{p.price}</p>
                </div>

                <div className="space-y-6">
                  <p className="font-body text-base md:text-lg font-light text-on-surface-variant italic leading-relaxed">
                    "{p.description}"
                  </p>

                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-on-surface/5">
                    <div>
                      <h4 className="font-label text-[10px] uppercase tracking-widest text-primary/60 mb-3 underline decoration-primary/20 underline-offset-4">Tasting Notes</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed tracking-wide italic">{p.tastingNotes}</p>
                    </div>
                    <div>
                      <h4 className="font-label text-[10px] uppercase tracking-widest text-primary/60 mb-3 underline decoration-primary/20 underline-offset-4">Pure Ingredients</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed tracking-wide">{p.ingredients}</p>
                    </div>
                  </div>

                  <div className="pt-10 flex justify-center lg:justify-start">
                    <Link 
                      to={`/product/${p.id}`}
                      className="w-full sm:w-auto border border-primary/40 text-primary py-6 px-16 rounded-sm font-label text-[11px] tracking-[0.3em] uppercase font-bold flex items-center justify-center gap-4 hover:bg-primary/5 transition-all"
                    >
                      Explore Selection
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </AnimatePresence>
      </div>

      {/* Footer Decoration */}
      <div className="mt-24 md:mt-48 pt-24 border-t border-on-surface/5 flex flex-col items-center">
        <p className="font-headline italic text-on-surface/30 text-xl md:text-2xl text-center max-w-2xl mb-12">
          "Each bar is a testament to the slow art of chocolatiering - a journey where zesty fruits meet the ethereal depth of hand-crafted cacao."
        </p>
        <div className="flex gap-4">
          <div className="w-8 h-px bg-primary/20" />
          <div className="w-2 h-2 rounded-full border border-primary/40 rotate-45" />
          <div className="w-8 h-px bg-primary/20" />
        </div>
      </div>
    </main>
  );
}
