import {
  AwardIcon as Award,
  TargetIcon as Target,
  EyeIcon as Eye,
  ShieldIcon as Shield,
  HeartIcon as Heart,
  LightbulbIcon as Lightbulb,
  UsersIcon as Users,
  TrendingUpIcon as TrendingUp,
  MapPinIcon as MapPin,
} from "@/components/ui/icons";
import { Card, CardContent } from "@/components/ui/card";
import teamImage from "@/assets/team-collaboration.jpg";
import AfricaMap from "@/components/AfricaMap";
import WhyChooseUs from "@/components/WhyChooseUs";

import fieldWork2 from "@/assets/field-work-2.jpg";
import fieldWork5 from "@/assets/field-work-5.jpg";
import portSunset from "@/assets/port-sunset.jpg";

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
      {/* Gradient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      </div>
      
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
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 animate-fade-in text-foreground">
            About Murban Engineering
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Specialist in Asset Integrity, Inspection, and Non-Destructive Testing
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 relative">
        {/* Smooth gradient transition from hero */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary via-background/20 to-background -z-10" />
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
      <section className="py-20 relative overflow-hidden">
        {/* Smooth gradient transition */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-background/50 to-muted" />
        <div className="absolute inset-0 bg-muted" />
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

      {/* Why, Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="animate-fade-in border-border">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-4">Our Why (Purpose)</h3>
                <p className="text-muted-foreground">
                  We exist to enhance safety, reliability, and performance in critical infrastructure through innovative inspection and engineering solutions.
                </p>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="animate-fade-in border-border">
                <CardContent className="p-8">
                  <Eye className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the undisputed leader in specialized Non-Destructive Testing and Inspection across Africa through innovation, experience, and technology.
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-fade-in border-border">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To deliver value to clients by executing world-class asset integrity services that maximize uptime and ensure safety compliance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Field Work Excellence Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Field Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering precision and safety across Africa's critical infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={fieldWork2} 
                  alt="Industrial tank inspection with advanced equipment" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={fieldWork5} 
                  alt="Precision measurement equipment in industrial setting" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Smooth gradient transition */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-background/50 to-muted" />
        <div className="absolute inset-0 bg-muted" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our How (Values)</h2>
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
