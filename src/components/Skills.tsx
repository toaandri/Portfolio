import { Reveal } from "./Reveal";
import { useLanguage } from "../lib/LanguageContext";
import styles from "./Skills.module.css";

const groupsKeys = [
  {
    titleKey: "skills.languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "PHP", "C#", "Go", "Rust", "Ruby", "Kotlin", "Swift", "Dart", "C", "C++", "SQL"],
  },
  {
    titleKey: "skills.spokenLanguages",
    items: ["Malagasy", "English", "French"],
  },
  {
    titleKey: "skills.frontend",
    items: ["React", "Vue.js", "Angular", "Svelte", "SolidJS", "Lit", "HTML5", "CSS3"],
  },
  {
    titleKey: "skills.frontendFrameworks",
    items: ["Next.js", "Nuxt", "SvelteKit", "Astro", "Remix", "Gatsby", "Qwik", "Vite", "Webpack"],
  },
  {
    titleKey: "skills.ui",
    items: ["Tailwind CSS", "Bootstrap", "Sass", "Less", "CSS Modules", "Styled Components", "Material UI", "Chakra UI", "shadcn/ui", "Radix UI"],
  },
  {
    titleKey: "skills.backend",
    items: ["Node.js", "Bun", "NestJS", "Express", "Fastify", "Koa", "Hono", "GraphQL", "Apollo", "Socket.io", "REST APIs", "WebSockets"],
  },
  {
    titleKey: "skills.backendFrameworks",
    items: ["Spring Boot", "Spring", "Quarkus", "Django", "FastAPI", "Flask", "Symfony", "Laravel", "CodeIgniter", "ASP.NET Core", "Ruby on Rails", "Phoenix"],
  },
  {
    titleKey: "skills.cms",
    items: ["WordPress", "Strapi", "Contentful", "Directus", "Sanity", "Payload CMS"],
  },
  {
    titleKey: "skills.mobile",
    items: ["React Native", "Expo", "Flutter", "Ionic", "Android", "Jetpack Compose", "SwiftUI", "Progressive Web Apps"],
  },
  {
    titleKey: "skills.databases",
    items: ["PostgreSQL", "MySQL", "MariaDB", "SQLite", "MongoDB", "Redis", "Elasticsearch", "Cassandra", "DynamoDB", "Firebase", "Supabase"],
  },
  {
    titleKey: "skills.dataAi",
    items: ["Pandas", "NumPy", "scikit-learn", "PyTorch", "TensorFlow", "Jupyter", "OpenAI API", "LangChain"],
  },
  {
    titleKey: "skills.devops",
    items: ["Docker", "Kubernetes", "Terraform", "Ansible", "AWS", "Azure", "Google Cloud", "Vercel", "Netlify", "Cloudflare", "Nginx", "Linux", "CI/CD"],
  },
  {
    titleKey: "skills.testing",
    items: ["Jest", "Vitest", "Cypress", "Playwright", "Testing Library", "JUnit", "Pytest", "Selenium", "PHPUnit"],
  },
  {
    titleKey: "skills.architecture",
    items: ["Microservices", "Serverless", "Domain-Driven Design", "Clean Architecture", "MVC", "Event-Driven Architecture", "Design Patterns"],
  },
  {
    titleKey: "skills.tools",
    items: ["Git", "GitHub", "GitLab", "Bitbucket", "Postman", "Insomnia", "Figma", "npm", "pnpm", "Yarn", "Bun", "Babel", "ESLint", "Prettier", "Storybook"],
  },
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal as="h2" className={styles.title} delay={0.05}>
          {t("skills.title")}
        </Reveal>
        <Reveal as="p" className={styles.subtitle} delay={0.1}>
          {t("skills.subtitle")}
        </Reveal>

        <div className={styles.grid}>
          {groupsKeys.map((g, i) => (
            <Reveal key={g.titleKey} delay={0.08 * (i % 4)} className={styles.cardWrap}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{t(g.titleKey)}</h3>
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
