import { useState } from "react";
import {
  IntegrityShieldIcon,
  CalibrationGaugeIcon,
  PipelineInspectionIcon,
  StorageTankIcon,
  VesselComplianceIcon,
  UltrasonicMatrixIcon,
  UltrasonicSliceIcon,
  MagneticFieldIcon,
  MagneticLumenIcon,
  CapillarySearchIcon,
  RadiographicImagingIcon,
  CoatingShieldIcon,
  MaterialSpectrumIcon,
  PhasedArrayIcon,
  LaserCubeIcon,
  ThermalScannerIcon,
  ElectromagneticFieldIcon,
  FitnessAssessmentIcon,
  RiskGaugeIcon,
  BoilerGuardIcon,
  LiftingHookIcon,
  GasMonitorIcon,
  PressureSealIcon,
  TankFloorScanIcon,
  SphereInspectionIcon,
  HardnessMeterIcon,
  UavSurveyIcon,
  BlueprintCompassIcon,
  ProcurementFlowIcon,
  FabricationBeamIcon,
  StructureLiftIcon,
  WeldingArcIcon,
  SurfaceTreatmentIcon,
} from "@/components/ui/icons";
import type { IconComponent } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { DottedSurface } from "@/components/ui/dotted-surface";
import "./Services.css";

type ServiceCardProps = {
  icon: IconComponent;
  title: string;
  description: string;
  onSelect?: () => void;
  showCTA?: boolean;
};

type ServiceItemInput = {
  icon: IconComponent;
  title: string;
  description: string;
  slug?: string;
};

export type ServiceItem = {
  icon: IconComponent;
  title: string;
  description: string;
  slug: string;
};

type ServiceDetail = {
  label: string;
  breadcrumb: string[];
  headline: string;
  description: string;
  sections?: Array<{
    title: string;
    items: string[];
  }>;
  relatedServices?: string[];
};

export const createServiceSlug = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  onSelect,
  showCTA = true,
}: ServiceCardProps) => {
  const trackerIndices = Array.from({ length: 25 }, (_, index) => index + 1);
  const cardClasses = ["service-card"];

  if (onSelect) {
    cardClasses.push("service-card--selectable");
  }

  return (
    <div
      className={cardClasses.join(" ")}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (!onSelect) return;

        if (event.key === "Enter" || event.key === " " || event.key === "Space") {
          event.preventDefault();
          onSelect();
        }
      }}
      role={onSelect ? "button" : undefined}
      tabIndex={onSelect ? 0 : undefined}
      aria-label={onSelect ? title : undefined}
    >
      <div className="service-card-container noselect">
        <div className="service-card-canvas">
          {trackerIndices.map((index) => (
            <span
              key={index}
              className={`service-card-tracker tr-${index}`}
              aria-hidden="true"
            />
          ))}
          <article
            className="service-card-inner"
            tabIndex={0}
            aria-label={`${title} service overview`}
          >
            <p className="service-card-prompt">Click to explore</p>
            <div className="service-card-header">
              <span className="service-card-icon-wrapper" aria-hidden="true">
                <Icon className="service-card-icon" aria-hidden="true" strokeWidth={2.5} />
              </span>
              <h3 className="service-card-title">{title}</h3>
            </div>
          <p className="service-card-description">{description}</p>
        </article>
      </div>
    </div>
      {showCTA && (
        <Link to="/contact" className="service-card-cta">
          Talk to our team
        </Link>
      )}
    </div>
  );
};

const serviceSections = [
  { id: "service-spotlight", label: "Service Spotlight" },
  { id: "fabrication-services", label: "Engineering & Fabrication" },
  { id: "services-contact", label: "Contact Our Team" },
];

const ndtServiceItems: ServiceItemInput[] = [
  {
    icon: IntegrityShieldIcon,
    title: "NDT Inspection Services",
    description: "Full-scope Non-Destructive Testing coverage tailored to your assets and regulations.",
  },
  {
    icon: CalibrationGaugeIcon,
    title: "Tank Calibration Services",
    description: "Accurate volume measurement and tank calibration across all storage configurations.",
  },
  {
    icon: PipelineInspectionIcon,
    title: "API 570 Piping Inspection and Certification",
    description: "Piping system inspection for code compliance.",
  },
  {
    icon: StorageTankIcon,
    title: "API 653 Aboveground Storage Tank Inspection and Certification",
    description: "Tank integrity inspections that deliver official API 653 certification and reporting.",
  },
  {
    icon: VesselComplianceIcon,
    title: "API 510 Pressure Vessel Inspection",
    description: "Pressure vessel safety verification with detailed API 510 compliance documentation.",
  },
  {
    icon: UltrasonicMatrixIcon,
    title: "Ultrasonic Flaw Testing C-Scan",
    description: "Detailed flaw mapping using advanced ultrasonic C-scan imaging techniques.",
  },
  {
    icon: UltrasonicSliceIcon,
    title: "Ultrasonic Flaw Testing B-Scan",
    description: "Internal defect detection and profiling delivered through precision B-scan testing.",
  },
  {
    icon: MagneticFieldIcon,
    title: "Magnetic Particle Testing",
    description: "Surface flaw detection using powerful magnetic particle inspection methods.",
  },
  {
    icon: MagneticLumenIcon,
    title: "Fluorescent Magnet Particle Testing",
    description: "Crack detection enhanced with fluorescent indicators and ultraviolet inspection.",
  },
  {
    icon: CapillarySearchIcon,
    title: "Dye Penetrant Testing",
    description: "Reliable surface-breaking flaw detection with visible and fluorescent dye systems.",
  },
  {
    icon: RadiographicImagingIcon,
    title: "RT Radiographic Services",
    description:
      "High-resolution radiographic imaging that uncovers hidden discontinuities without interrupting service.",
  },
  {
    icon: CoatingShieldIcon,
    title: "Paint & Coating Inspection",
    description: "Checking protective coating thickness and quality to extend asset life.",
  },
  {
    icon: MaterialSpectrumIcon,
    title: "Positive Material Identification Testing",
    description: "Verify alloy composition quickly with positive material identification technology.",
  },
  {
    icon: PhasedArrayIcon,
    title: "Murban Phased Array Testing",
    description: "Advanced phased array ultrasonics for complex geometry and high-resolution flaw detection.",
  },
  {
    icon: LaserCubeIcon,
    title: "3D Laser Scanning Services",
    description:
      "High-accuracy spatial data capture for asset management, design planning, and facility maintenance.",
  },
  {
    icon: ThermalScannerIcon,
    title: "Thermal Camera Inspection",
    description:
      "Thermal imaging surveys that uncover temperature anomalies and emerging issues before they escalate.",
  },
  {
    icon: ElectromagneticFieldIcon,
    title: "Alternating Current Field Measurement",
    description:
      "Advanced electromagnetic inspection that detects and sizes surface cracks with exceptional accuracy.",
  },
  {
    icon: FitnessAssessmentIcon,
    title: "API 579 Murban Fitness for Service",
    description:
      "API 579-based integrity assessments that uncover defects, document risk, and guide repair or replacement decisions.",
  },
  {
    icon: RiskGaugeIcon,
    title: "API 580 Murban Risk Based Inspection",
    description: "Risk-based inspection strategies prioritizing safety-critical assets and intervals.",
  },
  {
    icon: BoilerGuardIcon,
    title: "Boiler Inspection Services",
    description: "Thorough inspections that keep boiler systems safe, efficient, and compliant.",
  },
  {
    icon: LiftingHookIcon,
    title: "Lifting Equipment Thorough Examination and Certification",
    description: "Safe lifting equipment checks paired with formal certification packages.",
  },
  {
    icon: GasMonitorIcon,
    title: "Murban Gas Detection",
    description:
      "Comprehensive monitoring solutions that detect hazardous gases early and keep worksites compliant.",
  },
  {
    icon: PressureSealIcon,
    title: "Murban Pressure Testing",
    description: "Verify system strength and tightness through controlled pressure testing.",
  },
  {
    icon: TankFloorScanIcon,
    title: "Floormap 3D MFL Scanning",
    description: "3D magnetic flux leakage scanning that pinpoints tank floor defects with precision.",
  },
  {
    icon: SphereInspectionIcon,
    title: "Sphere Tank Inspections",
    description: "Inspection of spherical tanks with detailed structural and safety reporting.",
  },
  {
    icon: HardnessMeterIcon,
    title: "Surface Hardness Testing",
    description: "Measuring metal surface strength to validate fabrication quality and wear resistance.",
  },
  {
    icon: UavSurveyIcon,
    title: "Murban UAV Inspection",
    description: "Aerial inspection using drone-based technology to access challenging environments.",
  },
];


export const ndtServices: ServiceItem[] = ndtServiceItems.map((service) => ({
  ...service,
  slug: service.slug ?? createServiceSlug(service.title),
}));

const fabricationServiceItems: ServiceItemInput[] = [
  {
    icon: BlueprintCompassIcon,
    title: "Detailed Engineering",
    description: "Comprehensive technical plans and documentation.",
    slug: "detailed-engineering",
  },
  {
    icon: ProcurementFlowIcon,
    title: "Procurement",
    description: "Sourcing materials for project execution.",
    slug: "procurement",
  },
  {
    icon: FabricationBeamIcon,
    title: "Fabrication",
    description: "Precision cutting, welding, and assembly services.",
    slug: "fabrication",
  },
  {
    icon: StructureLiftIcon,
    title: "Construction and Erection",
    description:
      "Safe, code-compliant erection of steel structures, pipelines, and storage tanks.",
    slug: "construction-and-erection",
  },
  {
    icon: WeldingArcIcon,
    title: "Specialized Welding",
    description:
      "Certified TIG, MIG, SMAW, and SAW welding that safeguards structural integrity.",
    slug: "specialized-welding",
  },
  {
    icon: SurfaceTreatmentIcon,
    title: "Surface Preparation and Paint Works",
    description: "Surface cleaning and industrial paint coating.",
    slug: "surface-preparation-and-paint-works",
  },
];


export const fabricationServices: ServiceItem[] = fabricationServiceItems.map((service) => ({
  ...service,
  slug: service.slug ?? createServiceSlug(service.title),
}));

export const allServices: ServiceItem[] = [...ndtServices, ...fabricationServices];

const serviceBySlug = new Map(allServices.map((service) => [service.slug, service]));

const serviceSlugAliasMap: Record<string, string> = {
  [createServiceSlug("API 653 Above Ground Storage Tank Inspection")]: createServiceSlug(
    "API 653 Aboveground Storage Tank Inspection and Certification",
  ),
  [createServiceSlug("API 580 Murban Risk Based Service")]: createServiceSlug(
    "API 580 Murban Risk Based Inspection",
  ),
  [createServiceSlug("API 580 Murban Risked Based Service")]: createServiceSlug(
    "API 580 Murban Risk Based Inspection",
  ),
  [createServiceSlug("Boiler Inspection Service")]: createServiceSlug(
    "Boiler Inspection Services",
  ),
  [createServiceSlug("Lifting Equipment Through Examination and Certification")]:
    createServiceSlug("Lifting Equipment Thorough Examination and Certification"),
  [createServiceSlug("Paint and Coating Inspection")]: createServiceSlug(
    "Paint & Coating Inspection",
  ),
  [createServiceSlug("PMI Testing")]: createServiceSlug(
    "Positive Material Identification Testing",
  ),
  [createServiceSlug("Pressure Testing")]: createServiceSlug("Murban Pressure Testing"),
  [createServiceSlug("Gas Detection")]: createServiceSlug("Murban Gas Detection"),
  [createServiceSlug("UAV Drone Inspection")]: createServiceSlug("Murban UAV Inspection"),
  [createServiceSlug("API 570 Piping Inspection")]: createServiceSlug(
    "API 570 Piping Inspection and Certification",
  ),
  [createServiceSlug("Paint & Coating Inspection")]: createServiceSlug(
    "Paint & Coating Inspection",
  ),
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "NDT Inspection Services": {
    label: "Comprehensive NDT Programs",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "Full-Scope Non-Destructive Testing",
    description:
      "Murban Engineering delivers complete non-destructive testing (NDT) programs that combine certified inspectors, proven procedures, and advanced instrumentation. From in-service assets to fabrication projects, we help facilities document condition, validate compliance, and schedule maintenance with confidence.",
    sections: [
      {
        title: "Inspection Capabilities",
        items: [
          "Program management that coordinates phased array, ultrasonic, radiographic, magnetic particle, and dye penetrant testing.",
          "API-certified inspectors who apply standardized procedures to piping, tanks, pressure vessels, and structural components.",
          "Digital reporting that captures readings, imagery, and traceable documentation for audits and regulators.",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Detects defects early so corrective action can be taken before safety or production is impacted.",
          "Supports regulatory compliance and client specifications through certified procedures and documentation.",
          "Optimizes maintenance budgets by targeting repairs based on quantitative condition data.",
        ],
      },
    ],
    relatedServices: [
      "Murban Phased Array Testing",
      "Ultrasonic Flaw Testing C-Scan",
      "Ultrasonic Flaw Testing B-Scan",
      "Magnetic Particle Testing",
      "Dye Penetrant Testing",
      "RT Radiographic Services",
      "Alternating Current Field Measurement",
      "API 579 Murban Fitness for Service",
    ],
  },
  "Murban Phased Array Testing": {
    label: "Murban Phased Array Testing",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "PAUT Phased Array Ultrasonic Testing",
    description:
      "Phased array testing is an advanced ultrasonic inspection technique employed by Murban Engineering to provide accurate flaw detection and characterization in materials and components. Our phased array testing services are highly effective in identifying and assessing defects, discontinuities, and structural issues. We deliver detailed reports and recommendations, enabling you to take proactive measures to maintain asset integrity and safety.",
    sections: [
      {
        title: "Services We Offer",
        items: [
          "Alternating Current Field Measurement",
          "API 579 Murban Fitness for Service",
          "API 580 Murban Risk Based Service",
          "Above Ground Storage Tank Inspection and Certification",
          "Boiler Inspection Service",
          "Lifting Equipment Thorough Examination and Certification",
          "Magnetic Particle Testing",
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
          "Murban UAV Inspection",
          "Ultrasonic Flaw Testing C Scan",
          "Ultrasonic Thickness Measurement",
          "Visual Inspection",
          "API 510 Pressure Vessel Inspection",
          "API 570 Piping Inspection",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Provides detailed and accurate defect detection in welds and materials.",
          "Offers rapid inspection capabilities, reducing downtime and inspection costs.",
          "Enhances inspection coverage and sensitivity compared to conventional UT methods.",
          "Supports compliance with industry standards and regulatory requirements.",
        ],
      },
    ],
    relatedServices: [
      "Ultrasonic Flaw Testing C Scan",
      "Ultrasonic Thickness Measurement",
      "Alternating Current Field Measurement",
      "Magnetic Particle Testing",
      "Dye Penetrant Testing",
      "Fluorescent Magnet Particle Testing",
      "Thermal Camera Inspection",
      "Murban UAV Inspection",
      "API 579 Murban Fitness for Service",
      "API 580 Murban Risk Based Service",
    ],
  },
  "Murban Pressure Testing": {
    label: "Pressure Testing",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "Pressure Testing Services",
    description:
      "Pressure testing is a crucial element in ensuring the integrity of pressure vessels and systems. Murban Engineering specializes in conducting rigorous pressure tests that verify the strength and reliability of your equipment. Our tests adhere to industry standards and regulations, providing assurance that your pressure systems are operating safely and efficiently.",
    sections: [
      {
        title: "Services We Offer",
        items: [
          "Alternating Current Field Measurement",
          "API 579 Murban Fitness for Service",
          "API 653 Above Ground Storage Tank Inspection",
          "API 580 Murban Risk Based Inspection",
          "Boiler Inspection Service",
          "Lifting Equipment Thorough Examination and Certification",
          "RT Radiographic Services",
          "Magnetic Particle Testing",
          "Surface Hardness Testing",
          "Dye Penetrant Testing",
          "Fluorescent Magnet Particle Testing",
          "Floormap 3D MFL Scanning",
          "Paint & Coating Inspection",
          "Positive Material Identification Testing",
          "Murban SIMS Tank Inspection Software",
          "Sphere Tank Inspections",
          "3D Laser Scanning Services",
          "Tank Calibration Services",
          "Murban Tank Inspection Database",
          "Thermal Camera Inspection",
          "Murban UAV Inspection",
          "Fabrication and Engineering Services",
          "Ultrasonic Flaw Testing C-Scan",
          "Murban Phased Array Testing",
          "Ultrasonic Thickness Measurement",
          "Visual Inspection",
          "API 510 Pressure Vessel Inspection",
          "API 570 Piping Inspection and Certification",
          "Gas Detection",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Validates the integrity and reliability of pressure vessels and systems.",
          "Helps identify weaknesses or leaks before they become critical issues.",
          "Ensures compliance with regulatory requirements and industry standards.",
          "Enhances safety by preventing potential accidents or equipment failures.",
        ],
      },
    ],
    relatedServices: [
      "API 510 Pressure Vessel Inspection",
      "API 570 Piping Inspection and Certification",
      "Ultrasonic Thickness Measurement",
      "Murban Phased Array Testing",
      "Magnetic Particle Testing",
      "Dye Penetrant Testing",
      "Thermal Camera Inspection",
      "Murban SIMS Tank Inspection Software",
    ],
  },
  "API 579 Murban Fitness for Service": {
    label: "API 579 Fitness for Service Assessment",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "API 579 Fitness for Service Assessments",
    description:
      "Murban Engineering offers Fitness for Service assessments based on API 579 standards, a critical service for evaluating the structural integrity of equipment and assets. Our highly experienced team utilizes advanced techniques to assess the fitness of your equipment, identifying defects, damage, or anomalies that may compromise safety or performance. We provide comprehensive reports and actionable recommendations to support informed repair, maintenance, or replacement decisions while keeping your operations compliant and resilient.",
    sections: [
      {
        title: "Services We Offer",
        items: [
          "Alternating Current Field Measurement",
          "API 579 Murban Fitness for Service",
          "API 653 Aboveground Storage Tank Inspection and Certification",
          "API 580 Murban Risk Based Inspection",
          "Boiler Inspection Service",
          "Lifting Equipment Thorough Examination and Certification",
          "RT Radiographic Services",
          "Magnetic Particle Testing",
          "Surface Hardness Testing",
          "Dye Penetrant Testing",
          "Fluorescent Magnetic Particle Testing",
          "Floormap 3D MFL Scanning",
          "Paint and Coating Inspection",
          "PMI Testing",
          "Murban SIMS Tank Inspection Software",
          "Sphere Tank Inspections",
          "3D Laser Scanning Services",
          "Tank Calibration Services",
          "Murban Tank Inspection Database",
          "Thermal Camera Inspection",
          "Murban Pressure Testing",
          "Murban UAV Inspection",
          "Fabrication and Engineering Services",
          "Ultrasonic Flaw Testing C-Scan",
          "Murban Phased Array Testing",
          "Ultrasonic Thickness Measurement",
          "Visual Inspection",
          "API 510 Pressure Vessel Inspection",
          "API 570 Piping Inspection and Certification",
          "Murban Gas Detection",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Evaluates the structural integrity of equipment, piping, and tanks to determine fitness for continued service.",
          "Utilizes advanced engineering assessments to evaluate defects, damage, and degradation.",
          "Provides a systematic approach to assess the remaining strength and reliability of components.",
          "Helps optimize maintenance decisions, minimizing downtime and maximizing asset lifespan.",
        ],
      },
    ],
    relatedServices: [
      "API 653 Aboveground Storage Tank Inspection and Certification",
      "API 580 Murban Risk Based Inspection",
      "Ultrasonic Thickness Measurement",
      "Floormap 3D MFL Scanning",
      "Ultrasonic Flaw Testing C-Scan",
      "Murban Phased Array Testing",
      "Murban Pressure Testing",
      "Murban SIMS Tank Inspection Software",
      "Murban Tank Inspection Database",
      "Thermal Camera Inspection",
    ],
  },
  "API 580 Murban Risk Based Inspection": {
    label: "API 580 Risk Based Inspection",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "API 580 Risk-Based Inspection (RBI)",
    description:
      "Murban Engineering's Risk-Based Inspection (RBI) services are designed to help you proactively manage and mitigate risks in your equipment and assets. Compliant with industry-standard API 580, our RBI approach involves data-driven assessments to identify potential hazards and prioritize maintenance activities. By leveraging our comprehensive RBI evaluations, you can efficiently allocate resources, reduce the likelihood of unexpected failures, and enhance safety and compliance across your operations.",
    sections: [
      {
        title: "Services We Offer",
        items: [
          "Alternating Current Field Measurement",
          "API 579 Murban Fitness for Service",
          "API 580 Murban Risk Based Inspection",
          "API 580 Murban Risk Based Service",
          "API 653 Aboveground Storage Tank Inspection and Certification",
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
          "Ultrasonic Flaw Testing C-Scan",
          "Murban Phased Array Testing",
          "Ultrasonic Thickness Measurement",
          "Visual Inspection",
          "API 510 Pressure Vessel Inspection",
          "API 570 Piping Inspection",
          "Gas Detection",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Prioritizes inspection activities based on risk assessment, optimizing resources.",
          "Helps identify and mitigate potential sources of failure before they occur.",
          "Enhances asset reliability and extends equipment lifespan.",
          "Complies with industry standards and regulatory requirements.",
        ],
      },
    ],
    relatedServices: [
      "API 579 Murban Fitness for Service",
      "API 653 Aboveground Storage Tank Inspection and Certification",
      "Boiler Inspection Services",
      "Floormap 3D MFL Scanning",
      "Murban SIMS Tank Inspection Software",
      "Murban Tank Inspection Database",
      "Thermal Camera Inspection",
      "Murban UAV Inspection",
      "Ultrasonic Thickness Measurement",
      "Alternating Current Field Measurement",
    ],
  },
  "API 510 Pressure Vessel Inspection": {
    label: "API 510 Pressure Vessel Inspection",
    breadcrumb: ["Home", "Services", "API 510 Pressure Vessel Inspection"],
    headline: "API 510 PRESSURE VESSEL Inspection: Ensuring SAFETY & Reliability",
    description:
      "Murban Engineering is your trusted partner for API 510 inspection services, dedicated to ensuring the safety, reliability, and compliance of your pressure vessels. With comprehensive expertise and a commitment to excellence, we tailor inspection solutions to meet your operational needs.",
    sections: [
      {
        title: "Why Murban Engineering for API 510 Inspection?",
        items: [
          "Industry expertise from certified inspectors with deep knowledge of API 510 standards.",
          "Regulatory compliance guidance that keeps your pressure vessels aligned with mandatory requirements.",
          "Customized inspection approaches adapted to your facility, operational demands, and maintenance goals.",
        ],
      },
      {
        title: "Technology-Driven Insights",
        items: [
          "Cutting-edge inspection technology that uncovers defects, degradation, and risk indicators early.",
          "Detailed inspection reports with actionable recommendations for maintenance, repair, or continued monitoring.",
          "Clear documentation that empowers informed decisions on asset readiness and lifecycle planning.",
        ],
      },
      {
        title: "Our Commitment to Safety & Reliability",
        items: [
          "Consistent focus on safeguarding assets while elevating safety and reliability standards.",
          "Professional service delivery that upholds the highest levels of quality across every inspection.",
          "Responsive support that makes it easy to schedule inspections and maintain compliance momentum.",
        ],
      },
    ],
    relatedServices: [
      "API 570 Piping Inspection and Certification",
      "API 653 Aboveground Storage Tank Inspection and Certification",
      "API 579 Murban Fitness for Service",
      "API 580 Murban Risk Based Inspection",
      "Pressure Testing",
      "Ultrasonic Thickness Measurement",
      "Magnetic Particle Testing",
      "Dye Penetrant Testing",
      "Thermal Camera Inspection",
      "UAV Drone Inspection",
      "3D Laser Scanning Services",
      "Murban SIMS Tank Inspection Software",
    ],
  },
  "API 570 Piping Inspection and Certification": {
    label: "API 570 Piping Inspection & Certification",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "API 570 Piping Inspection and Certification",
    description:
      "At Murban Engineering, we recognize the critical role that API 570 Piping Inspection plays in maintaining the integrity and safety of industrial piping systems across petrochemical, oil and gas, refining, and other high-demand sectors. With Murban Engineering, you can trust that your piping systems remain safe, compliant, and optimized for efficient operation.",
    sections: [
      {
        title: "The Significance of API 570 Inspection",
        items: [
          "Thoroughly assesses piping for corrosion, leaks, defects, and structural weaknesses before they compromise performance.",
          "Prevents costly downtime, environmental incidents, and safety hazards by catching issues early.",
          "Supports regulatory compliance, operational licensing, and safe facility operation through documented API 570 adherence.",
        ],
      },
      {
        title: "Our Comprehensive API 570 Inspection Process",
        items: [
          "Certified API 570 inspectors perform detailed visual examinations and non-destructive testing (NDT).",
          "Precise thickness measurements, component assessments, and flaw classification for every piping circuit.",
          "Action-oriented reports recommending repairs, replacements, alterations, or continued monitoring to maintain compliance.",
        ],
      },
      {
        title: "Why Choose Murban for API 570 Compliance",
        items: [
          "Prioritizes safety to reduce the risk of piping failures, accidents, and environmental events.",
          "Extends piping system lifespan, reducing replacement frequency and overall maintenance costs.",
          "Enhances facility reputation, reliability, and conformance with industry standards and environmental regulations.",
        ],
      },
    ],
    relatedServices: [
      "Alternating Current Field Measurement",
      "API 579 Murban Fitness for Service",
      "API 653 Above Ground Storage Tank Inspection",
      "API 580 Murban Risked Based Service",
      "Boiler Inspection Service",
      "Lifting Equipment Through Examination and Certification",
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
    ],
  },
  "API 653 Aboveground Storage Tank Inspection and Certification": {
    label: "API 653 Aboveground Storage Tank Inspection",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "API 653 Aboveground Storage Tank Inspection and Certification",
    description:
      "Murban Engineering specializes in API 653 Aboveground Storage Tank (AST) Inspection and Certification services to safeguard the integrity, safety, and compliance of your storage assets. Our certified team applies the American Petroleum Institute's API 653 standard to identify corrosion, leaks, structural deficiencies, and other conditions that can compromise tank performance, helping you maintain regulatory compliance and operational reliability.",
    sections: [
      {
        title: "Why API 653 Inspection Matters",
        items: [
          "Identifies hazards and defects early, enabling corrective action before they escalate into failures or environmental incidents.",
          "Supports regulatory compliance so facilities can maintain operating licenses and meet enforced API 653 requirements.",
          "Extends tank service life, minimizing costly replacements and maximizing return on infrastructure investments.",
        ],
      },
      {
        title: "Our API 653 Inspection Process",
        items: [
          "Certified inspectors execute detailed visual examinations supported by non-destructive testing (NDT) techniques.",
          "Precise thickness measurements and assessments of shells, bottoms, roofs, nozzles, and welds against API 653 criteria.",
          "Comprehensive reporting that classifies findings and recommends repairs, alterations, replacements, or monitoring strategies.",
        ],
      },
      {
        title: "Advantages of Murban's API 653 Service",
        items: [
          "Confidently demonstrate compliance with industry standards and regulatory obligations.",
          "Prevent catastrophic failures and environmental releases by detecting risks before they escalate.",
          "Improve asset longevity with data-driven decisions that optimize maintenance and lifecycle planning.",
          "Gain actionable reports that inform budgeting, repair prioritization, and proactive tank management.",
        ],
      },
    ],
    relatedServices: [
      "Alternating Current Field Measurement",
      "API 579 Murban Fitness for Service",
      "API 580 Murban Risk Based Service",
      "Boiler Inspection Service",
      "Lifting Equipment Through Examination and Certification",
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
    ],
  },
  "Alternating Current Field Measurement": {
    label: "Alternating Current Field Measurement (ACFM)",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "Alternating Current Field Measurement (ACFM)",
    description:
      "Murban Inspection and NDT introduces ACFM (Alternating Current Field Measurement)—an advanced electromagnetic inspection for detecting and sizing surface cracks and defects with unparalleled accuracy. Our cutting-edge technology ensures high sensitivity, efficiency, and non-contact inspection capabilities, revolutionizing your industry's NDT processes.",
    sections: [
      {
        title: "Service Highlights",
        items: [
          "Advanced electromagnetic inspection precisely detects and sizes surface-breaking cracks and defects.",
          "High-sensitivity sensors and efficient scanning routines streamline comprehensive coverage of critical assets.",
          "Immediate digital data capture supports rapid interpretation and informed maintenance decisions.",
          "Non-contact inspection keeps technicians safe while preserving coatings and minimizing surface preparation.",
        ],
      },
      {
        title: "Advantages",
        items: [
          "High sensitivity for sub-surface defect detection",
          "Versatile applications in various industries",
          "Rapid inspections and immediate data analysis",
          "Quantitative sizing for informed maintenance planning",
          "Non-contact technology for enhanced safety and efficiency",
        ],
      },
    ],
    relatedServices: [
      "API 579 Murban Fitness for Service",
      "API 653 Above Ground Storage Tank Inspection",
      "API 580 Murban Risked Based Service",
      "Boiler Inspection Service",
      "Lifting Equipment Through Examination and Certification",
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
    ],
  },
  "RT Radiographic Services": {
    label: "RT Radiographic Services",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "RT Radiographic Services",
    description:
      "Radiographic Testing (RT) is a vital non-destructive testing method employed by Murban Engineering to provide insights into the internal condition of materials and structures. Our experienced technicians use advanced radiographic technology to detect and analyze potential defects, discontinuities, or material irregularities. We offer precise assessments and recommendations, enabling you to make informed decisions about maintenance, repair, or replacement, ensuring the ongoing safety and reliability of your assets.",
    sections: [
      {
        title: "What Our Radiographic Testing Delivers",
        items: [
          "High-resolution imaging of welds, castings, and critical components to reveal hidden discontinuities.",
          "Certified radiography technicians who tailor exposure techniques to component geometry and project requirements.",
          "Actionable reports that clearly classify indications and outline mitigation steps for continued safe service.",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Provides detailed internal imaging of materials for defect detection.",
          "Identifies cracks, voids, and other internal anomalies with high accuracy.",
          "Enables evaluation of material integrity without damaging the sample.",
          "Supports quality control and assurance in manufacturing and construction.",
        ],
      },
    ],
    relatedServices: [
      "Ultrasonic Flaw Testing C-Scan",
      "Murban Phased Array Testing",
      "Magnetic Particle Testing",
      "Dye Penetrant Testing",
      "Fluorescent Magnet Particle Testing",
      "Alternating Current Field Measurement",
      "Ultrasonic Thickness Measurement",
      "Murban UAV Inspection",
      "Thermal Camera Inspection",
      "Paint & Coating Inspection",
      "Positive Material Identification Testing",
    ],
  },
  "Paint & Coating Inspection": {
    label: "Paint & Coating Inspection",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "Paint & Coating Inspection Services",
    description:
      "At Murban Engineering, we specialize in Paint and Coating Inspection services, which are essential for maintaining the longevity and performance of assets. Our skilled inspectors ensure that coatings are applied correctly, adhere properly, and meet quality standards. With our services, you can trust that your assets are protected from corrosion and environmental factors, ultimately reducing maintenance costs and extending their lifespan.",
    sections: [
      {
        title: "Comprehensive Coating Quality Assurance",
        items: [
          "Verify surface preparation, environmental conditions, and application techniques against coating specifications before work proceeds.",
          "Measure dry film thickness, adhesion, and continuity so each layer delivers the intended corrosion protection.",
          "Provide detailed reporting with photographic evidence, defect categorization, and corrective recommendations for warranty-ready documentation.",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Ensures proper application and adhesion of coatings for corrosion protection.",
          "Enhances durability and longevity of painted surfaces.",
          "Supports compliance with coating specifications and industry standards.",
        ],
      },
    ],
    relatedServices: [
      "Alternating Current Field Measurement",
      "API 579 Murban Fitness for Service",
      "API 653 Above Ground Storage Tank Inspection",
      "API 580 Murban Risk Based Inspection",
      "Boiler Inspection Services",
      "Lifting Equipment Thorough Examination and Certification",
      "RT Radiographic Services",
      "Magnetic Particle Testing",
      "Surface Hardness Testing",
      "Dye Penetrant Testing",
      "Fluorescent Magnet Particle Testing",
      "Floormap 3D MFL Scanning",
      "Positive Material Identification Testing",
      "Murban SIMS Tank Inspection Software",
      "Sphere Tank Inspections",
      "3D Laser Scanning Services",
      "Tank Calibration Services",
      "Murban Tank Inspection Database",
      "Thermal Camera Inspection",
      "Pressure Testing",
      "Murban UAV Inspection",
      "Fabrication",
      "Ultrasonic Flaw Testing C-Scan",
      "Murban Phased Array Testing",
      "Ultrasonic Thickness Measurement",
      "Visual Inspection",
      "API 510 Pressure Vessel Inspection",
      "API 570 Piping Inspection and Certification",
      "Murban Gas Detection",
    ],
  },
  "Boiler Inspection Services": {
    label: "Boiler Inspection Services",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "Boiler Inspection Services",
    description:
      "Boilers are critical components in various industries, and Murban Engineering's Boiler Inspection Services are dedicated to ensuring their safety and efficiency. Our expert inspectors conduct meticulous examinations to detect issues, corrosion, and wear and tear. We provide comprehensive reports and recommendations to address any identified problems, ensuring that your boilers operate at peak performance while meeting stringent safety standards.",
    sections: [
      {
        title: "Services We Offer",
        items: [
          "Alternating Current Field Measurement",
          "API 579 Murban Fitness for Service",
          "API 653 Aboveground Storage Tank Inspection and Certification",
          "API 580 Murban Risk Based Inspection",
          "Boiler Inspection Services",
          "Lifting Equipment Thorough Examination and Certification",
          "RT Radiographic Services",
          "Magnetic Particle Testing",
          "Surface Hardness Testing",
          "Dye Penetrant Testing",
          "Fluorescent Magnet Particle Testing",
          "Floormap 3D MFL Scanning",
          "Paint & Coating Inspection",
          "Positive Material Identification Testing",
          "Murban SIMS Tank Inspection Software",
          "Sphere Tank Inspections",
          "3D Laser Scanning Services",
          "Tank Calibration Services",
          "Murban Tank Inspection Database",
          "Thermal Camera Inspection",
          "Pressure Testing",
          "Murban UAV Inspection",
          "Fabrication and Engineering Services",
          "Ultrasonic Flaw Testing C-Scan",
          "Murban Phased Array Testing",
          "Ultrasonic Thickness Measurement",
          "Visual Inspection",
          "API 510 Pressure Vessel Inspection",
          "API 570 Piping Inspection and Certification",
          "Murban Gas Detection",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Ensures compliance with regulatory requirements for boiler safety and performance.",
          "Identifies corrosion, erosion, and other defects that can affect boiler efficiency.",
          "Helps prevent accidents and unplanned downtime by detecting potential issues early.",
          "Supports optimization of boiler maintenance schedules and prolongs equipment lifespan.",
        ],
      },
    ],
    relatedServices: [
      "API 510 Pressure Vessel Inspection",
      "API 570 Piping Inspection and Certification",
      "API 579 Murban Fitness for Service",
      "API 580 Murban Risk Based Inspection",
      "Pressure Testing",
      "Ultrasonic Thickness Measurement",
      "Thermal Camera Inspection",
      "Magnetic Particle Testing",
      "Dye Penetrant Testing",
      "Murban Phased Array Testing",
    ],
  },
  "Magnetic Particle Testing": {
    label: "MPI Magnetic Particle Testing",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "MPI Magnetic Particle Testing",
    description:
      "Magnetic Particle Testing (MPI) is a trusted non-destructive testing method used to reveal surface and near-surface defects in ferromagnetic components. Murban Engineering deploys MPI to safeguard the reliability of critical assets, combining precision field practices with expert evaluation so you receive clear data and actionable recommendations to address any detected flaws.",
    sections: [
      {
        title: "What Our MPI Service Delivers",
        items: [
          "Detects cracks, laps, seams, and other discontinuities that originate at or near the surface of ferromagnetic materials.",
          "Provides thorough inspection coverage with experienced technicians who tailor magnetization techniques to your component geometry.",
          "Pairs MPI with complementary B-scan ultrasonic flaw testing and corrosion mapping to validate findings and plan corrective action.",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Detects surface and near-surface defects in ferromagnetic materials.",
          "Provides rapid and reliable results for defect identification and characterization.",
          "Supports safety and reliability by detecting cracks, weld discontinuities, and fatigue damage.",
          "Facilitates compliance with industry standards and regulatory requirements.",
        ],
      },
    ],
    relatedServices: [
      "Alternating Current Field Measurement",
      "API 579 Murban Fitness for Service",
      "API 653 Above Ground Storage Tank Inspection",
      "API 580 Murban Risk Based Service",
      "Boiler Inspection Service",
      "Lifting Equipment Through Examination and Certification",
      "RT Radiographic Services",
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
      "Ultrasonic Flaw Testing C-Scan",
      "Murban Phased Array Testing",
      "Ultrasonic Thickness Measurement",
      "Visual Inspection",
      "API 510 Pressure Vessel Inspection",
      "API 570 Piping Inspection",
      "Gas Detection",
    ],
  },
  "Surface Hardness Testing": {
    label: "Surface Hardness Testing",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "Surface Hardness Testing",
    description:
      "Surface Hardness Testing is a critical service offered by Murban Engineering to assess the hardness of materials used in your equipment and structures. Our testing methods ensure that materials meet the required hardness specifications and quality standards for their intended applications. By utilizing our Surface Hardness Testing services, you can make informed decisions about material selection, quality control, and overall asset reliability.",
    sections: [
      {
        title: "Services We Offer",
        items: [
          "Alternating Current Field Measurement",
          "API 579 Murban Fitness for Service",
          "API 580 Murban Risk Based Service",
          "Above Ground Storage Tank Inspection and Certification",
          "Boiler Inspection Service",
          "Lifting Equipment Thorough Examination and Certification",
          "Magnetic Particle Testing",
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
          "Murban UAV Inspection",
          "Ultrasonic Flaw Testing C-Scan",
          "Murban Phased Array Testing",
          "Ultrasonic Thickness Measurement",
          "Visual Inspection",
          "API 510 Pressure Vessel Inspection",
          "API 570 Piping Inspection",
          "Surface Hardness Testing",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Provides accurate measurement of material hardness for quality control.",
          "Helps identify material strength and suitability for specific applications.",
          "Enables early detection of material degradation or wear, preventing failures.",
          "Supports optimization of material selection and manufacturing processes.",
        ],
      },
    ],
    relatedServices: [
      "Magnetic Particle Testing",
      "Dye Penetrant Testing",
      "Fluorescent Magnet Particle Testing",
      "Ultrasonic Flaw Testing C-Scan",
      "Murban Phased Array Testing",
      "Ultrasonic Thickness Measurement",
      "PMI Testing",
      "Floormap 3D MFL Scanning",
      "Thermal Camera Inspection",
      "API 579 Murban Fitness for Service",
      "API 580 Murban Risk Based Service",
      "API 510 Pressure Vessel Inspection",
      "API 570 Piping Inspection",
      "Above Ground Storage Tank Inspection and Certification",
      "Murban UAV Inspection",
    ],
  },
  "Dye Penetrant Testing": {
    label: "Dye Penetrant Testing (PT)",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "Dye Penetrant Testing (PT)",
    description:
      "Dye Penetrant Testing (PT) is a critical inspection method employed by Murban Engineering to detect surface flaws and discontinuities in various materials. Our skilled technicians apply penetrant solutions and meticulously examine components for defects. We provide comprehensive assessments and recommendations, enabling you to maintain the integrity and safety of your assets with confidence.",
    sections: [
      {
        title: "Service Highlights",
        items: [
          "Surface-breaking flaw detection for metallic and other non-porous components using visible and fluorescent penetrant systems.",
          "Certified inspectors manage cleaning, application, dwell, and development steps to reveal even subtle discontinuities.",
          "Actionable evaluations and recommendations that support integrity management, maintenance planning, and compliance reporting.",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Detects surface-breaking defects in non-porous materials with high sensitivity.",
          "Provides rapid results and easy interpretation of defect indications.",
          "Supports quality control and assurance in manufacturing and maintenance.",
          "Enables detection of defects in complex geometries and hard-to-access areas.",
        ],
      },
    ],
    relatedServices: [
      "Alternating Current Field Measurement",
      "API 579 Murban Fitness for Service",
      "API 653 Above Ground Storage Tank Inspection",
      "API 580 Murban Risk Based Inspection",
      "Boiler Inspection Services",
      "Lifting Equipment Thorough Examination and Certification",
      "Magnetic Particle Testing",
      "Fluorescent Magnetic Particle Testing",
      "Floormap 3D MFL Scanning",
      "Paint and Coating Inspection",
      "PMI Testing",
      "Murban SIMS Tank Inspection Software",
      "Sphere Tank Inspections",
      "3D Laser Scanning Services",
      "Tank Calibration Services",
      "Murban Tank Inspection Database",
      "Thermal Camera Inspection",
      "UAV Drone Inspection",
      "Ultrasonic Flaw Testing C-Scan",
      "Murban Phased Array Testing",
      "Ultrasonic Thickness Measurement",
      "Visual Inspection",
      "API 510 Pressure Vessel Inspection",
      "API 570 Piping Inspection and Certification",
    ],
  },
  "Ultrasonic Flaw Testing C-Scan": {
    label: "Ultrasonic Flaw Testing C-Scan",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "Ultrasonic Flaw Testing C-Scan (Corrosion Mapping)",
    description:
      "Ultrasonic flaw testing C-scan delivers a high-resolution corrosion map of critical assets, allowing integrity teams to visualize wall loss, pitting, and defects before they lead to failures. Murban Engineering's specialists utilize advanced ultrasonic instrumentation and experienced interpretation to provide the actionable insights needed to keep storage tanks, pipelines, and process equipment operating safely and efficiently.",
    sections: [
      {
        title: "Advantages",
        items: [
          "Provides detailed corrosion mapping for accurate assessment of asset condition.",
          "Helps prioritize maintenance and repair activities based on severity.",
          "Enables proactive corrosion management to extend asset lifespan.",
          "Supports compliance with regulatory requirements and industry standards.",
        ],
      },
    ],
    relatedServices: [
      "Ultrasonic Thickness Measurement",
      "Murban Phased Array Testing",
      "Floormap 3D MFL Scanning",
      "Alternating Current Field Measurement",
      "API 579 Murban Fitness for Service",
      "API 580 Murban Risk Based Inspection",
    ],
  },
  "Ultrasonic Flaw Testing B-Scan": {
    label: "Ultrasonic Flaw Testing B-Scan",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "Ultrasonic Flaw Testing B-Scan (Profile Mapping)",
    description:
      "B-scan ultrasonic testing provides a cross-sectional profile of wall thickness, laminations, and internal damage. Murban Engineering leverages B-scan techniques to map corrosion, erosion, and remaining life in piping systems, pressure boundaries, and structural weldments.",
    sections: [
      {
        title: "Service Highlights",
        items: [
          "Generates side-view imaging that reveals wall loss depth and contour changes in real time.",
          "Identifies localized thinning, pitting, and inclusions that may be missed with spot thickness readings.",
          "Integrates with phased array and C-scan data sets to validate findings across large surface areas.",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Supports run-repair-replace decisions with quantified measurements of remaining wall thickness.",
          "Minimizes intrusive inspections by characterizing defects without cutting or disassembling equipment.",
          "Improves safety by highlighting critical flaw growth trends before they escalate to failure.",
        ],
      },
    ],
    relatedServices: [
      "Ultrasonic Flaw Testing C-Scan",
      "Ultrasonic Thickness Measurement",
      "Murban Phased Array Testing",
      "Alternating Current Field Measurement",
      "API 570 Piping Inspection and Certification",
      "API 579 Murban Fitness for Service",
    ],
  },
  "Fluorescent Magnet Particle Testing": {
    label: "Fluorescent Magnetic Particle Testing",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "Fluorescent Magnetic Particle Testing",
    description:
      "Fluorescent Magnetic Particle Testing is a specialized technique employed by Murban Engineering to enhance the detection of flaws in critical components. Our services go beyond traditional magnetic particle testing, using fluorescent technology to improve flaw detection and characterization. We help you identify and address defects promptly, ensuring the reliability and safety of your equipment.",
    sections: [
      {
        title: "Service Highlights",
        items: [
          "Combines ultraviolet illumination with high-contrast magnetic particles to expose surface and near-surface flaws.",
          "Delivers enhanced visibility that allows technicians to characterize indications with confidence.",
          "Supports rapid maintenance decisions so issues are resolved before they impact asset availability.",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Detects surface and near-surface defects with high sensitivity.",
          "Provides rapid and reliable inspection results, reducing downtime.",
          "Enhances safety by identifying potential failure points early.",
          "Supports quality assurance and compliance with industry standards.",
        ],
      },
    ],
    relatedServices: [
      "Alternating Current Field Measurement",
      "API 579 Murban Fitness for Service",
      "API 653 Above Ground Storage Tank Inspection",
      "API 580 Murban Risk Based Service",
      "Boiler Inspection Service",
      "Lifting Equipment Thorough Examination and Certification",
      "RT Radiographic Services",
      "Magnetic Particle Testing",
      "Surface Hardness Testing",
      "Dye Penetrant Testing",
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
    ],
  },
  "Floormap 3D MFL Scanning": {
    label: "Floormap 3D MFL Scanning",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "Floormap 3D MFL Tank Floor Mapping",
    description:
      "Murban Engineering offers advanced Floormap 3D MFL scanning services for precise assessment of tank floors. We employ cutting-edge technology to create accurate 3D maps of tank bottoms, enabling our inspectors to pinpoint corrosion and defects with exceptional clarity. The actionable insights we deliver support targeted maintenance programs that extend tank life and safeguard structural integrity.",
    sections: [
      {
        title: "Services We Offer",
        items: [
          "Alternating Current Field Measurement",
          "API 579 Murban Fitness for Service",
          "API 653 Above Ground Storage Tank Inspection",
          "API 580 Murban Risk Based Service",
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
        ],
      },
      {
        title: "Advantages",
        items: [
          "Detects corrosion, erosion, and other defects in tank bottoms with high fidelity.",
          "Provides comprehensive coverage of large tank surfaces, minimizing blind spots.",
          "Enables early detection of defects, preventing costly repairs or replacements.",
          "Supports proactive maintenance planning for asset integrity management.",
        ],
      },
    ],
    relatedServices: [
      "API 653 Above Ground Storage Tank Inspection",
      "API 579 Murban Fitness for Service",
      "API 580 Murban Risk Based Inspection",
      "Ultrasonic Flaw Testing C Scan",
      "Ultrasonic Thickness Measurement",
      "3D Laser Scanning Services",
      "Murban SIMS Tank Inspection Software",
      "Murban Tank Inspection Database",
      "Thermal Camera Inspection",
      "Murban UAV Inspection",
    ],
  },
  "Positive Material Identification Testing": {
    label: "Positive Material Identification (PMI) Testing",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "Positive Material Identification (PMI) Testing",
    description:
      "Positive Material Identification (PMI) Testing is a critical service offered by Murban Engineering to confirm the composition of materials used in your equipment and structures. Our PMI testing ensures material compatibility with intended applications and compliance with industry standards. With our expertise, you can maintain the quality and safety of your assets, preventing material-related issues and ensuring long-term reliability.",
    sections: [
      {
        title: "What Our PMI Testing Provides",
        items: [
          "Confirms alloy chemistry on-site or in the shop using advanced XRF and OES analyzers for immediate answers.",
          "Validates that incoming materials, in-service components, and repairs meet specification before they enter service.",
          "Documents traceability and compliance for audits, quality programs, and regulatory reviews.",
          "Supports integrity teams with rapid mobilisation, experienced technicians, and clear acceptance criteria.",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Verifies material composition to ensure suitability for intended use.",
          "Helps prevent material mix-ups and potential quality issues.",
          "Supports compliance with industry standards and regulatory requirements.",
          "Enhances product quality and reliability through accurate material identification.",
        ],
      },
    ],
    relatedServices: [
      "Alternating Current Field Measurement",
      "API 570 Piping Inspection and Certification",
      "API 579 Murban Fitness for Service",
      "API 653 Aboveground Storage Tank Inspection and Certification",
      "API 580 Murban Risk Based Inspection",
      "Magnetic Particle Testing",
      "Dye Penetrant Testing",
      "Fluorescent Magnet Particle Testing",
      "Surface Hardness Testing",
      "RT Radiographic Services",
      "Ultrasonic Thickness Measurement",
      "Ultrasonic Flaw Testing C-Scan",
      "Murban Phased Array Testing",
      "3D Laser Scanning Services",
      "Thermal Camera Inspection",
      "UAV Drone Inspection",
      "Murban SIMS Tank Inspection Software",
    ],
  },
  "Lifting Equipment Thorough Examination and Certification": {
    label: "Lifting Equipment Thorough Examination and Certification",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "Lifting Equipment Examination & Certification",
    description:
      "Murban Engineering offers thorough examinations and certification for lifting equipment, crucial in industries where safety and load-bearing capacity are paramount. Our certified inspectors meticulously assess the condition and performance of lifting equipment, ensuring compliance with industry standards. With our services, you can trust that your lifting equipment is safe, reliable, and ready to perform the tasks it was designed for.",
    sections: [
      {
        title: "Services We Offer",
        items: [
          "Alternating Current Field Measurement",
          "API 579 Murban Fitness for Service",
          "API 580 Murban Risk Based Service",
          "Above Ground Storage Tank Inspection and Certification",
          "Boiler Inspection Service",
          "Lifting Equipment Thorough Examination and Certification",
          "Magnetic Particle Testing",
          "Dye Penetrant Testing",
          "Fluorescent Magnetic Particle Testing",
          "Floormap 3D MFL Scanning",
          "Paint and Coating Inspection",
          "PMI Testing",
          "Murban SIMS Tank Inspection Software",
          "Sphere Tank Inspections",
          "3D Laser Scanning Services",
          "Tank Calibration Services",
          "Murban Tank Inspection Database",
          "Thermal Camera Inspection",
          "Murban UAV Inspection",
          "Ultrasonic Flaw Testing C-Scan",
          "Murban Phased Array Testing",
          "Ultrasonic Thickness Measurement",
          "Visual Inspection",
          "API 510 Pressure Vessel Inspection",
          "API 570 Piping Inspection",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Ensures the safety and integrity of lifting equipment in compliance with regulations.",
          "Identifies wear, fatigue, and structural defects that may compromise safety.",
          "Helps prevent accidents and injuries by detecting potential failure points early.",
          "Supports regulatory compliance and minimizes downtime through proactive maintenance.",
        ],
      },
    ],
    relatedServices: [
      "Magnetic Particle Testing",
      "Dye Penetrant Testing",
      "Fluorescent Magnetic Particle Testing",
      "Ultrasonic Thickness Measurement",
      "Ultrasonic Flaw Testing C-Scan",
      "Alternating Current Field Measurement",
      "Thermal Camera Inspection",
      "API 579 Murban Fitness for Service",
      "API 580 Murban Risk Based Inspection",
      "Boiler Inspection Services",
    ],
  },
  "Thermal Camera Inspection": {
    label: "Thermal Camera Inspection",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "Thermal Camera Inspection",
    description:
      "Murban Engineering utilizes thermal cameras for inspections, allowing us to detect temperature anomalies and potential issues in your equipment and structures. Our thermal camera inspections provide valuable insights into the condition of critical components, helping you identify problems before they become major concerns. With our services, you can enhance the safety and reliability of your assets while minimizing downtime and maintenance costs.",
    sections: [
      {
        title: "Services We Offer",
        items: [
          "Alternating Current Field Measurement",
          "API 579 Murban Fitness for Service",
          "API 580 Murban Risk Based Inspection",
          "Above Ground Storage Tank Inspection and Certification",
          "Boiler Inspection Service",
          "Lifting Equipment Thorough Examination and Certification",
          "Magnetic Particle Testing",
          "Dye Penetrant Testing",
          "Fluorescent Magnetic Particle Testing",
          "Floormap 3D MFL Scanning",
          "Paint and Coating Inspection",
          "PMI Testing",
          "Murban SIMS Tank Inspection Software",
          "Sphere Tank Inspections",
          "3D Laser Scanning Services",
          "Tank Calibration Services",
          "Murban Tank Inspection Database",
          "Murban UAV Inspection",
          "Ultrasonic Flaw Testing C-Scan",
          "Murban Phased Array Testing",
          "Ultrasonic Thickness Measurement",
          "Visual Inspection",
          "API 510 Pressure Vessel Inspection",
          "API 570 Piping Inspection and Certification",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Identifies temperature anomalies indicative of potential defects or failures.",
          "Enhances safety by identifying overheating components or electrical issues.",
          "Supports predictive maintenance strategies to optimize asset performance.",
        ],
      },
    ],
    relatedServices: [
      "Alternating Current Field Measurement",
      "Floormap 3D MFL Scanning",
      "Murban Phased Array Testing",
      "Ultrasonic Thickness Measurement",
      "Murban UAV Inspection",
      "Paint and Coating Inspection",
    ],
  },
  "Murban UAV Inspection": {
    label: "Murban UAV Inspection",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "UAV Drone Inspection Services",
    description:
      "Murban Engineering offers UAV (Unmanned Aerial Vehicle) inspection services that deliver fast, safe, and cost-effective assessments of assets in difficult-to-reach areas. Equipped with high-resolution cameras and smart sensors, our drone teams capture the detailed visual and thermal data you need to plan maintenance, validate repairs, and manage asset integrity without putting personnel at risk.",
    sections: [
      {
        title: "Services We Offer",
        items: [
          "Alternating Current Field Measurement",
          "API 579 Murban Fitness for Service",
          "API 580 Murban Risk Based Service",
          "Above Ground Storage Tank Inspection and Certification",
          "Boiler Inspection Service",
          "Lifting Equipment Thorough Examination and Certification",
          "Murban Fitness for Service",
          "Magnetic Particle Testing",
          "Dye Penetrant Testing",
          "Fluorescent Magnetic Particle Testing",
          "Floormap 3D MFL Scanning",
          "Paint and Coating Inspection",
          "PMI Testing",
          "Murban SIMS Tank Inspection Software",
          "Sphere Tank Inspections",
          "3D Laser Scanning Services",
          "Tank Calibration Services",
          "Murban Tank Inspection Database",
          "Thermal Camera Inspection",
          "Ultrasonic Flaw Testing C Scan",
          "Murban Phased Array Testing",
          "Ultrasonic Thickness Measurement",
          "Visual Inspection",
          "API 510 Pressure Vessel Inspection",
          "API 570 Piping Inspection",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Provides access to hard-to-reach areas, enhancing safety.",
          "Enables quick and efficient inspection, reducing downtime.",
          "Offers high-resolution imaging for detailed analysis.",
          "Allows for comprehensive inspections without disrupting operations.",
        ],
      },
    ],
    relatedServices: [
      "Thermal Camera Inspection",
      "3D Laser Scanning Services",
      "Floormap 3D MFL Scanning",
      "Ultrasonic Flaw Testing C-Scan",
      "Murban Phased Array Testing",
      "API 579 Murban Fitness for Service",
      "API 580 Murban Risk Based Inspection",
      "Tank Calibration Services",
    ],
  },
  "Tank Calibration Services": {
    label: "Tank Calibration Service",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "Precision Tank Calibration & Volume Verification",
    description:
      "Tank calibration is essential for ensuring accurate volume measurements and compliance with industry standards. Murban Engineering specializes in Tank Calibration Services, utilizing precise methods and equipment to calibrate your tanks accurately. Our services help you maintain compliance, minimize discrepancies in volume measurements, and ensure efficient operations in various industries, including oil and gas, chemicals, and more.",
    sections: [
      {
        title: "Advantages",
        items: [
          "Ensures precise measurement accuracy for equipment and machinery using laser technology.",
          "Facilitates calibration of dimensional, angular, and positional parameters with high precision.",
          "Enhances quality control by minimizing measurement errors and ensuring traceability.",
          "Supports compliance with industry standards and regulatory requirements.",
        ],
      },
    ],
    relatedServices: [
      "Alternating Current Field Measurement",
      "API 579 Murban Fitness for Service",
      "API 653 Above Ground Storage Tank Inspection",
      "API 580 Murban Risk Based Service",
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
    ],
  },
  "3D Laser Scanning Services": {
    label: "3D Laser Scanning Services",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "High-Fidelity 3D Laser Scanning & Digital Twin Capture",
    description:
      "Murban Engineering provides 3D Laser Scanning Services, a cutting-edge technology that allows for precise measurements and mapping of structures, assets, and environments. Our state-of-the-art laser scanners capture detailed data, enabling accurate assessments for asset management, design planning, and facility maintenance. With our 3D Laser Scanning Services, you gain invaluable insights into your assets' conditions, facilitating informed decision-making and optimized operations.",
    sections: [
      {
        title: "Advantages",
        items: [
          "Captures comprehensive and detailed 3D representations of objects, structures, or environments.",
          "Enables accurate measurement, analysis, and visualization of complex geometries.",
          "Supports various applications including reverse engineering, as-built documentation, and quality control.",
          "Enhances efficiency in design, manufacturing, and construction processes by providing accurate spatial data.",
        ],
      },
    ],
    relatedServices: [
      "Tank Calibration Services",
      "Murban SIMS Tank Inspection Software",
      "Murban Tank Inspection Database",
      "Floormap 3D MFL Scanning",
      "Thermal Camera Inspection",
      "UAV Drone Inspection",
      "Ultrasonic Flaw Testing C Scan",
      "Ultrasonic Thickness Measurement",
      "Magnetic Particle Testing",
      "Dye Penetrant Testing",
      "Fluorescent Magnet Particle Testing",
      "Alternating Current Field Measurement",
      "API 579 Murban Fitness for Service",
      "API 580 Murban Risk Based Inspection",
    ],
  },
  "Murban Gas Detection": {
    label: "Murban Gas Detection",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "Comprehensive Industrial Gas Detection",
    description:
      "Safety is paramount in any industry, and Murban Engineering's Gas Detection services are engineered to identify and mitigate gas-related risks in your operations. We deploy state-of-the-art detection technology to monitor gas levels continuously and provide timely alerts whenever potential hazards arise, helping create safer work environments and minimizing the risk of leaks or exposure.",
    sections: [
      {
        title: "Comprehensive Gas Monitoring Solutions",
        items: [
          "Deploy fixed and portable detection systems tailored to plant processes and hazardous areas.",
          "Continuously track gas concentrations with real-time alarms that trigger immediate response protocols.",
          "Integrate monitoring outputs with control rooms, shutdown systems, and safety procedures for rapid mitigation.",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Ensures a safe working environment by identifying hazardous gases before they escalate.",
          "Helps prevent accidents and potential leaks, mitigating operational and safety risks.",
          "Enables early detection of gas leaks, minimizing downtime and associated losses.",
          "Supports compliance with regulatory requirements and industry standards.",
        ],
      },
    ],
    relatedServices: [
      "Thermal Camera Inspection",
      "Murban Pressure Testing",
      "Murban UAV Inspection",
      "API 579 Murban Fitness for Service",
      "API 580 Murban Risk Based Inspection",
      "Ultrasonic Thickness Measurement",
      "Murban Phased Array Testing",
      "Positive Material Identification Testing",
    ],
  },
  "Detailed Engineering": {
    label: "Fabrication & Engineering Services",
    breadcrumb: ["Home", "Industry Solutions", "Fabrication & Engineering"],
    headline: "Detailed Engineering & Project Documentation",
    description:
      "Our experienced engineers provide comprehensive design and drafting services, including structural analysis, layout plans, material selection, and comprehensive project documentation. We ensure that all designs comply with the highest quality and safety standards in the industry.",
    relatedServices: [
      "Procurement",
      "Fabrication",
      "Construction and Erection",
      "Specialized Welding",
      "Surface Preparation and Paint Works",
      "API 570 Piping Inspection and Certification",
      "API 653 Aboveground Storage Tank Inspection and Certification",
    ],
  },
  Fabrication: {
    label: "Fabrication Services",
    breadcrumb: ["Home", "Industry Solutions", "Fabrication & Engineering"],
    headline: "Precision Shop Fabrication & Assembly",
    description:
      "We specialize in the fabrication of complex and heavy structural steel components, such as platforms, supports, tanks, and pressure vessels. Our state-of-the-art facilities are equipped with advanced technology, allowing us to provide precision fabrication services to meet the specific needs of each project.",
    sections: [
      {
        title: "Our Services Include",
        items: [
          "Steel Fabrication: Structural steel, plate work, beams, frames, and custom steel components.",
          "Pressure Vessel Fabrication: Designed and manufactured to meet industry codes and regulations, particularly for the Oil and Gas sector.",
          "Pipe Spooling & Prefabrication: Pipework solutions that meet the rigorous demands of the energy sector.",
          "Hydrates and Specialty Welding: Utilization of advanced welding techniques for intricate and specialized requirements.",
        ],
      },
    ],
    relatedServices: [
      "Detailed Engineering",
      "Procurement",
      "Specialized Welding",
      "Surface Preparation and Paint Works",
      "Construction and Erection",
      "Murban Pressure Testing",
    ],
  },
  "Construction and Erection": {
    label: "Fabrication & Engineering Services",
    breadcrumb: ["Home", "Industry Solutions", "Fabrication & Engineering"],
    headline: "Construction and Erection",
    description:
      "We offer full erection services for large-scale industrial projects, ensuring the safe and efficient assembly of steel structures, pipelines, and storage tanks. Our skilled team ensures all structures are erected with precision and comply with the latest health, safety, and regulatory standards.",
    sections: [
      {
        title: "What We Deliver",
        items: [
          "Turnkey erection services tailored to complex, large-scale industrial facilities.",
          "Safe and efficient assembly of steel structures, pipelines, and storage tanks.",
          "Project controls that keep schedules on track while meeting rigorous quality benchmarks.",
        ],
      },
      {
        title: "Safety & Compliance First",
        items: [
          "Certified rigging and lifting teams that prioritize zero-incident execution.",
          "Comprehensive safety planning aligned with the latest health, safety, and regulatory standards.",
          "Detailed documentation and inspection reports that verify every stage of construction meets governance and client requirements.",
        ],
      },
    ],
    relatedServices: [
      "Detailed Engineering",
      "Procurement",
      "Fabrication",
      "Specialized Welding",
      "Surface Preparation and Paint Works",
    ],
  },
  "Specialized Welding": {
    label: "Specialized Welding",
    breadcrumb: ["Home", "Industry Solutions", "Fabrication & Engineering"],
    headline: "Specialized Welding & Code Compliance",
    description:
      "Our fabrication team executes TIG, MIG, SMAW, and submerged arc welding to ensure every component is built for strength and reliability. Each weld is delivered under strict adherence to API welding codes and the governing project standards so quality is never in doubt.",
    sections: [
      {
        title: "Specialized Welding",
        items: [
          "Certified craftsmen proficient in TIG, MIG, SMAW, and submerged arc processes for complex fabrications.",
          "Technique selection and procedure control that safeguard the integrity of tanks, piping, and structural work.",
          "Coordinated shop and field teams ready to deliver critical welds where they are needed most.",
        ],
      },
      {
        title: "Code Compliance & Quality",
        items: [
          "Strict alignment with API welding codes and applicable international standards.",
          "Procedure qualification records and welder certifications maintained for every project.",
          "Integrated inspections and documentation packages that verify weld quality from root to cap.",
        ],
      },
    ],
    relatedServices: [
      "Fabrication",
      "Detailed Engineering",
      "Surface Preparation and Paint Works",
      "Construction and Erection",
      "Murban Pressure Testing",
      "Murban Phased Array Testing",
      "Magnetic Particle Testing",
    ],
  },
  "Sphere Tank Inspections": {
    label: "Sphere Tank Inspections",
    breadcrumb: ["Home", "Industry Solutions", "Services We Offer"],
    headline: "Specialized Sphere Tank Inspection Services",
    description:
      "Murban Engineering specializes in conducting sphere tank inspections to ensure their structural integrity and compliance with industry standards. Sphere tanks are commonly used for storing various materials, and our expert inspectors meticulously examine these structures to identify any corrosion, structural issues, or potential hazards. We provide comprehensive reports and recommendations to guarantee the safety and reliability of your sphere tanks, minimizing operational risks.",
    sections: [
      {
        title: "Services We Offer",
        items: [
          "Alternating Current Field Measurement",
          "API 579 Murban Fitness for Service",
          "API 653 Above Ground Storage Tank Inspection",
          "API 580 Murban Risk Based Service",
          "Boiler Inspection Service",
          "Lifting Equipment Thorough Examination and Certification",
          "RT Radiographic Services",
          "Magnetic Particle Testing",
          "Surface Hardness Testing",
          "Dye Penetrant Testing",
          "Fluorescent Magnetic Particle Testing",
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
          "Ultrasonic Flaw Testing C-Scan",
          "Murban Phased Array Testing",
          "Ultrasonic Thickness Measurement",
          "Visual Inspection",
          "API 510 Pressure Vessel Inspection",
          "API 570 Piping Inspection",
          "Gas Detection",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Identifies defects or anomalies in tank structures, preventing failures.",
          "Ensures compliance with industry regulations and safety standards.",
          "Optimizes maintenance schedules, reducing operational costs.",
          "Enhances asset integrity management for long-term reliability.",
        ],
      },
    ],
    relatedServices: [
      "API 653 Above Ground Storage Tank Inspection",
      "Floormap 3D MFL Scanning",
      "Murban SIMS Tank Inspection Software",
      "Tank Calibration Services",
      "3D Laser Scanning Services",
      "UAV Drone Inspection",
      "Ultrasonic Thickness Measurement",
      "Murban Phased Array Testing",
    ],
  },
  "Fabrication and Engineering Services": {
    label: "Fabrication & Engineering Services",
    breadcrumb: [
      "Home",
      "Industry Solutions",
      "Fabrication & Engineering Services",
    ],
    headline: "Turnkey Fabrication & Engineering Delivery",
    description:
      "Murban Engineering provides end-to-end fabrication and engineering support, combining detailed design, controlled shop fabrication, surface finishing, and specialist welding with coordinated field erection. Our multidisciplinary teams keep complex industrial projects on schedule while meeting strict safety, quality, and compliance targets. We integrate planning, execution, and quality control so clients receive dependable, ready-for-service assets.",
    sections: [
      {
        title: "Services We Offer",
        items: [
          "Detailed Engineering",
          "Procurement",
          "Fabrication",
          "Specialized Welding",
          "Construction and Erection",
          "Surface Preparation and Paint Works",
        ],
      },
      {
        title: "Procurement Capability",
        items: [
          "Sourcing high-quality raw materials and components from trusted suppliers.",
          "Verifying that every delivery meets technical specifications and project codes.",
          "Coordinating logistics for timely material availability at fabrication shops and job sites.",
          "Optimizing spend through strategic supplier partnerships and cost control.",
        ],
      },
    ],
    relatedServices: [
      "Detailed Engineering",
      "Procurement",
      "Fabrication",
      "Specialized Welding",
      "Construction and Erection",
      "Surface Preparation and Paint Works",
    ],
  },
  "Surface Preparation and Paint Works": {
    label: "Surface Preparation and Paint Works",
    breadcrumb: ["Home", "Industry Solutions", "Fabrication & Engineering"],
    headline: "Surface Preparation & Protective Coating Systems",
    description:
      "Murban Engineering provides comprehensive surface preparation and coating services for all fabricated steelwork, pipelines, and structures. We use advanced methods like abrasive blasting and chemical treatment to ensure the best adhesion for coatings.\n\nWe then apply high-performance coatings, ensuring long-term protection against corrosion, especially in harsh environments such as offshore and industrial plants.",
    relatedServices: [
      "Fabrication",
      "Specialized Welding",
      "Procurement",
      "Paint & Coating Inspection",
      "Detailed Engineering",
      "Construction and Erection",
    ],
  },
  Procurement: {
    label: "Fabrication & Engineering Services",
    breadcrumb: ["Home", "Industry Solutions", "Fabrication & Engineering"],
    headline: "Procurement & Supply Chain Assurance",
    description:
      "Murban Engineering handles the procurement of high-quality raw materials and components, sourcing from trusted suppliers and ensuring that all materials meet the technical specifications for each project. We ensure timely delivery and cost efficiency in all procurement processes.",
    relatedServices: [
      "Detailed Engineering",
      "Fabrication",
      "Construction and Erection",
      "Specialized Welding",
      "Surface Preparation and Paint Works",
      "Murban Pressure Testing",
    ],
  },
};

export const getServiceBySlug = (slug: string) => serviceBySlug.get(slug);

export const getServiceSlugForName = (name: string) => {
  const normalized = name.trim();
  if (!normalized) return undefined;

  const baseSlug = createServiceSlug(normalized);
  if (serviceBySlug.has(baseSlug)) {
    return baseSlug;
  }

  const aliasSlug = serviceSlugAliasMap[baseSlug];
  if (aliasSlug && serviceBySlug.has(aliasSlug)) {
    return aliasSlug;
  }

  const directMatch = allServices.find(
    (service) => service.title.toLowerCase() === normalized.toLowerCase(),
  );

  return directMatch?.slug;
};

export const getServiceDetailBySlug = (slug: string) => {
  const service = getServiceBySlug(slug);
  return service ? serviceDetails[service.title] : undefined;
};

const Services = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "NDT Inspection", "API Certifications", "Advanced Testing", "Engineering Services"];

  const getServiceCategory = (title: string): string => {
    if (title.includes("API")) return "API Certifications";
    if (title.includes("Fabrication") || title.includes("Engineering") || title.includes("Welding") || title.includes("Construction")) return "Engineering Services";
    if (title.includes("Phased Array") || title.includes("3D") || title.includes("UAV") || title.includes("Thermal") || title.includes("Laser")) return "Advanced Testing";
    return "NDT Inspection";
  };

  const filteredServices = selectedCategory === "All" 
    ? allServices 
    : allServices.filter(service => getServiceCategory(service.title) === selectedCategory);

  return (
    <div className="min-h-screen pt-20 bg-background relative">
      {/* Full Page Dotted Background with Grid Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <DottedSurface className="size-full opacity-40" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      </div>
      
      {/* Hero Section */}
      <section
        id="services-hero"
        className="relative overflow-hidden py-24 text-secondary-foreground"
      >
        <div className="absolute inset-0">
          <img
            src="/_MG_2642 - Copy (2).jpg"
            alt="Technicians delivering Murban engineering services"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/75 via-slate-900/50 to-slate-800/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_55%)]" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Badge className="mb-6 border border-white/40 bg-white/20 text-secondary-foreground backdrop-blur-sm">
            Murban Inspection & Engineering
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Precision Inspection & Engineering Services
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto text-secondary-foreground/90">
            Comprehensive Non-Destructive Testing and turnkey engineering support to keep critical infrastructure running at peak performance.
          </p>
          <nav
            aria-label="Services sections"
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            {serviceSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-medium text-secondary-foreground transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
              >
                <span>{section.label}</span>
              </a>
            ))}
          </nav>
        </div>
        <div className="pointer-events-none absolute -bottom-16 right-6 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
        <div className="pointer-events-none absolute -top-10 left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      </section>

      {/* Service Spotlight Section */}
      <section id="service-spotlight" className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.15),_transparent_65%)]" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <Badge className="mb-4 bg-primary/10 text-primary">Service Spotlight</Badge>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Explore Our Specialized Capabilities
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Choose a service to see how Murban Engineering delivers precision, compliance, and dependable results for your
              assets.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
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

          <div className="mb-6 flex items-center justify-between text-muted-foreground">
            <span className="text-sm uppercase tracking-[0.2em]">Service Cards</span>
            <span className="text-sm">{filteredServices.length} services</span>
          </div>
          <div className="services-grid services-grid--selectable">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                onSelect={() => navigate(`/services/${service.slug}`)}
                showCTA={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fabrication Services Section */}
      <section
        id="fabrication-services"
        className="relative overflow-hidden py-24"
      >
        <div className="absolute inset-0 bg-muted/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.15),_transparent_60%)]" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center text-foreground">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Murban Engineering and Fabrications Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Detailed Engineering
            </p>
          </div>
          <div className="services-grid">
            {fabricationServices.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                onSelect={() => navigate(`/services/${service.slug}`)}
                showCTA={false}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="secondary" asChild>
              <Link to="/contact">Discuss your next build</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="services-contact" className="py-24">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden border-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary text-secondary-foreground shadow-[0_30px_60px_-40px_rgba(37,99,235,0.8)]">
            <CardContent className="relative px-6 py-16 md:px-16 text-center">
              <div className="absolute -left-12 top-1/2 hidden h-32 w-32 -translate-y-1/2 rounded-full bg-white/10 blur-2xl md:block" />
              <div className="absolute -right-16 top-10 hidden h-36 w-36 rounded-full bg-white/10 blur-2xl md:block" />
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                Let's Build Something Great Together
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Ready to start your next project? Contact our team to discover how Murban's inspection and engineering experts can bring your vision to life with safety and precision.
              </p>
              <Button size="lg" variant="secondary" asChild className="text-base md:text-lg">
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

export default Services;
