import React, { useState } from "react";
import { Rocket } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle"; // your existing dark/light toggle
import Container from "../ui/Container";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // your auth context
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";

// Desktop nav items (you can keep only 'Home' if desired)
const NAV_ITEMS = [{ href: "/", label: "Home" }];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth(); // get current user from context

  // Logout handler
  const handleLogout = async () => {
    await signOut(auth);
  };

  // Function to get user initials from displayName or email
  const getUserInitials = () => {
    if (!user) return "";
    if (user.displayName) {
      return user.displayName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
    }
    return user.email?.[0].toUpperCase() || "";
  };

  return (
    <header className=" w-[100%] sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60">
      <Container>
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-lg">FlowPilot</span>
          </Link>

          {/* Desktop nav */}
          <nav className=" hidden  md:flex items-center gap-4 w-[90%]">
            {NAV_ITEMS.map((n) => (
              <Link
                key={n.href}
                to={n.href}
                className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              >
                {n.label}
              </Link>
            ))}

            {/* Theme toggle */}
            <ThemeToggle withLabel />

            {/* Show user initials and logout if logged in, else show register */}
            {user ? (
              <div className="flex items-center gap-2">
                {/* User initials */}
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
                  {getUserInitials()}
                </div>
                {/* Logout button */}
                <button
                  onClick={handleLogout}
                  className="rounded-2xl bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/register"
                className="rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-indigo-500"
              >
                Get Started
              </Link>
            )}
          </nav>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle withLabel={false} size="md" />
            {user ? (
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold text-sm">
                {getUserInitials()}
              </div>
            ) : null}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white p-2 shadow-sm transition hover:shadow dark:border-zinc-800 dark:bg-zinc-900"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
          <Container className="py-4">
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((n) => (
                <Link
                  key={n.href}
                  to={n.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium"
                >
                  {n.label}
                </Link>
              ))}

              {user ? (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/register"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow"
                >
                  Get Started
                </Link>
              )}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;





// import React, { useState } from "react";
// import { Rocket } from "lucide-react";
// import ThemeToggle from "../ui/ThemeToggle"; // This handles dark/light mode
// import Container from "../ui/Container";
// import { Link } from "react-router-dom";

// const Navbar: React.FC = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60">
//       <Container>
//         <div className="h-16 flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2 font-semibold">
//             <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow">
//               <Rocket className="h-5 w-5" />
//             </span>
//             <span className="text-lg">FlowPilot</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             {/* ✅ Only Home link kept, goes to root path */}
//             <Link
//               to="/"
//               className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
//             >
//               Home
//             </Link>

//             {/* ✅ Fixed Dark/Light mode toggle */}
//             <ThemeToggle withLabel />

//             {/* CTA Button */}
//             <Link
//               to="/register"
//               className="rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-indigo-500"
//             >
//               Get Started
//             </Link>
//           </nav>

//           {/* Mobile Actions (Theme + Menu Button) */}
//           <div className="md:hidden flex items-center gap-2">
//             {/* ✅ Dark mode toggle for mobile */}
//             <ThemeToggle withLabel={false} size="md" />

//             {/* Mobile menu button */}
//             <button
//               onClick={() => setMobileOpen((v) => !v)}
//               aria-label="Open menu"
//               className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white p-2 shadow-sm transition hover:shadow dark:border-zinc-800 dark:bg-zinc-900"
//             >
//               <svg
//                 className="h-5 w-5"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </Container>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="md:hidden border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
//           <Container className="py-4">
//             <div className="flex flex-col gap-3">
//               {/* ✅ Only Home link kept */}
//               <Link
//                 to="/"
//                 onClick={() => setMobileOpen(false)}
//                 className="text-sm font-medium"
//               >
//                 Home
//               </Link>

//               {/* CTA Button */}
//               <Link
//                 to="/register"
//                 onClick={() => setMobileOpen(false)}
//                 className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow"
//               >
//                 Get Started
//               </Link>
//             </div>
//           </Container>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

