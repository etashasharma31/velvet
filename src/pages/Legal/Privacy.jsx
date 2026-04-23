import LegalLayout from '../../components/LegalLayout';

export default function Privacy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We may collect:",
      list: [
        "Name",
        "Phone number",
        "Email address",
        "Delivery address",
        "Payment details (securely processed via trusted payment gateways)"
      ]
    },
    {
      title: "2. How We Use Your Information",
      content: "Your information is used to:",
      list: [
        "Process and deliver your chocolate orders",
        "Send order updates and confirmations",
        "Improve our products and services"
      ]
    },
    {
      title: "3. Data Protection",
      content: "We use secure systems to protect your personal data. Your information is never sold or misused."
    },
    {
      title: "4. Third-Party Services",
      content: "We may share limited data with delivery partners and payment gateways to complete your order."
    },
    {
      title: "5. Consent",
      content: "By using our website, you agree to this Privacy Policy."
    }
  ];

  return (
    <LegalLayout 
      title="Privacy Policy"
      seoProps={{
        title: "Privacy Policy | Data & Security",
        description: "Our commitment to your privacy. Learn how Fruits Company handles and protects your personal information with transparency."
      }}
    >
      <p className="font-body text-on-surface-variant italic text-base text-center opacity-80 border-b border-on-surface/5 pb-8">
        At Fruits Company, we value your privacy and ensure your personal information is protected.
      </p>

      <div className="space-y-10">
        {sections.map((section, index) => (
          <section key={index} className="space-y-4">
            <h2 className="font-headline text-xl text-on-surface italic">{section.title}</h2>
            <div className="space-y-3">
              <p className="font-body text-on-surface/70 text-sm leading-relaxed">
                {section.content}
              </p>
              {section.list && (
                <ul className="grid gap-3 pl-4">
                  {section.list.map((item, i) => (
                    <li key={i} className="font-body text-on-surface/70 flex gap-4 items-center">
                      <span className="w-1.5 h-1.5 bg-primary/40 rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>
    </LegalLayout>
  );
}
