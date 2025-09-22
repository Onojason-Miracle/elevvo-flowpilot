import Hero from "@components/sections/Hero";
import Features from "@components/sections/Features";
import Testimonials from "@components/sections/Testimonials";
import Pricing from "@components/sections/Pricing";
import CTA from "@components/sections/CTA";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}

export default Home;
