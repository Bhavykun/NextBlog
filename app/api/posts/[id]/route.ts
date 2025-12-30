import { NextResponse } from "next/server";
import { getPostById, updatePost, deletePost } from "@/app/lib/posts";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const post = await getPostById(id);
    
    if (!post) {
        return NextResponse.json(
            { error: "Post not found" },
            { status: 404 }
        );
    }
    
    return NextResponse.json(post);
}

export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const body = await req.json();
    const post = await updatePost(id, body);
    
    if (!post) {
        return NextResponse.json(
            { error: "Post not found" },
            { status: 404 }
        );
    }
    
    return NextResponse.json(post);
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const deleted = await deletePost(id);
    
    if (!deleted) {
        return NextResponse.json(
            { error: "Post not found" },
            { status: 404 }
        );
    }
    
    return NextResponse.json({ success: true });
}
