import { useState } from "react";
import { MapPin } from "lucide-react";

// SVG path data for African countries (simplified outlines)
const countryPaths: Record<string, { d: string; labelX: number; labelY: number; labelAnchor?: string }> = {
  // North Africa
  Morocco: { d: "M185,95 L205,85 L225,90 L235,100 L230,115 L210,120 L195,115 L185,105Z", labelX: 210, labelY: 100 },
  Algeria: { d: "M225,90 L260,80 L290,85 L305,100 L310,130 L300,165 L270,180 L240,175 L230,150 L225,130 L230,115 L235,100Z", labelX: 265, labelY: 130 },
  Tunisia: { d: "M290,85 L300,80 L305,90 L305,100 L290,85Z", labelX: 298, labelY: 90 },
  Libya: { d: "M305,100 L340,85 L370,90 L380,100 L385,130 L380,165 L350,180 L320,175 L300,165 L310,130Z", labelX: 345, labelY: 130 },
  Egypt: { d: "M380,100 L410,95 L420,105 L415,130 L405,150 L390,155 L385,130Z", labelX: 400, labelY: 125 },
  WesternSahara: { d: "M185,105 L195,115 L210,120 L215,135 L200,155 L180,150 L175,130 L180,115Z", labelX: 195, labelY: 130 },
  Mauritania: { d: "M175,130 L180,150 L200,155 L215,135 L230,150 L240,175 L225,195 L200,200 L175,195 L165,175 L160,155Z", labelX: 200, labelY: 170 },
  Mali: { d: "M225,195 L240,175 L270,180 L285,190 L280,210 L260,225 L240,225 L225,215Z", labelX: 255, labelY: 200 },
  Niger: { d: "M285,190 L300,165 L320,175 L350,180 L345,200 L330,215 L305,220 L290,215 L280,210Z", labelX: 315, labelY: 200 },
  Chad: { d: "M345,200 L350,180 L380,165 L390,175 L395,200 L385,225 L365,230 L345,225Z", labelX: 370, labelY: 205 },
  Sudan: { d: "M390,155 L405,150 L415,160 L420,190 L415,220 L400,235 L385,225 L395,200 L390,175 L380,165Z", labelX: 405, labelY: 195 },
  // West Africa  
  Senegal: { d: "M160,215 L175,210 L185,215 L180,225 L165,225Z", labelX: 172, labelY: 220 },
  Guinea: { d: "M165,225 L180,225 L190,230 L195,240 L180,245 L165,240Z", labelX: 180, labelY: 235 },
  SierraLeone: { d: "M165,240 L180,245 L178,255 L165,252Z", labelX: 172, labelY: 248 },
  Liberia: { d: "M178,255 L180,245 L195,248 L200,260 L188,265Z", labelX: 190, labelY: 255 },
  IvoryCoast: { d: "M195,240 L210,235 L225,240 L225,260 L210,268 L200,260 L195,248Z", labelX: 212, labelY: 250 },
  Ghana: { d: "M225,240 L240,235 L245,260 L235,270 L225,268 L225,260Z", labelX: 235, labelY: 255, labelAnchor: "right" },
  Togo: { d: "M245,250 L250,245 L252,262 L247,265 L245,260Z", labelX: 248, labelY: 255 },
  Benin: { d: "M252,245 L260,242 L262,265 L255,268 L252,262Z", labelX: 257, labelY: 255 },
  Nigeria: { d: "M260,242 L280,235 L305,235 L310,250 L300,265 L280,275 L265,270 L262,265Z", labelX: 285, labelY: 255 },
  BurkinaFaso: { d: "M225,215 L240,225 L260,225 L260,242 L240,235 L225,240 L210,235 L215,220Z", labelX: 238, labelY: 230 },
  Cameroon: { d: "M305,235 L310,220 L330,215 L340,230 L335,255 L320,270 L310,268 L310,250Z", labelX: 322, labelY: 245 },
  // Central Africa
  CentralAfrican: { d: "M330,215 L345,225 L365,230 L385,225 L390,240 L375,255 L350,260 L340,255 L340,230Z", labelX: 360, labelY: 240 },
  SouthSudan: { d: "M385,225 L400,235 L405,255 L395,270 L380,270 L370,260 L375,255 L390,240Z", labelX: 390, labelY: 250 },
  EquatorialGuinea: { d: "M305,280 L315,278 L315,285 L305,287Z", labelX: 310, labelY: 283 },
  Gabon: { d: "M305,287 L315,285 L320,290 L325,305 L315,315 L305,310 L300,295Z", labelX: 312, labelY: 300 },
  Congo: { d: "M320,270 L335,265 L345,275 L345,295 L335,310 L325,305 L320,290 L315,278Z", labelX: 332, labelY: 290 },
  DRC: { d: "M345,275 L370,260 L380,270 L395,270 L405,280 L415,300 L410,325 L400,345 L385,355 L370,350 L355,340 L345,325 L340,310 L335,310 L345,295Z", labelX: 378, labelY: 310, labelAnchor: "left" },
  // East Africa
  Eritrea: { d: "M420,175 L435,165 L445,175 L440,185 L430,188 L420,185Z", labelX: 432, labelY: 178 },
  Djibouti: { d: "M440,185 L450,183 L452,192 L445,195 L440,192Z", labelX: 446, labelY: 189, labelAnchor: "left" },
  Somalia: { d: "M445,195 L452,192 L470,210 L475,245 L460,270 L445,268 L435,255 L430,240 L435,220 L440,205Z", labelX: 458, labelY: 235, labelAnchor: "left" },
  Ethiopia: { d: "M420,185 L430,188 L440,192 L440,205 L435,220 L430,240 L415,250 L405,255 L400,235 L415,220 L420,190Z", labelX: 422, labelY: 220 },
  Uganda: { d: "M395,270 L405,265 L415,270 L415,285 L405,290 L395,285Z", labelX: 405, labelY: 278 },
  Kenya: { d: "M415,250 L430,240 L435,255 L445,268 L440,290 L425,305 L415,300 L410,290 L415,285 L415,270 L405,265 L405,255Z", labelX: 428, labelY: 275, labelAnchor: "left" },
  Rwanda: { d: "M395,285 L405,290 L405,298 L395,298Z", labelX: 400, labelY: 293 },
  Burundi: { d: "M395,298 L405,298 L405,308 L395,308Z", labelX: 400, labelY: 303 },
  Tanzania: { d: "M405,290 L410,290 L415,300 L425,305 L440,290 L445,305 L440,330 L425,345 L410,340 L405,325 L400,310 L405,308 L405,298Z", labelX: 425, labelY: 320 },
  // Southern Africa
  Angola: { d: "M300,310 L315,315 L325,305 L335,310 L340,310 L345,325 L340,350 L330,370 L310,380 L295,375 L285,355 L285,335 L295,320Z", labelX: 315, labelY: 345 },
  Zambia: { d: "M355,340 L370,350 L385,355 L390,370 L380,385 L365,390 L350,385 L340,375 L340,365 L345,350Z", labelX: 365, labelY: 370 },
  Malawi: { d: "M400,345 L410,340 L415,355 L410,375 L400,370 L398,355Z", labelX: 407, labelY: 358, labelAnchor: "left" },
  Mozambique: { d: "M410,375 L415,355 L420,345 L430,350 L435,370 L430,400 L420,420 L405,430 L395,420 L390,400 L395,385 L400,375Z", labelX: 418, labelY: 395 },
  Zimbabwe: { d: "M380,385 L390,370 L400,370 L400,375 L395,385 L390,400 L380,400Z", labelX: 390, labelY: 388 },
  Botswana: { d: "M350,385 L365,390 L380,385 L380,400 L375,420 L360,425 L345,415 L340,400Z", labelX: 360, labelY: 405 },
  Namibia: { d: "M295,375 L310,380 L330,370 L340,375 L340,400 L345,415 L340,435 L325,445 L310,440 L295,430 L285,410 L285,390Z", labelX: 315, labelY: 415 },
  SouthAfrica: { d: "M325,445 L340,435 L360,425 L375,420 L390,400 L395,420 L405,430 L400,450 L385,465 L365,475 L345,475 L330,465Z", labelX: 365, labelY: 450 },
  Madagascar: { d: "M445,370 L455,365 L465,380 L468,410 L460,435 L450,430 L445,400 L442,385Z", labelX: 456, labelY: 400, labelAnchor: "left" },
  Seychelles: { d: "M475,310 L480,308 L482,312 L478,315Z", labelX: 478, labelY: 312, labelAnchor: "left" },
};

const highlightedCountries = [
  "Kenya", "Uganda", "Tanzania", "Ethiopia", "Rwanda", "Burundi",
  "Zambia", "Eritrea", "Seychelles", "Madagascar", "Ghana",
  "DRC", "Malawi", "Djibouti", "Zimbabwe", "Somalia",
];

const labeledCountries = [
  { name: "Kenya", suffix: "(HQ)" },
  { name: "Ghana" },
  { name: "Djibouti" },
  { name: "Madagascar" },
  { name: "Tanzania" },
  { name: "Ethiopia" },
  { name: "DRC" },
  { name: "Zambia" },
  { name: "Somalia" },
];

const AfricaMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative w-full rounded-2xl overflow-hidden bg-muted/30 border border-border p-4 md:p-8">
        <svg
          viewBox="140 60 370 440"
          className="w-full h-auto"
          role="img"
          aria-label="Map of Africa showing Murban Engineering operations"
        >
          {/* All countries */}
          {Object.entries(countryPaths).map(([name, { d }]) => {
            const isHighlighted = highlightedCountries.includes(name);
            const isKenya = name === "Kenya";
            const isHovered = hoveredCountry === name && isHighlighted;

            return (
              <path
                key={name}
                d={d}
                className={`transition-all duration-300 ${
                  isHovered
                    ? "cursor-pointer"
                    : isHighlighted
                    ? "cursor-pointer"
                    : ""
                }`}
                fill={
                  isKenya
                    ? "hsl(358, 71%, 30%)"
                    : isHovered
                    ? "hsl(358, 71%, 40%)"
                    : isHighlighted
                    ? "hsl(358, 71%, 35%)"
                    : "hsl(0, 0%, 78%)"
                }
                stroke="hsl(0, 0%, 95%)"
                strokeWidth={1}
                onMouseEnter={() => isHighlighted && setHoveredCountry(name)}
                onMouseLeave={() => setHoveredCountry(null)}
                style={{
                  filter: isHovered
                    ? "drop-shadow(0 0 6px hsl(358, 71%, 35%))"
                    : isKenya
                    ? "drop-shadow(0 2px 4px hsl(358, 71%, 25%))"
                    : "none",
                }}
              />
            );
          })}

          {/* Labels with connector lines for key countries */}
          {labeledCountries.map(({ name, suffix }) => {
            const country = countryPaths[name];
            if (!country) return null;

            const isKenya = name === "Kenya";
            const anchor = country.labelAnchor || "right";
            const offsetX = anchor === "left" ? 25 : -25;
            const labelX = country.labelX + offsetX;
            const labelY = country.labelY - 5;

            return (
              <g key={`label-${name}`}>
                {/* Connector line */}
                <line
                  x1={country.labelX}
                  y1={country.labelY}
                  x2={labelX}
                  y2={labelY}
                  stroke="hsl(358, 71%, 35%)"
                  strokeWidth={1}
                  strokeDasharray="2,2"
                />
                {/* Pin dot */}
                <circle
                  cx={country.labelX}
                  cy={country.labelY}
                  r={isKenya ? 4 : 3}
                  fill="hsl(358, 71%, 35%)"
                  stroke="white"
                  strokeWidth={1.5}
                />
                {/* Label background */}
                <rect
                  x={anchor === "left" ? labelX : labelX - (name.length * 6 + (suffix ? suffix.length * 5 + 5 : 0) + 12)}
                  y={labelY - 9}
                  width={name.length * 6 + (suffix ? suffix.length * 5 + 5 : 0) + 12}
                  height={18}
                  rx={3}
                  fill="hsl(358, 71%, 35%)"
                />
                {/* Label text */}
                <text
                  x={anchor === "left" ? labelX + 6 : labelX - 6}
                  y={labelY + 4}
                  textAnchor={anchor === "left" ? "start" : "end"}
                  fill="white"
                  fontSize={9}
                  fontWeight={isKenya ? 700 : 600}
                  fontFamily="system-ui, sans-serif"
                >
                  {name.toUpperCase()}{suffix ? ` ${suffix}` : ""}
                </text>
              </g>
            );
          })}

          {/* Seychelles marker (small island) */}
          <circle cx={478} cy={312} r={5} fill="hsl(358, 71%, 35%)" stroke="white" strokeWidth={1.5} />
          <line x1={482} y1={312} x2={495} y2={308} stroke="hsl(358, 71%, 35%)" strokeWidth={1} strokeDasharray="2,2" />
          <rect x={495} y={300} width={62} height={18} rx={3} fill="hsl(358, 71%, 35%)" />
          <text x={500} y={312} fill="white" fontSize={9} fontWeight={600} fontFamily="system-ui, sans-serif">SEYCHELLES</text>
        </svg>
      </div>

      {/* Legend grid */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="font-medium">Hover over highlighted countries to explore</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm max-w-3xl mx-auto">
          {highlightedCountries.map((name) => (
            <div
              key={name}
              className={`transition-all duration-300 px-3 py-2 rounded-lg flex items-center gap-2 ${
                hoveredCountry === name
                  ? "text-primary-foreground bg-primary font-bold scale-105 shadow-md"
                  : name === "Kenya"
                  ? "text-primary font-semibold bg-primary/10 border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
              onMouseEnter={() => setHoveredCountry(name)}
              onMouseLeave={() => setHoveredCountry(null)}
            >
              <MapPin className={`h-3.5 w-3.5 ${
                hoveredCountry === name ? "text-primary-foreground" : name === "Kenya" ? "text-primary" : "text-primary/60"
              }`} />
              {name}{name === "Kenya" ? " (HQ)" : ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfricaMap;
