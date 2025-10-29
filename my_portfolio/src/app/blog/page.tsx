import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

// Mock blog posts data
const blogPosts = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14',
    excerpt: 'Learn how to build modern web applications with the latest features of Next.js 14 including the App Router and Server Components.',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Web Development',
    image: '/images/blog/nextjs.jpg'
  },
  {
    id: '2',
    title: 'Mastering TypeScript for React',
    excerpt: 'Advanced TypeScript patterns and techniques for building type-safe React applications with better developer experience.',
    date: '2024-01-10',
    readTime: '8 min read',
    category: 'TypeScript',
    image: '/images/blog/typescript.jpg'
  },
  {
    id: '3',
    title: 'The Power of Tailwind CSS',
    excerpt: 'How Tailwind CSS can speed up your development process and improve consistency across your projects.',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'CSS',
    image: '/images/blog/tailwind.jpg'
  },
  {
    id: '4',
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'Best practices for building robust and scalable RESTful APIs using Node.js and Express.',
    date: '2023-12-20',
    readTime: '10 min read',
    category: 'Backend',
    image: '/images/blog/nodejs.jpg'
  },
  {
    id: '5',
    title: 'Introduction to Supabase',
    excerpt: 'Learn how to use Supabase as a Backend-as-a-Service for your next project with real-time capabilities.',
    date: '2023-12-15',
    readTime: '7 min read',
    category: 'Database',
    image: '/images/blog/supabase.jpg'
  },
  {
    id: '6',
    title: 'Deploying to Vercel',
    excerpt: 'A comprehensive guide to deploying your Next.js applications to Vercel with best practices.',
    date: '2023-12-10',
    readTime: '4 min read',
    category: 'DevOps',
    image: '/images/blog/vercel.jpg'
  }
];

const categories = [
  { name: 'All', count: 6 },
  { name: 'Web Development', count: 2 },
  { name: 'TypeScript', count: 1 },
  { name: 'CSS', count: 1 },
  { name: 'Backend', count: 1 },
  { name: 'Database', count: 1 },
  { name: 'DevOps', count: 1 }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="text-primary-600 w-8 h-8" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Blog & Articles
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development, technology, and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="flex items-center justify-between w-full text-left p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="text-gray-700">{category.name}</span>
                      <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 mb-4">About This Blog</h3>
                  <p className="text-gray-600 text-sm">
                    I write about web development, programming tips, and share my experiences 
                    working with modern technologies. Subscribe to stay updated!
                  </p>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1 group"
                      >
                        Read more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button asChild variant="outline" size="lg">
                  <button>
                    Load More Articles
                  </button>
                </Button>
              </div>

              {/* Newsletter */}
              <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Stay Updated
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Get the latest articles and tutorials delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  />
                  <Button variant="primary">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}