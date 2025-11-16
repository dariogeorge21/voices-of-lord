'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

interface FormData {
  title: string;
  youtubeUrl: string;
  lyricsMalayalam: string;
  lyricsEnglish: string;
}

export default function ContributePage() {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    youtubeUrl: '',
    lyricsMalayalam: '',
    lyricsEnglish: '',
  });

  const [generatedJson, setGeneratedJson] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const validateYouTubeUrl = (url: string): boolean => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    return youtubeRegex.test(url);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate all fields
    if (!formData.title.trim()) {
      alert('Please enter a song title');
      return;
    }

    if (!formData.youtubeUrl.trim() || !validateYouTubeUrl(formData.youtubeUrl)) {
      alert('Please enter a valid YouTube URL');
      return;
    }

    if (!formData.lyricsMalayalam.trim()) {
      alert('Please enter Malayalam lyrics');
      return;
    }

    if (!formData.lyricsEnglish.trim()) {
      alert('Please enter English lyrics');
      return;
    }

    // Generate unique ID using timestamp
    const id = Date.now().toString();

    // Create song object
    const songObject = {
      id,
      title: formData.title.trim(),
      youtubeUrl: formData.youtubeUrl.trim(),
      lyricsEnglish: formData.lyricsEnglish.trim(),
      lyricsMalayalam: formData.lyricsMalayalam.trim(),
    };

    // Generate formatted JSON
    const json = JSON.stringify(songObject, null, 2);
    setGeneratedJson(json);
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedJson);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      alert('Failed to copy to clipboard');
    }
  };

  const handleReset = () => {
    setFormData({
      title: '',
      youtubeUrl: '',
      lyricsMalayalam: '',
      lyricsEnglish: '',
    });
    setGeneratedJson('');
    setCopied(false);
  };

  return (
    <main className="main-container">
      <div className="contribute-container">
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

        <h1 className="contribute-title">Contribute a Song</h1>
        <p className="contribute-description">
          Help us grow our collection of Christian Malayalam devotional songs. Fill out the form below
          to generate the JSON code for a new song, then follow the instructions to submit it.
        </p>

        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Song Title <span className="required">*</span>
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="form-input"
              placeholder="Enter song title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="youtubeUrl" className="form-label">
              YouTube URL <span className="required">*</span>
            </label>
            <input
              type="url"
              id="youtubeUrl"
              value={formData.youtubeUrl}
              onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
              className="form-input"
              placeholder="https://www.youtube.com/watch?v=..."
              required
            />
            <p className="form-hint">Enter the full YouTube video URL</p>
          </div>

          <div className="form-group">
            <label htmlFor="lyricsMalayalam" className="form-label">
              Malayalam Lyrics <span className="required">*</span>
            </label>
            <textarea
              id="lyricsMalayalam"
              value={formData.lyricsMalayalam}
              onChange={(e) => setFormData({ ...formData, lyricsMalayalam: e.target.value })}
              className="form-textarea"
              placeholder="Enter Malayalam lyrics here..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lyricsEnglish" className="form-label">
              English Lyrics <span className="required">*</span>
            </label>
            <textarea
              id="lyricsEnglish"
              value={formData.lyricsEnglish}
              onChange={(e) => setFormData({ ...formData, lyricsEnglish: e.target.value })}
              className="form-textarea"
              placeholder="Enter English lyrics here..."
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
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
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Generate JSON
            </button>
            <button type="button" onClick={handleReset} className="btn btn-secondary">
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
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              Reset Form
            </button>
          </div>
        </form>

        {generatedJson && (
          <div className="code-output">
            <h2 className="code-output-title">Generated JSON Code</h2>
            {copied && (
              <div className="success-message">
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
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Copied to clipboard!
              </div>
            )}
            <div className="code-block">
              <pre>{generatedJson}</pre>
            </div>
            <button onClick={handleCopy} className="btn btn-primary">
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
                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                />
              </svg>
              Copy to Clipboard
            </button>
          </div>
        )}

        <div className="instructions">
          <h2 className="instructions-title">How to Submit Your Contribution</h2>
          <ol>
            <li>Fill out the form above with the song details and click "Generate JSON"</li>
            <li>Click "Copy to Clipboard" to copy the generated JSON code</li>
            <li>
              Open the <code>data/songs.ts</code> file in the project repository
            </li>
            <li>
              Add a comma after the last song object in the array, then paste your JSON code
            </li>
            <li>Save the file and test the changes locally by running <code>npm run dev</code></li>
            <li>
              Create a pull request to the repository with your changes
            </li>
            <li>
              Include a brief description of the song in your pull request
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}

