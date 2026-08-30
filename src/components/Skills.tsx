import { Reveal } from "./Reveal";
import styles from "./Skills.module.css";

const groups = [
  {
    title: "Core Skills",
    items: ["UI/UX Layout", "Frontend Dev", "Responsive Web Design", "Component-Based Design"],
  },
  {
    title: "Frontend Tech",
    items: ["HTML", "CSS", "JS", "React", "TypeScript"],
  },
  {
    title: "Design Tools",
    items: ["Figma", "Photoshop", "Illustrator"],
  },
  {
    title: "Tools & Interaction",
    items: ["GitHub", "Netlify", "GSAP", "UI Interactions"],
  },
  {
    title: "Languages",
    items: ["Malagasy", "Français", "English"],
  },
];

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal as="h2" className={styles.title} delay={0.05}>
          Skills
        </Reveal>
        <Reveal as="p" className={styles.subtitle} delay={0.1}>
          Crafting seamless UI/UX and clean code
        </Reveal>

        <div className={styles.grid}>
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={0.08 * (i % 4)} className={styles.cardWrap}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{g.title}</h3>
                <div className={styles.chips}>
                  {g.items.map((item) => (
                    <span key={item} className={styles.chip}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
