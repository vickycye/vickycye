import { NextRequest, NextResponse } from 'next/server';
import { getCommentsByPostSlug, addComment } from '../../../lib/comments';
import { CommentFormData } from '../../../lib/types';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const postSlug = searchParams.get('postSlug');
  
  if (!postSlug) {
    return NextResponse.json({ error: 'Post slug is required' }, { status: 400 });
  }
  
  try {
    const comments = await getCommentsByPostSlug(postSlug);
    return NextResponse.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: CommentFormData = await request.json();
    const { searchParams } = new URL(request.url);
    const postSlug = searchParams.get('postSlug');
    
    if (!postSlug) {
      return NextResponse.json({ error: 'Post slug is required' }, { status: 400 });
    }
    
    if (!body.author || !body.content) {
      return NextResponse.json({ error: 'Author and content are required' }, { status: 400 });
    }
    
    const newComment = await addComment({
      postSlug,
      author: body.author,
      content: body.content,
      parentId: body.parentId,
    });
    
    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    console.error('Error adding comment:', error);
    return NextResponse.json({ error: 'Failed to add comment' }, { status: 500 });
  }
} 