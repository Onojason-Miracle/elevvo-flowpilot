
import React from "react";
import Container from "../ui/Container";
import FeatureCard from "../ui/FeatureCard";
import { Workflow, Plug2, Zap, Shield, Gauge, Rocket } from "lucide-react";

const Features: React.FC = () => (
  <section id="features" className="py-20">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Everything you need to automate work</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">Build flows with clicks, not code. Integrate your tools, add AI steps, and ship automations that stick.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard icon={<Workflow className="h-5 w-5" />} title="Visual builder" desc="Design workflows with a clean, drag‑and‑drop canvas." />
        <FeatureCard icon={<Plug2 className="h-5 w-5" />} title="100+ integrations" desc="Connect Slack, Notion, Gmail, Sheets, and more in seconds." />
        <FeatureCard icon={<Zap className="h-5 w-5" />} title="AI steps" desc="Summarize, categorize, and draft with built‑in AI actions." />
        <FeatureCard icon={<Shield className="h-5 w-5" />} title="Security first" desc="Role‑based access, SSO, and audit logs for peace of mind." />
        <FeatureCard icon={<Gauge className="h-5 w-5" />} title="Realtime metrics" desc="See run history, success rates, and bottlenecks instantly." />
        <FeatureCard icon={<Rocket className="h-5 w-5" />} title="Templates" desc="Start fast with battle‑tested recipes for common tasks." />
      </div>
    </Container>
  </section>
);

export default Features;