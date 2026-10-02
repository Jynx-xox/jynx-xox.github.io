import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="mb-10 flex items-baseline gap-4 border-t border-line pt-4">
        <span className="mono-meta">{index}</span>
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          {title}
        </h2>
      </div>
    </Reveal>
  );
}
