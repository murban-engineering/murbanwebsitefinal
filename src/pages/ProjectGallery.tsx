import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import oilGasImg from "@/assets/oil-gas-industry.png";
import storageTerminalsImg from "@/assets/storage-terminals.png";
import foodProcessingImg from "@/assets/food-processing.png";
import renewableEnergyImg from "@/assets/renewable-energy.png";
import railIndustryImg from "@/assets/rail-industry.png";
import shippingMarineImg from "@/assets/shipping-marine.png";
import projectShowcase from "@/assets/project-showcase.jpg";
import heroEngineering from "@/assets/hero-engineering.jpg";
import fieldWork1 from "@/assets/field-work-1.jpg";
import fieldWork2 from "@/assets/field-work-2.jpg";
import fieldWork3 from "@/assets/field-work-3.jpg";
import fieldWork4 from "@/assets/field-work-4.jpg";
import fieldWork5 from "@/assets/field-work-5.jpg";
import fieldWork6 from "@/assets/field-work-6.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  challenges: string[];
  solutions: string[];
  results: string[];
}

const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Oil & Gas",
    "Storage Terminals",
    "Food Processing",
    "Renewable Energy",
    "Rail Industry",
    "Marine & Shipping",
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "TotalEnergies Pipeline Integrity Assessment",
      category: "Oil & Gas",
      location: "Mombasa, Kenya",
      year: "2023",
      description: "Comprehensive pipeline inspection and integrity assessment for critical crude oil transportation infrastructure.",
      image: fieldWork1,
      challenges: [
        "Aging pipeline infrastructure requiring thorough inspection",
        "Minimal downtime requirements for critical operations",
        "Complex corrosion patterns in coastal environment",
      ],
      solutions: [
        "Advanced PAUT and MFL inspection techniques",
        "Risk-based inspection planning",
        "Real-time data analysis and reporting",
      ],
      results: [
        "Zero unplanned downtime during inspection",
        "Identified and prioritized 15 critical repair locations",
        "Extended asset life by 10+ years through targeted maintenance",
      ],
    },
    {
      id: 2,
      title: "KPC Storage Tank Calibration & Inspection",
      category: "Storage Terminals",
      location: "Nairobi, Kenya",
      year: "2023",
      description: "API 653 compliant storage tank inspection and 3D laser scanning calibration for fuel depot operations.",
      image: fieldWork2,
      challenges: [
        "72 sites requiring coordinated inspection",
        "Accuracy requirements for volumetric calibration",
        "Logistics across multiple depot locations",
      ],
      solutions: [
        "3D laser scanning for precise volume measurement",
        "API 653 certified inspection protocols",
        "Mobile inspection teams with rapid deployment",
      ],
      results: [
        "All 72 sites inspected on schedule",
        "Improved inventory accuracy by 99.7%",
        "Compliance documentation for regulatory audit",
      ],
    },
    {
      id: 3,
      title: "Food Processing Plant Tank Integrity",
      category: "Food Processing",
      location: "Uganda",
      year: "2024",
      description: "Hygienic inspection and calibration of stainless steel storage vessels for beverage production facility.",
      image: foodProcessingImg,
      challenges: [
        "Food-grade hygiene requirements",
        "Non-contaminating inspection methods needed",
        "Tight production schedule constraints",
      ],
      solutions: [
        "Non-toxic dye penetrant testing",
        "Ultrasonic thickness measurement",
        "Clean room inspection protocols",
      ],
      results: [
        "Zero contamination incidents",
        "HACCP compliance maintained",
        "Production efficiency improved by 12%",
      ],
    },
    {
      id: 4,
      title: "KenGen Geothermal Rig Inspection",
      category: "Renewable Energy",
      location: "Olkaria, Kenya",
      year: "2023",
      description: "NDT inspection and certification of drilling rig components for geothermal energy production.",
      image: fieldWork4,
      challenges: [
        "High-temperature environment",
        "Critical safety requirements for drilling operations",
        "Remote location logistics",
      ],
      solutions: [
        "High-temperature ultrasonic testing",
        "Magnetic particle inspection of welds",
        "Pressure testing of cementing equipment",
      ],
      results: [
        "100% compliance with safety standards",
        "Prevented 2 potential equipment failures",
        "Maintained continuous drilling operations",
      ],
    },
    {
      id: 5,
      title: "Railway Fuel Tank Wagon Certification",
      category: "Rail Industry",
      location: "Tanzania",
      year: "2024",
      description: "Tank calibration and structural inspection for fuel transportation rail wagons.",
      image: railIndustryImg,
      challenges: [
        "Fleet of 50 wagons requiring certification",
        "Corrosion in harsh operating conditions",
        "Structural fatigue from heavy loads",
      ],
      solutions: [
        "Ultrasonic and radiographic testing",
        "Tank calibration for fuel wagons",
        "Corrosion mapping and assessment",
      ],
      results: [
        "All 50 wagons certified on time",
        "Identified 8 wagons requiring immediate repair",
        "Extended fleet operational life by 5 years",
      ],
    },
    {
      id: 6,
      title: "Bolloré Marine Terminal Expansion",
      category: "Marine & Shipping",
      location: "Djibouti",
      year: "2023",
      description: "Marine terminal cargo tank inspection and loading arm integrity assessment.",
      image: fieldWork3,
      challenges: [
        "Saltwater corrosion acceleration",
        "24/7 terminal operations",
        "International maritime standards compliance",
      ],
      solutions: [
        "UAV inspection of difficult-access areas",
        "Ultrasonic thickness measurement of tanks",
        "Coating integrity assessment",
      ],
      results: [
        "SOLAS and IMO compliance achieved",
        "Zero operational disruption",
        "Coating life extended by 3 years",
      ],
    },
    {
      id: 7,
      title: "Custom Platform Fabrication & Installation",
      category: "Oil & Gas",
      location: "Mombasa, Kenya",
      year: "2024",
      description: "Design, fabrication, and installation of working platforms for offshore facility maintenance.",
      image: fieldWork5,
      challenges: [
        "Complex structural design requirements",
        "Offshore installation logistics",
        "Corrosion-resistant material selection",
      ],
      solutions: [
        "3D design modeling and simulation",
        "Certified welding and fabrication",
        "Corrosion protection coating system",
      ],
      results: [
        "Completed on schedule and budget",
        "Passed all safety inspections",
        "Enhanced worker safety and efficiency",
      ],
    },
    {
      id: 8,
      title: "Multi-Site Inspection Program",
      category: "Storage Terminals",
      location: "East Africa",
      year: "2023",
      description: "Regional inspection program covering fuel depots across multiple East African countries.",
      image: fieldWork6,
      challenges: [
        "Coordination across 5 countries",
        "Varying regulatory requirements",
        "Large volume of assets to inspect",
      ],
      solutions: [
        "Centralized project management",
        "Mobile inspection teams",
        "Digital reporting platform",
      ],
      results: [
        "150+ tanks inspected across region",
        "Standardized reporting for all locations",
        "Early detection of 23 critical issues",
      ],
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 relative">
      {/* Gradient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in">
            <span className="text-sm font-medium text-white">Home - Project Gallery</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white animate-fade-in leading-tight">
            PROJECT GALLERY
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto text-white animate-fade-in">
            Showcasing our expertise across industries and regions
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-border bg-card/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2">{project.category}</Badge>
                    <h3 className="text-xl font-serif font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="space-y-3 pt-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-primary">
                        Key Challenges
                      </h4>
                      <ul className="space-y-1">
                        {project.challenges.map((challenge, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-primary">
                        Our Solutions
                      </h4>
                      <ul className="space-y-1">
                        {project.solutions.map((solution, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-primary">
                        Results Delivered
                      </h4>
                      <ul className="space-y-1">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-hero text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can deliver exceptional results for your next challenge.
              </p>
              <Button size="lg" variant="secondary" asChild className="text-lg">
                <a href="/contact">Get in Touch</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ProjectGallery;
