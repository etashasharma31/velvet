import LegalLayout from '../../components/LegalLayout';

export default function Terms() {
  return (
    <LegalLayout 
      title="Terms of Service"
      seoProps={{
        title: "Terms of Service | Velvet Artisanal Chocolatier",
        description: "Official terms and conditions for using the Velvet & Fruits Company website and services. Transparency and trust in our artisanal journey."
      }}
    >
      <p className="font-body text-on-surface-variant italic text-lg text-center opacity-80 border-b border-on-surface/5 pb-12">
        By using our website, you agree to the following terms:
      </p>

      <div className="grid gap-12">
        <section className="space-y-4">
          <div className="flex items-baseline gap-4">
            <span className="font-headline text-primary text-2xl italic">01</span>
            <h2 className="font-headline text-2xl text-on-surface italic">Use of Website</h2>
          </div>
          <p className="font-body text-on-surface/70 leading-loose pl-12">
            You agree to use this website for lawful purposes only.
          </p>
        </section>

        <section className="space-y-4">
          <div className="flex items-baseline gap-4">
            <span className="font-headline text-primary text-2xl italic">02</span>
            <h2 className="font-headline text-2xl text-on-surface italic">Product Information</h2>
          </div>
          <p className="font-body text-on-surface/70 leading-loose pl-12">
            We try our best to display accurate product details. However, slight variations in color/design may occur.
          </p>
        </section>

        <section className="space-y-4">
          <div className="flex items-baseline gap-4">
            <span className="font-headline text-primary text-2xl italic">03</span>
            <h2 className="font-headline text-2xl text-on-surface italic">Pricing</h2>
          </div>
          <p className="font-body text-on-surface/70 leading-loose pl-12">
            Prices are subject to change without notice.
          </p>
        </section>

        <section className="space-y-4">
          <div className="flex items-baseline gap-4">
            <span className="font-headline text-primary text-2xl italic">04</span>
            <h2 className="font-headline text-2xl text-on-surface italic">Order Acceptance</h2>
          </div>
          <p className="font-body text-on-surface/70 leading-loose pl-12">
            We reserve the right to cancel or refuse any order due to availability or payment issues.
          </p>
        </section>

        <section className="space-y-4">
          <div className="flex items-baseline gap-4">
            <span className="font-headline text-primary text-2xl italic">05</span>
            <h2 className="font-headline text-2xl text-on-surface italic">Intellectual Property</h2>
          </div>
          <p className="font-body text-on-surface/70 leading-loose pl-12">
            All content (images, logos, text) belongs to Velvet & Fruits Company and cannot be used without permission.
          </p>
        </section>

        <section className="space-y-4 border-t border-on-surface/10 pt-12">
          <div className="flex items-baseline gap-4">
            <span className="font-headline text-primary text-2xl italic">06</span>
            <h2 className="font-headline text-2xl text-on-surface italic">Limitation of Liability</h2>
          </div>
          <p className="font-body text-on-surface/70 leading-loose pl-12">
            We are not responsible for any indirect damages resulting from the use of our website.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
