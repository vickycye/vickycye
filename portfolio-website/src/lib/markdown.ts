import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm'; // Add GitHub Flavored Markdown support

const postsDirectory = path.join(process.cwd(), 'content/blog');

interface Author {
  name: string;
  image?: string;
  bio?: string;
}

interface PostData {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  author?: Author;
  tags?: string[];
  contentHtml?: string;
}

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

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllTags() {
  const posts = getAllPosts();
  const allTags = new Set<string>();
  
  posts.forEach(post => {
    const tags = post.tags || [];
    tags.forEach(tag => allTags.add(tag));
  });
  
  return Array.from(allTags);
}

export function getPostsByTag(tag: string) {
  const posts = getAllPosts();
  return posts.filter(post => {
    return post.tags && post.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase());
  });
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkGfm) // GitHub Flavored Markdown
    .use(remarkMath) // Parse math expressions
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert to rehype AST
    .use(rehypeKatex) // Process math expressions with KaTeX
    .use(rehypeStringify, { allowDangerousHtml: true }) // Convert to HTML string
    .process(matterResult.content);
    
  const contentHtml = processedContent.toString();
  
  // Extract frontmatter data
  const frontmatter = matterResult.data;
  const author = frontmatter.author as Author | undefined;
  const tags = frontmatter.tags as string[] | undefined;

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    title: frontmatter.title as string || '',
    date: frontmatter.date as string || '',
    excerpt: frontmatter.excerpt as string || '',
    author,
    tags
  };
}