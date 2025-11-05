import { useState } from "react";
import { MapPinIcon } from "@/components/ui/icons";
import africaMap from "@/assets/africa-map-clean.jpg";

const AfricaMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  // Location coordinates based on actual geographic positions (as percentages)
  // Adjusted for better spacing and visibility
  const locations = [
    { name: "Kenya", left: "63%", top: "51%", description: "Main Operations Hub" },
    { name: "Uganda", left: "59%", top: "48%", description: "Regional Office" },
    { name: "Tanzania", left: "62%", top: "58%", description: "Project Sites" },
    { name: "Ethiopia", left: "63%", top: "40%", description: "Operations" },
    { name: "Rwanda", left: "57%", top: "50%", description: "Service Area" },
    { name: "Burundi", left: "58%", top: "53%", description: "Service Area" },
    { name: "Zambia", left: "55%", top: "68%", description: "Project Sites" },
    { name: "Eritrea", left: "64%", top: "35%", description: "Operations" },
    { name: "Seychelles", left: "72%", top: "52%", description: "Service Area" },
    { name: "Madagascar", left: "68%", top: "72%", description: "Service Area" },
    { name: "Ghana", left: "42%", top: "48%", description: "Operations" },
    { name: "DRC", left: "52%", top: "52%", description: "Project Sites" },
    { name: "Malawi", left: "60%", top: "68%", description: "Service Area" },
    { name: "Djibouti", left: "66%", top: "37%", description: "Operations" },
    { name: "Zimbabwe", left: "56%", top: "73%", description: "Service Area" },
    { name: "Somalia", left: "67%", top: "47%", description: "Service Area" },
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Map container with image background */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-elegant border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        {/* Africa map image */}
        <img 
          src={africaMap} 
          alt="Africa Map showing Murban Engineering operational areas"
          className="w-full h-auto"
        />
        
        {/* Decorative overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent pointer-events-none" />
        
        {/* Location markers overlay */}
        <div className="absolute inset-0">
          {locations.map((location) => (
            <div
              key={location.name}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: location.left, top: location.top }}
              onMouseEnter={() => setHoveredCountry(location.name)}
              onMouseLeave={() => setHoveredCountry(null)}
            >
              {/* Pulse animation for hovered marker */}
              {hoveredCountry === location.name && (
                <div className="absolute inset-0 -m-2">
                  <div className="w-6 h-6 rounded-full bg-primary/30 animate-ping" />
                </div>
              )}
              
              {/* Location pin with background */}
              <div
                className={`relative z-10 transition-all duration-300 ${
                  hoveredCountry === location.name ? "scale-125" : "scale-100"
                }`}
              >
                {/* Pin background circle */}
                <div className={`absolute -inset-1 rounded-full transition-all duration-300 ${
                  hoveredCountry === location.name 
                    ? "bg-primary/20 blur-sm" 
                    : "bg-background/80"
                }`} />
                
                <MapPinIcon
                  className={`relative w-7 h-7 transition-all duration-300 ${
                    hoveredCountry === location.name
                      ? "text-primary drop-shadow-[0_0_12px_hsl(var(--primary))]"
                      : "text-primary"
                  }`}
                  fill={hoveredCountry === location.name ? "hsl(var(--primary))" : "white"}
                  strokeWidth={2}
                />
              </div>

              {/* Hover tooltip */}
              {hoveredCountry === location.name && (
                <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card border border-border px-3 py-2 rounded-lg shadow-elegant animate-fade-in backdrop-blur-sm z-20">
                  <div className="text-sm font-semibold text-foreground">
                    {location.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {location.description}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-10 text-center">
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-8 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
          <MapPinIcon className="h-5 w-5 text-primary" fill="white" />
          <span className="font-medium">Hover over markers to explore our operational areas</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm max-w-4xl mx-auto">
          {locations.map((location) => (
            <div
              key={location.name}
              className={`transition-all duration-300 px-3 py-2 rounded-lg ${
                hoveredCountry === location.name
                  ? "text-primary font-bold scale-105 bg-primary/10 shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {location.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfricaMap;
