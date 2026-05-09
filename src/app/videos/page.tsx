import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteVideos, toYouTubeEmbed } from '@/data/videos';

export const metadata: Metadata = {
  title: 'Videos | Dr. Saba Asad',
  description: 'Educational videos and talks on mental health from Dr. Saba Asad.',
};

export default function VideosPage() {
  const playable = siteVideos
    .map((v) => ({ ...v, embed: toYouTubeEmbed(v.youtubeUrl) }))
    .filter((v) => v.embed !== null);

  const skipped = siteVideos.length - playable.length;

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen pb-24 px-6"
        style={{ paddingTop: '120px', background: 'var(--cream)', maxWidth: '1100px', margin: '0 auto' }}
      >
        <p className="section-eyebrow">Resources</p>
        <h1 className="section-title" style={{ marginBottom: '12px' }}>
          Videos
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '520px', lineHeight: 1.75, marginBottom: '40px' }}>
          Short clips and discussions on mental wellbeing. New recordings are added here over time.
        </p>

        {playable.length === 0 ? (
          <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
            Video resources will appear here as they are published. Please check back soon.
          </p>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
              gap: '28px',
            }}
          >
            {playable.map((v) => (
              <article
                key={v.id}
                style={{
                  background: 'white',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  border: '0.5px solid var(--border)',
                }}
              >
                <div style={{ aspectRatio: '16 / 9', background: 'var(--charcoal)' }}>
                  <iframe
                    title={v.title}
                    src={v.embed!}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                  />
                </div>
                <div style={{ padding: '18px 20px 22px' }}>
                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '22px',
                      color: 'var(--charcoal)',
                      marginBottom: v.description ? '8px' : 0,
                      lineHeight: 1.25,
                    }}
                  >
                    {v.title}
                  </h2>
                  {v.description ? (
                    <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        )}

        {skipped > 0 ? (
          <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '24px' }}>
            Some entries could not be loaded — check that each link is a valid YouTube URL.
          </p>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
