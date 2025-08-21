
import React from "react";
import Container from "../ui/Container";
import { Rocket } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="border-t border-zinc-200 py-10 text-sm dark:border-zinc-800">
    <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow">
          <Rocket className="h-5 w-5" />
        </span>
        <span className="font-semibold">FlowPilot</span>
        <span className="text-zinc-500 dark:text-zinc-400">© {new Date().getFullYear()}</span>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-zinc-600 dark:text-zinc-400">
        <a href="#features" className="hover:underline">Features</a>
        <a href="#pricing" className="hover:underline">Pricing</a>
        <a href="#" className="hover:underline">Docs</a>
        <a href="#" className="hover:underline">Privacy</a>
      </div>
    </Container>
  </footer>
);

export default Footer;