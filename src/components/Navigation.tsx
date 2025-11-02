import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import murbanLogo from "@/assets/murban-logo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industry Solutions", path: "/industry-solutions" },
    { name: "Portal", path: "https://murbanportal.com/", external: true },
    { name: "Contact Us", path: "/contact" },
  ] as const;

  const isActive = (path: string) => location.pathname === path;

  const desktopLinks = navLinks.filter((link) => link.name !== "Contact Us");

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 rounded-full border border-border/60 bg-background/70 px-4 py-2 transition-all hover:border-primary/40 hover:shadow-glow">
            <div className="relative h-11 w-11 overflow-hidden rounded-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 blur-md" />
              <img src={murbanLogo} alt="Murban Engineering Logo" className="relative h-full w-full rounded-full object-cover" />
            </div>
            <div className="text-lg font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                Murban Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1 rounded-full border border-border/60 bg-background/70 p-1 shadow-sm">
              {desktopLinks.map((link) => {
                const active = !link.external && isActive(link.path);

                if (link.external) {
                  return (
                    <a
                      key={link.path}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-all hover:text-primary"
                    >
                      {link.name}
                      <span className="absolute inset-0 rounded-full border border-transparent transition-all group-hover:border-primary/40" />
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`group relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      active
                        ? "bg-gradient-to-r from-primary/15 via-primary/10 to-secondary/20 text-primary shadow-sm"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute inset-0 rounded-full border border-primary/30 transition-opacity ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
            <Button asChild size="lg" className="rounded-full shadow-primary/30 shadow-lg">
              <Link to="/contact">Start a project</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-full border border-border/70 bg-background/80 p-2 shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-xl">
              {navLinks.map((link) => {
                const active = !link.external && isActive(link.path);

                if (link.external) {
                  return (
                    <a
                      key={link.path}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between rounded-2xl border border-transparent bg-foreground/5 px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary"
                    >
                      {link.name}
                      <span className="text-xs text-muted-foreground">External</span>
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
                      active
                        ? "bg-gradient-to-r from-primary/15 via-primary/10 to-secondary/20 text-primary"
                        : "bg-foreground/5 text-foreground hover:bg-foreground/10 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    {active && <span className="text-xs uppercase tracking-wide">Now</span>}
                  </Link>
                );
              })}
              <Button asChild className="w-full rounded-2xl text-base">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Start a project
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
