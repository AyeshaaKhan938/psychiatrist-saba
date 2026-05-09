export type SiteVideo = {
  id: string;
  title: string;
  /** Optional line under the title */
  description?: string;
  /** Full YouTube watch or share URL */
  youtubeUrl: string;
};

/**
 * Add entries here to show them on /videos. Example:
 * { id: '1', title: 'Managing anxiety', youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
 */
export const siteVideos: SiteVideo[] = [];

export function toYouTubeEmbed(url: string): string | null {
  try {
    const u = new URL(url.trim());
    const host = u.hostname.replace(/^www\./, '');

    if (host === 'youtu.be') {
      const id = u.pathname.replace(/^\//, '').split('/')[0];
      if (id) return `https://www.youtube.com/embed/${id}`;
    }

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      const v = u.searchParams.get('v');
      if (v) return `https://www.youtube.com/embed/${v}`;

      const shorts = u.pathname.match(/^\/shorts\/([^/]+)/);
      if (shorts?.[1]) return `https://www.youtube.com/embed/${shorts[1]}`;

      const embed = u.pathname.match(/^\/embed\/([^/]+)/);
      if (embed?.[1]) return `https://www.youtube.com/embed/${embed[1]}`;
    }
  } catch {
    return null;
  }
  return null;
}
