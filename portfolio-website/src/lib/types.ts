// lib/types.ts
// Shared types that can be used in both server and client components

export interface Author {
    name: string;
    image?: string;
    bio?: string;
  }
  
  export interface PostData {
    slug: string;
    title: string;
    date: string;
    excerpt?: string;
    author?: Author;
    tags?: string[];
    contentHtml?: string;
  }

// Comment system types
export interface Comment {
  id: string;
  postSlug: string;
  author: string;
  content: string;
  createdAt: string;
  parentId?: string; // For nested comments
}

export interface CommentFormData {
  author: string;
  content: string;
  parentId?: string;
}