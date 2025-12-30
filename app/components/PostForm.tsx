'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Post } from '../types/post';

interface PostFormProps {
    post?: Post;
    mode?: 'create' | 'update';
}

export default function PostForm({ post, mode = 'create' }: PostFormProps) {
    const router = useRouter();
    const [title, setTitle] = useState(post?.title || '');
    const [content, setContent] = useState(post?.content || '');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        try {
            const url = mode === 'create' 
                ? '/api/posts' 
                : `/api/posts/${post?.id}`;
            
            const method = mode === 'create' ? 'POST' : 'PUT';

            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content }),
            });

            if (!res.ok) {
                throw new Error('Failed to save post');
            }

            const savedPost = await res.json();
            router.push(`/posts/${savedPost.id}`);
            router.refresh();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            {error && (
                <div className="mb-4 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg border border-red-300 dark:border-red-700">
                    {error}
                </div>
            )}

            <div className="mb-6">
                <label 
                    htmlFor="title" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Enter post title"
                />
            </div>

            <div className="mb-6">
                <label 
                    htmlFor="content" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                    Content
                </label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    rows={10}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-y"
                    placeholder="Write your anonymous post..."
                />
            </div>

            <div className="flex gap-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                    {isSubmitting 
                        ? (mode === 'create' ? 'Creating...' : 'Updating...') 
                        : (mode === 'create' ? 'Create Post' : 'Update Post')
                    }
                </button>
                
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}
