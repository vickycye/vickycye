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
    </>
  );
}
