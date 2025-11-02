import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import totalenergiesLogo from "@/assets/totalenergies-logo.png";
import kengenLogo from "@/assets/kengen-logo.png";
import bolloreLogo from "@/assets/bollore-logo.png";
import kpcLogo from "@/assets/kpc-logo.png";

interface Testimonial {
  company: string;
  text: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      company: "TotalEnergies",
      text: "The level of HSE standards and problem solving is effecient",
    },
    {
      company: "TotalEnergies",
      text: "The pipeline inspection provided were thorough, timely and exceeded our expectations. Their use of advanced technology, combined with a highly skilled team, helped us identify critical issues early and avoid costly downtime.",
    },
    {
      company: "Bentworth Limited",
      text: "Good time management improved productivity and focus. Project completed as planned.",
    },
    {
      company: "TotalEnergies",
      text: "The custom-fabricated working platform delivered by the team was exceptional in both quality and design. It met all our safety standards, was completed on schedule, and integrated seamlessly into our project site.",
    },
    {
      company: "SGS",
      text: "The additivation of red dye at the vessels was executed with precision and efficiency. The process met all regulatory requirements, ensured consistent coloration, and did not disrupt our operational timeline. The team's expertise and seamless coordination helped us maintain product integrity and traceability throughout",
    },
    {
      company: "TotalEnergies",
      text: "The tank cleaning service was carried out with a high level of professionalism, safety, and efficiency. The team was well-prepared, adhered strictly to safety protocols, and completed the job ahead of schedule. Their attention to detail ensured the tanks were thoroughly cleaned and ready for inspection",
    },
    {
      company: "TotalEnergies",
      text: "The installation of the submersible pump was handled with exceptional expertise and efficiency. The team demonstrated strong technical knowledge, completed the setup on time, and ensured everything was fully operational before leaving the site.",
    },
    {
      company: "SGS",
      text: "The red dye injection process was executed with precision and full compliance with regulatory standards. The team ensured accurate dosing and zero disruption to our operations. Their technical expertise and commitment to quality made the entire process efficient and reliable.",
    },
    {
      company: "TotalEnergies",
      text: "The level of HSE standards and problem solving is effecient",
    },
  ];

  const clientLogos = [
    { name: "TotalEnergies", logo: totalenergiesLogo, width: "w-28" },
    { name: "KenGen", logo: kengenLogo, width: "w-24" },
    { name: "Bolloré Africa Logistics", logo: bolloreLogo, width: "w-36" },
    { name: "KPC", logo: kpcLogo, width: "w-20" },
  ];

  const marqueeLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-border/50 bg-gradient-card">
                    <CardContent className="p-8 md:p-12">
                      <Quote className="h-12 w-12 text-primary mb-6 opacity-50" />
                      <p className="text-lg md:text-xl mb-8 leading-relaxed text-foreground">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center">
                        <div className="font-semibold text-primary text-xl">
                          {testimonial.company}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Client Logos */}
        <div className="mt-16">
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-muted to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-muted to-transparent" />
            <div className="flex items-center gap-12 md:gap-16 animate-marquee will-change-transform">
              {marqueeLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 transition-transform duration-300 hover:scale-110 opacity-80 hover:opacity-100"
                  aria-hidden={index >= clientLogos.length}
                >
                  <img
                    src={logo.logo}
                    alt={`${logo.name} logo`}
                    className={`${logo.width} h-auto object-contain`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
