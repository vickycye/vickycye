import Link from 'next/link';
import { getAllPosts } from '../../lib/markdown';


export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold hover:underline">{post.title}</h2>
            </Link>
            <time className="text-gray-500 block mt-1">
              {new Date(post.date).toLocaleDateString()}
            </time>
            {post.excerpt && (
              <p className="mt-3">{post.excerpt}</p>
            )}
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline inline-block mt-2">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}