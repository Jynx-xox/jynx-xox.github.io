import { site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-baseline sm:justify-between">
        <div className="text-sm">
          <p className="font-medium">{site.name}</p>
          <p className="text-muted">
            {site.location} · {new Date().getFullYear()}
          </p>
        </div>
        <ul className="flex gap-6 text-sm">
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line text-muted hover:text-ink"
            >
              GitHub ↗
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line text-muted hover:text-ink"
            >
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.email}`}
              className="link-line text-muted hover:text-ink"
            >
              Email ↗
            </a>
          </li>
        </ul>
        <p className="mono-meta">Built by Ken.</p>
      </div>
    </footer>
  );
}
