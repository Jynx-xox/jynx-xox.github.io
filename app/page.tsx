import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site, projects, experience, skills, interests } from "@/data/content";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* ---------- HERO ---------- */}
      <section className="pb-20 pt-20 sm:pb-28 sm:pt-28">
        <Reveal>
          <p className="mono-meta mb-6">{site.role}</p>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Kendeo Gosti
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I’m Ken — a Math–Computer Science student at UC San Diego. I like
            programming, working through hard problems, and building things
            that are actually useful.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li>
              <a href="#projects" className="link-line font-medium text-accent">
                View Projects →
              </a>
            </li>
            <li>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line text-ink"
              >
                Resume ↗
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line text-ink"
              >
                GitHub ↗
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line text-ink"
              >
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={240}>
          <p className="mono-meta mt-12">
            Currently: UC San Diego · Based in: {site.location}
          </p>
        </Reveal>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section id="about" className="scroll-mt-20 pb-20 sm:pb-28">
        <SectionHeading index="01" title="About" />
        <div className="grid gap-10 sm:grid-cols-2">
          <Reveal>
            <p className="max-w-md leading-relaxed text-ink">
              I’m Ken, a Math–Computer Science student at UC San Diego. I enjoy
              programming, problem solving, and figuring out how systems work
              under the hood. Right now I’m building my foundation in software
              engineering through coursework and projects outside of class.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-5 text-sm">
              <dt className="mono-meta self-baseline">Currently</dt>
              <dd>UC San Diego</dd>
              <dt className="mono-meta self-baseline">Studying</dt>
              <dd>Math–Computer Science</dd>
              <dt className="mono-meta self-baseline">Interested in</dt>
              <dd>
                <ul className="space-y-1">
                  {interests.cs.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </dd>
              <dt className="mono-meta self-baseline">Outside CS</dt>
              <dd>
                <ul className="space-y-1">
                  {interests.outside.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </dd>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---------- PROJECTS ---------- */}
      <section id="projects" className="scroll-mt-20 pb-20 sm:pb-28">
        <SectionHeading index="02" title="Selected Projects" />
        <ol>
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <li>
                <Link
                  href={`/projects/${p.slug}/`}
                  className="project-row group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-6 border-t border-line py-6 last:border-b sm:grid-cols-[3rem_1fr_auto_auto] sm:gap-x-10"
                >
                  <span className="mono-meta">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="proj-title block text-lg font-medium tracking-tight sm:text-xl">
                      {p.title}
                    </span>
                    <span className="mt-1 block max-w-lg text-sm leading-relaxed text-muted">
                      {p.description}
                    </span>
                    <span className="mono-meta mt-3 block normal-case">
                      {p.tech.join(" · ")}
                    </span>
                  </span>
                  <span className="mono-meta hidden sm:block">{p.year}</span>
                  <span
                    aria-hidden="true"
                    className="proj-arrow text-lg text-muted group-hover:text-accent"
                  >
                    ↗
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ---------- EXPERIENCE ---------- */}
      <section id="experience" className="scroll-mt-20 pb-20 sm:pb-28">
        <SectionHeading index="03" title="Experience & Education" />
        <ol>
          {experience.map((e, i) => (
            <Reveal key={e.title} delay={i * 60}>
              <li className="grid gap-2 border-t border-line py-6 last:border-b sm:grid-cols-[10rem_1fr] sm:gap-10">
                <p className="mono-meta pt-1">{e.period}</p>
                <div>
                  <h3 className="text-base font-semibold tracking-tight">
                    {e.title}
                  </h3>
                  <p className="text-sm text-muted">{e.org}</p>
                  {e.description && (
                    <p className="mt-2 max-w-lg text-sm leading-relaxed">
                      {e.description}
                    </p>
                  )}
                  {e.coursework && (
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                      <span className="text-ink">Relevant coursework:</span>{" "}
                      {e.coursework}
                    </p>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ---------- SKILLS ---------- */}
      <section id="skills" className="scroll-mt-20 pb-20 sm:pb-28">
        <SectionHeading index="04" title="Skills" />
        <dl className="space-y-5">
          {skills.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="grid gap-1 border-t border-line pt-5 sm:grid-cols-[10rem_1fr] sm:gap-10">
                <dt className="mono-meta pt-0.5">{s.label}</dt>
                <dd className="text-base">{s.items.join(" · ")}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* ---------- RESUME ---------- */}
      <section id="resume" className="scroll-mt-20 pb-20 sm:pb-28">
        <SectionHeading index="05" title="Resume" />
        <Reveal>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            A PDF version of my resume, kept up to date.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line font-medium text-accent"
            >
              View Resume ↗
            </a>
            <a href={site.resumeUrl} download className="link-line text-ink">
              Download Resume ↓
            </a>
          </div>
        </Reveal>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="scroll-mt-20 pb-24 sm:pb-32">
        <SectionHeading index="06" title="Contact" />
        <Reveal>
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Let’s talk.
          </h3>
          <p className="mt-4 max-w-md leading-relaxed text-muted">
            The fastest way to reach me is email. I’m also on GitHub and
            LinkedIn.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li>
              <span className="mono-meta mr-6 inline-block w-20">Email</span>
              <a
                href={`mailto:${site.email}`}
                className="link-line text-accent"
              >
                {site.email}
              </a>
            </li>
            <li>
              <span className="mono-meta mr-6 inline-block w-20">GitHub</span>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line text-ink"
              >
                {site.github.replace("https://", "")} ↗
              </a>
            </li>
            <li>
              <span className="mono-meta mr-6 inline-block w-20">LinkedIn</span>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line text-ink"
              >
                {site.linkedin.replace("https://www.", "")} ↗
              </a>
            </li>
          </ul>
        </Reveal>
      </section>
    </div>
  );
}
