import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = await prisma.blog.findUnique({
    where: { slug: params.slug },
  });

  if (!blog) return notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-24" style={{ paddingTop: '140px', background: 'var(--cream)' }}>
        <article className="max-w-3xl mx-auto px-6 bg-white p-8 md:p-12 shadow-sm border border-gray-100 rounded-lg">
          <p className="text-xs tracking-widest text-[#9ab097] uppercase mb-4 font-semibold">
            Published on {new Date(blog.createdAt).toLocaleDateString()}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-[#2c2c2a] mb-8" style={{ fontFamily: 'Cormorant Garamond, serif', lineHeight: 1.1 }}>
            {blog.title}
          </h1>
          {blog.excerpt && (
            <p className="text-xl text-gray-500 mb-8 font-serif italic border-l-4 border-[#9ab097] pl-4">
              {blog.excerpt}
            </p>
          )}
          {blog.imageUrl && (
            <img 
              src={blog.imageUrl} 
              alt={blog.title} 
              className="w-full h-auto rounded-md mb-12 object-cover max-h-[450px]" 
            />
          )}
          <div className="prose prose-lg prose-headings:font-serif prose-headings:text-[#2c2c2a] prose-p:text-gray-700 prose-p:leading-relaxed max-w-none break-words" style={{ whiteSpace: 'pre-wrap' }}>
            {blog.content}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
