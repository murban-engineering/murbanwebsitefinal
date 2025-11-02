const faqs = [
  {
    question: "What services fall under Murban Inspection Services?",
    answer:
      "Our inspection division specialises in advanced non-destructive testing, inspection planning, and certification services across piping, tanks, pressure vessels, and lifting equipment.",
  },
  {
    question: "How does Murban Engineering Services support projects?",
    answer:
      "The engineering division delivers detailed engineering, fabrication, and construction support while coordinating with our inspection teams to maintain quality and compliance.",
  },
  {
    question: "Do you offer on-site training?",
    answer:
      "Yes. We invest heavily in developing our team through internal knowledge sharing and accredited external programmes, and we extend that expertise to client teams when needed.",
  },
  {
    question: "How can I request a proposal?",
    answer:
      "Submit your requirements through our contact page or email info@murban-eng.com. Our specialists will review the scope and respond with a tailored proposal.",
  },
];

const Faq = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-12">
        <header className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">FAQ</p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Answers to common questions
          </h1>
          <p className="text-base text-muted-foreground">
            Learn more about how Murban Inspection Services and Murban Engineering Services partner with clients across East
            Africa and beyond.
          </p>
        </header>

        <dl className="space-y-6">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-lg border bg-card p-6 text-left">
              <dt className="text-lg font-semibold text-foreground">{item.question}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Faq;
