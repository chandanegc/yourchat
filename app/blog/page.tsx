import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from "next/link";
import { 
  CalendarIcon,
  ClockIcon,
  UserCircleIcon,
  TagIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  FireIcon,
  BookmarkIcon,
  ChevronRightIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Customer Service: How AI Chatbots Are Revolutionizing Support in 2024",
    excerpt: "Discover how AI-powered chatbots are transforming customer service with instant responses, 24/7 availability, and personalized interactions that boost satisfaction rates by up to 80%.",
    author: "Sarah Johnson",
    authorRole: "AI Research Lead",
    authorImage: "/authors/sarah.jpg",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    category: "AI Trends",
    tags: ["AI", "Customer Service", "Automation"],
    image: "/blog/ai-customer-service.jpg",
    featured: true,
    popular: true,
    likes: 234,
    comments: 42,
    trend: "rising"
  },
  {
    id: 2,
    title: "WhatsApp Business API: Complete Guide for E-commerce Success",
    excerpt: "Learn how to leverage WhatsApp Business API to automate sales, send personalized recommendations, and recover abandoned carts with AI-powered conversations.",
    author: "Michael Chen",
    authorRole: "E-commerce Specialist",
    authorImage: "/authors/michael.jpg",
    date: "Mar 12, 2024",
    readTime: "12 min read",
    category: "WhatsApp",
    tags: ["WhatsApp", "E-commerce", "Sales"],
    image: "/blog/whatsapp-business.jpg",
    featured: true,
    popular: true,
    likes: 189,
    comments: 31,
    trend: "trending"
  },
  {
    id: 3,
    title: "10 Proven Lead Generation Strategies Using AI Chatbots",
    excerpt: "From qualifying leads to scheduling demos automatically, explore how businesses are using AI chatbots to capture and convert 3x more leads.",
    author: "Priya Patel",
    authorRole: "Marketing Director",
    authorImage: "/authors/priya.jpg",
    date: "Mar 10, 2024",
    readTime: "10 min read",
    category: "Lead Generation",
    tags: ["Lead Generation", "Marketing", "Conversion"],
    image: "/blog/lead-generation.jpg",
    featured: false,
    popular: true,
    likes: 156,
    comments: 23,
    trend: "hot"
  },
  {
    id: 4,
    title: "Multi-Platform Chatbot Strategy: Website, WhatsApp & Instagram",
    excerpt: "How to create a unified customer experience across all channels with a single AI-powered chatbot that remembers context everywhere.",
    author: "David Kumar",
    authorRole: "Product Manager",
    authorImage: "/authors/david.jpg",
    date: "Mar 8, 2024",
    readTime: "7 min read",
    category: "Multi-Platform",
    tags: ["Omnichannel", "Strategy", "Integration"],
    image: "/blog/multi-platform.jpg",
    featured: false,
    popular: false,
    likes: 98,
    comments: 15,
    trend: "new"
  },
  {
    id: 5,
    title: "AI vs Human: Finding the Perfect Balance in Customer Support",
    excerpt: "The secret to exceptional customer service isn't choosing between AI and humans—it's making them work together seamlessly.",
    author: "Emily Rodriguez",
    authorRole: "Customer Experience Lead",
    authorImage: "/authors/emily.jpg",
    date: "Mar 5, 2024",
    readTime: "9 min read",
    category: "Customer Experience",
    tags: ["Customer Support", "AI", "Strategy"],
    image: "/blog/ai-human-balance.jpg",
    featured: true,
    popular: false,
    likes: 145,
    comments: 28,
    trend: "rising"
  },
  {
    id: 6,
    title: "How to Train Your AI Chatbot: Best Practices for Knowledge Base Setup",
    excerpt: "Step-by-step guide to training your AI chatbot with FAQs, product information, and brand voice guidelines for accurate responses.",
    author: "Alex Thompson",
    authorRole: "Technical Writer",
    authorImage: "/authors/alex.jpg",
    date: "Mar 3, 2024",
    readTime: "11 min read",
    category: "Tutorials",
    tags: ["Training", "Setup", "Best Practices"],
    image: "/blog/chatbot-training.jpg",
    featured: false,
    popular: true,
    likes: 212,
    comments: 37,
    trend: "trending"
  },
  {
    id: 7,
    title: "Case Study: How The Coffee Shop Increased Bookings by 156% with AI",
    excerpt: "Real results from a local coffee shop that automated appointment booking and customer queries, saving 20+ hours per week.",
    author: "Rachel Green",
    authorRole: "Customer Success Manager",
    authorImage: "/authors/rachel.jpg",
    date: "Feb 28, 2024",
    readTime: "6 min read",
    category: "Case Studies",
    tags: ["Case Study", "ROI", "Small Business"],
    image: "/blog/coffee-shop-case-study.jpg",
    featured: true,
    popular: true,
    likes: 178,
    comments: 29,
    trend: "hot"
  },
  {
    id: 8,
    title: "Voice Chatbots: The Next Frontier in Customer Engagement",
    excerpt: "Explore how voice-enabled AI assistants are changing the game for hands-free customer support and accessibility.",
    author: "Chris Martin",
    authorRole: "Voice Technology Lead",
    authorImage: "/authors/chris.jpg",
    date: "Feb 25, 2024",
    readTime: "8 min read",
    category: "Voice AI",
    tags: ["Voice", "Innovation", "Accessibility"],
    image: "/blog/voice-chatbot.jpg",
    featured: false,
    popular: false,
    likes: 87,
    comments: 12,
    trend: "new"
  }
];

const categories = [
  { name: "All", count: 48, icon: "📰" },
  { name: "AI Trends", count: 12, icon: "🤖" },
  { name: "WhatsApp", count: 8, icon: "💬" },
  { name: "Lead Generation", count: 7, icon: "🎯" },
  { name: "Case Studies", count: 6, icon: "📊" },
  { name: "Tutorials", count: 9, icon: "📚" },
  { name: "Voice AI", count: 4, icon: "🎤" },
  { name: "Product Updates", count: 2, icon: "✨" }
];

const trendingTopics = [
  { topic: "AI Customer Service", posts: 24 },
  { topic: "WhatsApp Automation", posts: 18 },
  { topic: "Lead Generation", posts: 15 },
  { topic: "Chatbot Training", posts: 12 },
  { topic: "Multi-Platform", posts: 10 }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <SparklesIcon className="w-5 h-5" />
              <span className="text-sm font-semibold">YourSiteChat Blog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Insights & Innovations in
              <span className="text-yellow-300 block mt-2">AI-Powered Automation</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              Expert guides, industry trends, and success stories to help you transform customer engagement with AI.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search articles, tutorials, case studies..."
                className="w-full px-6 py-4 pl-14 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-yellow-300/50"
              />
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 absolute left-5 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <FireIcon className="w-6 h-6 text-orange-500" />
              Featured Article
            </h2>
            <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              View all <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>

          {blogPosts.filter(post => post.featured)[0] && (
            <Link href="#" className="block group">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {blogPosts[0].category}
                      </span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <SparklesIcon className="w-4 h-4" />
                        Featured
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {blogPosts[0].title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6">{blogPosts[0].excerpt}</p>
                    
                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center gap-2">
                        <UserCircleIcon className="w-6 h-6 text-gray-400" />
                        <span className="text-gray-700">{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">{blogPosts[0].date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ClockIcon className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">{blogPosts[0].readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-gray-500">
                        <span>❤️</span>
                        <span>{blogPosts[0].likes}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <ChatBubbleLeftRightIcon className="w-4 h-4" />
                        <span>{blogPosts[0].comments}</span>
                      </div>
                    </div>

                    <div className="mt-6 inline-flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                      Read Article <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                  <div className="relative h-64 md:h-auto bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <CpuChipIcon className="w-24 h-24 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-semibold">Featured Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Sidebar - Categories & Trending */}
            <div className="lg:w-80 flex-shrink-0">
              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TagIcon className="w-5 h-5 text-blue-600" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category, i) => (
                    <button
                      key={i}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{category.icon}</span>
                        <span className="text-gray-700 group-hover:text-blue-600">{category.name}</span>
                      </div>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Topics */}
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FireIcon className="w-5 h-5 text-orange-500" />
                  Trending Topics
                </h3>
                <div className="space-y-3">
                  {trendingTopics.map((topic, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
                        #{topic.topic}
                      </span>
                      <span className="text-sm text-gray-500">{topic.posts} posts</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-2">Subscribe to Newsletter</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get the latest AI insights delivered to your inbox weekly.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg mb-3 text-gray-900"
                />
                <button className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                  Subscribe
                </button>
                <p className="text-xs text-blue-200 mt-3">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="flex-1">
              {/* Popular Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                  All Posts
                </span>
                {["AI", "WhatsApp", "Tutorials", "Case Studies", "Voice AI"].map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white text-gray-600 px-4 py-2 rounded-full text-sm hover:bg-gray-100 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Link 
                    key={post.id} 
                    href="#"
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                      {post.popular && (
                        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <FireIcon className="w-3 h-3" />
                          Popular
                        </div>
                      )}
                      {post.trend === "hot" && (
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          🔥 Hot
                        </div>
                      )}
                      <div className="w-full h-full flex items-center justify-center text-white text-opacity-50 text-6xl font-bold">
                        {post.category[0]}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                        {post.trend === "new" && (
                          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <UserCircleIcon className="w-5 h-5 text-gray-400" />
                          <span className="text-sm text-gray-700">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            ❤️ {post.likes}
                          </span>
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            💬 {post.comments}
                          </span>
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            <ClockIcon className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <button className="text-gray-400 hover:text-blue-600 font-medium">
                          Bookmark
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border border-blue-200 hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
                  Load More Articles
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular This Week */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <FireIcon className="w-6 h-6 text-orange-500" />
            Most Popular This Week
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.filter(post => post.popular).slice(0, 3).map((post, index) => (
              <Link 
                key={post.id} 
                href="#"
                className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-blue-600 opacity-30">0{index + 1}</span>
                  <div>
                    <span className="text-sm text-blue-600 font-semibold">{post.category}</span>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <RocketLaunchIcon className="w-16 h-16 mx-auto mb-6 opacity-75" />
          <h2 className="text-3xl font-bold mb-4">Want to Contribute?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Share your expertise with our community. Write a guest post or case study.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Become a Contributor
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}