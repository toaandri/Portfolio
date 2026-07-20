import { Reveal } from "./Reveal";
import { notes } from "../lib/notes";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function Notes() {
  const sorted = [...notes].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="section" id="notes">
      <div className="container">
        <Reveal as="div" className="eyebrow">
          Notes
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          Writing & things I'm learning.
        </Reveal>
        <Reveal as="p" className="section-sub" delay={0.1}>
          Occasional notes on code, careers, and the stuff I pick up along the way.
        </Reveal>

        <div className="note-list">
          {sorted.map((note, i) => (
            <Reveal key={note.slug} delay={0.05 * i} as="div">
              <article className="card card-hoverable note-item">
                <div className="note-meta">
                  <time className="note-date" dateTime={note.date}>
                    {formatDate(note.date)}
                  </time>
                  <span className="note-tag">{note.tag}</span>
                </div>
                <h3 className="note-title">{note.title}</h3>
                <p className="note-excerpt">{note.excerpt}</p>
              </article>
            </Reveal>
          ))}
          {sorted.length === 0 && (
            <p style={{ color: "var(--text-faint)" }}>
              No notes published yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
