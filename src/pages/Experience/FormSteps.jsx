import { motion } from 'framer-motion';
import { User, Calendar, Mail, CheckCircle2 } from 'lucide-react';

const stepVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const StepIdentity = ({ formData, setFormData }) => (
  <motion.section 
    variants={stepVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-12 md:space-y-16"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-8 md:w-12 h-px bg-primary/30" />
      <h3 className="font-label text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-primary font-bold">I. Member Identity</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 md:gap-y-12">
      {[
        { label: 'Name', name: 'name', type: 'text', icon: User, placeholder: 'Your answer' },
        { label: 'Age', name: 'age', type: 'number', icon: Calendar, placeholder: 'Your answer' },
        { label: 'Email', name: 'email', type: 'email', icon: Mail, placeholder: 'Your answer' },
        { label: 'Phone No.', name: 'phone', type: 'tel', icon: CheckCircle2, placeholder: 'Your answer' },
      ].map((field) => (
        <div key={field.name} className="relative group">
          <label className="font-label text-[8px] md:text-[9px] tracking-[0.25em] uppercase text-on-surface/40 mb-3 block transition-colors group-focus-within:text-primary">
            {field.label} {!(field.name === 'age' || field.name === 'email') && '*'}
          </label>
          <div className="relative">
            <field.icon className="absolute left-0 bottom-4 w-4 h-4 text-on-surface/20 group-focus-within:text-primary transition-colors" />
            <input 
              required={!(field.name === 'age' || field.name === 'email')}
              type={field.type}
              value={formData[field.name]}
              onChange={(e) => {
                const value = e.target.value;
                if (field.name === 'phone') {
                  if (/^\d*$/.test(value) && value.length <= 10) {
                    setFormData({...formData, [field.name]: value});
                  }
                } else {
                  setFormData({...formData, [field.name]: value});
                }
              }}
              placeholder={field.placeholder}
              maxLength={field.name === 'phone' ? 10 : undefined}
              className="w-full bg-transparent border-b border-on-surface/10 py-3 pl-8 pb-3 font-headline text-lg md:text-xl text-on-surface outline-none focus:border-primary transition-all placeholder:text-on-surface/10"
            />
          </div>
        </div>
      ))}
    </div>
  </motion.section>
);

export const StepArchetypes = ({ formData, setFormData }) => (
  <motion.section 
    variants={stepVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-16 md:space-y-20"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-8 md:w-12 h-px bg-primary/30" />
      <h3 className="font-label text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-primary font-bold">II. Flavor Archetypes</h3>
    </div>
    
    <div className="space-y-8 md:space-y-10">
      <label className="font-brand text-3xl md:text-5xl font-light text-on-surface tracking-tight block">
        1. What is your <span className="italic text-gradient-gold">favorite chocolate flavour?</span>
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Dark Chocolate', img: '/dark-chocolate.png', desc: 'Bold, mysterious, and deeply resonant.' },
          { name: 'Classic Milk Chocolate', img: '/milk-chocolate.png', desc: 'Silky, comforting, and timelessly elegant.' },
          { name: 'White Chocolate', img: '/white-chocolate.png', desc: 'Velvet, delicate, and whisper-light.' },
        ].map((opt) => (
          <label key={opt.name} className={`relative block group cursor-pointer aspect-[4/5] md:aspect-[4/5] overflow-hidden rounded-sm transition-all duration-500 shadow-sm ${formData.flavour === opt.name ? 'ring-2 ring-primary ring-offset-4 ring-offset-surface scale-[1.02] shadow-xl' : 'opacity-80 hover:opacity-100'}`}>
            <input 
              required
              type="radio" 
              name="flavour" 
              className="peer absolute opacity-0" 
              value={opt.name}
              checked={formData.flavour === opt.name}
              onChange={(e) => setFormData({...formData, flavour: e.target.value})}
            />
            <img src={opt.img} alt={opt.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8 space-y-2 text-white">
               <h4 className="font-brand text-2xl md:text-3xl italic">{opt.name}</h4>
               <p className="font-body text-[9px] md:text-[10px] text-white/80 tracking-wider uppercase leading-relaxed">{opt.desc}</p>
            </div>
            {formData.flavour === opt.name && (
              <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
            )}
          </label>
        ))}
      </div>
    </div>

    <div className="space-y-8 md:space-y-10">
      <label className="font-brand text-3xl md:text-5xl font-light text-on-surface tracking-tight block">
        2. Which <span className="italic text-gradient-gold">fruit flavour</span> do you enjoy most in chocolate ?
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {['Coconut', 'Pineapple', 'Kiwi', 'Pineapple and Black Raisins', 'Blueberry'].map((opt) => (
          <label key={opt} className={`relative flex flex-col items-center justify-center gap-4 py-8 md:py-12 px-4 border transition-all rounded-sm text-center group bg-white/50 backdrop-blur-sm border-on-surface/5 hover:border-primary/40 hover:bg-white cursor-pointer ${formData.fruit === opt ? 'border-primary bg-white shadow-xl translate-y-[-4px]' : ''}`}>
            <input 
              required
              type="radio" 
              name="fruit" 
              className="peer absolute opacity-0" 
              value={opt}
              checked={formData.fruit === opt}
              onChange={(e) => setFormData({...formData, fruit: e.target.value})}
            />
            <span className={`font-label text-[9px] md:text-[10px] tracking-[0.2em] uppercase transition-colors ${formData.fruit === opt ? 'text-primary font-bold' : 'text-on-surface/40 group-hover:text-on-surface'}`}>
              {opt}
            </span>
            {formData.fruit === opt && <div className="absolute bottom-2 w-1 h-1 bg-primary rounded-full" />}
          </label>
        ))}
      </div>
    </div>
  </motion.section>
);

export const StepBrand = ({ formData, setFormData }) => (
  <motion.section 
    variants={stepVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-16 md:space-y-20"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-8 md:w-12 h-px bg-primary/30" />
      <h3 className="font-label text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-primary font-bold">III. Brand Affinity</h3>
    </div>

    <div className="space-y-10 md:space-y-12">
      <label className="font-brand text-2xl md:text-5xl font-light text-on-surface tracking-tight block text-center leading-snug">
        3.Do you prefer <span className="italic text-gradient-gold">velvet</span> over other brands
      </label>
      <div className="flex gap-4 md:gap-8 max-w-2xl mx-auto">
        {['Yes', 'No'].map((opt) => (
          <label key={opt} className={`flex-1 relative cursor-pointer group`}>
            <input 
              required
              type="radio" 
              name="brandPreference" 
              className="peer absolute opacity-0" 
              value={opt}
              checked={formData.brandPreference === opt}
              onChange={(e) => setFormData({...formData, brandPreference: e.target.value})}
            />
            <div className={`py-8 md:py-12 border rounded-sm flex items-center justify-center transition-all bg-white/40 shadow-sm ${formData.brandPreference === opt ? 'border-primary bg-white shadow-xl scale-[1.05]' : 'border-on-surface/5 text-on-surface/30 hover:border-primary/40 hover:text-on-surface'}`}>
              <span className="font-label text-xs md:text-sm tracking-[0.4em] md:tracking-[0.6em] uppercase font-bold">{opt}</span>
            </div>
          </label>
        ))}
      </div>
    </div>

    <div className="space-y-8 md:space-y-10">
      <label className="font-brand text-3xl md:text-5xl font-light text-on-surface tracking-tight block text-center">
         4. Which type of <span className="italic text-gradient-gold">fruit</span> do you prefer in chocolate ?
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {['Real fruit pieces', 'Preserved fruit pieces'].map((opt) => (
          <label key={opt} className={`relative flex items-center justify-between p-6 md:p-8 border transition-all group cursor-pointer rounded-sm ${formData.fruitType === opt ? 'border-primary/50 bg-white shadow-lg' : 'border-on-surface/5 bg-white/30'}`}>
            <input 
              required
              type="radio" 
              name="fruitType" 
              className="peer absolute opacity-0" 
              value={opt}
              checked={formData.fruitType === opt}
              onChange={(e) => setFormData({...formData, fruitType: e.target.value})}
            />
            <span className={`font-headline text-2xl md:text-3xl italic transition-colors ${formData.fruitType === opt ? 'text-on-surface' : 'text-on-surface/20'}`}>
              {opt}
            </span>
            <div className={`w-3 h-3 rounded-full border border-on-surface/20 transition-all ${formData.fruitType === opt ? 'bg-primary border-primary scale-125 md:scale-150 shadow-md' : ''}`} />
          </label>
        ))}
      </div>
    </div>
  </motion.section>
);

export const StepEssence = ({ formData, setFormData }) => (
  <motion.section 
    variants={stepVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-16 md:space-y-20"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-8 md:w-12 h-px bg-primary/30" />
      <h3 className="font-label text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-primary font-bold">IV. The Sweet Spot</h3>
    </div>

    <div className="space-y-8 md:space-y-10">
      <label className="font-brand text-3xl md:text-5xl font-light text-on-surface tracking-tight block">
        5. Which type of <span className="italic text-gradient-gold">sweetener</span> do you prefer?
      </label>
      <div className="flex flex-wrap gap-3 md:gap-4">
        {['Jaggery', 'Regular sugar', 'Low sugar', 'Sugar free', 'No preference'].map((opt) => (
          <label key={opt} className="relative cursor-pointer group flex-1 md:flex-initial min-w-[45%] md:min-w-0">
            <input 
              required
              type="radio" 
              name="sweetener" 
              className="peer absolute opacity-0" 
              value={opt}
              checked={formData.sweetener === opt}
              onChange={(e) => setFormData({...formData, sweetener: e.target.value})}
            />
            <div className={`px-4 md:px-8 py-4 border rounded-sm font-label text-[8px] md:text-[10px] tracking-widest uppercase transition-all text-center ${formData.sweetener === opt ? 'bg-gold-gradient text-white font-bold border-transparent shadow-xl translate-y-[-2px]' : 'border-on-surface/10 text-on-surface/40 hover:border-primary/40 hover:text-on-surface'}`}>
              {opt}
            </div>
          </label>
        ))}
      </div>
    </div>

    <div className="space-y-8 md:space-y-10">
      <label className="font-brand text-3xl md:text-5xl font-light text-on-surface tracking-tight block">
        6. What <span className="italic text-gradient-gold">influence your choice flavour</span> the most ?
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {['Taste', 'Brand name', 'Health benefits', 'Price', 'Packaging', 'Ingredients (natural/ real fruits)'].map((opt) => (
          <label key={opt} className={`p-6 md:p-8 border transition-all cursor-pointer relative group rounded-sm ${formData.factor === opt ? 'border-primary/50 bg-white shadow-lg' : 'border-on-surface/5 bg-white/30'}`}>
            <input 
              required
              type="radio" 
              name="factor" 
              className="peer absolute opacity-0" 
              value={opt}
              checked={formData.factor === opt}
              onChange={(e) => setFormData({...formData, factor: e.target.value})}
            />
            <div className="flex items-center gap-4">
              <div className={`w-1.5 h-1.5 rounded-full transition-all ${formData.factor === opt ? 'bg-primary scale-[1.5] md:scale-[2] shadow-md' : 'bg-on-surface/20'}`} />
              <span className={`font-label tracking-widest uppercase text-[9px] md:text-[10px] ${formData.factor === opt ? 'text-on-surface font-bold' : 'text-on-surface/40 group-hover:text-on-surface'}`}>
                {opt}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  </motion.section>
);

export const StepExploration = ({ formData, setFormData }) => (
  <motion.section 
    variants={stepVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-16 md:space-y-20"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-8 md:w-12 h-px bg-primary/30" />
      <h3 className="font-label text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-primary font-bold">V. Future Horizons</h3>
    </div>

    <div className="space-y-8 md:space-y-10">
      <label className="font-brand text-3xl md:text-5xl font-light text-on-surface tracking-tight block">
        7. Would you try a <span className="italic text-gradient-gold">new experimental chocolate flavour ?</span>
      </label>
      <div className="space-y-6 md:space-y-4">
        {['Yes, definitely', 'Maybe, if it sounds interesting', 'Only if recommended', 'No I prefer classic flavours'].map((opt) => (
          <label key={opt} className="flex items-center gap-4 md:gap-6 cursor-pointer group max-w-xl">
            <input 
              required
              type="radio" 
              name="experiment" 
              className="peer absolute opacity-0" 
              value={opt}
              checked={formData.experiment === opt}
              onChange={(e) => setFormData({...formData, experiment: e.target.value})}
            />
            <div className={`w-5 h-5 rounded-full border transition-all flex items-center justify-center flex-shrink-0 ${formData.experiment === opt ? 'bg-primary border-primary shadow-md' : 'border-on-surface/20 group-hover:border-primary/40'}`}>
              {formData.experiment === opt && <div className="w-2 h-2 bg-white rounded-full" />}
            </div>
            <span className={`font-body text-lg md:text-xl transition-all italic ${formData.experiment === opt ? 'text-on-surface' : 'text-on-surface/30 group-hover:text-on-surface/60'}`}>
              {opt}
            </span>
          </label>
        ))}
      </div>
    </div>

    <div className="space-y-8 md:space-y-10">
      <label className="font-brand text-3xl md:text-5xl font-light text-on-surface tracking-tight block text-center">
        8.Do you like the <span className="italic text-gradient-gold">fusion of chocolate?</span>
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {['Not Really', 'A Little', 'Loved it', 'Amazing'].map((opt) => (
          <label key={opt} className={`py-6 md:py-10 border transition-all text-center cursor-pointer rounded-sm group bg-white/40 ${formData.fusionLike === opt ? 'border-primary bg-white shadow-lg' : 'border-on-surface/5'}`}>
            <input 
              type="radio" 
              name="fusionLike" 
              className="peer absolute opacity-0" 
              value={opt}
              checked={formData.fusionLike === opt}
              onChange={(e) => setFormData({...formData, fusionLike: e.target.value})}
            />
            <span className={`font-label text-[10px] md:text-xs tracking-widest uppercase transition-colors ${formData.fusionLike === opt ? 'text-primary font-bold' : 'text-on-surface/20 group-hover:text-on-surface/60'}`}>
              {opt}
            </span>
          </label>
        ))}
      </div>
    </div>
  </motion.section>
);

export const StepInsights = ({ formData, setFormData }) => (
  <motion.section 
    variants={stepVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-12 md:space-y-16"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-8 md:w-12 h-px bg-primary/30" />
      <h3 className="font-label text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-primary font-bold">VI. Qualitative Impressions</h3>
    </div>

    <div className="space-y-8 md:space-y-10">
      <label className="font-brand text-2xl md:text-5xl font-light text-on-surface tracking-tight block leading-snug">
        9.What do you think about the <span className="italic text-gradient-gold">mix of smooth dark chocolate kiwi?</span>
      </label>
      <textarea 
        required
        value={formData.kiwiFeedback}
        onChange={(e) => setFormData({...formData, kiwiFeedback: e.target.value})}
        placeholder="Your answer"
        className="w-full bg-white/50 border border-on-surface/10 p-6 md:p-8 font-body text-sm md:text-base text-on-surface outline-none focus:border-primary transition-all placeholder:text-on-surface/20 rounded-sm min-h-[140px] md:min-h-[160px] italic shadow-inner backdrop-blur-sm"
      />
    </div>

    <div className="space-y-8 md:space-y-10">
      <label className="font-brand text-2xl md:text-5xl font-light text-on-surface tracking-tight block leading-snug">
        10.What do you think about the <span className="italic text-gradient-gold">mix of smooth dark chocolate pineapple and black raisins?</span>
      </label>
      <textarea 
        value={formData.pineappleFeedback}
        onChange={(e) => setFormData({...formData, pineappleFeedback: e.target.value})}
        placeholder="Your answer"
        className="w-full bg-white/50 border border-on-surface/10 p-6 md:p-8 font-body text-sm md:text-base text-on-surface outline-none focus:border-primary transition-all placeholder:text-on-surface/20 rounded-sm min-h-[140px] md:min-h-[160px] italic shadow-inner backdrop-blur-sm"
      />
    </div>
  </motion.section>
);
