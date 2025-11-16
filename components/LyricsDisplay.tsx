'use client';

import { useState } from 'react';
import { Language } from '@/types/song';

interface LyricsDisplayProps {
  lyricsEnglish: string;
  lyricsMalayalam: string;
}

export default function LyricsDisplay({ lyricsEnglish, lyricsMalayalam }: LyricsDisplayProps) {
  const [language, setLanguage] = useState<Language>('english');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'english' ? 'malayalam' : 'english');
  };

  return (
    <div className="lyrics-container">
      <div className="lyrics-header">
        <h2 className="lyrics-title">Lyrics</h2>
        <button
          onClick={toggleLanguage}
          className="language-toggle-btn"
          aria-label={`Switch to ${language === 'english' ? 'Malayalam' : 'English'}`}
        >
          <span className={language === 'english' ? 'active' : ''}>English</span>
          <span className="toggle-divider">|</span>
          <span className={language === 'malayalam' ? 'active' : ''}>മലയാളം</span>
        </button>
      </div>
      <div className="lyrics-content">
        {language === 'english' ? (
          <p className="lyrics-text">{lyricsEnglish}</p>
        ) : (
          <p className="lyrics-text malayalam-text">{lyricsMalayalam}</p>
        )}
      </div>
    </div>
  );
}

