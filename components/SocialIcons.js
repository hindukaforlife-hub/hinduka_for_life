import { site } from "../lib/content";

// Social media icon links.
// lucide-react does not include brand icons, so each logo is drawn here as a
// simple inline SVG with a white fill (currentColor) and a 0 0 24 24 viewBox.
// The component accepts an optional `className` prop (applied to each link) and
// a `size` prop (svg width/height) so callers can restyle the icons (e.g. the
// footer uses white/10 circles that hover to gold with a charcoal icon).
// Only icons with a configured URL are rendered; empty links are skipped.
export default function SocialIcons({ className = "", size = 20 } = {}) {
  const social = site.social;

  const sizePx = `${size}px`;

  const icons = [
    {
      key: "facebook",
      label: "Facebook",
      url: social.facebook,
      color: "#1877F2",
      svg: (
        <svg
          width={sizePx}
          height={sizePx}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.654 9.129 8.515 9.878v-6.988h-2.54V12h2.54v-2.753c0-2.757 1.612-4.44 4.123-4.44 1.418 0 2.485 0.171 2.865 0.229v2.863H14.37c-1.132 0-1.352 0.571-1.352 1.254v1.785H18.29l-1.123 3.069H13.36v6.988C17.346 21.129 21 16.991 21 12z" />
        </svg>
      ),
    },
    {
      key: "instagram",
      label: "Instagram",
      url: social.instagram,
      color: "#E4405F",
      svg: (
        <svg
          width={sizePx}
          height={sizePx}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <path d="M16.55 11.45A1.9 1.9 0 0 1 16 11c0-1.05 0.84-1.9 1.87-1.95 1.03-.05 1.87 0.9 1.87 1.95 0 1.05-0.84 1.9-1.87 1.95A1.9 1.9 0 0 1 16 13c0-1.05 0.84-1.9 1.87-1.95 1.03-.05 1.68 0.9 1.68 1.95 0 1.05-0.65 2-1.68 2-1.03 0-1.87-0.9-1.87-1.95 0-1.05 0.84-1.9 1.87-1.95 1.03-.05 1.87 0.9 1.87 1.95" />
        </svg>
      ),
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      url: social.whatsapp,
      color: "#25D366",
      svg: (
        <svg
          width={sizePx}
          height={sizePx}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M21 3.264a10.32 10.32 0 0 0-4.666 1.13c-2.41 0.919-4.41 2.894-5.362 4.896C9.75 10.577 8.6 12.36 8.6 12.36 8.26 13.604 7.69 14.34 7 14.64c-0.518 0.218-1.372 0.44-2.107 0.906-0.954 0.601-1.047 2.053-0.445 2.656 0.604 0.604 2.055 0.51 2.656 0.445 0.466-0.735 0.688-1.589 0.907-2.107 0.301-0.689 1.036-1.258 1.639-1.66 0.048-0.031 0.095-0.053 0.144-0.084 4.179-2.652 7.809-4.627 11.502-5.663 0.883-0.246 1.678-0.459 2.447-0.486 1.184-0.04 1.784 0.181 2.225 0.455A10.14 10.14 0 0 1 21 3.264z" />
        </svg>
      ),
    },
    {
      key: "x",
      label: "X",
      url: social.x,
      color: "#000000",
      svg: (
        <svg
          width={sizePx}
          height={sizePx}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      key: "youtube",
      label: "YouTube",
      url: social.youtube,
      color: "#FF0000",
      svg: (
        <svg
          width={sizePx}
          height={sizePx}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M23.498 6.188a3.35 3.35 0 0 0-2.118-2.935C19.59 2.53 12 2.53 12 2.53s-7.59 0-9.38 0.733a3.35 3.35 0 0 0-2.118 2.935v11.636a3.35 3.35 0 0 0 2.118 2.935c1.79 0.733 9.38 0.733 9.38 0.733s7.59 0 9.38-0.733a3.35 3.35 0 0 0 2.118-2.935V6.188zm-17.904 10.8v-7.668l5.338 3.834z" />
        </svg>
      ),
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      url: social.linkedin,
      color: "#0A66C2",
      svg: (
        <svg
          width={sizePx}
          height={sizePx}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-0.791-1.75-1.764s0.784-1.764 1.75-1.764 1.75 0.791 1.75 1.764c0 0.976-0.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {icons
        .filter((icon) => icon.url)
        .map((icon) => (
          <a
            key={icon.key}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={icon.label}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors ${icon.color ? `bg-[${icon.color}]` : "bg-charcoal"} ${className}`}
          >
            {icon.svg}
          </a>
        ))}
    </div>
  );
}