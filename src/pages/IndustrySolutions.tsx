import {
  EnergyReservoirIcon,
  TerminalLogisticsIcon,
  FoodProcessIcon,
  RenewableCycleIcon,
  RailNetworkIcon,
  MarineLogisticsIcon,
  CheckCircleIcon,
} from "@/components/ui/icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import oilGasImg from "@/assets/oil-gas-industry.png";
import storageTerminalsImg from "@/assets/storage-terminals.png";
import foodProcessingImg from "@/assets/food-processing.png";
import renewableEnergyImg from "@/assets/renewable-energy.png";
import railIndustryImg from "@/assets/rail-industry.png";
import shippingMarineImg from "@/assets/shipping-marine.png";
import heroBackground from "@/assets/field-work-2.jpg";
import fieldWork3 from "@/assets/field-work-3.jpg";

const IndustrySolutions = () => {
  const industries = [
    {
      icon: EnergyReservoirIcon,
      title: "Oil & Gas Industry",
      image: oilGasImg,
      assetsCovered: "Storage tanks, sphere tanks, pressure vessels, pipelines, marine terminals, FPSOs",
      services: [
        "API 653 Storage Tank Inspection",
        "Sphere Tank Inspection",
        "API 510 Pressure Vessel Inspection",
        "API 570 Pipeline Inspection",
        "Tank Bottom MFL Corrosion Mapping",
        "Fitness for Service Analysis",
        "UAV & Thermal Surveys",
        "3D Laser Scanning & Tank Calibration",
        "Coating Inspection & Corrosion Assessment",
        "Risk-Based Inspection & RBI Plans",
        "Radiography & Ultrasonic Testing",
        "PMI Testing for imported fittings",
        "Post-fire and post-buckling assessments",
      ],
      whyItMatters: "At Murban Engineering, we offer industry-leading inspection and integrity solutions tailored to the critical demands of the oil and gas sector. Our services span upstream, midstream, and downstream operations—from pipeline and pressure vessel inspections to storage tank calibration and corrosion assessment. Using advanced techniques like Phased Array Ultrasonic Testing (PAUT), Magnetic Flux Leakage (MFL), and Risk-Based Inspection (RBI), we help oil and gas operators extend asset life, avoid unplanned outages, and meet the highest standards of safety and compliance.",
    },
    {
      icon: TerminalLogisticsIcon,
      title: "Storage and Logistic Terminals",
      image: storageTerminalsImg,
      assetsCovered: "Bulk liquid tanks, LPG spheres, loading lines, depot infrastructure",
      services: [
        "Storage Tank Calibration",
        "Volumetric Analysis with 3D Laser Scanning",
        "API 653 Inspections",
        "API 510 Inspections",
        "API 570 Inspections",
        "Paint and Coating Integrity Testing",
        "Third party verification and testing",
        "Engineering drawings – As built data",
        "Foundation and settlement monitoring",
        "NDT Testing",
      ],
      whyItMatters: "Bulk liquid and fuel terminals are complex facilities that demand accurate calibration, corrosion monitoring, and tank integrity assurance. Murban Engineering provides comprehensive solutions for tank farms, depots, and LPG storage facilities using technologies like 3D laser scanning, UAV-based inspections, and API 653-compliant tank assessments. Our goal is to help operators maintain regulatory compliance, safeguard stored products, and optimize infrastructure performance across the entire terminal lifecycle.",
    },
    {
      icon: FoodProcessIcon,
      title: "Food Processing Industry",
      image: foodProcessingImg,
      assetsCovered: "Stainless tanks, pressure vessels, food-grade pipelines, steam boilers",
      services: [
        "UT Thickness Surveys for Corrosion in Clean Systems",
        "Surface Hardness Testing for Safety Compliance",
        "3D Tank Calibration for Volume Control",
        "Radiographic Testing to check welds on hygiene-critical vessels",
        "QA/QC for stainless welding and fittings",
        "Non-contaminating NDT procedures (e.g., non-toxic DPI)",
      ],
      whyItMatters: "In food and beverage processing, cleanliness, accuracy, and structural integrity are non negotiable. Murban supports this industry with non-contaminating inspection techniques, volumetric tank calibration, and material identification suited for food grade environments. Whether it's ensuring weld quality in stainless vessels or verifying tank geometry for accurate mixing and batching, we bring precision, hygiene-compliant methods, and peace of mind to food manufacturers.",
    },
    {
      icon: RenewableCycleIcon,
      title: "Renewable Energy & Geothermal",
      image: renewableEnergyImg,
      assetsCovered: "Geothermal drilling rigs, solar plants, wind support structures",
      services: [
        "NDT on Cementing and Casing Equipment",
        "QA/QC Inspections during rig fabrication and commissioning",
        "UT and MPI for welds and frames",
        "UAV Thermal Surveys for solar arrays",
        "Pressure Testing and PMI of drilling components",
        "Structural laser scanning for alignment and elevation",
      ],
      whyItMatters: "The renewable energy sector is expanding rapidly, and so is the need for safe, reliable, and long-lasting infrastructure. At Murban, we offer targeted inspection services for geothermal rigs, solar installations, and wind structures. From flaw detection in rig welds to thermal imaging of solar panels and structural surveys using UAVs and laser scanning, we ensure your green energy systems are safe, efficient, and compliant with modern engineering codes.",
    },
    {
      icon: RailNetworkIcon,
      title: "Rail Industry",
      image: railIndustryImg,
      assetsCovered: "Rail wagons, bogies, bridges, storage depots, fuel tanks",
      services: [
        "UT and RT for railcar tanks and weld seams",
        "ACFM Inspection for wheels and axles",
        "Surface Hardness for load-bearing components",
        "Paint, Coating & Corrosion Inspection for rolling stock",
        "Lifting Equipment Certification for maintenance depots",
        "Tank Calibration for fuel and chemical wagons",
        "3D Scanning of structural members in railway bridges",
      ],
      whyItMatters: "Railway infrastructure must meet the demands of heavy loads, constant vibration, and dynamic stresses. Murban provides specialized inspection and certification services for railcars, bridges, depots, and fuel wagons. Our techniques—ranging from ultrasonic and radiographic testing to tank calibration and corrosion inspection—help operators ensure safety, prevent failures, and maintain smooth operations across the rail network.",
    },
    {
      icon: MarineLogisticsIcon,
      title: "Shipping & Marine Industry",
      image: shippingMarineImg,
      assetsCovered: "Cargo tanks, ballast tanks, marine pipelines, ship hulls, offshore loading arms, vessel pressure systems, tankers, offshore platforms",
      services: [
        "Ultrasonic Thickness Measurement (UTM) of hull plating and tanks",
        "Visual Inspection of cargo tanks, hatches, and decks",
        "Magnetic Particle & Dye Penetrant Testing of weld seams and load points",
        "Phased Array Ultrasonic Testing (PAUT) for deck and hull integrity",
        "3D Laser Scanning for tank geometry and deck mapping",
        "Internal UAV Inspection for difficult-to-access compartments",
        "Surface Hardness Testing on load-bearing components",
        "PMI Testing on imported or unknown marine-grade alloys",
        "Thermal Imaging for hot spot detection in engines and exhausts",
        "Paint & Coating Assessment in ballast and cargo tanks",
        "Pressure Testing of marine pipelines and fluid systems",
        "Lifting Gear and Lifesaving Equipment Certification",
        "Compliance inspections under SOLAS, IMO, and Classification Society standards",
      ],
      whyItMatters: "Marine environments expose vessels and offshore structures to accelerated wear from corrosion, mechanical loading, and extreme conditions. At Murban Engineering, we provide specialized marine inspection services that enhance safety, ensure class compliance, and support the longevity of your marine assets. Whether for in-service vessels, dockside inspections, or offshore operations, our NDT and engineering capabilities help mitigate risk, reduce repair costs, and maintain operational readiness at sea.",
    },
  ];

  const engineeringServices = [
    "Alternating Current Field Measurement",
    "API 579 Murban Fitness for Service",
    "API 653 Above Ground Storage Tank Inspection",
    "API 580 Murban Risk-Based Service",
    "Boiler Inspection Service",
    "Lifting Equipment Thorough Examination and Certification",
    "RT Radiographic Services",
    "Magnetic Particle Testing",
    "Surface Hardness Testing",
    "Dye Penetrant Testing",
    "Fluorescent Magnet Particle Testing",
    "Floormap 3D MFL Scanning",
    "Paint and Coating Inspection",
    "PMI Testing",
    "Murban SIMS Tank Inspection Software",
    "Sphere Tank Inspections",
    "3D Laser Scanning Services",
    "Tank Calibration Services",
    "Murban Tank Inspection Database",
    "Thermal Camera Inspection",
    "Pressure Testing",
    "UAV Drone Inspection",
    "Fabrication and Engineering Services",
    "Ultrasonic Flaw Testing C Scan",
    "Murban Phased Array Testing",
    "Ultrasonic Thickness Measurement",
    "Visual Inspection",
    "API 510 Pressure Vessel Inspection",
    "API 570 Piping Inspection",
    "Gas Detection",
    "Detailed Engineering",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBackground}
            alt="Industrial infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background/20"></div>
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 animate-pulse"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 px-4 py-2 text-sm font-semibold uppercase tracking-wider">
            Industry Expertise
          </Badge>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg animate-fade-in">
            Industry Solutions
          </h1>
          
          {/* Divider Line */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary"></div>
            <CheckCircleIcon className="h-5 w-5 text-primary" />
            <div className="h-px w-12 bg-primary"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Tailored inspection and integrity solutions for diverse industries across Africa
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="rounded-full shadow-xl hover:scale-105 transition-transform" asChild>
              <Link to="/contact">
                Get Started Today →
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full shadow-lg hover:scale-105 transition-transform" asChild>
              <a href="#industries">
                View Industries
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 px-4 py-2">Our Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering specialized expertise across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {industries.map((industry, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden border-border bg-card animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 p-3 rounded-xl bg-primary/90 backdrop-blur-sm border border-primary shadow-lg">
                    <industry.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-serif font-bold">{industry.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {industry.assetsCovered}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <Button variant="ghost" size="sm" className="w-full group-hover:text-primary transition-colors" asChild>
                    <Link to="/contact">
                      Learn More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 px-4 py-2">Why Murban</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry-leading expertise backed by cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: CheckCircleIcon,
                title: "Certified Experts",
                description: "API certified professionals with decades of combined experience in NDT and asset integrity."
              },
              {
                icon: EnergyReservoirIcon,
                title: "Advanced Technology",
                description: "State-of-the-art equipment including PAUT, MFL, UAV systems, and 3D laser scanning."
              },
              {
                icon: TerminalLogisticsIcon,
                title: "Regional Presence",
                description: "Operations across Africa with rapid response teams and local expertise."
              },
              {
                icon: RenewableCycleIcon,
                title: "Quality Assurance",
                description: "Rigorous standards compliance and commitment to international safety protocols."
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-300 border-border bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrication & Engineering Services Overview */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
              Home - Industry Solutions
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Fabrication and Engineering Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our experienced engineers provide comprehensive design and drafting services, including structural analysis,
              layout plans, material selection, and complete project documentation. Every design is delivered to meet the highest
              standards of quality, safety, and regulatory compliance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringServices.map((service) => (
              <Card key={service} className="h-full border-dashed border-border/60 bg-background/80 backdrop-blur">
                <CardContent className="p-6 flex items-center h-full">
                  <span className="text-sm font-semibold tracking-wide leading-snug">{service}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card border border-border rounded-3xl shadow-sm p-8 md:p-12 space-y-4">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-primary">Detailed Engineering</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our experienced engineers provide comprehensive design and drafting services, including structural analysis,
              layout plans, material selection, and comprehensive project documentation. We ensure that all designs comply
              with the highest quality and safety standards in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={fieldWork3}
            alt="Engineering excellence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/90"></div>
        </div>
        
        {/* Texture Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white drop-shadow-lg">
              Ready to Discuss Your Industry Needs?
            </h2>
            <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow">
              Our team of experts is ready to provide tailored solutions for your specific industry challenges.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="rounded-full shadow-2xl hover:scale-105 transition-transform text-lg px-8"
                asChild
              >
                <Link to="/contact">
                  Schedule a Consultation →
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full shadow-xl bg-white/10 text-white border-white/30 hover:bg-white/20 hover:scale-105 transition-transform text-lg px-8"
                asChild
              >
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustrySolutions;
