import { Post } from '../types/post';
import { supabase } from './supabase';

type PostRow = {
    id: string;
    title: string;
    content: string;
    created_at: string;
    updated_at: string | null;
};


// Convert database row to Post type
function toPost(row: PostRow): Post {
    return {
        id: row.id,
        title: row.title,
        content: row.content,
        createdAt: row.created_at,
        updatedAt: row.updated_at || undefined,
    };
}

export async function getPosts(): Promise<Post[]> {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching posts:', error);
        throw new Error('Failed to fetch posts');
    }

    return data?.map(toPost) || [];
}

export async function getPostById(id: string): Promise<Post | null> {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        if (error.code === 'PGRST116') return null; // Not found
        console.error('Error fetching post:', error);
        throw new Error('Failed to fetch post');
    }

    return data ? toPost(data) : null;
}

export async function createPost(data: { title: string; content: string }): Promise<Post> {
    const { data: newPost, error } = await supabase
        .from('posts')
        .insert({
            title: data.title,
            content: data.content,
        })
        .select()
        .single();

    if (error) {
        console.error('Error creating post:', error);
        throw new Error('Failed to create post');
    }

    return toPost(newPost);
}

export async function updatePost(
    id: string,
    data: { title: string; content: string }
): Promise<Post | null> {
    const { data: updatedPost, error } = await supabase
        .from('posts')
        .update({
            title: data.title,
            content: data.content,
            updated_at: new Date().toISOString(),
        })
        .eq('id', id)
        .select()
        .single();

    if (error) {
        if (error.code === 'PGRST116') return null; // Not found
        console.error('Error updating post:', error);
        throw new Error('Failed to update post');
    }

    return updatedPost ? toPost(updatedPost) : null;
}

export async function deletePost(id: string): Promise<boolean> {
    const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting post:', error);
        return false;
    }

    return true;
}
