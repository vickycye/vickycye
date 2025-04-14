import { getAllPostSlugs, getPostData } from '../../../lib/markdown';
import Image from 'next/image';
import Link from 'next/link';
import { User } from 'lucide-react';

interface BlogPostParams {
    params: {
      slug: string;
    };
}
  
export async function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs.map(({ slug }) => ({
      slug: slug
    }));
}

// Component for post tags
function PostTags({ tags }: { tags: string[] }) {
  if (!tags || tags.length === 0) return null;
  
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {tags.map(tag => (
        <Link 
          href={`/blog/tag/${tag.toLowerCase()}`} 
          key={tag}
          className="px-3 py-1 text-sm rounded-full bg-[var(--discord-lighter-gray)] hover:bg-[var(--solid-orange-10)] text-[var(--cream)] transition-colors"
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}

function AuthorInfo({ author }: { author: { name: string; image?: string; bio?: string } }) {
  return (
    <div className="flex items-start space-x-4 p-5 bg-[var(--discord-lighter-gray)] rounded-lg mt-8 mb-4">
      <div className="flex-shrink-0">
        {author.image ? (
          <Image 
            src={author.image} 
            alt={author.name}
            width={60}
            height={60}
            className="rounded-full"
          />
        ) : (
          <div className="w-[60px] h-[60px] rounded-full bg-[var(--palette-blood-orange)] flex items-center justify-center">
            <User size={30} className="text-[var(--cream)]" />
          </div>
        )}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-[var(--cream)]">{author.name}</h4>
        {author.bio && (
          <p className="text-sm text-[var(--cream)] opacity-80 mt-1">{author.bio}</p>
        )}
      </div>
    </div>
  );
}
  
export default async function BlogPost({ params }: BlogPostParams) {
  const { slug } = params;
  const post = await getPostData(slug);
  
  // Default author info if not specified in markdown frontmatter
  const author = post.author || {
    name: "Vicky Ye",
    bio: "CS Kid"
  };
  
  // Tags from the post frontmatter
  const tags = post.tags || [];
  
  // Ensure contentHtml is defined
  const contentHtml = post.contentHtml || '';
  
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      
      <div className="flex items-center text-[var(--solid-orange-10)] mb-2">
        <time className="block">
          {new Date(post.date).toLocaleDateString()}
        </time>
      </div>
      
      <PostTags tags={tags} />
      
      <article 
        className="prose prose-lg prose-headings:text-[var(--cream)] prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-strong:text-[var(--cream)] prose-p:text-[var(--cream)] prose-ul:text-[var(--cream)] prose-ol:text-[var(--cream)] prose-li:text-[var(--cream)] max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }} 
      />
      
      <AuthorInfo author={author} />
    </div>
  );
}