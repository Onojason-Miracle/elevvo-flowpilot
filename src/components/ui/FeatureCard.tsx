
import React from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<Props> = ({ icon, title, desc }) => (
  <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
      {icon}
    </div>
    <h3 className="mt-4 text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
  </div>
);

export default FeatureCard;