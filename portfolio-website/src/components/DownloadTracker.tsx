'use client';

import { useCallback } from 'react';

interface DownloadTrackerProps {
  /** Unique identifier for the file (e.g. 'resume', '3d-reconstruction-pdf') */
  fileId: string;
  /** Path to the file (e.g. '/resume.pdf', '/documents/3d-reconstruction.pdf') */
  href: string;
  /** Optional: filename when downloaded */
  downloadFilename?: string;
  /** Content to render (e.g. button, link text) */
  children: React.ReactNode;
  /** Optional: pass through to the wrapper element */
  className?: string;
  /** Optional: render as a different element (default: 'button') */
  as?: 'button' | 'a';
  /** Optional: aria-label for accessibility */
  'aria-label'?: string;
  /** Optional: called after download is triggered */
  onAfterDownload?: () => void;
}

export function DownloadTracker({
  fileId,
  href,
  downloadFilename,
  children,
  className,
  as: Component = 'button',
  'aria-label': ariaLabel,
  onAfterDownload,
}: DownloadTrackerProps) {
  const handleClick = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await fetch(`/api/download?fileId=${encodeURIComponent(fileId)}`, {
        method: 'POST',
      });
    } catch (err) {
      console.error('Failed to track download:', err);
    }
    const link = document.createElement('a');
    link.href = href;
    link.download = downloadFilename ?? href.split('/').pop() ?? 'download';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onAfterDownload?.();
  }, [fileId, href, downloadFilename, onAfterDownload]);

  const commonProps = {
    onClick: handleClick,
    className,
    'aria-label': ariaLabel,
  };

  if (Component === 'a') {
    return (
      <a href={href} {...commonProps}>
        {children}
      </a>
    );
  }

  return <button type="button" {...commonProps}>{children}</button>;
}
