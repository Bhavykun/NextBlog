# Anonymous Blog - Next.js

A simple, anonymous blogging platform built with Next.js 16, TypeScript, and Tailwind CSS. Post your thoughts without creating an account or logging in.

## Features

- 📝 Create, read, update, and delete blog posts
- 🔒 No authentication required - completely anonymous
- 🎨 Modern, responsive design with Tailwind CSS
- 🌙 Dark mode support
- 💾 File-based JSON database (no external database needed)
- ⚡ Built with Next.js 16 App Router

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, pnpm, or bun
- Supabase account (free tier)

### Installation

1. **Clone and install dependencies:**
```bash
npm install
```

2. **Set up Supabase:**
   - Go to [supabase.com](https://supabase.com) and create a new project
   - Copy your project URL and anon key from Project Settings > API
   - Create a `.env.local` file in the root directory:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

3. **Create the database schema:**
   - Go to your Supabase dashboard > SQL Editor
   - Copy the contents of `supabase-schema.sql`
   - Paste and run the SQL to create the `posts` table

### Running the Application

#### Development Mode
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

#### Production Mode
```bash
npm run build
npm start
```

## Project Structure

```
app/
├── api/
│   └── posts/
│       ├── route.ts          # GET all posts, POST new post
│       └── [id]/route.ts     # GET, PUT, DELETE single post
├── components/
│   ├── PostCard.tsx          # Post preview card component
│   └── PostForm.tsx          # Form for creating/updating posts
├── lib/
│   ├── db.ts                 # File-based database operations
│   └── posts.ts              # Database query functions
├── posts/
│   ├── page.tsx              # All posts listing
│   ├── create/page.tsx       # Create new post
│   └── [id]/
│       ├── page.tsx          # View single post
│       └── update/page.tsx   # Edit post
├── types/
│   └── post.ts               # TypeScript type definitions
├── layout.tsx                # Root layout
├── page.tsx                  # Landing page
└── globals.css               # Global styles
```

## Usage

### Creating a Post
1. Navigate to the homepage
2. Click "Create a Post" or go to `/posts/create`
3. Fill in the title and content
4. Click "Create Post"

### Reading Posts
- View all posts at `/posts`
- Click on any post to read the full content

### Editing a Post
1. Open any post
2. Click "Edit Post"
3. Make your changes
4. Click "Update Post"

### Deleting a Post
1. Open any post
2. Click "Delete Post"
3. Confirm the deletion

## Database

The app uses **Supabase (PostgreSQL)** for data storage. Supabase provides:
- Real-time capabilities (can be enabled if needed)
- Row Level Security (RLS) for data protection
- Automatic API generation
- Free tier with 500 MB storage

The database schema includes:
- `posts` table with columns: id (UUID), title, content, created_at, updated_at
- Indexes for optimized query performance
- Public access policies (anonymous blog - anyone can read/write)

## Styling

The app uses Tailwind CSS v4 with a custom theme supporting both light and dark modes. The color scheme automatically adapts based on your system preferences.

## API Endpoints

- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post
- `GET /api/posts/[id]` - Get a specific post
- `PUT /api/posts/[id]` - Update a post
- `DELETE /api/posts/[id]` - Delete a post

## Technologies

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **React 19** - UI library
- **Supabase** - PostgreSQL database with real-time capabilities
- **@supabase/supabase-js** - Official Supabase client
