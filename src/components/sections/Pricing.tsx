
import React from "react";
import Container from "../ui/Container";
import PricingCard from "../ui/PricingCard";

const Pricing: React.FC = () => (
  <section id="pricing" className="py-20">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Simple, scalable pricing</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">Start free. Upgrade as your team grows.</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <PricingCard plan="Starter" price="$0" period="/mo" features={["3 active workflows", "500 runs/month", "Community support"]} cta="Get started" />
        <PricingCard plan="Pro" price="$19" period="/user/mo" features={["Unlimited workflows", "50k runs/month", "Priority support", "SSO"]} cta="Start 14‑day trial" highlight />
        <PricingCard plan="Team" price="$79" period="/10 users/mo" features={["All Pro features", "200k runs/month", "Advanced roles", "Audit logs"]} cta="Contact sales" />
      </div>
    </Container>
  </section>
);

export default Pricing;