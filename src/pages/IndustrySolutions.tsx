import { Factory, Droplets, Zap, Ship, Building2, Truck, Fuel } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import oilGasImg from "@/assets/oil-gas-industry.png";
import storageTerminalsImg from "@/assets/storage-terminals.png";
import foodProcessingImg from "@/assets/food-processing.png";
import renewableEnergyImg from "@/assets/renewable-energy.png";
import railIndustryImg from "@/assets/rail-industry.png";
import shippingMarineImg from "@/assets/shipping-marine.png";

const IndustrySolutions = () => {
  const industries = [
    {
      icon: Droplets,
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
      icon: Building2,
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
      icon: Factory,
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
      icon: Zap,
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
      icon: Truck,
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
      icon: Ship,
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

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            Industry Solutions
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in">
            Tailored inspection and integrity solutions for diverse industries across Africa
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering specialized expertise across multiple sectors
            </p>
          </div>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 animate-fade-in border-border overflow-hidden bg-card/50 backdrop-blur-sm">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Image Section with Title Overlay */}
                  <div className="md:col-span-1 relative h-80 md:h-auto overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Glossy overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent"></div>
                    
                    {/* Title and Icon on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center text-center">
                      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-md border border-primary/30 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg">
                        <industry.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-2xl font-serif text-secondary-foreground drop-shadow-lg">{industry.title}</CardTitle>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:col-span-2 p-8 bg-gradient-to-br from-card via-card to-card/80">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-primary flex items-center">
                          <span className="w-1 h-6 bg-primary mr-3 rounded-full"></span>
                          Assets Covered
                        </h4>
                        <p className="text-muted-foreground pl-4">{industry.assetsCovered}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-primary flex items-center">
                          <span className="w-1 h-6 bg-primary mr-3 rounded-full"></span>
                          Key Services
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-2 pl-4">
                          {industry.services.map((service, idx) => (
                            <div key={idx} className="flex items-start text-sm group/item">
                              <span className="text-primary mr-2 mt-1 group-hover/item:scale-125 transition-transform">•</span>
                              <span className="group-hover/item:text-primary transition-colors">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-primary flex items-center">
                          <span className="w-1 h-6 bg-primary mr-3 rounded-full"></span>
                          Why It Matters
                        </h4>
                        <p className="text-muted-foreground leading-relaxed pl-4">{industry.whyItMatters}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-hero text-secondary-foreground border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Ready to Discuss Your Industry Needs?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Our team of experts is ready to provide tailored solutions for your specific industry challenges.
              </p>
              <Button size="lg" variant="secondary" asChild className="text-lg">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default IndustrySolutions;
