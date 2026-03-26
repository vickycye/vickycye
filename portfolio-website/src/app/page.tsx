// Component Imports
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { AboutMe } from '@/components/AboutMe';
import { ProjectTabbedLayout } from '@/components/ProjectTabbedLayout';
import { FavoriteQuote } from '@/components/FavoriteQuote';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <ProjectTabbedLayout />
      <div className="flex justify-center py-10 bg-[var(--discord-gray)]">
        <Link
          href="/archive"
          className="text-sm font-semibold leading-6 text-[var(--light-orange-10)] hover:underline"
        >
          See archives <span aria-hidden="true">→</span>
        </Link>
      </div>
      <FavoriteQuote />
      
      {/* Kiwi's webring */}
      <div className="bg-[var(--discord-gray)] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-[var(--cream)]">
            <a
              href="https://utcs-webring.krisub.workers.dev/prev?from=vicky.wiki"
              className="text-[var(--light-orange-10)] hover:underline font-semibold"
              aria-label="UTCS webring previous"
            >
              ←
            </a>
            <span className="text-[var(--cream)]/70">|</span>
            <a
              href="https://krisub.github.io/utcs-webring/"
              className="text-[var(--cream)] hover:opacity-80"
              aria-label="UTCS webring home"
            >
              <strong>🥝</strong>
            </a>
            <span className="text-[var(--cream)]/70">(</span>
            <a
              href="https://utcs-webring.krisub.workers.dev/random?from=vicky.wiki"
              className="text-[var(--cream)] hover:underline font-semibold"
              aria-label="UTCS webring random"
            >
              <strong>random!</strong>
            </a>
            <span className="text-[var(--cream)]/70">)</span>
            <span className="text-[var(--cream)]/70">|</span>
            <a
              href="https://utcs-webring.krisub.workers.dev/next?from=vicky.wiki"
              className="text-[var(--light-orange-10)] hover:underline font-semibold"
              aria-label="UTCS webring next"
            >
              →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
