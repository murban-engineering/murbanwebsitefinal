import { Award, Target, Eye, Shield, Heart, Lightbulb, Users, TrendingUp, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import teamImage from "@/assets/team-collaboration.jpg";
import AfricaMap from "@/components/AfricaMap";
import WhyChooseUs from "@/components/WhyChooseUs";
import { DottedSurface } from "@/components/ui/dotted-surface";

const About = () => {
  const foundationValues = [
    {
      icon: Heart,
      title: "Respect & Diversity",
      description: "We treat our team, clients, communities, and the environment with the highest respect.",
    },
    {
      icon: Shield,
      title: "Ethics & Integrity",
      description: "We uphold the highest standards of honesty and ethical business practices.",
    },
    {
      icon: Target,
      title: "Safety & Sustainability",
      description: "Safety and sustainability define how we operate and protect our environment.",
    },
  ];

  const driveValues = [
    {
      icon: Lightbulb,
      title: "Passion for Innovation",
      description: "We constantly explore new technologies, methods, and ideas to improve how we deliver value. Innovation is embedded in our people, tools, and problem-solving approach.",
    },
    {
      icon: Users,
      title: "Customer Obsession",
      description: "We go beyond meeting expectations: we anticipate needs, act on feedback, and build lasting relationships. Your success is our success.",
    },
    {
      icon: TrendingUp,
      title: "Drive for Results",
      description: "We focus on delivering measurable, impactful outcomes. Every team member is empowered to act with speed, ownership, and excellence.",
    },
  ];


  return (
    <div className="min-h-screen pt-20 relative">
      {/* Full Page Dotted Background with Grid Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <DottedSurface className="size-full opacity-40" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      </div>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-secondary-foreground relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            About Murban Engineering
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in">
            Specialist in Asset Integrity, Inspection, and Non-Destructive Testing
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20">
        <div className="container mx-auto space-y-12 px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-serif font-bold mb-6">Company Profile</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Murban Engineering is a specialist firm in Asset Integrity, Inspection, and Non-Destructive Testing (NDT). We deliver reliable and safe inspection solutions that support critical infrastructure in the oil & gas, energy, marine, and industrial sectors.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                With over 15 years of experience, we operate across Africa. Our services help clients extend asset life, ensure regulatory compliance, and minimize downtime.
              </p>
              <div className="bg-muted rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold mb-3">Our Divisions</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Murban Inspection Services</strong></span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Murban Engineering Services</strong></span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-muted-foreground">
                We have a fully equipped laboratory in Mombasa and mobile inspection teams deployed regionally, enabling us to serve both on-site and laboratory-based inspection needs with safety, speed, and precision.
              </p>
            </div>
            <div className="animate-scale-in">
              <img
                src={teamImage}
                alt="Our Team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Where We Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We offer our services across many African countries
            </p>
          </div>
          <AfricaMap />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="animate-fade-in border-border">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  We will deliver value to our clients by executing world class asset integrity that maximize up-time and safety.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in border-border">
              <CardContent className="p-8">
                <Eye className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the undisputed leader in the field of specialized Non-Destructive Testing through innovation, experience, and the use of technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Compass</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How we work and what we stand for
            </p>
          </div>

          {/* Foundation Values */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold mb-8 text-center">Foundation Values</h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              These are not optional. They define how we treat our team, clients, communities, and the environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {foundationValues.map((value, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-border">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <value.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* What Drives Us */}
          <div>
            <h3 className="text-3xl font-serif font-bold mb-8 text-center">What Drives Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {driveValues.map((value, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-border">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      <value.icon className="h-8 w-8 text-secondary group-hover:text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
