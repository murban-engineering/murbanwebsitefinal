import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircleIcon, AwardIcon, ShieldIcon } from "@/components/ui/icons";
import fieldWork4 from "@/assets/field-work-4.jpg";
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Custom Download Icon Component
const DownloadIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

// Custom FileCheck Icon Component
const FileCheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);

const Certifications = () => {
  const certifications = {
    api: [
      {
        id: "api-q1",
        name: "API Q1 Specification",
        standard: "API Spec Q1 9th Edition",
        description: "Quality management system for manufacturing organizations",
        issueDate: "2024",
        validUntil: "2027",
      },
      {
        id: "api-6a",
        name: "API 6A Wellhead Equipment",
        standard: "API Spec 6A",
        description: "Specification for wellhead and christmas tree equipment",
        issueDate: "2023",
        validUntil: "2026",
      },
      {
        id: "api-17d",
        name: "API 17D Subsea Wellhead",
        standard: "API Spec 17D",
        description: "Design and operation of subsea production systems",
        issueDate: "2024",
        validUntil: "2027",
      },
    ],
    iso: [
      {
        id: "iso-9001",
        name: "ISO 9001:2015",
        standard: "ISO 9001:2015",
        description: "Quality management systems requirements",
        issueDate: "2023",
        validUntil: "2026",
      },
      {
        id: "iso-14001",
        name: "ISO 14001:2015",
        standard: "ISO 14001:2015",
        description: "Environmental management systems",
        issueDate: "2023",
        validUntil: "2026",
      },
      {
        id: "iso-45001",
        name: "ISO 45001:2018",
        standard: "ISO 45001:2018",
        description: "Occupational health and safety management",
        issueDate: "2024",
        validUntil: "2027",
      },
      {
        id: "iso-3834",
        name: "ISO 3834",
        standard: "ISO 3834-2",
        description: "Quality requirements for fusion welding of metallic materials",
        issueDate: "2023",
        validUntil: "2026",
      },
    ],
    industry: [
      {
        id: "asme",
        name: "ASME Certification",
        standard: "ASME U, U2, S Stamps",
        description: "Pressure vessel and boiler manufacturing authorization",
        issueDate: "2024",
        validUntil: "2027",
      },
      {
        id: "nace",
        name: "NACE MR0175/ISO 15156",
        standard: "NACE MR0175",
        description: "Materials for use in H2S-containing environments",
        issueDate: "2023",
        validUntil: "2026",
      },
      {
        id: "aws",
        name: "AWS D1.1 Welding",
        standard: "AWS D1.1",
        description: "Structural welding code - steel",
        issueDate: "2024",
        validUntil: "2027",
      },
    ],
  };

  const handleDownload = (certId: string) => {
    console.log(`Downloading certificate: ${certId}`);
  };

  const renderCertCard = (cert: typeof certifications.api[0], iconComponent: React.ReactNode, index: number, direction: "left" | "right") => (
    <AnimateOnScroll key={cert.id} direction={direction} delay={index * 100}>
      <Card className="hover:shadow-xl transition-all duration-300 group h-full">
        <CardHeader>
          {iconComponent}
          <CardTitle className="text-xl">{cert.name}</CardTitle>
          <CardDescription className="font-mono text-xs">{cert.standard}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
          <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
            <CheckCircleIcon className="w-4 h-4 text-green-600" />
            <span>Valid: {cert.issueDate} - {cert.validUntil}</span>
          </div>
          <Button onClick={() => handleDownload(cert.id)} className="w-full rounded-full" variant="outline">
            <DownloadIcon className="w-4 h-4 mr-2" />
            Download Certificate
          </Button>
        </CardContent>
      </Card>
    </AnimateOnScroll>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={fieldWork4} alt="" className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <AnimateOnScroll direction="left" className="max-w-3xl">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              <ShieldIcon className="w-3 h-3 mr-1" />
              Industry Leading Standards
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              Certifications & Compliance
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              Our commitment to excellence is validated through rigorous international standards and industry-leading certifications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full shadow-lg hover:scale-105 transition-transform">
                <AwardIcon className="w-4 h-4 mr-2" />
                View All Certificates
              </Button>
              <Button size="lg" variant="outline" className="rounded-full hover:scale-105 transition-transform">
                Contact Compliance Team
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* API Certifications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="right">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                API Standards
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                American Petroleum Institute
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Certified to the highest API standards for oil and gas industry equipment and quality management
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.api.map((cert, i) =>
              renderCertCard(cert, <div className="w-12 h-12 rounded-lg bg-foreground/10 flex items-center justify-center mb-4 group-hover:bg-foreground/20 transition-colors"><FileCheckIcon className="w-6 h-6 text-foreground" /></div>, i, i % 2 === 0 ? "left" : "right")
            )}
          </div>
        </div>
      </section>

      {/* ISO Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="left">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                ISO Standards
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                International Organization for Standardization
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive ISO certifications ensuring quality, environmental responsibility, and workplace safety
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.iso.map((cert, i) =>
              renderCertCard(cert, <div className="w-12 h-12 rounded-lg bg-foreground/10 flex items-center justify-center mb-4 group-hover:bg-foreground/20 transition-colors"><AwardIcon className="w-6 h-6 text-foreground" /></div>, i, i % 2 === 0 ? "right" : "left")
            )}
          </div>
        </div>
      </section>

      {/* Industry Certifications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="right">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Industry Standards
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Additional Industry Certifications
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Specialized certifications for welding, pressure vessels, and corrosion resistance
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.industry.map((cert, i) =>
              renderCertCard(cert, <div className="w-12 h-12 rounded-lg bg-foreground/10 flex items-center justify-center mb-4 group-hover:bg-foreground/20 transition-colors"><ShieldIcon className="w-6 h-6 text-foreground" /></div>, i, i % 2 === 0 ? "left" : "right")
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <AnimateOnScroll direction="up" className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Need Certification Documentation?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact our compliance team for specific certification requirements or verification
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="rounded-full shadow-xl hover:scale-105 transition-transform"
            >
              Request Documents
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full bg-white/10 text-white border-white/30 hover:bg-white/20 hover:scale-105 transition-transform"
            >
              Contact Compliance Team
            </Button>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
};

export default Certifications;
