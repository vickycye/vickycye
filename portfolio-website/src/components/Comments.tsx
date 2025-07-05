'use client';

import { useState, useEffect } from 'react';
import { Comment as CommentType } from '../lib/types';
import { Comment } from './Comment';
import { CommentForm } from './CommentForm';

interface CommentsProps {
  postSlug: string;
}

export function Comments({ postSlug }: CommentsProps) {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [loading, setLoading] = useState(true);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/comments?postSlug=${postSlug}`);
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postSlug]);

  const handleReply = (parentId: string) => {
    setReplyingTo(parentId);
  };

  const handleCancelReply = () => {
    setReplyingTo(null);
  };

  const handleCommentAdded = () => {
    fetchComments();
  };

  if (loading) {
    return (
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-[var(--cream)] mb-4">Comments</h3>
        <div className="text-[var(--cream)] opacity-60">Loading comments...</div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-[var(--cream)] mb-4">
        Comments ({comments.length})
      </h3>
      
      <CommentForm 
        postSlug={postSlug} 
        onCommentAdded={handleCommentAdded} 
      />
      
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-[var(--cream)] opacity-60 italic">
            No comments yet. Be the first to share your thoughts!
          </p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id}>
              <Comment 
                comment={comment} 
                onReply={handleReply}
              />
              {replyingTo === comment.id && (
                <div className="mt-4">
                  <CommentForm
                    postSlug={postSlug}
                    onCommentAdded={() => {
                      handleCommentAdded();
                      setReplyingTo(null);
                    }}
                    parentId={comment.id}
                    onCancel={handleCancelReply}
                  />
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
} 