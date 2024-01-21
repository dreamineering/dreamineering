import { useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function useSearchQueries() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return { pathname, searchParams, createQueryString };
}

// Path: libs/shared/ui/src/lib/hooks/use-search-queries.ts
// used in prediction game
