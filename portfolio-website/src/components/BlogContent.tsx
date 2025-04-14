'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { PostData } from '@/lib/types';

// Client component for interactivity
export default function BlogContent({ 
  initialPosts, 
  allTags 
}: { 
  initialPosts: PostData[], 
  allTags: string[] 
}) {
  // Initialize with default tag to prevent hydration mismatch
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [filteredPosts, setFilteredPosts] = useState<PostData[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after component mounts
  useEffect(() => {
    setIsClient(true);
    setFilteredPosts(initialPosts);
  }, [initialPosts]);

  // Filter posts when tag selection changes
  useEffect(() => {
    if (!isClient) return;
    
    if (selectedTag === 'all') {
      setFilteredPosts(initialPosts);
    } else {
      const filtered = initialPosts.filter(post => 
        post.tags && post.tags.map((t: string) => t.toLowerCase()).includes(selectedTag.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [selectedTag, initialPosts, isClient]);

  // Handle tag selection explicitly
  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTag = e.target.value;
    console.log('Selected new tag:', newTag);
    setSelectedTag(newTag);
  };

  // Helper function to format dates consistently
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  // Don't render content until client-side
  if (!isClient) {
    return <div className="max-w-4xl mx-auto py-8 px-4">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
        {/* Tag filter dropdown - Improved for better cross-device compatibility */}
        <div className="inline-block z-10 mt-16 sm:mt-16">
          <label htmlFor="tag-filter" className="inline-block text-[var(--cream)] mr-2 mb-2">
            Filter by tag:
          </label>
          <select
            id="tag-filter"
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="block w-full sm:w-auto bg-[var(--discord-lighter-gray)] text-[var(--cream)] py-2 px-3 rounded border border-[var(--solid-orange-10)] focus:outline-none focus:ring-2 focus:ring-[var(--solid-orange-10)] cursor-pointer"
          >
            <option value="all">All Posts</option>
            {allTags.map(tag => (
              <option key={tag} value={tag.toLowerCase()}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Current filter indicator */}
      {selectedTag !== 'all' && (
        <div className="mb-6 p-2 bg-[var(--discord-lighter-gray)] rounded-md">
          <p className="text-[var(--cream)]">
            Showing posts tagged with: <span className="font-semibold text-[var(--solid-orange-10)]">#{selectedTag}</span>
            {' '}<button 
              onClick={() => setSelectedTag('all')} 
              className="text-[var(--cream)] underline hover:text-[var(--solid-orange-10)]"
            >
              Clear filter
            </button>
          </p>
        </div>
      )}
      
      {/* List of posts */}
      <div className="space-y-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article key={post.slug} className="border-b border-[var(--discord-lighter-gray)] pb-8">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold text-[var(--cream)] hover:text-[var(--solid-orange-10)] transition-colors">
                  {post.title}
                </h2>
              </Link>
              <time className="text-[var(--solid-orange-10)] block mt-1">
                {formatDate(post.date)}
              </time>
              
              {/* Display tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 my-2">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-[var(--discord-lighter-gray)] text-[var(--cream)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              
              {post.excerpt && (
                <p className="mt-3 text-[var(--cream)] opacity-80">{post.excerpt}</p>
              )}
              
              <Link 
                href={`/blog/${post.slug}`} 
                className="text-[var(--solid-orange-10)] hover:underline inline-block mt-2"
              >
                Read more
              </Link>
            </article>
          ))
        ) : (
          <p className="text-[var(--cream)]">No posts found with this tag.</p>
        )}
      </div>
      
      {/* Return to top button - only shown on client side */}
      {filteredPosts.length > 5 && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-[var(--solid-orange-10)] text-[var(--cream)] p-3 rounded-full shadow-lg hover:bg-[var(--dark-orange)] transition-colors"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
}