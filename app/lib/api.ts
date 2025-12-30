import { Post } from '../types/post';

const API_BASE = '/api';

export async function getPosts(): Promise<Post[]> {
    const response = await fetch(`${API_BASE}/posts`);
    if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }
    return response.json();
}

export async function getPostById(id: string): Promise<Post> {
    const response = await fetch(`${API_BASE}/posts/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch post: ${response.statusText}`);
    }
    return response.json();
}

export async function createPost(data: { title: string; content: string }): Promise<Post> {
    const response = await fetch(`${API_BASE}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(`Failed to create post: ${response.statusText}`);
    }
    return response.json();
}

export async function updatePost(
    id: string,
    data: { title: string; content: string }
): Promise<Post> {
    const response = await fetch(`${API_BASE}/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(`Failed to update post: ${response.statusText}`);
    }
    return response.json();
}

export async function deletePost(id: number | string): Promise<void> {
    const response = await fetch(`${API_BASE}/posts/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error(`Failed to delete post: ${response.statusText}`);
    }
}
