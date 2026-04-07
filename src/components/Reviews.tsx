import { prisma } from '@/lib/prisma';
import ReviewForm from './ReviewForm';

const staticReviews = [
  {
    rating: 5,
    comment: "Dr. Saba Asad changed my life. I had been suffering from severe anxiety for years. After just 8 sessions, I feel like myself again. She listens without judgment and truly cares.",
    initials: "AF",
    name: "Ayesha F.",
    detail: "Lahore · Anxiety Treatment"
  },
  {
    rating: 5,
    comment: "I was sceptical about therapy but Dr. Saba Asad's approach is so evidence-based and warm. She explained my condition clearly and my depression is now completely manageable.",
    initials: "MK",
    name: "Muhammad K.",
    detail: "Online Session · Depression"
  },
  {
    rating: 5,
    comment: "My OCD had taken over my life. Dr. Saba Asad's ERP therapy was transformational. Six months later, I have my life back. I cannot recommend her highly enough.",
    initials: "SR",
    name: "Sara R.",
    detail: "Lahore · OCD Treatment"
  }
];

export default async function Reviews() {
  const dbReviewsRaw = await prisma.review.findMany({
    where: { status: 'approved' },
    orderBy: { createdAt: 'desc' },
    take: 6,
  });

  const dbReviews = dbReviewsRaw.map((r: any) => ({
    rating: r.rating,
    comment: r.comment,
    initials: r.name.substring(0, 2).toUpperCase(),
    name: r.name,
    detail: [r.location, r.issue].filter(Boolean).join(' · ') || 'Verified Patient'
  }));

  const allReviews = [...dbReviews, ...staticReviews].slice(0, 6);

  return (
    <section id="reviews" style={{ background: 'var(--cream)' }}>
      <p className="section-eyebrow">Patient Reviews</p>
      <h2 className="section-title">Words from those who <em>healed</em></h2>

      <div className="testimonials-grid">
        {allReviews.map((rev, idx) => (
          <div key={idx} className="testimonial-card">
            <p className="stars">{'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}</p>
            <p className="testimonial-text">{rev.comment}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{rev.initials}</div>
              <div>
                <p className="author-name">{rev.name}</p>
                <p className="author-detail">{rev.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ReviewForm />
    </section>
  );
}
