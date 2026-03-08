import {
  ArrowRight,
  LineChart,
  Globe2,
  Activity,
  Cpu,
  FileSearch,
  Hammer,
  BrainCircuit,
  Leaf,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import AnimateOnScroll from "@/components/AnimateOnScroll";

import projectImage from "@/assets/project-showcase.jpg";
import Testimonials from "@/components/Testimonials";
import totalenergiesLogo from "@/assets/totalenergies-logo.png";
import kengenLogo from "@/assets/kengen-logo.png";
import bolloreLogo from "@/assets/bollore-logo.png";
import kpcLogo from "@/assets/kpc-logo.png";
import fieldWork1 from "@/assets/field-work-1.jpg";
import fieldWork3 from "@/assets/field-work-3.jpg";

import industrialPlant from "@/assets/industrial-plant.jpg";

const Home = () => {
  const services = [
    {
      icon: Activity,
      title: "General NDT",
      description: "Comprehensive non-destructive testing using magnetic particle, dye penetrant, ultrasonic, and radiographic methods for structural integrity assurance.",
      forText: "Oil & gas, power plants, refineries, marine",
      slug: "ndt-inspection-services",
      tag: "General NDT",
    },
    {
      icon: Cpu,
      title: "Advanced NDT",
      description: "Cutting-edge inspection techniques including Phased Array UT, TOFD, ACFM, and AUT for complex geometry and high-integrity assets.",
      forText: "Subsea, aerospace, high-pressure systems",
      slug: "phased-array-ultrasonic-testing",
      tag: "Advanced NDT",
    },
    {
      icon: FileSearch,
      title: "Engineering Assessments",
      description: "API 570, API 653, fitness-for-service evaluations and risk-based inspection programs to extend asset life and ensure code compliance.",
      forText: "Process plants, storage terminals, pipelines",
      slug: "api-570-piping-inspection-and-certification",
      tag: "Engineering Assessments",
    },
    {
      icon: Hammer,
      title: "Engineering & Fabrication",
      description: "Structural fabrication, tank construction, piping works and project management delivered to international codes and standards.",
      forText: "Industrial plants, refineries, construction projects",
      slug: "tank-calibration-services",
      tag: "Engineering & Fabrication",
    },
  ];

  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "1.8k", label: "Projects Delivered" },
    { value: "42", label: "Expert Engineers" },
    { value: "ISO 9001", label: "Certified" },
  ];
  const marqueeStats = [...stats, ...stats];

  const differentiators = [
    {
      icon: BrainCircuit,
      title: "Signature Delivery Experience",
      description:
        "Our cross-functional squads embed alongside your team to accelerate approvals, procurement and commissioning.",
    },
    {
      icon: LineChart,
      title: "Data-Driven Decisions",
      description:
        "Live project analytics and predictive modelling ensure you are always ahead of risk and budget curveballs.",
    },
    {
      icon: Leaf,
      title: "Sustainability by Design",
      description:
        "We engineer for carbon, water and energy performance from day zero, ensuring compliance and positive impact.",
    },
  ];

  const process = [
    {
      title: "Discover",
      description: "Immersive workshops to align scope, metrics and stakeholders from day one.",
    },
    {
      title: "Design",
      description: "Iterative co-design with digital twins, rapid prototyping and compliance reviews.",
    },
    {
      title: "Deliver",
      description: "On-site leadership coupled with smart monitoring to keep execution seamless.",
    },
    {
      title: "Optimize",
      description: "Operational intelligence, retro-commissioning and continuous performance tuning.",
    },
  ];

  const projects = [
    {
      title: "Regional Smart Logistics Hub",
      description:
        "A 120,000 sqm logistics campus integrating autonomous warehousing, renewable microgrids and resilient structures.",
      impact: "32% faster fulfilment, 18% energy reduction",
    },
    {
      title: "Urban Mixed-Use Tower",
      description:
        "Iconic high-rise featuring adaptive façade systems, community amenities and net-zero ready mechanical systems.",
      impact: "LEED Platinum pre-certified, 24-month delivery",
    },
    {
      title: "Industrial Utilities Upgrade",
      description:
        "Mission-critical plant revitalization ensuring continuity, safety compliance and digital oversight.",
      impact: "Zero downtime transition, predictive maintenance deployed",
    },
  ];

  const clientLogos = [
    { name: "TotalEnergies", logo: totalenergiesLogo, width: "w-28" },
    { name: "KenGen", logo: kengenLogo, width: "w-24" },
    { name: "Bolloré Africa Logistics", logo: bolloreLogo, width: "w-36" },
    { name: "KPC", logo: kpcLogo, width: "w-20" },
  ];

  const marqueeLogos = [...clientLogos, ...clientLogos];

  const transformationHighlights = [
    {
      icon: Globe2,
      title: "Immersive Digital Oversight",
      description:
        "Unified command centres with predictive analytics that surface insights for every stakeholder in real time.",
      stat: "98% uptime across active sites",
    },
    {
      icon: Leaf,
      title: "Regenerative Design Systems",
      description:
        "Low-carbon materials, adaptive envelopes and net-positive water strategies embedded at concept stage.",
      stat: "40% average energy intensity reduction",
    },
    {
      icon: ShieldCheck,
      title: "Lifecycle Assurance",
      description:
        "Asset integrity programmes, NDT and digital twins that extend operational life and mitigate unplanned downtime.",
      stat: "ISO 55001-aligned stewardship",
    },
  ];

  return (
    <div className="relative min-h-screen bg-background">
      {/* Theme Toggle */}
      <div className="fixed right-4 top-24 z-20">
        <ThemeToggle id="home-theme-toggle" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={industrialPlant}
            alt="Industrial engineering infrastructure"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-32">
          <AnimateOnScroll direction="left" className="max-w-2xl">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-primary">
              Engineering Excellence
            </span>
            
            <h1 className="mt-8 text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl">
              Building Tomorrow's
              <br />
              <span className="text-primary">Infrastructure</span> Today
            </h1>
            
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              We deliver comprehensive engineering solutions for businesses that need 
              reliable systems. From structural design to MEP, we create infrastructure 
              that scales with your growth, including advanced NDT and other engineering services.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" asChild className="rounded-xl px-8 shadow-lg shadow-primary/20">
                <Link to="/contact">
                  Start a Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-xl bg-background/80 px-8 backdrop-blur-sm"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="rounded-xl bg-[#1C2A5F] px-8 text-white shadow-lg hover:bg-[#16224d]"
              >
                <Link to="/project-gallery">View Our Projects</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 -mt-20 pb-16">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up" delay={200}>
            <div className="overflow-hidden rounded-3xl border border-transparent bg-transparent shadow-none">
              <div className="flex w-max items-center gap-4 px-6 py-6 motion-reduce:animate-none animate-marquee [animation-direction:reverse]">
                {marqueeStats.map((stat, index) => (
                  <div
                    key={`${stat.label}-${index}`}
                    className="min-w-[220px] rounded-2xl border border-border bg-card p-6 shadow-lg shadow-foreground/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span className="text-3xl font-bold text-primary">{stat.value}</span>
                    <span className="mt-2 block text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up">
            <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Trusted by industry leaders
            </p>
            <div className="logo-marquee overflow-hidden">
              <div className="logo-marquee-track flex w-max items-center gap-12">
                {marqueeLogos.map((client, index) => (
                  <img
                    key={`${client.name}-${index}`}
                    src={client.logo}
                    alt={client.name}
                    className={`${client.width} h-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0`}
                    loading="eager"
                    decoding="async"
                  />
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="right">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                What We Do
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 text-muted-foreground">
                Featured offerings pulled directly from our core services catalog.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, i) => (
              <AnimateOnScroll
                key={service.title}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 100}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 cursor-pointer"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <service.icon className="h-7 w-7 text-primary" />
                    <span className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <hr className="my-5 border-border" />
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">For:</span>{" "}
                    <span className="text-muted-foreground">{service.forText}</span>
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll direction="up" delay={300}>
            <div className="mt-12 text-center">
              <Button size="lg" asChild className="rounded-xl">
                <Link to="/services">
                  View All Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="left">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Why Choose Us
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
                What sets us apart
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-8 md:grid-cols-3">
            {differentiators.map((item, i) => (
              <AnimateOnScroll
                key={item.title}
                direction={i % 2 === 0 ? "right" : "left"}
                delay={i * 120}
              >
                <div className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <item.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground">{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project with Image */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimateOnScroll direction="left">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Featured Work
                </span>
                <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
                  Engineering excellence in action
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Our teams combine deep technical mastery with a human-centric approach. Every engagement 
                  delivers measurable outcomes and resilient systems.
                </p>

                <div className="mt-8 space-y-4">
                  {transformationHighlights.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <item.icon className="h-6 w-6 shrink-0 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button size="lg" asChild className="mt-8 rounded-xl">
                  <Link to="/industry-solutions">
                    View Industry Solutions <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={200}>
              <div className="relative">
                <img
                  src={projectImage}
                  alt="Engineering project showcase"
                  className="rounded-3xl shadow-2xl shadow-foreground/10"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  width={800}
                  height={600}
                />
                <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card p-6 shadow-xl">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="left">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Project Gallery
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
                Our work in the field
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-4 md:grid-cols-2">
            <AnimateOnScroll direction="left" delay={0}>
              <img
                src={fieldWork1}
                alt="Field work 1"
                className="h-72 w-full rounded-3xl object-cover shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                loading="eager"
                decoding="async"
              />
            </AnimateOnScroll>
            <AnimateOnScroll direction="right" delay={100}>
              <img
                src={fieldWork3}
                alt="Field work 3"
                className="h-72 w-full rounded-3xl object-cover shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                loading="eager"
                decoding="async"
              />
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll direction="up" delay={300}>
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg" asChild className="rounded-xl">
                <Link to="/project-gallery">View Full Gallery</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonials */}
      <AnimateOnScroll direction="right">
        <Testimonials />
      </AnimateOnScroll>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={industrialPlant} alt="" className="h-full w-full object-cover" loading="eager" decoding="async" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <AnimateOnScroll direction="up" className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Let's discuss how we can help you build infrastructure that drives real progress.
          </p>
          <Button
            size="lg"
            asChild
            className="mt-8 rounded-xl bg-primary px-8 text-primary-foreground hover:bg-primary/90"
          >
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </AnimateOnScroll>
      </section>
    </div>
  );
};

export default Home;
