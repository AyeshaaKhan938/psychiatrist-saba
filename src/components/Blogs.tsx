import { prisma } from '@/lib/prisma';

export default async function Blogs() {
  const latestBlogs = await prisma.blog.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: 3,
  });

  return (
    <section id="blogs" style={{ background: 'white' }}>
      <p className="section-eyebrow">Insights & Articles</p>
      <h2 className="section-title">Nurturing your <em>mental health</em></h2>
      
      {latestBlogs.length === 0 ? (
        <p style={{ color: 'var(--muted)', marginTop: '32px' }}>
          New articles and psychological insights will be published here soon.
        </p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px', marginTop: '56px' }}>
          {latestBlogs.map((blog: any) => (
            <div key={blog.id} style={{ border: '0.5px solid var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ background: 'var(--sage-pale)', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--sage)', overflow: 'hidden' }}>
                 <img src={blog.imageUrl || 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div style={{ padding: '24px' }}>
                <p style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '22px', marginBottom: '12px', color: 'var(--charcoal)' }}>{blog.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '20px', lineHeight: 1.6 }}>{blog.excerpt}</p>
                <a href={`/blogs/${blog.slug}`} className="btn-ghost" style={{ fontSize: '13px' }}>Read Article →</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
