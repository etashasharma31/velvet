import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function ProductCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative flex flex-col gap-6",
        item.offset && "md:translate-y-12",
        item.isComingSoon && "opacity-80 grayscale-[30%]"
      )}
    >
      <div className="relative aspect-[4/5] bg-surface-container-low overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700">
        {item.isComingSoon ? (
          <div className="w-full h-full">
            <motion.img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-surface/60 backdrop-blur-[2px] flex items-center justify-center">
              <span className="font-label text-[10px] tracking-[0.4em] uppercase text-primary border border-primary/30 px-6 py-2">
                Coming Soon
              </span>
            </div>
          </div>
        ) : (
          <Link 
            to={`/product/${item.id}`} 
            className="block w-full h-full"
          >
            <motion.img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center border border-primary/0 group-hover:border-primary/20">
              <button className="bg-primary hover:bg-primary-container text-on-primary px-8 py-3 font-label text-[10px] tracking-[0.3em] uppercase transition-all duration-500 shadow-xl pointer-events-none">
                View Details
              </button>
            </div>
          </Link>
        )}
      </div>
      
      <div className="flex flex-col gap-3 px-1">
        <div className="flex justify-between items-start">
          <div className="grow">
            {item.isComingSoon ? (
              <h3 className="font-headline text-xl font-medium text-on-surface/50 leading-tight">
                {item.title}
              </h3>
            ) : (
              <Link to={`/product/${item.id}`} className="font-headline text-xl font-medium text-on-surface hover:text-primary transition-colors leading-tight block">
                {item.title}
              </Link>
            )}
            <p className="font-label text-primary/60 text-[10px] uppercase tracking-widest mt-1">
              {item.type || item.desc}
            </p>
          </div>
          <span className="font-body text-primary text-sm font-light whitespace-nowrap">{item.price}</span>
        </div>
        
        {!item.isComingSoon && (
          <div className="flex justify-between items-center mt-2 group/btn">
            <Link 
              to={`/product/${item.id}`}
              className="font-label text-[9px] tracking-[0.2em] uppercase text-on-surface/40 hover:text-primary transition-all duration-300 flex items-center gap-2 group-hover:text-primary"
            >
              Explore Selection
              <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}
