import { Reveal } from "./Reveal";
import styles from "./Services.module.css";

const services = [
  {
    title: "UI/UX Website Design",
    desc: "Crafting user-centric designs that balance aesthetics and usability with intuitive navigation and clear hierarchy.",
    tags: ["Modern layouts", "Responsive design"],
  },
  {
    title: "Frontend Development",
    desc: "Building fast, accessible interfaces with clean, maintainable code and smooth, delightful interactions.",
    tags: ["Clean HTML/CSS", "Smooth interactions"],
  },
  {
    title: "Performance & Responsiveness",
    desc: "Optimizing for speed and adapting fluidly to every screen size so your site feels instant on any device.",
    tags: ["Speed optimization", "Asset efficiency"],
  },
  {
    title: "WordPress Implementation",
    desc: "Turning designs into flexible WordPress sites with easy content management and clean theme structure.",
    tags: ["Theme setup", "Easy management"],
  },
];

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal as="h2" className={styles.title} delay={0.05}>
          Services
        </Reveal>
        <Reveal as="p" className={styles.subtitle} delay={0.1}>
          Designing clean scalable responsive websites
        </Reveal>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * (i % 4)} className={styles.cardWrap}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                <div className={styles.tags}>
                  {s.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
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
