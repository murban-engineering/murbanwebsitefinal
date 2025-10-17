import { Factory, Droplets, Zap, Ship, Building2, Truck, Fuel } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import industryBackground from "@/assets/industry-background.jpg";

const IndustrySolutions = () => {
  const industries = [
    {
      icon: Droplets,
      title: "Oil & Gas",
      description: "Comprehensive inspection and integrity solutions for upstream, midstream, and downstream operations.",
      services: [
        "Pipeline inspection and testing",
        "Storage tank calibration",
        "Pressure vessel inspection",
        "Corrosion monitoring",
      ],
    },
    {
      icon: Zap,
      title: "Energy & Power",
      description: "Ensuring safety and reliability for power generation facilities and renewable energy infrastructure.",
      services: [
        "Boiler inspection services",
        "Thermal power plant testing",
        "Wind turbine inspection",
        "Solar facility assessment",
      ],
    },
    {
      icon: Ship,
      title: "Marine & Maritime",
      description: "Specialized inspection services for vessels, offshore platforms, and port infrastructure.",
      services: [
        "Hull integrity testing",
        "Marine structure inspection",
        "Offshore platform assessment",
        "Port equipment certification",
      ],
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Quality assurance and asset integrity for industrial manufacturing facilities.",
      services: [
        "Equipment certification",
        "Production line inspection",
        "Material verification (PMI)",
        "Quality control testing",
      ],
    },
    {
      icon: Building2,
      title: "Infrastructure",
      description: "Structural integrity and safety inspection for critical infrastructure projects.",
      services: [
        "Bridge inspection",
        "Building structure assessment",
        "3D laser scanning",
        "Construction monitoring",
      ],
    },
    {
      icon: Truck,
      title: "Transportation",
      description: "Safety and compliance inspection for transportation equipment and facilities.",
      services: [
        "Lifting equipment certification",
        "Vehicle inspection",
        "Rail infrastructure testing",
        "Airport facility assessment",
      ],
    },
    {
      icon: Fuel,
      title: "Petrochemical",
      description: "Advanced NDT and integrity solutions for petrochemical plants and refineries.",
      services: [
        "Process equipment inspection",
        "Piping system certification",
        "Storage facility testing",
        "Risk-based inspection (RBI)",
      ],
    },
  ];

  return (
    <div 
      className="min-h-screen pt-20 relative"
      style={{
        backgroundImage: `url(${industryBackground})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/60 z-0" style={{ top: '0', left: '0', right: '0', bottom: '0' }} />
      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in text-white">
              Industry Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in">
              Tailored inspection and integrity solutions for diverse industries across Africa
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
                Industries We Serve
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Delivering specialized expertise across multiple sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-fade-in bg-card/90 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                      <industry.icon className="h-8 w-8 text-primary group-hover:text-white" />
                    </div>
                    <CardTitle className="text-2xl font-serif text-white">{industry.title}</CardTitle>
                    <CardDescription className="text-base text-white/70">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="flex items-start text-sm text-white/80">
                          <span className="text-primary mr-2">•</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-primary/90 backdrop-blur-sm text-white border-white/20">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
                  Ready to Discuss Your Industry Needs?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Our team of experts is ready to provide tailored solutions for your specific industry challenges.
                </p>
                <Button size="lg" variant="secondary" asChild className="text-lg">
                  <Link to="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndustrySolutions;
