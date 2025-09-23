import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap } from "lucide-react";
import Container from "../ui/Container";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-violet-100/70 via-fuchsia-100/30 to-transparent dark:from-violet-950/40 dark:via-fuchsia-900/10"
      />
      <Container className="pt-16 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Automate busywork.{" "}
              <span className="bg-gradient-to-tr from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Focus on impact.
              </span>
            </h1>
            <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
              FlowPilot is an AI workflow co‑pilot that turns repetitive tasks
              into streamlined automations so your team ships faster with fewer
              clicks.
            </p>

            {/* <form action="#cta" className="mt-6 flex w-full max-w-md gap-2">
              <input
                type="email"
                required
                placeholder="Enter your work email"
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm shadow-sm outline-none placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-zinc-700 dark:bg-zinc-900"
              />
              <button className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-indigo-500">
                Join waitlist
              </button>
            </form> */}

            {/* <div className="mt-4 flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                SOC2-ready
              </div>
              <div className="flex items-center gap-1">
                <Zap className="h-4 w-4" />
                2‑minute setup
              </div>
            </div> */}

            
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-violet-500/10 to-fuchsia-500/20 blur-2xl"
              aria-hidden
            />
            <div className="relative rounded-3xl border border-zinc-200 bg-white p-4 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1551281044-8b59cbfc9b35?q=80&w=1200&auto=format&fit=crop"
                alt="FlowPilot dashboard preview"
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
