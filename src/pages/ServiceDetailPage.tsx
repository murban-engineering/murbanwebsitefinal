import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ServiceSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

interface ServicePageContent {
  title: string;
  badge: string;
  intro: string[];
  sections?: ServiceSection[];
}

const servicePageContent: Record<string, ServicePageContent> = {
  "detailed-engineering": {
    title: "Detailed Engineering",
    badge: "Engineering & Fabrication",
    intro: [
      "Our experienced engineers provide comprehensive design and drafting services, including structural analysis, layout plans, material selection, and comprehensive project documentation.",
      "We ensure that all designs comply with the highest quality and safety standards in the industry.",
    ],
    sections: [
      {
        heading: "What We Deliver",
        paragraphs: [
          "Every engineering package is tailored to site conditions, project objectives, and regulatory requirements. From concept to as-built, we provide detailed drawings, calculations, and documentation to keep construction moving without delays.",
        ],
      },
    ],
  },
  "surface-preparation-and-paint-works": {
    title: "Surface Preparation and Paint Works",
    badge: "Engineering & Fabrication",
    intro: [
      "Murban Engineering provides comprehensive surface preparation and coating services for all fabricated steelwork, pipelines, and structures. We use advanced methods like abrasive blasting and chemical treatment to ensure the best adhesion for coatings.",
      "We then apply high-performance coatings, ensuring long-term protection against corrosion, especially in harsh environments such as offshore and industrial plants.",
    ],
    sections: [
      {
        heading: "Quality-Focused Finishing",
        paragraphs: [
          "Our teams follow rigorous surface profile and coating thickness controls, delivering finishes that maintain asset life and reduce lifecycle maintenance costs.",
        ],
      },
    ],
  },
  fabrication: {
    title: "Fabrication",
    badge: "Engineering & Fabrication",
    intro: [
      "We specialize in the fabrication of complex and heavy structural steel components, such as platforms, supports, tanks, and pressure vessels. Our state-of-the-art facilities are equipped with advanced technology, allowing us to provide precision fabrication services to meet the specific needs of each project.",
    ],
    sections: [
      {
        heading: "Our Services Include",
        list: [
          "Steel Fabrication: Structural steel, plate work, beams, frames, and custom steel components.",
          "Pressure Vessel Fabrication: Designed and manufactured to meet industry codes and regulations, particularly for the Oil and Gas sector.",
          "Pipe Spooling & Prefabrication: Pipework solutions that meet the rigorous demands of the energy sector.",
          "Hydrates and Specialty Welding: Utilization of advanced welding techniques for intricate and specialized requirements.",
        ],
      },
    ],
  },
  procurement: {
    title: "Procurement",
    badge: "Engineering & Fabrication",
    intro: [
      "Murban Engineering handles the procurement of high-quality raw materials and components, sourcing from trusted suppliers and ensuring that all materials meet the technical specifications for each project.",
      "We ensure timely delivery and cost efficiency in all procurement processes.",
    ],
    sections: [
      {
        heading: "Supply Chain Assurance",
        paragraphs: [
          "With dedicated sourcing specialists and established supplier relationships, we coordinate material logistics so fabrication and site teams receive what they need, when they need it.",
        ],
      },
    ],
  },
  "specialized-welding": {
    title: "Specialized Welding",
    badge: "Engineering & Fabrication",
    intro: [
      "Our fabrication team is skilled in a wide range of specialized welding techniques, including TIG, MIG, SMAW, and submerged arc welding, ensuring the integrity and strength of every component fabricated.",
      "We follow strict adherence to API welding codes and other relevant standards, ensuring the highest quality welds on every project.",
    ],
    sections: [
      {
        heading: "Certified Expertise",
        paragraphs: [
          "Qualified welders, procedure qualifications, and continuous inspection deliver consistent quality across every joint and process.",
        ],
      },
    ],
  },
  "construction-and-erection": {
    title: "Construction and Erection",
    badge: "Engineering & Fabrication",
    intro: [
      "We offer full erection services for large-scale industrial projects, ensuring the safe and efficient assembly of steel structures, pipelines, and storage tanks.",
      "Our skilled team ensures all structures are erected with precision and comply with the latest health, safety, and regulatory standards.",
    ],
    sections: [
      {
        heading: "Safe, Efficient Delivery",
        paragraphs: [
          "Coordinated site execution, lift planning, and quality surveillance keep installation phases on schedule and compliant from start to finish.",
        ],
      },
    ],
  },
};

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !servicePageContent[slug]) {
    return <Navigate to="/services" replace />;
  }

  const { title, badge, intro, sections } = servicePageContent[slug];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <nav className="mb-8 flex items-center justify-between">
          <Button asChild variant="ghost">
            <Link to="/services" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to services
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/contact" className="inline-flex items-center gap-2">
              Discuss your project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </nav>

        <div className="mx-auto max-w-4xl space-y-8">
          <header className="space-y-4">
            <Badge className="bg-primary/10 text-primary">{badge}</Badge>
            <h1 className="text-4xl font-serif font-bold text-foreground md:text-5xl">
              {title}
            </h1>
            <div className="space-y-4 text-lg text-muted-foreground">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </header>

          {sections?.map((section) => (
            <section
              key={section.heading}
              className="rounded-3xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-semibold text-foreground">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-base text-muted-foreground">
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.list && (
                  <ul className="space-y-3">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
