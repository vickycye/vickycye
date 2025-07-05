import fs from 'fs';
import path from 'path';
import { Comment } from './types';

const COMMENTS_FILE = path.join(process.cwd(), 'data', 'comments.json');

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.dirname(COMMENTS_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Read comments from file
export function getComments(): Comment[] {
  ensureDataDirectory();
  
  if (!fs.existsSync(COMMENTS_FILE)) {
    return [];
  }
  
  try {
    const data = fs.readFileSync(COMMENTS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading comments:', error);
    return [];
  }
}

// Get comments for a specific post
export function getCommentsByPostSlug(postSlug: string): Comment[] {
  const comments = getComments();
  return comments
    .filter(comment => comment.postSlug === postSlug)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

// Add a new comment
export function addComment(comment: Omit<Comment, 'id' | 'createdAt'>): Comment {
  const comments = getComments();
  const newComment: Comment = {
    ...comment,
    id: generateId(),
    createdAt: new Date().toISOString(),
  };
  
  comments.push(newComment);
  
  ensureDataDirectory();
  fs.writeFileSync(COMMENTS_FILE, JSON.stringify(comments, null, 2));
  
  return newComment;
}

// Generate a simple ID
function generateId(): string {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
} 