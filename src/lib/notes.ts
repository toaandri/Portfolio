export interface Note {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
}

export const notes: Note[] = [
  {
    slug: "building-this-portfolio",
    title: "Building this portfolio",
    date: "2026-07-12",
    tag: "Dev",
    excerpt:
      "Why I rebuilt my portfolio around live GitHub data and a calmer, editorial layout instead of another template.",
  },
  {
    slug: "react-server-components-notes",
    title: "Notes on React Server Components",
    date: "2026-06-03",
    tag: "React",
    excerpt:
      "A short, practical take on when RSCs actually help and where they add friction in a small app.",
  },
  {
    slug: "learning-typescript-generics",
    title: "Getting comfortable with TypeScript generics",
    date: "2026-04-21",
    tag: "TypeScript",
    excerpt:
      "The mental model that finally made generics click for me, with a few examples from real projects.",
  },
  {
    slug: "first-open-source-pr",
    title: "My first open-source pull request",
    date: "2026-02-18",
    tag: "Career",
    excerpt:
      "What I learned shipping a tiny fix to a library I use every day, and why it was less scary than expected.",
  },
];
