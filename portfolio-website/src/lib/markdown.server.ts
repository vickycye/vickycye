// lib/markdown.server.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { PostData, Author } from './types';

// This file is for server-only operations
// It will not be bundled with client-side code

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      slug: fileName.replace(/\.md$/, '')
    };
  });
}

export function getAllPosts(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    
    // Extract frontmatter
    const data = matterResult.data;

    // Combine the data with the id
    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      author: data.author || null,
      tags: (data.tags as string[]) || []
    };
  });

  // Sort posts by date (most recent first)
  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const allTags = new Set<string>();
  
  posts.forEach(post => {
    const tags = post.tags || [];
    tags.forEach((tag: string) => allTags.add(tag));
  });
  
  // Return sorted tags alphabetically
  return Array.from(allTags).sort();
}

export function getPostsByTag(tag: string): PostData[] {
  const posts = getAllPosts();
  return posts.filter(post => {
    return post.tags && post.tags.map((t: string) => t.toLowerCase()).includes(tag.toLowerCase());
  });
}

export async function getPostData(slug: string): Promise<PostData & { contentHtml: string }> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)  // Add IDs to headings
    .use(rehypeAutolinkHeadings)  // Add links to headings
    .use(rehypePrism, {
        ignoreMissing: true,
        showLineNumbers: true,
        lineNumbersGlobal: true,
        aliases: {
          js: 'javascript',
          ts: 'typescript'
        }
      })
    .use(rehypeKatex)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(matterResult.content);
    
  const contentHtml = processedContent.toString();
  
  // Extract frontmatter data
  const frontmatter = matterResult.data;
  const author = frontmatter.author as Author | undefined;
  const tags = frontmatter.tags as string[] | undefined;

  // Return with guaranteed contentHtml
  return {
    slug,
    contentHtml, // This is now guaranteed to be a string
    title: frontmatter.title as string || '',
    date: frontmatter.date as string || '',
    excerpt: frontmatter.excerpt as string || '',
    author,
    tags
  };
}