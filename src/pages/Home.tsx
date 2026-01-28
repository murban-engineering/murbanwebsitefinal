import {
  ArrowRightIcon as ArrowRight,
  BarChartIcon as BarChart3,
  BuildingIcon as Building2,
  CheckCircleIcon as CheckCircle2,
  CompassIcon as Compass,
  LayersIcon as Layers,
  LightbulbIcon as Lightbulb,
  ShieldIcon as Shield,
  SparklesIcon as Sparkles,
  SplineIcon as Spline,
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
    { value: "25+", label: "Years Engineering Landmarks" },
    { value: "1.8k", label: "Projects Delivered" },
    { value: "42", label: "Specialist Engineers" },
    { value: "ISO 9001", label: "Certified Excellence" },
  ];

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

  const insights = [
    {
      title: "Decarbonizing Industrial Assets",
      description: "Frameworks for transforming existing facilities into low-carbon powerhouses.",
      icon: Layers,
    },
    {
      title: "Digital Twins for Smarter Operations",
      description: "How real-time models unlock visibility across the project lifecycle.",
      icon: Spline,
    },
    {
      title: "Collaborative Delivery Playbook",
      description: "Integrating designers, builders and owners to unlock speed and certainty.",
      icon: Lightbulb,
    },
  ];

  const clientLogos = [
    { name: "TotalEnergies", logo: totalenergiesLogo, width: "w-28" },
    { name: "KenGen", logo: kengenLogo, width: "w-24" },
    { name: "Bolloré Africa Logistics", logo: bolloreLogo, width: "w-36" },
    { name: "KPC", logo: kpcLogo, width: "w-20" },
  ];

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
      <div className="relative">
        {/* Theme Toggle */}
        <div className="absolute right-4 top-24 z-20">
          <ThemeToggle id="home-theme-toggle" />
        </div>

        {/* Hero Section - Clean minimal design */}
        <section className="pt-32 pb-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              {/* Label */}
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Engineering Solutions Company
              </span>
              
              {/* Main Heading - Two-tone style */}
              <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-foreground">We build infrastructure</span>
                <br />
                <span className="text-muted-foreground">that drives real progress.</span>
              </h1>
              
              {/* Description */}
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                We deliver comprehensive engineering solutions for businesses that need systems they can
                rely on. From structural design to MEP systems, we partner with clients to create
                infrastructure that works reliably and scales with growth.
              </p>
              
              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button size="lg" asChild className="rounded-lg px-8 text-base">
                  <Link to="/contact">
                    Start a Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-lg border-border px-8 text-base hover:bg-muted"
                >
                  <Link to="/services">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Row - Marquee cards */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden">
              <div className="flex w-max animate-marquee gap-6">
                <div className="flex gap-6 pr-6">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="min-w-[220px] rounded-xl border border-border bg-background p-6"
                    >
                      <span className="text-3xl font-bold text-foreground md:text-4xl">{stat.value}</span>
                      <span className="mt-2 block text-sm text-muted-foreground">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-6 pr-6" aria-hidden="true">
                  {stats.map((stat) => (
                    <div
                      key={`${stat.label}-duplicate`}
                      className="min-w-[220px] rounded-xl border border-border bg-background p-6"
                    >
                      <span className="text-3xl font-bold text-foreground md:text-4xl">{stat.value}</span>
                      <span className="mt-2 block text-sm text-muted-foreground">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Modern Delivery Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-primary/10 to-transparent -z-10" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-muted/30 via-background to-background" />
          <div className="container mx-auto px-4">
            <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_1fr]">
              <div className="space-y-6">
                <Badge variant="secondary" className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary-foreground">
                  <span className="flex h-2 w-2 rounded-full bg-secondary/80" /> Future-forward delivery
                </Badge>
                <h2 className="text-4xl font-serif font-bold md:text-5xl">Signature frameworks built for modern infrastructure</h2>
                <p className="text-lg text-muted-foreground">
                  Our integrated squads pair advanced modelling, sustainability science and on-site intelligence to orchestrate
                  transformational programmes with certainty.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="border-primary/40 bg-primary/10 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    AI-assisted coordination
                  </Badge>
                  <Badge variant="outline" className="border-secondary/30 bg-secondary/10 text-xs font-semibold uppercase tracking-[0.3em] text-secondary-foreground">
                    Carbon-positive design
                  </Badge>
                  <Badge variant="outline" className="border-accent/30 bg-accent/10 text-xs font-semibold uppercase tracking-[0.3em] text-accent-foreground">
                    Lifecycle intelligence
                  </Badge>
                </div>
                <Button size="lg" asChild className="rounded-full shadow-primary/30 shadow-lg">
                  <Link to="/industry-solutions">
                    Discover industry solutions <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-6">
                {transformationHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-background/80 p-6 shadow-lg shadow-primary/10 transition-transform hover:-translate-y-1 hover:shadow-primary/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">{item.stat}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Capabilities</span>
            <h2 className="mt-6 text-4xl font-serif font-bold md:text-5xl">Engineering services tailored to your ambition</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From concept to commissioning, our multidisciplinary teams orchestrate resilient systems that feel effortless to operate and maintain.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group relative h-full overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br from-background via-background to-muted/40 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-primary/30"
              >
                <div className="absolute inset-0 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-2xl" />
                <CardContent className="relative flex h-full flex-col gap-6 p-8">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="mt-auto space-y-2">
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

          <div className="mt-14 flex flex-col items-center justify-center gap-6 rounded-3xl border border-primary/20 bg-primary/10 p-10 text-center sm:flex-row sm:text-left">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-foreground">Need a bespoke engineering team?</h3>
              <p className="mt-2 text-muted-foreground">
                We tailor cross-disciplinary squads for complex programmes and remote locations across Africa.
              </p>
            </div>
            <Button size="lg" asChild className="shadow-primary/30 shadow-lg">
              <Link to="/services">
                View full service catalogue <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="relative overflow-hidden py-20">
        {/* Smooth gradient transition from previous section */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-background/50 to-muted -z-10" />
        <div className="absolute inset-0 -z-10 bg-muted" />
        <div className="absolute inset-x-0 top-10 -z-10 mx-auto h-80 w-[90%] rounded-full bg-gradient-to-r from-primary/30 via-primary/10 to-accent/20 blur-3xl" />
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Signature programmes</span>
              <h2 className="text-4xl font-serif font-bold md:text-5xl">Engineering the future with purposeful design</h2>
              <p className="text-lg text-muted-foreground">
                Our teams combine deep technical mastery with a human-centric approach. Every engagement is anchored in measurable outcomes, resilient systems and meaningful experiences for the people who use them.
              </p>
              <div className="grid gap-4">
                {differentiators.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-foreground/10 bg-background/80 p-5 shadow-sm">
                    <item.icon className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button size="lg" asChild className="shadow-primary/30 shadow-lg">
                <Link to="/about">
                  Learn more about our approach <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-primary/20 via-foreground/5 to-background blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-foreground/10 shadow-2xl">
                <img src={fieldWork1} alt="Professional field inspection work" className="h-full w-full object-cover" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-border bg-card/95 p-6 shadow-lg backdrop-blur-md">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">Trusted delivery partners</p>
                  <p className="mt-2 text-lg font-semibold text-card-foreground">
                    Seamless collaboration from masterplanning to commissioning and ongoing optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        {/* Smooth gradient transition from previous section */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-muted via-background/50 to-background -z-10" />
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">How we work</span>
            <h2 className="mt-6 text-4xl font-serif font-bold md:text-5xl">A seamless journey from idea to impact</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our integrated framework keeps teams aligned, decisions clear and delivery predictable.
            </p>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-foreground/10 bg-muted/60 p-8 text-left shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-wide text-primary">Step {index + 1}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-lg font-semibold text-primary">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Clients Section */}
      <section className="relative overflow-hidden py-20">
        {/* Smooth gradient transition from previous section */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-muted via-background/50 to-background -z-10" />
        <div className="absolute inset-0 -z-10 bg-gradient-mesh opacity-40" />
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Strategic partners</span>
            <h3 className="mt-4 text-3xl font-serif font-bold text-foreground md:text-4xl">
              Trusted by leading organizations across energy, infrastructure and logistics
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              We collaborate with industry trailblazers who demand resilient solutions, transparent reporting and design excellence.
            </p>
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="group relative flex items-center justify-center rounded-2xl border border-foreground/5 bg-background/80 px-10 py-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-primary/20"
              >
                <img
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  className={`${logo.width} h-auto object-contain opacity-80 group-hover:opacity-100`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Project stories</span>
            <h2 className="mt-6 text-4xl font-serif font-bold md:text-5xl">Impact that scales with your ambition</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover how our teams unlock performance, resilience and human-centric experiences across sectors.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="flex h-full flex-col justify-between rounded-3xl border border-foreground/10 bg-background p-8 shadow-lg shadow-primary/10">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/10 p-4 text-sm font-medium text-primary">
                  {project.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Work Showcase Section */}
      <section className="relative overflow-hidden py-20">
        {/* Smooth gradient transition */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-background/50 to-muted -z-10" />
        <div className="absolute inset-0 -z-10 bg-muted" />
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Our Expertise in Action</span>
            <h2 className="mt-6 text-4xl font-serif font-bold md:text-5xl">Engineering Excellence on Site</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From precision surveying to tank inspections and structural assessments, our certified teams deliver world-class asset integrity services across Africa's critical infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={fieldWork1} 
                  alt="Precision surveying at industrial facility" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tank Farm Inspections</h3>
                <p className="text-sm text-muted-foreground">Advanced 3D laser scanning and precision measurement for storage terminal calibration.</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={fieldWork3} 
                  alt="Safety inspections at height" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Height Access Surveys</h3>
                <p className="text-sm text-muted-foreground">Rope access and elevated platform inspections for tanks, towers, and offshore structures.</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={fieldWork4} 
                  alt="Geothermal facility inspection" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Renewable Energy Assets</h3>
                <p className="text-sm text-muted-foreground">NDT inspection and certification for geothermal plants, solar farms, and wind installations.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild className="shadow-primary/30 shadow-lg">
              <Link to="/project-gallery">
                View Complete Project Portfolio <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="relative overflow-hidden py-20">
        {/* Smooth gradient transition */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-muted/20 to-muted/40 -z-10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-muted/40 to-background" />
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Insights</span>
            <h2 className="mt-6 text-4xl font-serif font-bold md:text-5xl">Ideas shaping the built world</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our specialists regularly publish thought leadership on resilient infrastructure, digital delivery and sustainable transformation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {insights.map((insight) => (
              <div
                key={insight.title}
                className="group flex h-full flex-col gap-4 rounded-3xl border border-foreground/10 bg-background p-8 shadow-lg transition-transform hover:-translate-y-2"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <insight.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{insight.title}</h3>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
                <Link to="/services" className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Explore services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24">
        {/* Smooth gradient transition */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-primary/10 to-transparent -z-10" />
        <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 -z-10 bg-gradient-mesh opacity-70" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,_hsl(0_0%_100%_/_0.18),_transparent_45%)]" />

        <div className="container relative mx-auto px-4 text-center text-secondary-foreground">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.3em]">
            <span className="flex h-2.5 w-2.5 rounded-full bg-white/80" /> Let's build the extraordinary
          </div>
          <h2 className="mt-8 text-4xl font-serif font-bold md:text-6xl">
            Ready to shape the next era of infrastructure?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Partner with Murban Engineering for end-to-end delivery across structural, MEP and advisory services.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="text-lg shadow-primary/40 shadow-2xl">
              <Link to="/contact">
                Book a consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild className="text-lg bg-white/15 text-white hover:bg-white/25">
              <Link to="/about">Discover our story</Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Home;
