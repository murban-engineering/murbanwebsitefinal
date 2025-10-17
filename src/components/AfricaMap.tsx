import { useState } from "react";
import { MapPin } from "lucide-react";
import africaMap from "@/assets/africa-map.jpg";

const AfricaMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  // Location coordinates based on actual geographic positions (as percentages)
  const locations = [
    { name: "Kenya", left: "67%", top: "48%", description: "Main Operations Hub" },
    { name: "Uganda", left: "61%", top: "45%", description: "Regional Office" },
    { name: "Tanzania", left: "64%", top: "54%", description: "Project Sites" },
    { name: "Ethiopia", left: "67%", top: "36%", description: "Operations" },
    { name: "Rwanda", left: "59%", top: "47%", description: "Service Area" },
    { name: "Burundi", left: "59%", top: "49%", description: "Service Area" },
    { name: "Zambia", left: "57%", top: "63%", description: "Project Sites" },
    { name: "Eritrea", left: "67%", top: "30%", description: "Operations" },
    { name: "Seychelles", left: "78%", top: "50%", description: "Service Area" },
    { name: "Madagascar", left: "73%", top: "66%", description: "Service Area" },
    { name: "Ghana", left: "30%", top: "38%", description: "Operations" },
    { name: "DRC", left: "51%", top: "49%", description: "Project Sites" },
    { name: "Malawi", left: "63%", top: "63%", description: "Service Area" },
    { name: "Djibouti", left: "71%", top: "33%", description: "Operations" },
    { name: "Zimbabwe", left: "59%", top: "68%", description: "Service Area" },
    { name: "Somalia", left: "72%", top: "41%", description: "Service Area" },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Map container with image background */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-elegant border border-border/50">
        {/* Africa map image */}
        <img 
          src={africaMap} 
          alt="Africa Map showing Murban Engineering operational areas"
          className="w-full h-auto"
        />
        
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
              
              {/* Location pin */}
              <div
                className={`relative z-10 transition-all duration-300 ${
                  hoveredCountry === location.name ? "scale-125" : "scale-100"
                }`}
              >
                <MapPin
                  className={`w-6 h-6 transition-all duration-300 ${
                    hoveredCountry === location.name
                      ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]"
                      : "text-primary/80"
                  }`}
                  fill={hoveredCountry === location.name ? "hsl(var(--primary))" : "none"}
                  strokeWidth={2.5}
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
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <MapPin className="h-4 w-4 text-primary" />
          <span>Hover over markers to see locations and operations</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          {locations.map((location) => (
            <div
              key={location.name}
              className={`transition-all duration-200 ${
                hoveredCountry === location.name
                  ? "text-primary font-semibold scale-105"
                  : "text-muted-foreground"
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
