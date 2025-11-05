import { MoonIcon, SunIcon } from "@/components/ui/icons";

import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/use-theme";

type ThemeToggleProps = {
  className?: string;
  id?: string;
};

export const ThemeToggle = ({ className, id }: ThemeToggleProps) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full border border-foreground/10 bg-background/80 px-4 py-2 text-foreground shadow-sm backdrop-blur",
        className,
      )}
    >
      <SunIcon className="h-4 w-4" aria-hidden="true" />
      <Switch
        id={id ?? "theme-toggle"}
        checked={isDarkMode}
        onCheckedChange={(checked) => toggleTheme(checked)}
        aria-label="Toggle dark mode"
      />
      <MoonIcon className="h-4 w-4" aria-hidden="true" />
    </div>
  );
};
