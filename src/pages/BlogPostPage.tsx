import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Calendar, Clock, User, ArrowLeft, Share2, ArrowRight } from 'lucide-react';
import { getPostBySlug, getPosts } from '../data/blog.ts';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || '');
  const allPosts = getPosts();
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  if (!post) {
    return (
      <div className="py-24 text-center bg-[#0B0B0E] min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-white mb-2">Article Not Found</h2>
        <p className="text-zinc-400 text-sm mb-6">The article you requested could not be located.</p>
        <Link to="/blog" className="btn-gold px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black">
          Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <article className="py-12 bg-[#0B0B0E] min-h-screen">
      
      {/* Schema.org Article Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "image": post.image,
          "author": {
            "@type": "Person",
            "name": post.author,
            "jobTitle": post.authorRole
          },
          "publisher": {
            "@type": "Organization",
            "name": "LA Prestige Auto Group",
            "logo": {
              "@type": "ImageObject",
              "url": "/assets/aistudio/Logo_Main_b2f22653.jpeg"
            }
          },
          "datePublished": "2026-10-14",
          "description": post.excerpt
        })}
      </script>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-zinc-400">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <Link to="/blog" className="hover:text-white">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-[#D4AF37] font-semibold truncate">{post.title}</span>
        </div>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F0D274] px-3 py-1 rounded-full font-bold uppercase text-[10px] tracking-wider">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 pb-2 border-y border-[#2A2A33]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1A1A21] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-bold text-xs">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-bold text-white">{post.author}</p>
                <p className="text-[11px] text-[#D4AF37]">{post.authorRole}</p>
              </div>
            </div>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: post.title, url: window.location.href }).catch(() => {});
                } else {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              className="p-2.5 rounded-xl bg-[#1A1A21] border border-[#2A2A33] text-zinc-300 hover:text-white flex items-center gap-1.5 text-xs"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-black/60 border border-[#2A2A33]">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Body Content */}
        <div className="prose prose-invert max-w-none text-zinc-300 text-sm sm:text-base leading-relaxed space-y-4">
          <div className="whitespace-pre-line bg-[#131318] p-6 sm:p-8 rounded-2xl border border-[#2A2A33]">
            {post.content}
          </div>
        </div>

        {/* Post Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          <span className="text-xs font-semibold text-zinc-400">Tags:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg bg-[#1A1A21] border border-[#2A2A33] text-xs text-zinc-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Articles */}
        <div className="pt-12 border-t border-[#2A2A33]">
          <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.id}
                to={`/blog/${rel.slug}`}
                className="card-prestige p-5 group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] text-[#F0D274] font-bold uppercase">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-[#F0D274] mt-1 transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2">{rel.excerpt}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#2A2A33] text-xs text-[#D4AF37] flex items-center justify-between font-semibold">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Back Link */}
        <div className="pt-4 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs text-[#D4AF37] hover:underline font-bold uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Articles</span>
          </Link>
        </div>
      </div>
    </article>
  );
};
