import { motion } from 'framer-motion';
import LegalLayout from '../../components/LegalLayout';

export default function Shipping() {
  return (
    <LegalLayout 
      title="Shipping & Returns"
      seoProps={{
        title: "Shipping & Returns | Logistics & Care",
        description: "Information about our artisanal shipping process, delivery timelines (1-3 days processing), and our returns policy at Fruits Company."
      }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-10"
      >
        {/* Shipping Policy */}
        <div className="space-y-10">
          <section className="space-y-4">
            <h2 className="font-headline text-xl text-on-surface italic">Shipping Policy</h2>
            <ul className="space-y-3 font-body text-on-surface/70 text-sm leading-relaxed">
              <li className="flex gap-4">
                <span className="text-primary italic">/</span>
                <span>Orders are processed within <span className="text-on-surface font-medium italic">1–3 business days</span></span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary italic">/</span>
                <span>Delivery time: <span className="text-on-surface font-medium italic">3–7 business days</span> depending on location</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary italic">/</span>
                <span>Shipping charges may vary based on location</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-headline text-xl text-on-surface italic">Returns & Exchanges</h2>
            <ul className="space-y-3 font-body text-on-surface/70 text-sm leading-relaxed">
              <li className="flex gap-4">
                <span className="text-primary italic">/</span>
                <span>Returns are accepted within <span className="text-on-surface font-medium italic">5–7 days</span> of delivery</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary italic">/</span>
                <span>Product must be <span className="text-on-surface font-medium italic">unused and in original condition</span></span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary italic">/</span>
                <span>Unboxing video may be required for damaged items</span>
              </li>
            </ul>
          </section>
        </div>

        {/* Returns & Refunds */}
        <div className="space-y-10">
          <section className="space-y-4">
            <h2 className="font-headline text-xl text-on-surface italic">Non-Returnable Items</h2>
            <ul className="space-y-3 font-body text-on-surface/70 text-sm leading-relaxed">
              <li className="flex gap-4">
                <span className="text-primary italic">/</span>
                <span>Customized products</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary italic">/</span>
                <span>Perishable goods (if applicable)</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-headline text-xl text-on-surface italic">Refunds</h2>
            <p className="font-body text-on-surface/70 text-sm leading-relaxed">
              Refunds will be processed within <span className="text-primary font-medium italic">5–10 business days</span> after approval. Refund will be credited to original payment method.
            </p>
          </section>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pt-16 border-t border-on-surface/10 text-center"
      >
        <div className="bg-surface-container-low p-8 max-w-xl mx-auto space-y-4 border border-on-surface/5">
          <h2 className="font-headline text-xl text-primary italic">Damaged or Wrong Product</h2>
          <p className="font-body text-on-surface/70 text-sm leading-relaxed">
            If you receive a damaged or incorrect product, contact us within <span className="text-on-surface font-medium italic border-b border-primary/30">24–48 hours</span> with proof.
          </p>
        </div>
      </motion.div>
    </LegalLayout>
  );
}
