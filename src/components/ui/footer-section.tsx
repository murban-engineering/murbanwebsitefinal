import * as React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { createServiceSlug } from "@/pages/Services";

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Industry Solutions", to: "/industry-solutions" },
  { label: "Privacy & Policy", to: "/privacy-policy" },
  { label: "FAQ", to: "/faq" },
];

const servicePath = (title: string) => `/services/${createServiceSlug(title)}`;

const primaryServices = [
  { label: "Alternating Current Field Measurement", to: servicePath("Alternating Current Field Measurement") },
  { label: "API 570 Piping Inspection and Certification", to: servicePath("API 570 Piping Inspection and Certification") },
  { label: "Murban Fitness for Service", to: servicePath("API 579 Murban Fitness for Service") },
  { label: "Murban Risk Based Inspection", to: servicePath("API 580 Murban Risk Based Inspection") },
  { label: "Boiler Inspection", to: servicePath("Boiler Inspection Services") },
  {
    label: "Lifting Equipment Thorough Examination and Certification",
    to: servicePath("Lifting Equipment Thorough Examination and Certification"),
  },
];

const additionalServices = [
  { label: "Murban Pressure Testing", to: servicePath("Murban Pressure Testing") },
  { label: "Paint Inspection", to: servicePath("Paint & Coating Inspection") },
  { label: "PMI Testing", to: servicePath("Positive Material Identification Testing") },
  { label: "RT Service", to: servicePath("RT Radiographic Services") },
  { label: "Risk Based Inspection", to: servicePath("API 580 Murban Risk Based Inspection") },
  { label: "Sphere Tank Inspection", to: servicePath("Sphere Tank Inspections") },
];

function Footerdemo() {
  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight">Murban Engineering</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Our operations are split into two divisions, Murban Inspection Services and Murban Engineering Services. We pick
                the best talent from the industry and continually invest in their development through rigorous external and internal
                training so they stay ahead of industry trends.
              </p>
            </div>
            <address className="space-y-2 text-sm not-italic text-muted-foreground">
              <p>Off Airport Road, Mombasa Port Reitz</p>
              <p>
                <a href="tel:+254202650618" className="transition-colors hover:text-primary">
                  +254 20 265 0618
                </a>
              </p>
              <p>
                <a href="mailto:info@murban-eng.com" className="transition-colors hover:text-primary">
                  info@murban-eng.com
                </a>
              </p>
            </address>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <nav className="space-y-2 text-sm">
              {companyLinks.map((link) => (
                <Link key={link.to} to={link.to} className="block transition-colors hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <nav className="space-y-2 text-sm">
              {primaryServices.map((link) => (
                <Link key={link.to} to={link.to} className="block transition-colors hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <nav className="space-y-2 text-sm">
              {additionalServices.map((link) => (
                <Link key={link.to} to={link.to} className="block transition-colors hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <ThemeToggle id="footer-theme-toggle" className="bg-background/90" />
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">© 2024 Murban Engineering Services. All rights reserved.</p>
          <nav className="flex gap-4 text-sm">
            <Link to="/about" className="transition-colors hover:text-primary">
              About Us
            </Link>
            <Link to="/privacy-policy" className="transition-colors hover:text-primary">
              Privacy &amp; Policy
            </Link>
            <Link to="/faq" className="transition-colors hover:text-primary">
              FAQ
            </Link>
            <Link to="/contact" className="transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footerdemo };
