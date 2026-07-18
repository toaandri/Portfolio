import { useCallback, useEffect, useRef, useState } from "react";
import { fetchGitHubData, type GitHubData } from "../lib/github";

const AUTO_REFRESH_MS = 5 * 60 * 1000;

export function useGitHub() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const abortRef = useRef<AbortController | null>(null);

  const load = useCallback(() => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setLoading(true);
    setError(null);
    setProgress(0);

    fetchGitHubData((loaded, total) => {
      setProgress(total ? Math.round((loaded / total) * 100) : 0);
    }, controller.signal)
      .then((result) => {
        setData(result);
        setProgress(100);
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Failed to load");
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
  }, []);

  useEffect(() => {
    load();
    const id = setInterval(load, AUTO_REFRESH_MS);
    return () => {
      clearInterval(id);
      abortRef.current?.abort();
    };
  }, [load]);

  return {
    data,
    loading,
    error,
    progress,
    lastUpdated: data?.lastUpdated ?? null,
    refresh: load,
  };
}
