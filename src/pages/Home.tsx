import { ArrowRight, CheckCircle, Building2, Wrench, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-engineering.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import projectImage from "@/assets/project-showcase.jpg";

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: "Structural Engineering",
      description: "Comprehensive structural design and analysis for commercial and residential projects.",
    },
    {
      icon: Wrench,
      title: "MEP Engineering",
      description: "Mechanical, electrical, and plumbing systems designed for optimal efficiency.",
    },
    {
      icon: Shield,
      title: "Project Management",
      description: "End-to-end project oversight ensuring quality, timeline, and budget adherence.",
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Expert engineering consultation for complex technical challenges.",
    },
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "25+", label: "Years Experience" },
    { value: "200+", label: "Expert Engineers" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  const clients = ["Emaar", "Dubai Properties", "Aldar", "Damac", "Nakheel"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Engineering Excellence"
            className="w-full h-full object-cover scale-105 animate-[scale-in_1s_ease-out]"
          />
          <div className="absolute inset-0 bg-gradient-hero-overlay" />
          <div className="absolute inset-0 bg-gradient-mesh" />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl text-secondary-foreground">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in">
              <span className="text-sm font-medium">🏗️ Engineering Excellence Since 1998</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 animate-fade-in leading-tight">
              Engineering Excellence,{" "}
              <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Delivered
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90 animate-fade-in max-w-2xl">
              Transforming visions into reality with innovative solutions and unmatched expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button size="lg" asChild className="text-lg shadow-glow hover:shadow-primary transition-all">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-white/40 transition-all">
                <Link to="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-float">
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-background via-muted/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive engineering solutions tailored to your project needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/50 bg-gradient-card hover:-translate-y-2 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity" />
                <CardContent className="p-6 relative z-10">
                  <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-md group-hover:shadow-glow">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Engineering the Future
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 25 years of experience, Murban Engineering has established itself as a trusted partner in delivering complex engineering projects across the region.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Innovative solutions backed by cutting-edge technology</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Dedicated team of certified engineering professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Commitment to sustainability and environmental responsibility</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="animate-scale-in relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
              <img
                src={projectImage}
                alt="Featured Project"
                className="relative rounded-2xl shadow-2xl group-hover:shadow-primary transition-all duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <h3 className="text-2xl font-semibold text-center mb-12 text-muted-foreground">
            Trusted by Leading Organizations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-16">
            {clients.map((client, index) => (
              <div
                key={index}
                className="text-2xl font-bold text-muted-foreground/50 hover:text-primary transition-all duration-300 hover:scale-110 cursor-default"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(0_0%_100%_/_0.1),_transparent_50%)]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 animate-pulse-glow">
            <span className="text-sm font-medium text-white">🚀 Let's Build Something Amazing</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto text-white">
            Let's discuss how our engineering expertise can bring your vision to life
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg shadow-2xl hover:shadow-primary hover:scale-105 transition-all">
            <Link to="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
