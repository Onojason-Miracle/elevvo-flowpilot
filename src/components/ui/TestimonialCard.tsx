import React from "react";

interface Props {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const TestimonialCard: React.FC<Props> = ({ quote, name, role, avatar }) => (
  <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
    <div className="flex items-start gap-4">
      <img
        src={avatar}
        alt={`${name} avatar`}
        className="h-12 w-12 rounded-full object-cover"
      />
      <div>
        <p className="italic text-zinc-800 dark:text-zinc-100">“{quote}”</p>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
            {name}
          </span>{" "}
          — {role}
        </p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
