'use client';

import { useEffect, useState } from 'react';

interface DownloadCountProps {
  fileId: string;
  className?: string;
}

/** Displays how many times a file has been downloaded. */
export function DownloadCount({ fileId, className }: DownloadCountProps) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/download?fileId=${encodeURIComponent(fileId)}`)
      .then((res) => res.json())
      .then((data) => setCount(data.count ?? 0))
      .catch(() => setCount(null));
  }, [fileId]);

  if (count === null) return null;

  return (
    <span className={className}>
      {count} download{count !== 1 ? 's' : ''}
    </span>
  );
}
