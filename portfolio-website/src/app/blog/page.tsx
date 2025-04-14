// app/blog/page.tsx
import BlogContent from '@/components/BlogContent';
import { getAllPosts, getAllTags } from '../../lib/markdown.server';
import { Suspense } from 'react';

// Loading state
function LoadingBlog() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="animate-pulse">
        <div className="h-8 w-40 bg-[var(--discord-lighter-gray)] rounded mb-8"></div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="mb-8 pb-8 border-b border-[var(--discord-lighter-gray)]">
            <div className="h-6 w-3/4 bg-[var(--discord-lighter-gray)] rounded mb-2"></div>
            <div className="h-4 w-20 bg-[var(--discord-lighter-gray)] rounded mb-4"></div>
            <div className="h-4 w-full bg-[var(--discord-lighter-gray)] rounded mb-2"></div>
            <div className="h-4 w-2/3 bg-[var(--discord-lighter-gray)] rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// This is a Server Component
export default async function BlogPage() {
  // Fetch data on the server
  const allPosts = getAllPosts();
  const allTags = getAllTags();
  
  // Wrap with Suspense to handle loading state
  return (
    <Suspense fallback={<LoadingBlog />}>
      <BlogContent initialPosts={allPosts} allTags={allTags} />
    </Suspense>
  );
}