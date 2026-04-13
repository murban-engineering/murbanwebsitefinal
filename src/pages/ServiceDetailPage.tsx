import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/icons";
import { Link, Navigate, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, getServiceDetailBySlug, getServiceSlugForName } from "./Services";
import AnimateOnScroll from "@/components/AnimateOnScroll";

import magneticTestingImg from "@/assets/magnetic-testing.jpg";
import chimneyIndustryImg from "@/assets/chimney-industry.jpg";
import oilRigImg from "@/assets/oil-rig-vessel.jpg";
import oilContainerImg from "@/assets/oil-container.jpg";
import pipelineInspectionImg from "@/assets/pipeline-inspection.jpg";
import steelFactoryImg from "@/assets/steel-factory.jpg";
import servicesPlant from "@/assets/services-plant.jpg";
import servicesPipeline from "@/assets/services-pipeline.jpg";
import fieldWork1 from "@/assets/field-work-1.jpg";
import fieldWork2 from "@/assets/field-work-2.jpg";
import fieldWork3 from "@/assets/field-work-3.jpg";
import fieldWork4 from "@/assets/field-work-4.jpg";
import fieldWork5 from "@/assets/field-work-5.jpg";
import fieldWork6 from "@/assets/field-work-6.jpg";
import industrialPlant from "@/assets/industrial-plant.jpg";
import modernFactory from "@/assets/modern-factory.jpg";
import modernOilFactory from "@/assets/modern-oil-factory.jpg";
import modernOilFactory2 from "@/assets/modern-oil-factory-2.jpg";
import modernOilFactory3 from "@/assets/modern-oil-factory-3.jpg";
import modernBuilding from "@/assets/modern-building.jpg";
import servicesBuilding from "@/assets/services-building.jpg";
import servicesEngine from "@/assets/services-engine.jpg";
import servicesIndustrial from "@/assets/services-industrial-1.jpg";
import servicesStorage from "@/assets/services-storage.jpg";
import storageTanks from "@/assets/storage-tanks.jpg";
import constructionBlueprints from "@/assets/construction-blueprints.jpg";
import heroEngineering from "@/assets/hero-engineering.jpg";
import portSunset from "@/assets/port-sunset.jpg";

// Each service gets a unique image — no repeats
const serviceImageMap: Record<string, string> = {
  "ndt-inspection-services": pipelineInspectionImg,
  "magnetic-particle-testing": magneticTestingImg,
  "fluorescent-magnet-particle-testing": fieldWork1,
  "surface-hardness-testing": fieldWork2,
  "boiler-inspection-services": chimneyIndustryImg,
  "thermal-camera-inspection": fieldWork3,
  "murban-gas-detection": modernFactory,
  "api-570-piping-inspection-and-certification": servicesPipeline,
  "pipeline-inspection": servicesIndustrial,
  "ultrasonic-flaw-testing-c-scan": fieldWork4,
  "ultrasonic-flaw-testing-b-scan": servicesEngine,
  "api-653-aboveground-storage-tank-inspection-and-certification": oilContainerImg,
  "sphere-tank-inspections": storageTanks,
  "tank-calibration-services": servicesStorage,
  "floormap-3d-mfl-scanning": industrialPlant,
  "api-510-pressure-vessel-inspection": modernOilFactory,
  "murban-pressure-testing": modernOilFactory2,
  "api-579-murban-fitness-for-service": oilRigImg,
  "api-580-murban-risk-based-inspection": portSunset,
  "murban-uav-inspection": fieldWork5,
  "3d-laser-scanning-services": modernBuilding,
  "fabrication": steelFactoryImg,
  "specialized-welding": fieldWork6,
  "construction-and-erection": constructionBlueprints,
  "surface-preparation-and-paint-works": servicesBuilding,
  "detailed-engineering": heroEngineering,
  "procurement": servicesPlant,
  "rt-radiographic-services": modernOilFactory3,
  "dye-penetrant-testing": modernFactory,
  "paint-coating-inspection": servicesBuilding,
  "positive-material-identification-testing": fieldWork1,
  "murban-phased-array-testing": servicesIndustrial,
  "alternating-current-field-measurement": fieldWork3,
  "lifting-equipment-thorough-examination-and-certification": industrialPlant,
};

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/services" replace />;
  }

  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const detail = getServiceDetailBySlug(slug);
  const baseDescription = detail?.description ?? service.description;
  const descriptionParagraphs = baseDescription
    ? baseDescription
        .split(/\r?\n\s*\r?\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
    : [];

  const heroImage = serviceImageMap[slug] ?? pipelineInspectionImg;

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section - Image left, text right */}
      <div className="w-full">
        <div className="grid md:grid-cols-2">
          <AnimateOnScroll direction="left">
            <div className="flex h-64 md:h-96 overflow-hidden rounded-3xl">
              <img
                src={heroImage}
                alt={service.title}
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={960}
                height={400}
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right" delay={150}>
            <div className="flex flex-col justify-center bg-muted/30 p-8 md:p-12">
              <Badge className="mb-4 w-fit bg-primary/10 text-primary">
                {detail?.label ?? service.title}
              </Badge>
              <h1 className="text-3xl font-serif font-bold text-foreground md:text-4xl lg:text-5xl">
                {detail?.headline ?? service.title}
              </h1>
              <p className="mt-4 text-muted-foreground">
                {descriptionParagraphs[0] || baseDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="ghost" size="sm">
                  <Link to="/services" className="inline-flex items-center gap-2">
                    <ArrowLeftIcon className="h-4 w-4" />
                    Back to services
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Discuss your project
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl space-y-10">
          {descriptionParagraphs.length > 1 && (
            <AnimateOnScroll direction="up">
              <div className="space-y-4 text-lg text-muted-foreground">
                {descriptionParagraphs.slice(1).map((paragraph, index) => (
                  <p key={`${slug}-paragraph-${index}`}>{paragraph}</p>
                ))}
              </div>
            </AnimateOnScroll>
          )}

          {detail?.sections?.map((section, i) => (
            <AnimateOnScroll key={section.title} direction={i % 2 === 0 ? "left" : "right"} delay={i * 100}>
              <section className="space-y-4 rounded-3xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-foreground">
                  {section.title}
                </h2>
                <ul className="space-y-3 text-base text-muted-foreground">
                  {section.items.map((item) => {
                    const itemSlug = getServiceSlugForName(item);
                    const itemService = itemSlug ? getServiceBySlug(itemSlug) : undefined;

                    return (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                        {itemService ? (
                          <Link
                            to={`/services/${itemSlug}`}
                            className="font-medium text-foreground underline decoration-primary/60 decoration-2 underline-offset-4 transition hover:text-primary"
                          >
                            {item}
                          </Link>
                        ) : (
                          <span>{item}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </section>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
