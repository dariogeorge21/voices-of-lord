'use client';

import { useState } from 'react';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import SongCard from '@/components/SongCard';
import { songs } from '@/data/songs';
import { searchSongs } from '@/data/songs';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredSongs = searchSongs(searchQuery);

  return (
    <>
      <main className="main-container">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--primary)' }}>
            Christian Malayalam Devotional Songs
          </h1>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Explore our collection of devotional songs with bilingual lyrics
          </p>
        </div>

        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search songs by title..."
        />

        {filteredSongs.length > 0 ? (
          <div className="song-list">
            {filteredSongs.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="empty-state-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <h2 className="empty-state-title">No songs found</h2>
            <p className="empty-state-text">
              Try adjusting your search query or browse all songs
            </p>
          </div>
        )}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <Link href="/contribute" className="contribute-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
            Are you a developer? Contribute a Song
          </Link>
          <p className="footer-text">
            Voice of Christ © {new Date().getFullYear()} - Spreading the message of Christ through music
          </p>
        </div>
      </footer>
    </>
  );
}
