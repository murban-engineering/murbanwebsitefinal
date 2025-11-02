import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "murban-theme";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  if (typeof window.matchMedia === "function") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  return "light";
};

export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    root.setAttribute("data-theme", theme);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, theme);
    }
  }, [theme]);

  const setTheme = useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme);
  }, []);

  const toggleTheme = useCallback((value?: boolean) => {
    if (typeof value === "boolean") {
      setThemeState(value ? "dark" : "light");
      return;
    }

    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return {
    theme,
    isDarkMode: theme === "dark",
    setTheme,
    toggleTheme,
  };
};
