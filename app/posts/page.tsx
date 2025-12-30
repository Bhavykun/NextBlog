"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { deletePost, getPosts } from "@/app/lib/api";
import type { Post } from "@/app/types/post";

const BlogList = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPosts()
            .then((postsData) => {
                setPosts(postsData);
            })
            .catch((err) => {
                console.error("Error fetching posts:", err);
            })
            .finally(() => setLoading(false));
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await deletePost(id);
            setPosts((prev) => prev.filter((post) => post.id !== id));
        } catch (err) {
            console.error("Error deleting post:", err);
        }
    };

    if (loading) {
        return <p>Loading posts...</p>;
    }

    return (
        <div>
            {/* Header */}
            <header>
                <h1>Anonymous Blog</h1>
                <p>Post Anything Anonymously</p>

                <Link href="/create">New Post</Link>
            </header>

            {/* Empty state */}
            {posts.length === 0 && <p>No posts yet.</p>}

            {/* Posts */}
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <div>
                            <h2>{post.title}</h2>
                            <span>
                                {new Date(post.createdAt).toLocaleString()}
                            </span>
                        </div>

                        <p>{post.content}</p>

                        <div>
                            <Link href={`/${post.id}/update`}>
                                Edit
                            </Link>

                            <button
                                onClick={() => handleDelete(post.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
