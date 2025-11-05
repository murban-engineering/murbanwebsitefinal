import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/icons";
import { Link, Navigate, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  createServiceSlug,
  getServiceBySlug,
  getServiceDetailBySlug,
} from "./Services";

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

  const relatedEntries = (detail?.relatedServices ?? []).map((name) => {
    const relatedSlug = createServiceSlug(name);
    const relatedService = getServiceBySlug(relatedSlug);

    return {
      name,
      slug: relatedService ? relatedSlug : undefined,
    };
  });

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <nav className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Button asChild variant="ghost">
            <Link to="/services" className="inline-flex items-center gap-2">
              <ArrowLeftIcon className="h-4 w-4" />
              Back to services
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/contact" className="inline-flex items-center gap-2">
              Discuss your project
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Button>
        </nav>

        <div className="mx-auto max-w-5xl space-y-10">
          <header className="space-y-6">
            <Badge className="bg-primary/10 text-primary">
              {detail?.label ?? service.title}
            </Badge>

            {detail?.breadcrumb && (
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {detail.breadcrumb.map((crumb, index) => (
                  <span key={`${crumb}-${index}`} className="flex items-center gap-2">
                    {index > 0 && <span className="opacity-60">/</span>}
                    <span>{crumb}</span>
                  </span>
                ))}
                <span className="opacity-60">/</span>
                <span className="text-foreground">{detail?.label ?? service.title}</span>
              </div>
            )}

            <h1 className="text-4xl font-serif font-bold text-foreground md:text-5xl">
              {detail?.headline ?? service.title}
            </h1>

            <div className="space-y-4 text-lg text-muted-foreground">
              {descriptionParagraphs.length > 0 ? (
                descriptionParagraphs.map((paragraph, index) => (
                  <p key={`${slug}-paragraph-${index}`}>{paragraph}</p>
                ))
              ) : (
                <p>{baseDescription}</p>
              )}
            </div>
          </header>

          {detail?.sections?.map((section) => (
            <section
              key={section.title}
              className="space-y-4 rounded-3xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-semibold text-foreground">
                {section.title}
              </h2>
              <ul className="space-y-3 text-base text-muted-foreground">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {relatedEntries.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Related Services
              </h2>
              <div className="grid gap-2 sm:grid-cols-2">
                {relatedEntries.map(({ name, slug: relatedSlug }) =>
                  relatedSlug ? (
                    <Link
                      key={name}
                      to={`/services/${relatedSlug}`}
                      className="flex items-center gap-2 rounded-xl border border-border/40 bg-background/70 px-4 py-2 text-sm text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
                    >
                      <span
                        className="inline-flex h-1.5 w-1.5 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      <span className="leading-tight">{name}</span>
                    </Link>
                  ) : (
                    <div
                      key={name}
                      className="flex items-center gap-2 rounded-xl border border-border/40 bg-background/70 px-4 py-2 text-sm text-muted-foreground"
                    >
                      <span
                        className="inline-flex h-1.5 w-1.5 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      <span className="leading-tight">{name}</span>
                    </div>
                  ),
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
