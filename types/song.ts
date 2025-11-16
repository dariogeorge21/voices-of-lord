/**
 * Represents a Christian Malayalam devotional song with bilingual lyrics
 */
export interface Song {
  /** Unique identifier for the song */
  id: string;
  
  /** Title of the song */
  title: string;
  
  /** YouTube video URL or video ID */
  youtubeUrl: string;
  
  /** English lyrics with line breaks preserved */
  lyricsEnglish: string;
  
  /** Malayalam lyrics with line breaks preserved */
  lyricsMalayalam: string;
}

/**
 * Language options for lyrics display
 */
export type Language = 'english' | 'malayalam';

/**
 * Theme options for the application
 */
export type Theme = 'spiritual' | 'dark';

