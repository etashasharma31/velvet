import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-surface flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Subtle Gradient Layer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(233,193,119,0.05)_0%,_transparent_70%)]"
      />

      {/* Main Content Area */}
      <div className="relative flex flex-col items-center gap-12">
        {/* The Golden Sweep Container */}
        <div className="relative group">
          {/* Logo with Glow */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: [0.95, 1.05, 0.95],
              opacity: 1
            }}
            transition={{ 
              scale: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              },
              opacity: {
                duration: 1.2,
                ease: "easeOut"
              }
            }}
            className="relative z-10"
          >
            <img 
              src="/favicon.png" 
              alt="Velvet Lotus Logo" 
              className="w-32 md:w-48 h-auto object-contain brightness-110"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(233, 193, 119, 0.4))'
              }}
            />
          </motion.div>

          {/* Liquid Gold Expansion/Sweep Effect */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [1, 1.5, 2],
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 1.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0 z-0 bg-primary/20 rounded-full blur-[60px]"
          />
        </div>

        {/* Minimalist Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="h-[1px] w-12 bg-primary/20 mb-2"></div>
          <p className="font-label text-[10px] tracking-[0.6em] uppercase text-on-surface text-center">
            Real Fruit. Real Cocoa. <span className="font-semibold">Real Feeling.</span>
          </p>
        </motion.div>
      </div>

      {/* Edge Light Effect */}
      <div className="absolute inset-0 pointer-events-none border border-primary/5"></div>
    </motion.div>
  );
}
