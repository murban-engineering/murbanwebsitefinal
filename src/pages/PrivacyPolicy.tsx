import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Privacy &amp; Policy
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Protecting your information and building trust
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            Murban Engineering Services safeguards client and partner information with
            the same rigor we apply to our inspection and engineering assignments. This
            policy outlines how we collect, store, and use personal data in line with
            applicable regulations and our commitment to transparency.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Information we collect
          </h2>
          <p className="text-muted-foreground">
            We collect details provided through contact forms, project onboarding, and
            training registrations. This may include contact names, company
            information, email addresses, phone numbers, and documentation relevant to
            service delivery.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            How we use your data
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Delivering inspection and engineering services.</li>
            <li>Coordinating training, certification, and compliance reporting.</li>
            <li>Responding to enquiries and providing project updates.</li>
            <li>Improving our offerings through aggregated insights.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Your privacy choices
          </h2>
          <p className="text-muted-foreground">
            You can request access to, correction of, or deletion of your personal data
            by contacting our team at
            <a href="mailto:info@murban-eng.com" className="ml-1 text-primary underline-offset-4 hover:underline">
              info@murban-eng.com
            </a>
            . We respond promptly and transparently to all privacy-related requests.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Staying informed
          </h2>
          <p className="text-muted-foreground">
            We update this policy as regulations evolve or our service delivery
            processes change. Significant updates are highlighted on this page, and we
            encourage you to review it periodically.
          </p>
        </section>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground">
            Need more details?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Visit our
            <Link to="/faq" className="mx-1 text-primary underline-offset-4 hover:underline">
              FAQ page
            </Link>
            for quick answers, or
            <Link to="/contact" className="mx-1 text-primary underline-offset-4 hover:underline">
              contact our team
            </Link>
            for personalised assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
