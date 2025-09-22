import React from "react";
import { Check } from "lucide-react";

interface Props {
  plan: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

const PricingCard: React.FC<Props> = ({
  plan,
  price,
  period,
  features,
  cta,
  highlight = false,
}) => (
  <div
    className={
      "relative rounded-3xl border p-6 shadow-sm dark:border-zinc-800 " +
      (highlight
        ? "border-indigo-300 ring-2 ring-indigo-400/50 dark:border-indigo-700/40"
        : "border-zinc-200")
    }
  >
    {highlight && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">
        Most popular
      </span>
    )}
    <h3 className="text-lg font-semibold">{plan}</h3>
    <div className="mt-4 flex items-baseline gap-1">
      <span className="text-3xl font-extrabold">{price}</span>
      <span className="text-zinc-500 dark:text-zinc-400">{period}</span>
    </div>
    <ul className="mt-4 space-y-2 text-sm">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2">
          <Check className="mt-0.5 h-4 w-4 flex-none" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <a
      href="#cta"
      className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-indigo-500"
    >
      {cta}
    </a>
  </div>
);

export default PricingCard;
