import Link from "next/link";

// A reusable button / link component.
// Pass an href to render a Next.js Link; otherwise renders a <button>.
// Variants use full literal Tailwind class strings so Tailwind can detect them.
export default function Button({
  children,
  href,
  variant = "gold",
  className = "",
  asChild = false,
  ...props
}) {
  // Base styles: rounded-full, hover, focus-visible
  const base =
    "rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants = {
    gold: "bg-brand-gold text-charcoal hover:bg-brand-accent",
    green: "bg-brand-green text-white hover:bg-gira-accent",
    "outline-white":
      "border-2 border-white text-white hover:bg-white hover:text-charcoal",
    "outline-dark":
      "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
    program: className || "",
  };

  const selectedVariant = variants[variant] || variants.gold;
  const classes = `${base} ${selectedVariant} ${className}`.trim();

  const CommonProps = {
    className: classes,
    ...props,
  };

  if (href) {
    return (
      <Link href={href} {...CommonProps}>
        {children}
      </Link>
    );
  }

  return <button {...CommonProps} type="button">{children}</button>;
}