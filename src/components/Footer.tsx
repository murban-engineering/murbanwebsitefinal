import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Newspaper, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-[#1a1f2e] text-white">
      {/* Newsletter Section */}
      <div className="bg-[#0f1419] border-b border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Newspaper className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Sign Up to get Latest Updates</h3>
            </div>
            <div className="flex w-full md:w-auto gap-0">
              <Input
                type="email"
                placeholder="sample@mail.com"
                className="bg-white text-black rounded-r-none border-0 min-w-[300px]"
              />
              <Button className="bg-primary hover:bg-primary/90 rounded-l-none px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Our operations are split into two divisions, Murban Inspection Services and Murban Engineering services. 
              We pick the best talent from the industry and have heavily invested in our developing our staff skills further 
              through regular rigorous external and internal training to keep up with the industry trends
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Off Airport Road, Mombasa Port Reitz</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+254202650618" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  + 254 20 265 0618
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@murban-eng.com" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  info@murban-eng.com
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-primary inline-block pb-1">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/industry-solutions" className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Industry Solutions
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Faq
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links - Column 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-primary inline-block pb-1">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Alternating Current Field Measurement
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  API 570 Piping Inspection and Certification
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Murban Fitness for Service
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Murban Risk Based Inspection
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Boiler Inspection
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Light Equipment Through Examination and Certification
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links - Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-primary inline-block pb-1 opacity-0">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  MURBAN Pressure Testing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Paint Inspection
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  PMI Testing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  RT Service
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Risk Based Inspection
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  Sphere Tank Inspection
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              Copyright © {new Date().getFullYear()} All Rights Reserved
            </p>
            <div className="flex gap-8">
              <Link to="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                Legal Terms
              </Link>
              <Link to="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
