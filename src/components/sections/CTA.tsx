import React from "react";
import Container from "../ui/Container";

const CTA: React.FC = () => (
  <section id="cta" className="py-20">
    <Container>
      <div className="rounded-3xl border border-zinc-200 bg-gradient-to-tr from-indigo-600 via-violet-600 to-fuchsia-600 p-1 shadow-xl dark:border-zinc-800">
        <div className="rounded-[22px] bg-white p-8 text-center dark:bg-zinc-950">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Ready to automate your first workflow?
          </h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Connect your tools and go from idea to automation in minutes.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-indigo-500"
            >
              Create free account
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-6 py-3 text-sm font-semibold shadow-sm hover:shadow dark:border-zinc-700"
            >
              See pricing
            </a>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default CTA;
