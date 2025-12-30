import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-linear-to-br from-blue-600 to-purple-700 text-white py-20">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Anonymous Blog
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100">
                        Share your feelings without being known and judged.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/posts/create"
                            className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg"
                        >
                            Create a Post
                        </Link>
                        <Link
                            href="/posts"
                            className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
                        >
                            Read Posts
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                        Why Anonymous?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="text-4xl mb-4"></div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                No Account Required
                            </h3>
                            {/* <p className="text-gray-600 dark:text-gray-300">
                                Start sharing your thoughts immediately without creating an account or providing personal information.
                            </p> */}
                        </div>
                        <div className="text-center p-6">
                            <div className="text-4xl mb-4"></div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                Complete Freedom
                            </h3>
                            {/* <p className="text-gray-600 dark:text-gray-300">
                                Express yourself freely without worrying about your identity or being judged for who you are.
                            </p> */}
                        </div>
                        <div className="text-center p-6">
                            <div className="text-4xl mb-4"></div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                Simple & Clean
                            </h3>
                            {/* <p className="text-gray-600 dark:text-gray-300">
                                Focus on what matters - your words. No distractions, no complex features, just pure content.
                            </p> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        Ready to share?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Join the community of anonymous writers and readers.
                    </p>
                    <Link
                        href="/posts/create"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg"
                    >
                        Write Your First Post
                    </Link>
                </div>
            </section>
        </main>
    );
}