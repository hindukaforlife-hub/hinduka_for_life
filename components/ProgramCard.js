import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

// A white rounded card with soft shadow, a colored top border in the program's
// accent color, the program icon (~96px), the name, short text, optional
// highlights, and a "Learn more" button linking to /programs/<slug>.
export default function ProgramCard({ program, theme, highlights }) {
  return (
    <Link
      href={`/programs/${program.slug}`}
      className="block"
      aria-label={`Learn more about ${program.name}`}
    >
      <div
        className={`rounded-xl shadow-sm border-t-4 p-5 bg-white ${theme.border} ${theme.tint} hover:-translate-y-1 transition-transform duration-200 motion-reduce:duration-0 motion-reduce:hover:translate-y-0`}
      >
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={program.icon}
            alt={`${program.name} icon`}
            width={96}
            height={96}
            sizes="96px"
            className="rounded-full bg-white p-1"
          />
          <div className="flex flex-col">
            <span className={`font-semibold ${theme.heading}`}>
              {program.name}
            </span>
            <span className={`text-xs ${theme.accentText} font-medium uppercase tracking-wider`}>
              {program.theme}
            </span>
          </div>
        </div>
        <p className={`text-sm text-charcoal mb-5 ${theme.tintText}`}>
          {program.cardText}
        </p>
        {highlights && highlights.length > 0 && (
          <ul className="space-y-3 mb-6">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-charcoal/80 leading-relaxed">
                <Check className={`w-4 h-4 shrink-0 mt-0.5 ${theme.accentText}`} aria-hidden="true" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
        <button className={`${theme.button} ${theme.buttonHover} w-full`}>
          Learn more
        </button>
      </div>
    </Link>
  );
}