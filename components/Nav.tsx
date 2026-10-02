import Link from "next/link";
import { site } from "@/data/content";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: site.resumeUrl, label: "Resume", external: true },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6"
      >
        <Link
          href="/"
          className="mono-meta !text-ink hover:!text-accent transition-colors"
        >
          KENDEO GOSTI
        </Link>
        <ul className="flex items-center gap-5 text-sm sm:gap-7">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...(l.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="link-line text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
