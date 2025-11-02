import { useCallback, useEffect, useMemo } from "react";
import { useTheme as useNextTheme } from "next-themes";

type Theme = "light" | "dark" | "system";

export const useTheme = () => {
  const { theme, resolvedTheme, setTheme } = useNextTheme();

  const currentTheme = useMemo<Exclude<Theme, "system">>(() => {
    if (resolvedTheme === "light" || resolvedTheme === "dark") {
      return resolvedTheme;
    }

    if (theme === "light" || theme === "dark") {
      return theme;
    }

    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }

    return "light";
  }, [resolvedTheme, theme]);

  useEffect(() => {
    if (typeof document === "undefined") return;

    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  const toggleTheme = useCallback(
    (value?: boolean) => {
      if (typeof value === "boolean") {
        setTheme(value ? "dark" : "light");
        return;
      }

      setTheme(currentTheme === "dark" ? "light" : "dark");
    },
    [currentTheme, setTheme],
  );

  return {
    theme: currentTheme,
    isDarkMode: currentTheme === "dark",
    setTheme,
    toggleTheme,
  };
};
