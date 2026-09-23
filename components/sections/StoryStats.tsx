const stats = [
  { value: "2002", label: "Est. in Dar es Salaam" },
  { value: "6th", label: "Floor Rooftop Terrace" },
  { value: "100%", label: "Open-Flame Grilled" },
  { value: "1", label: "View Like No Other" },
];

export function StoryStats() {
  return (
    <section className="border-y border-line bg-ink py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-6 text-center md:grid-cols-4 lg:px-10">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-2">
            <span className="font-display text-4xl text-ember md:text-5xl">{s.value}</span>
            <span className="font-accent text-xs uppercase tracking-[0.15em] text-stone">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
