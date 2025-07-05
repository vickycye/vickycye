import { kv } from '@vercel/kv';
import { Comment } from './types';

// Get comments for a specific post
export async function getCommentsByPostSlug(postSlug: string): Promise<Comment[]> {
  try {
    const comments = await kv.lrange(`comments:${postSlug}`, 0, -1);
    return comments
      .map(comment => JSON.parse(comment))
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } catch (error) {
    console.error('Error reading comments:', error);
    return [];
  }
}

// Add a new comment
export async function addComment(comment: Omit<Comment, 'id' | 'createdAt'>): Promise<Comment> {
  const newComment: Comment = {
    ...comment,
    id: generateId(),
    createdAt: new Date().toISOString(),
  };
  
  try {
    await kv.lpush(`comments:${comment.postSlug}`, JSON.stringify(newComment));
    return newComment;
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
}

// Generate a simple ID
function generateId(): string {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
} 