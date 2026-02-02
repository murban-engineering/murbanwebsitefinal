import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

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

  const navLinks: Array<{ name: string; path: string; external?: boolean }> = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industry Solutions", path: "/industry-solutions" },
    { name: "Contact", path: "/contact" },
    { name: "Portal", path: "https://murbanportal.com/", external: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background border-b border-border shadow-sm" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/murbanlogo.ico"
              alt="Murban Engineering Logo"
              className="h-12 w-12 object-contain"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <span className="text-lg font-semibold tracking-tight text-black">
              MURBAN ENGINEERING
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);

              if (link.external) {
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </a>
                );
              }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={link.path === "/" ? handleHomeClick : undefined}
                    className={`text-sm font-medium transition-colors ${
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild size="lg" className="rounded-lg px-6">
              <Link to="/contact">Start a Project</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden rounded-lg border border-border bg-background p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <CloseIcon className="h-6 w-6 text-foreground" />
            ) : (
              <MenuIcon className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6">
            <div className="space-y-2 border-t border-border pt-4">
              {navLinks.map((link) => {
                const active = isActive(link.path);

                if (link.external) {
                  return (
                    <a
                      key={link.path}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => {
                      if (link.path === "/") {
                        handleHomeClick();
                      }
                      setIsOpen(false);
                    }}
                    className={`block px-4 py-3 text-sm font-medium transition-colors ${
                      active
                        ? "text-foreground bg-muted rounded-lg"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 px-4">
                <Button asChild className="w-full rounded-lg">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Start a Project
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
