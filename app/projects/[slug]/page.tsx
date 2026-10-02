import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

const sections = (p: (typeof projects)[number]) =>
  [
    { label: "Overview", body: p.overview },
    { label: "Problem", body: p.problem },
    { label: "What I Built", body: p.built },
    { label: "Technical Decisions", body: p.decisions },
    { label: "Challenges", body: p.challenges },
    { label: "What I Learned", body: p.learned },
  ] as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = projects.indexOf(project);

  return (
    <article className="mx-auto max-w-5xl px-6 pb-24 pt-16 sm:pt-20">
      <Reveal>
        <Link href="/#projects" className="link-line mono-meta">
          ← All Projects
        </Link>
      </Reveal>

      <header className="mt-10 border-t border-line pt-6">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mono-meta">
              {String(index + 1).padStart(2, "0")} / {project.year}
            </p>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            {project.description}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <dl className="mt-8 grid gap-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="mono-meta mb-1">Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt className="mono-meta mb-1">Technologies</dt>
              <dd>{project.tech.join(" · ")}</dd>
            </div>
            {(project.github || project.live) && (
              <div>
                <dt className="mono-meta mb-1">Links</dt>
                <dd className="flex gap-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-line text-accent"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-line text-accent"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </dd>
              </div>
            )}
          </dl>
        </Reveal>
      </header>

      {/* [PLACEHOLDER] add screenshots to /public and reference them here, e.g.
          <Image src={`/projects/${project.slug}.png`} alt="…" width={1200} height={750} />
      */}

      <div className="mt-14 max-w-2xl space-y-12">
        {sections(project).map((s, i) => (
          <Reveal key={s.label} delay={i * 40}>
            <section className="border-t border-line pt-5">
              <h2 className="mono-meta mb-3 !text-ink">{s.label}</h2>
              <p className="leading-relaxed text-muted">{s.body}</p>
            </section>
          </Reveal>
        ))}
      </div>
    </article>
  );
}
