import "./index.css";
import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import CTA from "./components/sections/CTA";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./providers/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;

// function App() {
//   return (

// <div className="p-4 bg-red-500 dark:bg-green-500">
//   TEST BOX
// </div>

//     <div className="h-screen flex items-center justify-center bg-blue-800">
//       <h1 className="text-white text-4xl font-bold">
//        Miracle Tailwind is working! 🎉
//       </h1>

//       <div className="text-black">Test</div>

//     </div>
//   );
// }

// export default App;
