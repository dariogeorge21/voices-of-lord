import Link from 'next/link';
import { notFound } from 'next/navigation';
import YouTubePlayer from '@/components/YouTubePlayer';
import LyricsDisplay from '@/components/LyricsDisplay';
import { getSongById } from '@/data/songs';

interface SongPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SongPage({ params }: SongPageProps) {
  const { id } = await params;
  const song = getSongById(id);

  // If song not found, show 404
  if (!song) {
    notFound();
  }

  return (
    <main className="main-container">
      <Link href="/" className="back-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="back-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        Back to Songs
      </Link>

      <h1 className="song-detail-title">{song.title}</h1>

      <YouTubePlayer youtubeUrl={song.youtubeUrl} title={song.title} />

      <LyricsDisplay
        lyricsEnglish={song.lyricsEnglish}
        lyricsMalayalam={song.lyricsMalayalam}
      />
    </main>
  );
}

