'use client';

import { Comment as CommentType } from '../lib/types';

interface CommentProps {
  comment: CommentType;
  onReply?: (parentId: string) => void;
  isReply?: boolean;
}

export function Comment({ comment, onReply, isReply = false }: CommentProps) {
  return (
    <div className={`${isReply ? 'ml-8' : ''} mb-4 p-4 bg-[var(--discord-lighter-gray)] rounded-lg`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-[var(--palette-blood-orange)] flex items-center justify-center">
            <span className="text-sm font-semibold text-[var(--cream)]">
              {comment.author.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-sm font-semibold text-[var(--cream)]">
              {comment.author}
            </span>
            <span className="text-xs text-[var(--cream)] opacity-60">
              {new Date(comment.createdAt).toLocaleDateString()}
            </span>
          </div>
          <p className="text-[var(--cream)] text-sm leading-relaxed">
            {comment.content}
          </p>
          {onReply && (
            <button
              onClick={() => onReply(comment.id)}
              className="mt-2 text-xs text-[var(--solid-orange-10)] hover:text-[var(--palette-blood-orange)] transition-colors"
            >
              Reply
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 