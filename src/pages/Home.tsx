import { ArrowRight, CheckCircle, Building2, Wrench, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-engineering.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import projectImage from "@/assets/project-showcase.jpg";
import craneImage from "@/assets/crane-construction.jpg";
import pipesWaterImage from "@/assets/industrial-pipes-water.jpg";
import pipelineImage from "@/assets/pipeline-infrastructure.jpg";
import flareImage from "@/assets/oil-gas-flare.jpg";

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
    <div className="min-h-screen relative overflow-hidden">
      {/* Ethereal Background Shadows - Fixed throughout page - MUCH MORE VISIBLE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Large red ethereal shadow - top left */}
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
        
        {/* Large blue ethereal shadow - top right */}
        <div className="absolute -top-20 -right-20 w-[700px] h-[700px] bg-secondary/20 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        
        {/* Medium red ethereal shadow - middle left */}
        <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
        
        {/* Large blue ethereal shadow - bottom right */}
        <div className="absolute bottom-20 right-10 w-[750px] h-[750px] bg-secondary/18 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: '9s', animationDelay: '1s' }} />
        
        {/* Accent ethereal shadow - bottom center */}
        <div className="absolute -bottom-32 left-1/4 w-[650px] h-[650px] bg-accent/15 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '11s', animationDelay: '3s' }} />
      </div>

      {/* Blended Gradient Background Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[var(--gradient-blend-fade)] opacity-70" />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden z-10">
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
      <section className="py-20 bg-gradient-to-b from-background via-muted/50 to-background relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        
        {/* Decorative Image - Crane in irregular shape with STRONG ethereal shadow */}
        <div className="absolute top-10 right-10 w-64 h-80 opacity-20 transition-all duration-700 hover:opacity-30 hover:scale-105 shadow-ethereal-blue">
          <div className="w-full h-full overflow-hidden shadow-ethereal-blue" style={{ clipPath: 'polygon(30% 0%, 100% 0%, 100% 70%, 70% 100%, 0% 100%, 0% 30%)' }}>
            <img src={craneImage} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        
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
      <section className="py-20 relative z-10">
        {/* Decorative Image - Pipeline in curved rectangle with STRONG ethereal shadow */}
        <div className="absolute top-20 left-5 w-72 h-56 opacity-20 transition-all duration-700 hover:opacity-30 hover:scale-105 shadow-ethereal-red">
          <div className="w-full h-full overflow-hidden rounded-[40px_10px_40px_10px] shadow-ethereal-red">
            <img src={pipelineImage} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* Decorative Image - Pipes by water in arch shape with STRONG ethereal shadow */}
        <div className="absolute bottom-10 right-10 w-80 h-64 opacity-20 transition-all duration-700 hover:opacity-30 hover:scale-105 shadow-ethereal-blend">
          <div className="w-full h-full overflow-hidden shadow-ethereal-blend" style={{ clipPath: 'ellipse(50% 40% at 50% 50%)' }}>
            <img src={pipesWaterImage} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        
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
      <section className="py-20 bg-muted relative z-10">
        {/* Decorative Image - Flare tower in unique geometric shape with STRONG ethereal shadow */}
        <div className="absolute top-1/2 -translate-y-1/2 left-10 w-48 h-72 opacity-20 transition-all duration-700 hover:opacity-30 hover:scale-105 shadow-ethereal-red">
          <div className="w-full h-full overflow-hidden shadow-ethereal-red" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
            <img src={flareImage} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        
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
      <section className="py-20 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        
        {/* Decorative Image - Crane in rounded square with STRONG ethereal shadow */}
        <div className="absolute bottom-5 right-1/4 w-56 h-56 opacity-20 transition-all duration-700 hover:opacity-30 hover:scale-105 shadow-ethereal-blue">
          <div className="w-full h-full overflow-hidden rounded-[60px] shadow-ethereal-blue">
            <img src={craneImage} alt="" className="w-full h-full object-cover rotate-45" />
          </div>
        </div>
        
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
      <section className="relative py-24 overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(0_0%_100%_/_0.1),_transparent_50%)]" />
        
        {/* Decorative Image - Pipeline infrastructure in irregular pentagon with STRONG ethereal shadow */}
        <div className="absolute top-10 right-20 w-64 h-48 opacity-25 transition-all duration-700 hover:opacity-35 hover:scale-105 shadow-ethereal-blend">
          <div className="w-full h-full overflow-hidden shadow-ethereal-blend" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
            <img src={pipelineImage} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        
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
