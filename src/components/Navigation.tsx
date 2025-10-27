import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import murbanLogo from "@/assets/murban-logo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industry Solutions", path: "/industry-solutions" },
    { name: "Blog", path: "/blog" },
    { name: "Portal", path: "https://murbanportal.com/", external: true },
    { name: "Contact Us", path: "/contact" },
  ] as const;

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={murbanLogo} 
              alt="Murban Engineering Logo" 
              className="h-12 w-12 rounded-full object-cover shadow-md group-hover:shadow-glow transition-all group-hover:scale-105"
            />
            <div className="text-xl font-sans font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              Murban Engineering
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const active = !link.external && isActive(link.path);

              if (link.external) {
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold transition-all relative group text-foreground hover:text-primary"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all w-0 group-hover:w-full" />
                  </a>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-all relative group ${
                    active ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
            <Button asChild className="shadow-md hover:shadow-glow transition-all">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
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
                      className="text-sm font-medium transition-colors hover:text-primary text-foreground"
                    >
                      {link.name}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      active ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get Quote
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
