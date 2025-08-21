
import React from "react";
import Container from "../ui/Container";
import TestimonialCard from "../ui/TestimonialCard";

const Testimonials: React.FC = () => (
  <section id="testimonials" className="py-20 bg-white/60 dark:bg-zinc-900/40">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Teams are shipping faster with FlowPilot</h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <TestimonialCard
          quote="FlowPilot cut our weekly ops time by 40%. The visual builder is *chef’s kiss*."
          name="Aisha O."
          role="Head of Ops, Marketly"
          avatar="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop"
        />
        <TestimonialCard
          quote="We replaced five scripts with one simple flow. Non‑devs can ship automations now."
          name="David K."
          role="Engineering Manager, CoreLink"
          avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
        />
        <TestimonialCard
          quote="The built‑in AI steps are a game changer for triaging support and sales."
          name="Ngozi M."
          role="Customer Success, Finch"
          avatar="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop"
        />
      </div>
    </Container>
  </section>
);

export default Testimonials;