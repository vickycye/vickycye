'use client';

import { useState } from 'react';
import { CommentFormData } from '../lib/types';

interface CommentFormProps {
  postSlug: string;
  onCommentAdded: () => void;
  parentId?: string;
  onCancel?: () => void;
}

export function CommentForm({ postSlug, onCommentAdded, parentId, onCancel }: CommentFormProps) {
  const [formData, setFormData] = useState<CommentFormData>({
    author: '',
    content: '',
    parentId,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.author.trim() || !formData.content.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/comments?postSlug=${postSlug}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ author: '', content: '', parentId });
        onCommentAdded();
        if (onCancel) onCancel();
      } else {
        console.error('Failed to add comment');
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-[var(--cream)] mb-1">
            Name *
          </label>
          <input
            type="text"
            id="author"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            className="w-full px-3 py-2 bg-[var(--discord-lighter-gray)] border border-[var(--discord-gray)] rounded-md text-[var(--cream)] placeholder-[var(--cream)] placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--solid-orange-10)] focus:border-transparent"
            placeholder="Your name"
            required
          />
        </div>
        
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-[var(--cream)] mb-1">
            Comment *
          </label>
          <textarea
            id="content"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            rows={4}
            className="w-full px-3 py-2 bg-[var(--discord-lighter-gray)] border border-[var(--discord-gray)] rounded-md text-[var(--cream)] placeholder-[var(--cream)] placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--solid-orange-10)] focus:border-transparent resize-vertical"
            placeholder="Share your thoughts..."
            required
          />
        </div>
        
        <div className="flex space-x-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-[var(--solid-orange-10)] text-[var(--cream)] rounded-md hover:bg-[var(--palette-blood-orange)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Posting...' : 'Post Comment'}
          </button>
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-[var(--discord-gray)] text-[var(--cream)] rounded-md hover:bg-[var(--discord-lighter-gray)] transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </form>
  );
} 