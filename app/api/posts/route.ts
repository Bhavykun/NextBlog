import { NextResponse } from "next/server";
import { getPosts, createPost } from "@/app/lib/posts";

export async function GET() {
    const posts = await getPosts();
    return NextResponse.json(posts);
}

export async function POST(req: Request) {
    const body = await req.json();
    const post = await createPost(body);
    return NextResponse.json(post, { status: 201 });
}
