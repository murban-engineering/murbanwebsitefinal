import {
  BadgeCheck,
  Crosshair,
  Telescope,
  ShieldCheck,
  HeartHandshake,
  FlameKindling,
  UsersRound,
  TrendingUp,
  MapPin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AfricaMap from "@/components/AfricaMap";
import WhyChooseUs from "@/components/WhyChooseUs";
import AnimateOnScroll from "@/components/AnimateOnScroll";

import fieldWork2 from "@/assets/field-work-2.jpg";
import fieldWork5 from "@/assets/field-work-5.jpg";
import portSunset from "@/assets/port-sunset.jpg";

const About = () => {
  const foundationValues = [
    {
      icon: HeartHandshake,
      title: "Respect & Diversity",
      description: "We treat our team, clients, communities, and the environment with the highest respect.",
    },
    {
      icon: ShieldCheck,
      title: "Ethics & Integrity",
      description: "We uphold the highest standards of honesty and ethical business practices.",
    },
    {
      icon: Crosshair,
      title: "Safety & Sustainability",
      description: "Safety and sustainability define how we operate and protect our environment.",
    },
  ];

  const driveValues = [
    {
      icon: FlameKindling,
      title: "Passion for Innovation",
      description: "We constantly explore new technologies, methods, and ideas to improve how we deliver value. Innovation is embedded in our people, tools, and approach to problem-solving.",
      why: "It keeps Murban at the forefront of inspection and engineering technology, giving our clients future-ready solutions.",
    },
    {
      icon: UsersRound,
      title: "Customer Obsession",
      description: "We go beyond meeting expectations — we anticipate needs, act on feedback, and build lasting relationships.",
      why: "Your success is our success. We align our work to what matters most to you: safety, uptime, and compliance.",
    },
    {
      icon: TrendingUp,
      title: "Drive for Results",
      description: "We focus on delivering measurable, impactful outcomes. Every team member is empowered to act with speed, ownership, and excellence.",
      why: "Because when results speak, trust follows — and Murban is built on trust.",
    },
  ];


  return (
    <div className="min-h-screen pt-20 relative">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden min-h-[50vh] flex items-center z-10">
        <div className="absolute inset-0 z-0">
          <img
            src={portSunset}
            alt="Port machinery at sunset"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimateOnScroll direction="left">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-white">
              About Murban Engineering
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right" delay={150}>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Specialist in Asset Integrity, Inspection, and Non-Destructive Testing
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 relative">
        <div className="container mx-auto space-y-12 px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <AnimateOnScroll direction="left">
              <div className="space-y-6">
                <h2 className="text-4xl font-semibold mb-6">Company Profile</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Murban Engineering is a specialist firm in Asset Integrity, Inspection, and Non-Destructive Testing (NDT). We deliver reliable and safe inspection solutions that support critical infrastructure in the oil & gas, energy, marine, and industrial sectors.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  With over 15 years of experience, we operate across Africa. Our services help clients extend asset life, ensure regulatory compliance, and minimize downtime.
                </p>
                <div className="bg-muted rounded-lg p-6 mb-4">
                  <h3 className="text-xl font-semibold mb-3">We operate through two divisions:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                       <BadgeCheck className="h-5 w-5 text-foreground mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Murban Inspection Services</strong></span>
                    </li>
                    <li className="flex items-start">
                      <BadgeCheck className="h-5 w-5 text-foreground mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Murban Engineering Services</strong></span>
                    </li>
                  </ul>
                </div>
                <p className="text-lg text-muted-foreground">
                  With a fully equipped laboratory in Mombasa and mobile teams deployed regionally, Murban is your trusted partner for both on-site and lab-based inspections, delivered with safety, speed, and precision.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll direction="right" delay={200}>
              <img
                src="/_MG_2642%20-%20Copy%20(2).jpg"
                alt="Murban Engineering inspection team"
                className="rounded-lg shadow-xl"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up" className="text-center mb-12">
            <MapPin className="h-12 w-12 text-foreground mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Where We Work</h2>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={200}>
            <AfricaMap />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why, Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <AnimateOnScroll direction="right">
              <Card className="border-border">
                <CardContent className="p-8">
                  <HeartHandshake className="h-12 w-12 text-foreground mb-4" />
                  <h3 className="text-2xl font-serif font-bold mb-4">Our Why (Purpose)</h3>
                  <p className="text-muted-foreground">
                    We exist to enhance safety, reliability, and performance in critical infrastructure through innovative inspection and engineering solutions.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimateOnScroll direction="left" delay={100}>
                <Card className="border-border">
                  <CardContent className="p-8">
                    <Telescope className="h-12 w-12 text-foreground mb-4" />
                    <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the undisputed leader in specialized Non-Destructive Testing and Inspection across Africa through innovation, experience, and technology.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
              <AnimateOnScroll direction="right" delay={200}>
                <Card className="border-border">
                  <CardContent className="p-8">
                    <Crosshair className="h-12 w-12 text-foreground mb-4" />
                    <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To deliver value to clients by executing world-class asset integrity services that maximize uptime and ensure safety compliance.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Field Work Excellence Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="left">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Field Work</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Delivering precision and safety across Africa's critical infrastructure
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <AnimateOnScroll direction="left" delay={100}>
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={fieldWork2}
                    alt="Industrial tank inspection with advanced equipment"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Advanced NDT Inspections</h3>
                  <p className="text-muted-foreground">
                    Our certified technicians utilize cutting-edge non-destructive testing equipment including ultrasonic testing, 
                    magnetic particle inspection, and 3D laser scanning for comprehensive asset integrity assessments.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll direction="right" delay={200}>
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={fieldWork5}
                    alt="Precision measurement equipment in industrial setting"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Precision Engineering</h3>
                  <p className="text-muted-foreground">
                    From dimensional verification to corrosion mapping, our engineering teams deliver accurate measurements 
                    and detailed analysis that ensure structural integrity and regulatory compliance.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={fieldWork2} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Core Values</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Our Compass: How We Work and What We Stand For
              </p>
            </div>
          </AnimateOnScroll>

          {/* Foundation Values */}
          <div className="mb-16">
            <AnimateOnScroll direction="right">
              <h3 className="text-3xl font-serif font-bold mb-8 text-center">Foundation Values</h3>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                These are not optional. They define how we treat our team, clients, communities, and the environment.
              </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {foundationValues.map((value, index) => (
                <AnimateOnScroll key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
                  <Card className="group hover:shadow-lg transition-all duration-300 border-border">
                    <CardContent className="p-6 text-center">
                      <value.icon className="h-10 w-10 text-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* What Drives Us */}
          <div>
            <AnimateOnScroll direction="left">
              <h3 className="text-3xl font-serif font-bold mb-8 text-center">What Drives Us</h3>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {driveValues.map((value, index) => (
                <AnimateOnScroll key={index} direction={index % 2 === 0 ? "right" : "left"} delay={index * 100}>
                  <Card className="group hover:shadow-lg transition-all duration-300 border-border">
                    <CardContent className="p-6">
                      <value.icon className="h-10 w-10 text-foreground mb-4" />
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{value.description}</p>
                      <p className="text-xs text-primary font-medium italic">Why it matters: {value.why}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
