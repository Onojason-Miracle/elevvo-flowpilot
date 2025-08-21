// import React from "react";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "../../hooks/useTheme";

// interface Props {
//   withLabel?: boolean;
//   size?: "sm" | "md";
// }

// const ThemeToggle: React.FC<Props> = ({ withLabel = true, size = "md" }) => {
//   const { dark, toggleTheme } = useTheme();
//   const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";
//   const pad = size === "sm" ? "px-3 py-2" : "p-2";

//   return (
//     <button
//       onClick={toggleTheme}
//       aria-label="Toggle theme"
//       className={`inline-flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white ${pad} text-sm shadow-sm transition hover:shadow dark:border-zinc-800 dark:bg-zinc-900`}
//     >
//       {dark ? <Sun className={iconSize} /> : <Moon className={iconSize} />}
//       {withLabel && (
//         <span className="hidden sm:inline">{dark ? "Light" : "Dark"} mode</span>
//       )}
//     </button>
//   );
// };

// export default ThemeToggle;


// mmmmmmmmmmmmmmmmm



import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

interface ThemeToggleProps {
  withLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ withLabel = false, size = "sm" }) => {
  const { dark, toggleTheme } = useTheme();

  const sizeClasses =
    size === "sm"
      ? "p-1"
      : size === "md"
      ? "p-2"
      : "p-3";

  return (
    <button
      onClick={toggleTheme}
      className={`inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900 shadow-sm transition hover:shadow ${sizeClasses}`}
    >
      {dark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-zinc-700" />}
      {withLabel && <span className="text-sm">{dark ? "Light Mode" : "Dark Mode"}</span>}
    </button>
  );
};

export default ThemeToggle;
