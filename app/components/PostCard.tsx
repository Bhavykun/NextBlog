import Link from 'next/link';
import { Post } from '../types/post';

interface PostCardProps {
    post: Post;
}

export default function PostCard({ post }: PostCardProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const truncateContent = (content: string, maxLength: number = 150) => {
        if (content.length <= maxLength) return content;
        return content.substring(0, maxLength) + '...';
    };

    return (
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 dark:border-gray-700">
            <Link href={`/posts/${post.id}`}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {post.title}
                </h2>
            </Link>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {truncateContent(post.content)}
            </p>
            
            <div className="flex items-center justify-between">
                <time className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(post.createdAt)}
                    {post.updatedAt && (
                        <span className="ml-2">(edited)</span>
                    )}
                </time>
                
                <Link 
                    href={`/posts/${post.id}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                    Read more →
                </Link>
            </div>
        </article>
    );
}