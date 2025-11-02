import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Compass,
  Factory,
  Globe2,
  Layers,
  Leaf,
  Lightbulb,
  Shield,
  Sparkles,
  Spline,
  Users,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import heroImage from "@/assets/hero-engineering.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import projectImage from "@/assets/project-showcase.jpg";
import Testimonials from "@/components/Testimonials";
import totalenergiesLogo from "@/assets/totalenergies-logo.png";
import kengenLogo from "@/assets/kengen-logo.png";
import bolloreLogo from "@/assets/bollore-logo.png";
import kpcLogo from "@/assets/kpc-logo.png";

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

  const heroHighlights = [
    {
      icon: Sparkles,
      title: "Connected delivery",
      description: "Integrated teams orchestrating design and construction workflows with absolute transparency.",
    },
    {
      icon: Shield,
      title: "Resilient systems",
      description: "High-performance structures and MEP solutions engineered to adapt, scale and thrive.",
    },
  ];

  const focusAreas = [
    {
      icon: Leaf,
      title: "Regenerative design",
      description: "Climate-positive strategies embedded into every structure, campus and public realm we touch.",
      metric: "57% average operational carbon reduction",
    },
    {
      icon: Factory,
      title: "Industrial evolution",
      description: "Modernising plants and logistics hubs with predictive maintenance, automation and resilient utilities.",
      metric: "14 active markets across Africa",
    },
    {
      icon: Globe2,
      title: "Connected infrastructure",
      description: "Digital twins, remote oversight and data-rich dashboards for mission-critical delivery programmes.",
      metric: "Live intelligence across every project stage",
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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-48 sm:pt-32 sm:pb-56">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Engineering excellence" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/80 to-background/95" />
          <div className="absolute inset-0 mix-blend-overlay bg-gradient-mesh opacity-60" />
          <div className="absolute -top-40 -right-32 h-[420px] w-[420px] rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_420px]">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-foreground/10 bg-foreground/5 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] backdrop-blur">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" /> Next era engineering partner
              </div>
              <div className="space-y-6">
                <AnimatedText
                  text="Murban Engineering"
                  className="!items-start"
                  textClassName="text-left font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
                  underlineClassName="text-primary"
                />
                <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
                  Murban Engineering blends structural, MEP and advisory expertise to deliver iconic developments, resilient infrastructure and immersive experiences across the continent.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button size="lg" asChild className="text-base rounded-full px-8 shadow-primary/40 shadow-2xl">
                  <Link to="/contact">
                    Start a project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-base rounded-full border-foreground/20 bg-background/70 px-8 backdrop-blur hover:bg-foreground/5"
                >
                  <Link to="/services">Explore services</Link>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.slice(0, 3).map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-foreground/10 bg-background/80 p-5 text-left shadow-lg shadow-primary/10 backdrop-blur"
                  >
                    <span className="text-3xl font-semibold text-foreground md:text-4xl">{stat.value}</span>
                    <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-primary/25 via-primary/10 to-background blur-3xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-foreground/10 bg-background/85 shadow-2xl backdrop-blur">
                <img src={teamImage} alt="Collaborative engineering team" className="h-96 w-full object-cover" />
                <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/20 bg-white/80 p-5 text-secondary backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Real-time oversight</p>
                  <p className="mt-2 text-base font-semibold text-secondary">
                    Command centre dashboards orchestrating every workstream across your portfolio.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-20 left-6 right-6">
                <div className="rounded-3xl border border-foreground/10 bg-background/95 p-6 shadow-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Why partners choose Murban</p>
                  <div className="mt-4 space-y-4">
                    {heroHighlights.map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <item.icon className="mt-1 h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 right-6">
                <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/25 via-primary/10 to-background/90 p-4 text-sm text-primary shadow-xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Active programmes</p>
                  <p className="mt-2 text-lg font-semibold text-primary">72 sites in delivery</p>
                  <p className="text-xs text-primary/80">Across energy, logistics and civic infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="-mt-28 pb-16 sm:-mt-32 sm:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-background/95 p-6 shadow-lg shadow-primary/10 backdrop-blur"
              >
                <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/20" />
                  <div className="absolute -right-8 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
                </div>
                <div className="relative flex h-full flex-col gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <area.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                  <div className="mt-auto text-sm font-semibold text-primary">{area.metric}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/40 via-background to-background" />
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Proof points</span>
            <h2 className="mt-4 text-3xl font-serif font-bold md:text-4xl">Quantified impact earned over 25+ years</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-[28px] border border-foreground/10 bg-background/95 p-8 shadow-lg shadow-primary/10 transition-all hover:-translate-y-1 hover:shadow-primary/20"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-125" />
                <div className="relative">
                  <span className="text-4xl font-semibold text-foreground md:text-5xl">{stat.value}</span>
                  <p className="mt-3 text-sm uppercase tracking-wide text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
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
                <img src={projectImage} alt="Featured project" className="h-full w-full object-cover" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/80 p-6 text-secondary shadow-lg backdrop-blur-md">
                  <p className="text-sm font-semibold uppercase tracking-wide text-secondary">Trusted delivery partners</p>
                  <p className="mt-2 text-lg font-semibold text-secondary">
                    Seamless collaboration from masterplanning to commissioning and ongoing optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
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

      {/* Insights Section */}
      <section className="relative overflow-hidden py-20">
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
  );
};

export default Home;
