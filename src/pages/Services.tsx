import {
  ShieldCheck,
  Gauge,
  GitBranch,
  Database,
  Disc,
  ScanLine,
  Activity,
  Magnet,
  Lightbulb,
  Droplet,
  Radio,
  Paintbrush,
  TestTube,
  Grid3x3,
  Scan,
  Thermometer,
  Cpu,
  CheckCircle,
  TrendingUp,
  Flame,
  ArrowUp,
  Wind,
  CircleGauge,
  Map,
  Globe,
  Hammer,
  Plane,
  Ruler,
  ShoppingCart,
  Settings,
  Building2,
  Zap,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import "./Services.css";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type ServiceDetail = {
  label: string;
  breadcrumb: string[];
  headline: string;
  description: string;
  sections?: Array<{
    title: string;
    items: string[];
  }>;
  relatedServices?: string[];
};

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="parent">
      <div className="card">
        <div className="logo" aria-hidden="true">
          <span className="circle circle1" />
          <span className="circle circle2" />
          <span className="circle circle3" />
          <span className="circle circle4" />
          <span className="circle circle5">
            <Icon className="lucide-icon" strokeWidth={2.5} />
          </span>
        </div>
        <div className="glass" />
        <div className="content">
          <span className="title">{title}</span>
          <span className="text">{description}</span>
        </div>
        <div className="bottom">
          <div className="social-buttons-container" aria-hidden="true">
            <button className="social-button" type="button" tabIndex={-1}>
              <Icon className="lucide-icon" strokeWidth={2.5} />
            </button>
          </div>
          <div className="view-more">
            <Link to="/contact" className="view-more-button">
              Read more
            </Link>
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const ndtServices = [
    {
      icon: ShieldCheck,
      title: "NDT Inspection Services",
      description: "Full-scope Non-Destructive Testing coverage tailored to your assets and regulations.",
    },
    {
      icon: Gauge,
      title: "Tank Calibration Services",
      description: "Accurate volume measurement and tank calibration across all storage configurations.",
    },
    {
      icon: GitBranch,
      title: "API 570 Piping Inspection and Certification",
      description: "Piping system inspection and certification to maintain full API 570 compliance.",
    },
    {
      icon: Database,
      title: "API 653 Aboveground Storage Tank Inspection and Certification",
      description: "Tank integrity inspections that deliver official API 653 certification and reporting.",
    },
    {
      icon: Disc,
      title: "API 510 Pressure Vessel Inspection",
      description: "Pressure vessel safety verification with detailed API 510 compliance documentation.",
    },
    {
      icon: ScanLine,
      title: "Ultrasonic Flaw Testing C-Scan",
      description: "Detailed flaw mapping using advanced ultrasonic C-scan imaging techniques.",
    },
    {
      icon: Activity,
      title: "Ultrasonic Flaw Testing B-Scan",
      description: "Internal defect detection and profiling delivered through precision B-scan testing.",
    },
    {
      icon: Magnet,
      title: "Magnetic Particle Testing",
      description: "Surface flaw detection using powerful magnetic particle inspection methods.",
    },
    {
      icon: Lightbulb,
      title: "Fluorescent Magnet Particle Testing",
      description: "Crack detection enhanced with fluorescent indicators and ultraviolet inspection.",
    },
    {
      icon: Droplet,
      title: "Dye Penetrant Testing",
      description: "Reliable surface-breaking flaw detection with visible and fluorescent dye systems.",
    },
    {
      icon: Radio,
      title: "Murban RT Services",
      description: "Radiographic testing services that expose hidden structural flaws with clarity.",
    },
    {
      icon: Paintbrush,
      title: "Paint & Coating Inspection",
      description: "Checking protective coating thickness and quality to extend asset life.",
    },
    {
      icon: TestTube,
      title: "Positive Material Identification Testing",
      description: "Verify alloy composition quickly with positive material identification technology.",
    },
    {
      icon: Grid3x3,
      title: "Murban Phased Array Testing",
      description: "Advanced phased array ultrasonics for complex geometry and high-resolution flaw detection.",
    },
    {
      icon: Scan,
      title: "3D Laser Scanning Services",
      description: "Precise 3D measurements to support modeling, fit-up, and structural analysis.",
    },
    {
      icon: Thermometer,
      title: "Thermal Camera Inspection",
      description: "Heat mapping inspections that reveal thermal anomalies before they become failures.",
    },
    {
      icon: Cpu,
      title: "Alternating Current Field Measurement",
      description: "Surface crack detection with the precision of advanced AC field measurement.",
    },
    {
      icon: CheckCircle,
      title: "API 579 Murban Fitness for Service",
      description: "Evaluate equipment readiness and remaining life for confident continued service.",
    },
    {
      icon: TrendingUp,
      title: "API 580 Murban Risk Based Inspection",
      description: "Risk-based inspection strategies prioritizing safety-critical assets and intervals.",
    },
    {
      icon: Flame,
      title: "Boiler Inspection Services",
      description: "Thorough inspections that keep boiler systems safe, efficient, and compliant.",
    },
    {
      icon: ArrowUp,
      title: "Lifting Equipment Thorough Examination and Certification",
      description: "Safe lifting equipment checks paired with formal certification packages.",
    },
    {
      icon: Wind,
      title: "Murban Gas Detection",
      description: "Gas leaks identified using continuously monitored, advanced detection sensors.",
    },
    {
      icon: CircleGauge,
      title: "Murban Pressure Testing",
      description: "Verify system strength and tightness through controlled pressure testing.",
    },
    {
      icon: Map,
      title: "Floormap 3D MFL Scanning",
      description: "3D magnetic flux leakage scanning that pinpoints tank floor defects with precision.",
    },
    {
      icon: Globe,
      title: "Sphere Tank Inspections",
      description: "Inspection of spherical tanks with detailed structural and safety reporting.",
    },
    {
      icon: Hammer,
      title: "Surface Hardness Testing",
      description: "Measuring metal surface strength to validate fabrication quality and wear resistance.",
    },
    {
      icon: Plane,
      title: "Murban UAV Inspection",
      description: "Aerial inspection using drone-based technology to access challenging environments.",
    },
  ];

  const fabricationServices = [
    {
      icon: Ruler,
      title: "Detailed Engineering",
      description: "Technical planning, design, and documentation for industrial projects.",
    },
    {
      icon: ShoppingCart,
      title: "Procurement",
      description: "Strategic sourcing of high-quality materials and equipment to meet project requirements.",
    },
    {
      icon: Settings,
      title: "Fabrication",
      description: "Precision cutting, welding, and assembly of custom metal structures and components.",
    },
    {
      icon: Building2,
      title: "Construction & Erection",
      description: "On-site assembly, erection, and installation of fabricated structures and systems.",
    },
    {
      icon: Zap,
      title: "Specialized Welding",
      description: "Advanced welding methods (TIG, MIG, SMAW, SAW) for critical and specialized applications.",
    },
    {
      icon: Sparkles,
      title: "Surface Preparation & Paint Works",
      description: "Professional surface cleaning, coating, and industrial painting for corrosion protection and durability.",
    },
  ];

  const [selectedService, setSelectedService] = useState<string>("Tank Calibration Services");

  const allServices = [...ndtServices, ...fabricationServices];

  const serviceDetails: Record<string, ServiceDetail> = {
    "Tank Calibration Services": {
      label: "Tank Calibration Service",
      breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
      headline: "Precision Tank Calibration & Volume Verification",
      description:
        "Tank calibration is essential for ensuring accurate volume measurements and compliance with industry standards. Murban Engineering specializes in Tank Calibration Services, utilizing precise methods and equipment to calibrate your tanks accurately. Our services help you maintain compliance, minimize discrepancies in volume measurements, and ensure efficient operations in various industries, including oil and gas, chemicals, and more.",
      sections: [
        {
          title: "Advantages",
          items: [
            "Ensures precise measurement accuracy for equipment and machinery using laser technology.",
            "Facilitates calibration of dimensional, angular, and positional parameters with high precision.",
            "Enhances quality control by minimizing measurement errors and ensuring traceability.",
            "Supports compliance with industry standards and regulatory requirements.",
          ],
        },
      ],
      relatedServices: [
        "Alternating Current Field Measurement",
        "API 579 Murban Fitness for Service",
        "API 653 Above Ground Storage Tank Inspection",
        "API 580 Murban Risk Based Service",
        "Boiler Inspection Service",
        "Lifting Equipment Thorough Examination and Certification",
        "RT Radiographic Services",
        "Magnetic Particle Testing",
        "Surface Hardness Testing",
        "Dye Penetrant Testing",
        "Fluorescent Magnet Particle Testing",
        "Floormap 3D MFL Scanning",
        "Paint and Coating Inspection",
        "PMI Testing",
        "Murban SIMS Tank Inspection Software",
        "Sphere Tank Inspections",
        "3D Laser Scanning Services",
        "Murban Tank Inspection Database",
        "Thermal Camera Inspection",
        "Pressure Testing",
        "UAV Drone Inspection",
        "Fabrication and Engineering Services",
        "Ultrasonic Flaw Testing C Scan",
        "Murban Phased Array Testing",
        "Ultrasonic Thickness Measurement",
        "Visual Inspection",
        "API 510 Pressure Vessel Inspection",
        "API 570 Piping Inspection",
        "Gas Detection",
      ],
    },
  };

  const selectedDetail = serviceDetails[selectedService];
  const selectedSummary = allServices.find((service) => service.title === selectedService);

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 text-secondary-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/60 to-secondary/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_55%)]" />
        <div className="container relative mx-auto px-4 text-center">
          <Badge className="mb-6 border border-white/40 bg-white/20 text-secondary-foreground backdrop-blur-sm">
            Murban Inspection & Engineering
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Precision Inspection & Engineering Services
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto text-secondary-foreground/90">
            Comprehensive Non-Destructive Testing and turnkey engineering support to keep critical infrastructure running at peak performance.
          </p>
        </div>
        <div className="pointer-events-none absolute -bottom-16 right-6 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
        <div className="pointer-events-none absolute -top-10 left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      </section>

      {/* Service Spotlight Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.15),_transparent_65%)]" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <Badge className="mb-4 bg-primary/10 text-primary">Service Spotlight</Badge>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Explore Our Specialized Capabilities
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Choose a service to see how Murban Engineering delivers precision, compliance, and dependable results for your
              assets.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[320px_1fr] items-start">
            <div className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur-xl p-6 shadow-lg">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">Service Directory</h3>
                <span className="text-sm text-muted-foreground">{allServices.length} services</span>
              </div>
              <div className="space-y-2 max-h-[28rem] overflow-y-auto pr-1">
                {allServices.map((service) => {
                  const isActive = selectedService === service.title;
                  const Icon = service.icon;

                  return (
                    <button
                      key={service.title}
                      type="button"
                      onClick={() => setSelectedService(service.title)}
                      className={`w-full rounded-2xl border px-4 py-3 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                        isActive
                          ? "border-primary bg-primary text-primary-foreground shadow-md"
                          : "border-transparent bg-muted/40 text-muted-foreground hover:bg-muted/70"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                            isActive ? "border-white/40 bg-white/10" : "border-border/60 bg-background"
                          }`}
                        >
                          <Icon className="h-5 w-5" strokeWidth={2.5} />
                        </span>
                        <div>
                          <p className="font-semibold leading-snug">{service.title}</p>
                          <p className="text-sm opacity-80 leading-snug">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-border/60 bg-card/80 backdrop-blur-xl p-8 shadow-xl">
              <div className="flex flex-col gap-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                      {selectedDetail?.label ?? selectedService}
                    </span>
                    {selectedDetail?.breadcrumb && (
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        {selectedDetail.breadcrumb.map((crumb, index) => (
                          <span key={crumb} className="flex items-center gap-2">
                            {index > 0 && <span className="opacity-70">/</span>}
                            <span>{crumb}</span>
                          </span>
                        ))}
                        <span className="opacity-70">/</span>
                        <span className="text-foreground font-medium">{selectedDetail?.label ?? selectedService}</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                    {selectedDetail?.headline ?? selectedService}
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {selectedDetail?.description ?? selectedSummary?.description}
                  </p>
                </div>

                {selectedDetail?.sections?.map((section) => (
                  <div key={section.title} className="rounded-2xl border border-border/50 bg-background/60 p-6">
                    <h4 className="text-xl font-semibold mb-4 text-foreground">{section.title}</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {selectedDetail?.relatedServices && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Related Services We Offer</h4>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {selectedDetail.relatedServices.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 rounded-xl border border-border/40 bg-background/60 px-4 py-2 text-sm text-muted-foreground"
                        >
                          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                          <span className="leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NDT Services Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_60%)]" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              🔧 NDT Inspection & Testing Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Delivering advanced inspection programs that safeguard assets, reduce downtime, and keep your facilities compliant with international standards.
            </p>
          </div>

          <div className="services-grid">
            {ndtServices.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fabrication Services Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-muted/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.15),_transparent_60%)]" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <Badge className="mb-4 bg-primary/10 text-primary">Fabrication and Engineering Services</Badge>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              ⚙️ Murban Engineering and Fabrications Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Complete, turnkey solutions covering detailed engineering, procurement, fabrication, and on-site execution — delivered with premium finishes and precision quality control.
            </p>
          </div>

          <div className="services-grid">
            {fabricationServices.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden border-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary text-secondary-foreground shadow-[0_30px_60px_-40px_rgba(37,99,235,0.8)]">
            <CardContent className="relative px-6 py-16 md:px-16 text-center">
              <div className="absolute -left-12 top-1/2 hidden h-32 w-32 -translate-y-1/2 rounded-full bg-white/10 blur-2xl md:block" />
              <div className="absolute -right-16 top-10 hidden h-36 w-36 rounded-full bg-white/10 blur-2xl md:block" />
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                Let's Build Something Great Together
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Ready to start your next project? Contact our team to discover how Murban's inspection and engineering experts can bring your vision to life with safety and precision.
              </p>
              <Button size="lg" variant="secondary" asChild className="text-base md:text-lg">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
