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
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="hero-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
              />
            </svg>
          </div>
          <h1 className="hero-title">
            Voice of Christ
          </h1>
          <p className="hero-subtitle">
            Christian Malayalam Devotional Songs
          </p>
          <p className="hero-description">
            Explore our curated collection of devotional songs with bilingual lyrics.<br />
            Sing along and worship with Malayalam and English translations.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">{songs.length}</div>
              <div className="stat-label">Songs</div>
            </div>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="decoration-circle decoration-circle-1"></div>
          <div className="decoration-circle decoration-circle-2"></div>
          <div className="decoration-circle decoration-circle-3"></div>
        </div>
      </section>

      <main className="main-container">
        {/* Search Section */}
        <section className="search-section">
          <h2 className="section-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="section-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            Find Your Song
          </h2>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by song title..."
          />
        </section>

        {/* Songs Section */}
        <section className="songs-section">
          <div className="section-header">
            <h2 className="section-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="section-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                />
              </svg>
              {searchQuery ? `Search Results (${filteredSongs.length})` : 'All Songs'}
            </h2>
            {!searchQuery && (
              <p className="section-description">
                Browse through our complete collection of devotional songs
              </p>
            )}
          </div>

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
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="btn btn-primary"
                  style={{ marginTop: '1.5rem' }}
                >
                  Clear Search
                </button>
              )}
            </div>
          )}
        </section>
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
