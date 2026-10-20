import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { getPosts, BlogPost } from '../data/blog.ts';

export const BlogPage: React.FC = () => {
  const posts = getPosts();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Leasing Guide', 'Brokerage Secrets', 'Buyer Guides', 'Electric & Hybrid'];

  const filtered = selectedCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-12 bg-[#0B0B0E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A21] border border-[#D4AF37]/40 text-[#F0D274] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-[#D4AF37]" />
            <span>The Prestige Journal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Automotive Insights & <span className="text-gold-gradient">Buying Guides</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Market analysis, California tax savings, lease strategies, and insider secrets from veteran Los Angeles automotive brokers.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'btn-gold text-black shadow-md'
                  : 'bg-[#1A1A21] text-zinc-400 hover:text-white border border-[#2A2A33]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured First Post Banner */}
        {filtered.length > 0 && selectedCategory === 'All' && (
          <div className="card-prestige overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden bg-black/60">
                <img
                  src={filtered[0].image}
                  alt={filtered[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-zinc-400 mb-3">
                    <span className="bg-[#D4AF37]/20 text-[#F0D274] px-2.5 py-0.5 rounded font-bold uppercase text-[10px]">
                      {filtered[0].category}
                    </span>
                    <span>{filtered[0].date}</span>
                    <span>{filtered[0].readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#F0D274] transition-colors leading-tight">
                    <Link to={`/blog/${filtered[0].slug}`}>{filtered[0].title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-zinc-300 mt-3 leading-relaxed">
                    {filtered[0].excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#2A2A33] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-xs text-zinc-300 font-medium">{filtered[0].author} ({filtered[0].authorRole})</span>
                  </div>
                  <Link
                    to={`/blog/${filtered[0].slug}`}
                    className="btn-gold px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-black flex items-center gap-1.5"
                  >
                    <span>Read Full Post</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Remaining Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedCategory === 'All' ? filtered.slice(1) : filtered).map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="card-prestige overflow-hidden group flex flex-col justify-between"
            >
              <div className="aspect-[16/10] overflow-hidden bg-black/60 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#131318]/90 border border-[#2A2A33] px-2.5 py-1 rounded text-[10px] font-bold text-[#F0D274] uppercase tracking-wider">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#F0D274] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#2A2A33] flex items-center justify-between text-xs text-[#D4AF37] font-semibold">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
