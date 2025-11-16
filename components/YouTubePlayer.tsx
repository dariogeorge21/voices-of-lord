'use client';

interface YouTubePlayerProps {
  youtubeUrl: string;
  title: string;
}

/**
 * Extract YouTube video ID from various URL formats
 */
function getYouTubeVideoId(url: string): string {
  // If it's already an embed URL, extract the ID
  if (url.includes('youtube.com/embed/')) {
    return url.split('youtube.com/embed/')[1].split('?')[0];
  }
  
  // If it's a watch URL
  if (url.includes('youtube.com/watch?v=')) {
    return url.split('v=')[1].split('&')[0];
  }
  
  // If it's a short URL
  if (url.includes('youtu.be/')) {
    return url.split('youtu.be/')[1].split('?')[0];
  }
  
  // If it's just the video ID
  return url;
}

export default function YouTubePlayer({ youtubeUrl, title }: YouTubePlayerProps) {
  const videoId = getYouTubeVideoId(youtubeUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="youtube-player-container">
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="youtube-iframe"
        loading="lazy"
      />
    </div>
  );
}

