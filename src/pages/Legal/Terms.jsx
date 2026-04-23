import LegalLayout from '../../components/LegalLayout';

export default function Terms() {
  return (
    <LegalLayout 
      title="Terms of Service"
      seoProps={{
        title: "Terms of Service | Artisanal Chocolatier",
        description: "Official terms and conditions for using the Fruits Company website and services. Transparency and trust in our artisanal journey."
      }}
    >
      <p className="font-body text-on-surface-variant italic text-base text-center opacity-80 border-b border-on-surface/5 pb-8">
        By using our website, you agree to the following terms:
      </p>

      <div className="grid gap-12">
        <section className="space-y-3">
          <div className="flex items-baseline gap-4">
            <span className="font-headline text-primary text-xl italic">01</span>
            <h2 className="font-headline text-xl text-on-surface italic">Use of Website</h2>
          </div>
          <p className="font-body text-on-surface/70 text-sm leading-relaxed pl-10">
            You agree to use this website for lawful purposes only.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-baseline gap-4">
            <span className="font-headline text-primary text-xl italic">02</span>
            <h2 className="font-headline text-xl text-on-surface italic">Product Information</h2>
          </div>
          <p className="font-body text-on-surface/70 text-sm leading-relaxed pl-10">
            We try our best to display accurate product details. However, slight variations in color/design may occur.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-baseline gap-4">
            <span className="font-headline text-primary text-xl italic">03</span>
            <h2 className="font-headline text-xl text-on-surface italic">Pricing</h2>
          </div>
          <p className="font-body text-on-surface/70 text-sm leading-relaxed pl-10">
            Prices are subject to change without notice.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-baseline gap-4">
            <span className="font-headline text-primary text-xl italic">04</span>
            <h2 className="font-headline text-xl text-on-surface italic">Order Acceptance</h2>
          </div>
          <p className="font-body text-on-surface/70 text-sm leading-relaxed pl-10">
            We reserve the right to cancel or refuse any order due to availability or payment issues.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-baseline gap-4">
            <span className="font-headline text-primary text-xl italic">05</span>
            <h2 className="font-headline text-xl text-on-surface italic">Intellectual Property</h2>
          </div>
          <p className="font-body text-on-surface/70 text-sm leading-relaxed pl-10">
            All content (images, logos, text) belongs to Fruits Company and cannot be used without permission.
          </p>
        </section>

        <section className="space-y-3 border-t border-on-surface/10 pt-10">
          <div className="flex items-baseline gap-4">
            <span className="font-headline text-primary text-xl italic">06</span>
            <h2 className="font-headline text-xl text-on-surface italic">Limitation of Liability</h2>
          </div>
          <p className="font-body text-on-surface/70 text-sm leading-relaxed pl-10">
            We are not responsible for any indirect damages resulting from the use of our website.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
