export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  blog: string;
  location: string | null;
  followers: number;
  following: number;
  public_repos: number;
  created_at: string;
  twitter_username: string | null;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  topics: string[];
  updated_at: string;
  pushed_at: string;
  homepage: string | null;
  default_branch: string;
  fork: boolean;
  languages?: Record<string, number>;
}

export interface LanguageStat {
  name: string;
  bytes: number;
  percentage: number;
  color: string;
}

export interface GitHubData {
  user: GitHubUser;
  repos: GitHubRepo[];
  languages: LanguageStat[];
  totalStars: number;
  lastUpdated: string;
}

const USERNAME = import.meta.env.VITE_GITHUB_USER || "toaandri";

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  PHP: "#4F5D95",
  HTML: "#e34c26",
  CSS: "#563d7c",
  C: "#555555",
  "C++": "#f34b7d",
  Shell: "#89e051",
  Vue: "#41b883",
  Dart: "#00B4AB",
  Kotlin: "#A97BFF",
  Go: "#00ADD8",
  Ruby: "#701516",
  Rust: "#dea584",
  Swift: "#F05138",
};

export function getLanguageColor(name: string): string {
  return LANGUAGE_COLORS[name] || "#8b949e";
}

async function fetchJSON<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) {
    throw new Error(`GitHub API ${res.status}: ${url}`);
  }
  return res.json() as Promise<T>;
}

async function fetchLanguages(
  owner: string,
  repo: string,
  signal?: AbortSignal
): Promise<Record<string, number>> {
  try {
    return await fetchJSON<Record<string, number>>(
      `https://api.github.com/repos/${owner}/${repo}/languages`,
      // @ts-expect-error — fetch accepts signal in DOM lib
      { signal }
    );
  } catch {
    return {};
  }
}

export async function fetchGitHubData(
  onProgress?: (loaded: number, total: number) => void,
  signal?: AbortSignal
): Promise<GitHubData> {
  const user = await fetchJSON<GitHubUser>(
    `https://api.github.com/users/${USERNAME}`
  );

  const repos = await fetchJSON<GitHubRepo[]>(
    `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`
  );

  const ranked = [...repos]
    .sort(
      (a, b) =>
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    );

  const enriched: GitHubRepo[] = [];
  let done = 0;
  const batchSize = 6;

  for (let i = 0; i < ranked.length; i += batchSize) {
    const slice = ranked.slice(i, i + batchSize);
    const results = await Promise.all(
      slice.map((r) =>
        fetchLanguages(USERNAME, r.name, signal).then((langs) => ({
          ...r,
          languages: langs,
        }))
      )
    );
    enriched.push(...results);
    done += slice.length;
    onProgress?.(done, ranked.length);
  }

  const totals = new Map<string, number>();
  for (const repo of enriched) {
    for (const [lang, bytes] of Object.entries(repo.languages || {})) {
      totals.set(lang, (totals.get(lang) || 0) + bytes);
    }
  }

  const grandTotal = [...totals.values()].reduce((a, b) => a + b, 0) || 1;
  const languages: LanguageStat[] = [...totals.entries()]
    .map(([name, bytes]) => ({
      name,
      bytes,
      percentage: (bytes / grandTotal) * 100,
      color: getLanguageColor(name),
    }))
    .sort((a, b) => b.bytes - a.bytes);

  const totalStars = enriched.reduce((s, r) => s + r.stargazers_count, 0);

  return {
    user,
    repos: enriched,
    languages,
    totalStars,
    lastUpdated: new Date().toISOString(),
  };
}
