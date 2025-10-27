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
  Sparkles
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ndtServices.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border border-border/50 bg-card/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_20px_45px_-25px_rgba(37,99,235,0.65)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-serif text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {fabricationServices.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border border-border/40 bg-background/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_25px_55px_-30px_rgba(14,116,144,0.6)]"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                </div>
                <CardHeader className="relative space-y-5">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-serif text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
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
