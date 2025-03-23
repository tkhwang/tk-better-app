
import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const Blog: React.FC = () => {
  // Sample blog posts
  const allPosts = [
    {
      id: 1,
      title: "How I Built a Real-time Chat Application",
      date: "June 10, 2023",
      excerpt:
        "Learn about the technologies and architecture behind a modern real-time chat application, including WebSockets, React, and Node.js.",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Web Development",
      featured: true,
    },
    {
      id: 2,
      title: "The Future of Web Development",
      date: "May 22, 2023",
      excerpt:
        "Exploring upcoming trends and technologies that will shape the future of web development, from WebAssembly to AI-driven interfaces.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Industry Trends",
      featured: false,
    },
    {
      id: 3,
      title: "Creating Accessible Web Applications",
      date: "April 15, 2023",
      excerpt:
        "A comprehensive guide to making your web applications more accessible to users with disabilities, including ARIA attributes and keyboard navigation.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      category: "Accessibility",
      featured: false,
    },
    {
      id: 4,
      title: "Optimizing React Performance",
      date: "March 7, 2023",
      excerpt:
        "Learn how to improve the performance of your React applications with practical techniques like memoization, virtualization, and code splitting.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "React",
      featured: false,
    },
    {
      id: 5,
      title: "Introduction to TypeScript for JavaScript Developers",
      date: "February 20, 2023",
      excerpt:
        "A beginner-friendly guide to TypeScript for JavaScript developers, covering types, interfaces, and other key concepts with practical examples.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      category: "TypeScript",
      featured: true,
    },
    {
      id: 6,
      title: "Building a RESTful API with Node.js and Express",
      date: "January 15, 2023",
      excerpt:
        "Step-by-step tutorial on creating a RESTful API using Node.js and Express, including authentication, validation, and error handling.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Backend Development",
      featured: false,
    },
  ];

  // Categories for filtering
  const categories = [
    "All",
    ...Array.from(new Set(allPosts.map((post) => post.category))),
  ];

  // State for search and filter
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter and search logic
  const filteredPosts = allPosts
    .filter(
      (post) =>
        (activeCategory === "All" || post.category === activeCategory) &&
        (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      // Sort by date (most recent first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return (
    <Layout className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">
              Blog & Insights
            </h1>
            <p className="text-lg text-muted-foreground">
              Articles, tutorials, and insights on web development, design, and
              technology trends from my professional journey.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Search and Filter */}
          <div className="mb-12 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              {/* Mobile Filter Toggle */}
              <div className="md:hidden">
                <Button
                  variant="outline"
                  onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Filter size={16} />
                  Filter by Category
                </Button>
              </div>
            </div>

            {/* Category Filters */}
            {(mobileFilterOpen || window.innerWidth >= 768) && (
              <div className="flex overflow-x-auto pb-2 md:pb-0 md:flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Featured Post */}
          {filteredPosts.some((post) => post.featured) && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured Post</h2>
              {filteredPosts
                .filter((post) => post.featured)
                .slice(0, 1)
                .map((post) => (
                  <BlogCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    image={post.image}
                    category={post.category}
                    featured={true}
                  />
                ))}
            </div>
          )}

          {/* All Posts Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6">All Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  image={post.image}
                  category={post.category}
                />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No posts found matching your search criteria. Try adjusting your
                  filters or search terms.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
