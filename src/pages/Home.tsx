import {
  ArrowRightIcon as ArrowRight,
  BarChartIcon as BarChart3,
  BuildingIcon as Building2,
  CheckCircleIcon as CheckCircle2,
  CompassIcon as Compass,
  ShieldIcon as Shield,
  SparklesIcon as Sparkles,
  UsersIcon as Users,
  WrenchIcon as Wrench,
} from "@/components/ui/icons";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";

import projectImage from "@/assets/project-showcase.jpg";
import Testimonials from "@/components/Testimonials";
import totalenergiesLogo from "@/assets/totalenergies-logo.png";
import kengenLogo from "@/assets/kengen-logo.png";
import bolloreLogo from "@/assets/bollore-logo.png";
import kpcLogo from "@/assets/kpc-logo.png";
import fieldWork1 from "@/assets/field-work-1.jpg";
import fieldWork3 from "@/assets/field-work-3.jpg";
import fieldWork4 from "@/assets/field-work-4.jpg";
import industrialPlant from "@/assets/industrial-plant.jpg";

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: "Structural Engineering",
      description: "Future-ready structures engineered with advanced simulation and modelling.",
      highlights: ["Seismic resilience", "Hybrid material systems", "Digital twin ready"],
    },
    {
      icon: Wrench,
      title: "MEP Systems",
      description: "High-performance mechanical, electrical and plumbing systems for smart facilities.",
      highlights: ["Net-zero ready", "Smart automation", "Lifecycle analytics"],
    },
    {
      icon: Shield,
      title: "Project Leadership",
      description: "Integrated delivery teams that align people, processes and technology.",
      highlights: ["Design-build expertise", "Risk mitigation", "Transparent dashboards"],
    },
    {
      icon: Users,
      title: "Advisory & Consulting",
      description: "Strategic engineering guidance for complex infrastructure ventures.",
      highlights: ["Sustainability roadmaps", "Feasibility studies", "Regulatory compliance"],
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
      icon: Sparkles,
      title: "Signature Delivery Experience",
      description:
        "Our cross-functional squads embed alongside your team to accelerate approvals, procurement and commissioning.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description:
        "Live project analytics and predictive modelling ensure you are always ahead of risk and budget curveballs.",
    },
    {
      icon: Compass,
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
      icon: Sparkles,
      title: "Immersive Digital Oversight",
      description:
        "Unified command centres with predictive analytics that surface insights for every stakeholder in real time.",
      stat: "98% uptime across active sites",
    },
    {
      icon: Compass,
      title: "Regenerative Design Systems",
      description:
        "Low-carbon materials, adaptive envelopes and net-positive water strategies embedded at concept stage.",
      stat: "40% average energy intensity reduction",
    },
    {
      icon: Shield,
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

      {/* Hero Section - Full width image with overlay */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={industrialPlant}
            alt="Industrial engineering infrastructure"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          {/* Clean gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 py-32">
          <div className="max-w-2xl">
            {/* Label */}
            <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-primary">
              Engineering Excellence
            </span>
            
            {/* Main Heading */}
            <h1 className="mt-8 text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl">
              Building Tomorrow's
              <br />
              <span className="text-primary">Infrastructure</span> Today
            </h1>
            
            {/* Description */}
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              We deliver comprehensive engineering solutions for businesses that need 
              reliable systems. From structural design to MEP, we create infrastructure 
              that scales with your growth, including advanced NDT and other engineering services.
            </p>
            
            {/* Buttons */}
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
          </div>
        </div>
      </section>

      {/* Stats Section - Left-to-right marquee */}
      <section className="relative z-10 -mt-20 pb-16">
        <div className="container mx-auto px-4">
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
        </div>
      </section>

      {/* Services Section - Clean grid layout */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Services
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
              Engineering services tailored to your needs
            </h2>
            <p className="mt-4 text-muted-foreground">
              From concept to commissioning, our teams create resilient systems that are effortless to operate.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                  <div className="mt-auto pt-6 space-y-2">
                    {service.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild className="rounded-xl">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Clean horizontal layout */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
              What sets us apart
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project with Image */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
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
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
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

            <div className="relative">
              <img
                src={projectImage}
                alt="Engineering project showcase"
                className="rounded-3xl shadow-2xl shadow-foreground/10"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card p-6 shadow-xl">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Process
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
              How we deliver results
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By / Client Logos */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
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
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Project Gallery
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
              Our work in the field
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <img
              src={fieldWork1}
              alt="Field work 1"
              className="h-64 w-full rounded-2xl object-cover shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
            <img
              src={fieldWork3}
              alt="Field work 3"
              className="h-64 w-full rounded-2xl object-cover shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
            <img
              src={fieldWork4}
              alt="Field work 4"
              className="h-64 w-full rounded-2xl object-cover shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild className="rounded-xl">
              <Link to="/project-gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-primary-foreground md:text-4xl">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Let's discuss how we can help you build infrastructure that drives real progress.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="mt-8 rounded-xl bg-background text-foreground hover:bg-background/90"
          >
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
