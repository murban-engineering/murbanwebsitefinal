import { CheckCircle } from "lucide-react";
import Africa from "@react-map/africa";

const countries = [
  { name: "Kenya", label: "Kenya", isHQ: true },
  { name: "Uganda", label: "Uganda" },
  { name: "Tanzania", label: "Tanzania" },
  { name: "Ethiopia", label: "Ethiopia" },
  { name: "Rwanda", label: "Rwanda" },
  { name: "Burundi", label: "Burundi" },
  { name: "Zambia", label: "Zambia" },
  { name: "Eritrea", label: "Eritrea" },
  { name: "Seychelles", label: "Seychelles" },
  { name: "Madagascar", label: "Madagascar" },
  { name: "Somalia", label: "Somalia" },
  { name: "Zimbabwe", label: "Zimbabwe" },
  { name: "Djibouti", label: "Djibouti" },
  { name: "Malawi", label: "Malawi" },
  { name: "Democratic Republic of the Congo", label: "DRC" },
  { name: "Ghana", label: "Ghana" },
];

const AfricaMap = () => {
  const cityColors: Record<string, string> = {};
  countries.forEach(({ name, isHQ }) => {
    cityColors[name] = isHQ ? "hsl(358, 71%, 30%)" : "hsl(358, 71%, 42%)";
  });

  const leftCol = countries.slice(0, 10);
  const rightCol = countries.slice(10);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Country checklist */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
          <div className="space-y-3">
            {leftCol.map(({ name, label, isHQ }) => (
              <div key={name} className="flex items-center gap-2.5">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-semibold text-foreground text-sm md:text-base uppercase tracking-wide">
                  {label}{isHQ ? " (HQ)" : ""}
                </span>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {rightCol.map(({ name, label }) => (
              <div key={name} className="flex items-center gap-2.5">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-semibold text-foreground text-sm md:text-base uppercase tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="flex items-center justify-center">
          <Africa
            type="select-single"
            size={typeof window !== "undefined" && window.innerWidth < 768 ? 280 : 400}
            mapColor="hsl(0, 0%, 90%)"
            strokeColor="hsl(0, 0%, 98%)"
            strokeWidth={0.8}
            hoverColor="hsl(358, 71%, 45%)"
            selectColor="hsl(358, 71%, 35%)"
            hints={true}
            hintTextColor="#ffffff"
            hintBackgroundColor="hsl(358, 71%, 35%)"
            hintPadding="4px 10px"
            hintBorderRadius={4}
            cityColors={cityColors}
            disableClick={true}
            disableHover={false}
          />
        </div>
      </div>
    </div>
  );
};

export default AfricaMap;
