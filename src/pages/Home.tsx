import {
  ArrowRight,
  CheckCircle2,
  Clock,
  HardHat,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
      icon: Wrench,
      title: "Non-Destructive Testing",
      description:
        "We inspect pipelines, pressure vessels, storage tanks and structural steelwork — without shutting down your operations. Our NDT crew is certified to international standards and works across oil depots, factories and construction sites.",
      points: ["Ultrasonic & radiographic testing", "Magnetic particle inspection", "Dye penetrant testing"],
    },
    {
      icon: HardHat,
      title: "Mechanical & Piping Works",
      description:
        "From fabricating pipe spools in our workshop to installing them on site, we handle mechanical projects from start to handover. We've fitted MEP systems in warehouses, commercial buildings and industrial plants across the coast.",
      points: ["Pipe fabrication & installation", "Equipment erection", "Welding & fit-up"],
    },
    {
      icon: ShieldCheck,
      title: "Engineering Assessments",
      description:
        "Need a fitness-for-service report before your insurance renewal? We carry out corrosion mapping, thickness surveys and structural integrity assessments so you know exactly where you stand.",
      points: ["Tank floor scanning", "Corrosion mapping", "Fitness-for-service reports"],
    },
    {
      icon: MapPin,
      title: "Project Management & Supervision",
      description:
        "We don't just inspect — we manage. Our engineers sit on site, coordinate subcontractors, track progress and make sure the job closes out on time and within budget.",
      points: ["Site supervision", "Quality assurance", "HSE compliance"],
    },
  ];

  const projects = [
    {
      title: "Pipeline Inspection — Mombasa Oil Terminal",
      scope: "12km pipeline corridor, ultrasonic thickness gauging and corrosion mapping across 48 test points.",
      outcome: "Completed in 3 weeks. Identified 7 critical areas for repair before the next insurance audit.",
    },
    {
      title: "Tank Cleaning & Inspection — Fuel Depot",
      scope: "Full internal cleaning and MPI/UT inspection of four 5,000m³ fuel storage tanks.",
      outcome: "Zero safety incidents. Tanks returned to service 4 days ahead of schedule.",
    },
    {
      title: "MEP Installation — Commercial Warehouse, Changamwe",
      scope: "Mechanical, electrical and plumbing installation for a 3,200 sqm cold storage warehouse.",
      outcome: "Handed over on budget. Client expanded scope to include fire protection systems.",
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
    <div className="relative min-h-screen bg-background">
      {/* Theme Toggle */}
      <div className="fixed right-4 top-24 z-20">
        <ThemeToggle id="home-theme-toggle" />
      </div>

      {/* ─── Hero ─── */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={industrialPlant}
            alt="Murban engineers on site at an industrial facility"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-28">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Mombasa, Kenya — Since 1998
            </p>

            <h1 className="mt-6 text-3xl font-bold leading-snug text-foreground sm:text-4xl md:text-5xl">
              We inspect, build and maintain the infrastructure that keeps industry running.
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Murban Engineering provides NDT inspection, mechanical works and project 
              management for oil & gas, manufacturing and logistics facilities across 
              East Africa. If it's steel and it matters, we're probably already on site.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild className="rounded-xl px-7">
                <Link to="/contact">
                  Talk to Our Team <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-xl px-7">
                <Link to="/services">See Our Services</Link>
              </Button>
            </div>

            {/* Quick trust strip */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" /> ISO 9001 Certified
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" /> 25+ Years in Operation
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-4 w-4 text-primary" /> +254 41 234 5678
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What We Actually Do ─── */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-14 max-w-xl">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              What we actually do on site
            </h2>
            <p className="mt-3 text-muted-foreground">
              No jargon. These are the services our engineers deliver every week — at depots, 
              factories, terminals and construction sites across the region.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Card
                key={s.title}
                className="group h-full rounded-2xl border border-border bg-card transition-shadow duration-200 hover:shadow-md"
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                  <ul className="mt-auto space-y-1.5 pt-5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <Button variant="outline" asChild className="rounded-xl">
              <Link to="/services">
                Full list of services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Numbers strip ─── */}
      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "25+", label: "Years in the field" },
              { value: "1,800+", label: "Projects completed" },
              { value: "42", label: "Engineers & technicians" },
              { value: "0", label: "Compromises on safety" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-primary">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Recent Projects ─── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-12 lg:grid-cols-5">
            {/* Left column — intro + image */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                How our projects typically run
              </h2>
              <p className="mt-3 text-muted-foreground">
                Every job is different, but the pattern is the same: we scope the work 
                honestly, execute it safely and close it out on time. Here are three 
                recent examples.
              </p>
              <img
                src={projectImage}
                alt="Murban engineering project on site"
                className="mt-8 rounded-2xl object-cover shadow-lg"
                loading="lazy"
                decoding="async"
                width={600}
                height={400}
              />
            </div>

            {/* Right column — project cards */}
            <div className="space-y-5 lg:col-span-3">
              {projects.map((p, i) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-sm"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{p.scope}</p>
                  <p className="mt-2 text-sm font-medium text-foreground/80">
                    <span className="text-primary">Result:</span> {p.outcome}
                  </p>
                </div>
              ))}

              <Button asChild className="mt-2 rounded-xl">
                <Link to="/project-gallery">
                  View project gallery <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Clients Stick With Us ─── */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-14 max-w-xl">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Why clients stick with us
            </h2>
            <p className="mt-3 text-muted-foreground">
              We're not the cheapest option and we don't pretend to be. But our clients 
              come back because we deliver what we promise, on time, safely and without drama.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "We show up prepared",
                text: "Our crew arrives with the right equipment, calibrated instruments and a clear plan. No wasted days waiting for parts or approvals.",
              },
              {
                title: "Safety isn't a poster on the wall",
                text: "Every technician holds valid OSHA and NEBOSH certifications. We run toolbox talks before every shift — not because we have to, but because it works.",
              },
              {
                title: "You get the report, not the runaround",
                text: "Inspection reports are delivered within the agreed timeline, clearly written and ready for your insurer or regulator. No chasing required.",
              },
              {
                title: "Local team, international standards",
                text: "Our engineers are ASNT, PCN and CSWIP certified. We apply the same procedures you'd expect from a multinational — because that's who trained us.",
              },
              {
                title: "We know this coast",
                text: "25 years working in Mombasa means we understand the logistics, the permits, the weather and the people. That local knowledge saves you time and money.",
              },
              {
                title: "One call, one team",
                text: "From NDT inspection to mechanical repair to project close-out, you deal with one company. Less coordination headache for you.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Field Gallery ─── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                From the field
              </h2>
              <p className="mt-2 text-muted-foreground">
                Real photos from real job sites — no stock images.
              </p>
            </div>
            <Button variant="outline" asChild className="rounded-xl">
              <Link to="/project-gallery">Full gallery</Link>
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <img
              src={fieldWork1}
              alt="NDT inspection work at an oil depot"
              className="h-60 w-full rounded-xl object-cover"
              loading="lazy"
            />
            <img
              src={fieldWork3}
              alt="Pipeline welding and fabrication"
              className="h-60 w-full rounded-xl object-cover"
              loading="lazy"
            />
            <img
              src={fieldWork4}
              alt="Mechanical installation at industrial site"
              className="h-60 w-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ─── Trusted By ─── */}
      <section className="border-y border-border py-14">
        <div className="container mx-auto px-4">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Companies we work with
          </p>
          <div className="logo-marquee overflow-hidden">
            <div className="logo-marquee-track flex w-max items-center gap-14">
              {marqueeLogos.map((client, index) => (
                <img
                  key={`${client.name}-${index}`}
                  src={client.logo}
                  alt={client.name}
                  className={`${client.width} h-auto opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <Testimonials />

      {/* ─── CTA ─── */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
            Got a project coming up?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-primary-foreground/80">
            Whether it's a routine inspection, a shutdown turnaround or a new build — 
            give us a call and we'll scope it out together.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="rounded-xl bg-background text-foreground hover:bg-background/90"
            >
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-xl border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/services">Browse Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
