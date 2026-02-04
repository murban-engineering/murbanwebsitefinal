import {
  EnergyReservoirIcon,
  TerminalLogisticsIcon,
  RenewableCycleIcon,
  RailNetworkIcon,
  MarineLogisticsIcon,
} from "@/components/ui/icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import oilGasImg from "@/assets/oil-gas-industry.png";
import storageTerminalsImg from "@/assets/storage-terminals.png";
import renewableEnergyImg from "@/assets/renewable-energy.png";
import railIndustryImg from "@/assets/rail-industry.png";
import shippingMarineImg from "@/assets/shipping-marine.png";
import industryHero from "@/assets/industry-hero.jpg";

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
      <section className="relative py-24 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={industryHero}
            alt="Pipeline construction"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-foreground">
            Industry Solutions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Tailored inspection and integrity solutions for diverse industries across Africa
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering specialized expertise across multiple sectors
            </p>
          </div>

          <div className="space-y-12">
            {industries.map((industry, index) => (
              <Card key={index} className="group transition-shadow duration-300 border-border overflow-hidden bg-card/50 backdrop-blur-sm shadow-md hover:shadow-lg">
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Image Section with Title Overlay */}
                  <div className="md:col-span-2 relative h-96 md:h-auto overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Glossy overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Title and Icon on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center text-center">
                      <div className="mb-3 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary backdrop-blur-md border border-primary shadow-lg">
                        <industry.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl font-serif text-white font-bold">{industry.title}</CardTitle>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:col-span-3 p-6 bg-gradient-to-br from-card via-card to-card/80">
                    <div className="space-y-5">
                      <div>
                        <h4 className="text-base font-semibold mb-2 text-primary flex items-center">
                          <span className="w-1 h-5 bg-primary mr-2 rounded-full"></span>
                          Assets Covered
                        </h4>
                        <p className="text-sm text-muted-foreground pl-3">{industry.assetsCovered}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-base font-semibold mb-2 text-primary flex items-center">
                          <span className="w-1 h-5 bg-primary mr-2 rounded-full"></span>
                          Key Services
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-1.5 pl-3">
                          {industry.services.map((service, idx) => (
                            <div key={idx} className="flex items-start text-xs">
                              <span className="text-primary mr-1.5 mt-0.5">•</span>
                              <span className="leading-snug">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-base font-semibold mb-2 text-primary flex items-center">
                          <span className="w-1 h-5 bg-primary mr-2 rounded-full"></span>
                          Why It Matters
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed pl-3">{industry.whyItMatters}</p>
                      </div>
                    </div>
                  </div>
                </div>
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
