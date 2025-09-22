// import { createContext } from "react";

// export interface ThemeContextValue {
//   dark: boolean;
//   toggleTheme: () => void;
// }

// export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

import { createContext, useContext } from "react";

export const ThemeContext = createContext<{
  dark: boolean;
  toggleTheme: () => void;
} | null>(null);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
