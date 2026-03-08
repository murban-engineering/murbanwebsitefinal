import { CircleCheckBig } from "lucide-react";
import magneticTesting from "@/assets/magnetic-testing.jpg";

const WhyChooseUs = () => {
  const reasons = [
    "Certified expertise in NDT and asset integrity across multiple industries.",
    "Advanced inspection technologies including PAUT, TOFD, MFL, and UAV systems.",
    "Regional presence with operations across Africa.",
    "Strong focus on safety, compliance, and international standards.",
    "End-to-end services from inspections to engineering solutions.",
    "Client-first mindset with tailored support and rapid response teams.",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in order-2 lg:order-1">
            <img
              src={magneticTesting}
              alt="Industrial Equipment"
              className="rounded-lg shadow-xl w-full h-auto"
              loading="lazy"
              decoding="async"
              width={800}
              height={600}
            />
          </div>
          <div className="animate-fade-in order-1 lg:order-2">
            <div className="mb-4">
              <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                Why Choose Us ?
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              Why clients choose Murban Engineering
            </h2>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <CircleCheckBig className="h-6 w-6 text-foreground mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
