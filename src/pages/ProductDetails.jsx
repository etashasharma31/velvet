import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { products } from '../lib/data';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === parseInt(id));

  if (!product || product.isComingSoon) {
    return (
      <main className="pt-48 pb-32 min-h-screen relative border-t border-on-surface/5 flex flex-col items-center justify-center gap-8">
        <h1 className="font-headline text-4xl text-on-surface">Product not found</h1>
        <button 
          onClick={() => navigate('/collections')}
          className="font-label text-xs tracking-widest uppercase text-primary border-b border-primary/20 pb-1 hover:text-primary-container transition-colors"
        >
          Back to Collections
        </button>
      </main>
    );
  }

  return (
    <main className="pt-48 pb-32 min-h-screen relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12">
        <motion.button 
          onClick={() => navigate(-1)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 font-label text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Selection
        </motion.button>
        
        <div className="flex flex-col lg:flex-row gap-24 xl:gap-32 items-start">
          {/* Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-3/5 bg-surface-container-low relative aspect-4/5 overflow-hidden group"
          >
            <img 
              alt={product.title} 
              className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-3000 ease-out" 
              src={product.img} 
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/5 to-transparent opacity-40"></div>
          </motion.div>
          
          {/* Content Container */}
          <div className="w-full lg:w-2/5 flex flex-col gap-12 sticky top-48">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="bg-surface-container-high px-4 py-1 rounded-full text-[10px] font-label tracking-[0.2em] uppercase text-primary border border-outline-variant/10">
                  {product.category}
                </span>
                <span className="text-on-surface-variant/40 font-label text-[10px] tracking-widest uppercase">
                  {product.batch}
                </span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-light leading-none text-on-surface tracking-tight">
                {product.title}
              </h1>
              <p className="text-3xl font-headline italic text-primary tracking-tight">{product.price}</p>
            </motion.div>
 
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="space-y-8"
            >
              <p className="text-lg md:text-xl leading-relaxed font-body text-on-surface-variant font-light italic">
                "{product.description}"
              </p>
              
              <div className="pt-12 grid grid-cols-2 gap-8 border-t border-on-surface/5">
                <div>
                  <h4 className="font-label text-[10px] uppercase tracking-widest text-primary/60 mb-2">Tasting Notes</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed italic">{product.tastingNotes || "Artisanal, Rich, Complex"}</p>
                </div>
                <div>
                  <h4 className="font-label text-[10px] uppercase tracking-widest text-primary/60 mb-2">Ingredients</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{product.ingredients || "Premium cocoa, natural flavours"}</p>
                </div>
              </div>

              <div className="pt-12 bg-primary/5 p-8 border border-primary/10 rounded-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h4 className="font-label text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Artisanal Inquiry</h4>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-6 italic">
                  This selection is part of our exclusive studio reserve. We invite you to experience our artisanal inquiry process to learn more about our future batches.
                </p>
                <button 
                  onClick={() => navigate('/experience')}
                  className="w-full border border-primary/30 text-primary py-4 font-label text-[10px] tracking-widest uppercase hover:bg-primary/5 transition-all"
                >
                  Join the Experience
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-primary/5 blur-[100px] -z-10 rounded-full" />
    </main>
  );
}
