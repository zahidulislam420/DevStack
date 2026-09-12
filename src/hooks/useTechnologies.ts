import { useState, useEffect } from 'react';
import type { Technology } from '../types';

export function useTechnologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        setLoading(true);
        const response = await fetch('/src/data/technologies.json');
        if (!response.ok) {
          throw new Error('Failed to fetch technologies');
        }
        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  return { technologies, loading, error };
}