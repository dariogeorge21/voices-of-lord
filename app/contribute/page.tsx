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

    // Generate formatted JSON with comma and extra lines for easy pasting
    const json = `,\n\n${JSON.stringify(songObject, null, 2)}\n\n`;
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
      <div className="instructions">
          <h2 className="instructions-title">How to Submit Your Contribution</h2>
          <div className="instructions-steps">
            <div className="instruction-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Fill Out the Form</h3>
                <p className="step-description">
                  Enter the song title, YouTube URL, and lyrics in both Malayalam and English. 
                  Make sure all fields are complete and accurate.
                </p>
              </div>
            </div>

            <div className="instruction-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Generate JSON</h3>
                <p className="step-description">
                  Click the "Generate JSON" button to create the properly formatted code. 
                  The JSON will include a comma and spacing for easy insertion.
                </p>
              </div>
            </div>

            <div className="instruction-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Copy to Clipboard</h3>
                <p className="step-description">
                  Click "Step 1: Copy to Clipboard" to copy the generated JSON code. 
                  A success message will appear when copied successfully.
                </p>
              </div>
            </div>

            <div className="instruction-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Go to Source Code</h3>
                <p className="step-description">
                  Click "Step 2: Go to Source Code" button to open the <code>songs.ts</code> file 
                  in GitHub's edit mode. You may need to sign in to GitHub.
                </p>
              </div>
            </div>

            <div className="instruction-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3 className="step-title">Paste Your Code</h3>
                <p className="step-description">
                  In the GitHub editor, scroll to the end of the songs array (before the closing bracket <code>]</code>). 
                  Position your cursor after the last song's closing brace <code>{'}'}</code> and paste your copied code.
                </p>
              </div>
            </div>

            <div className="instruction-step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3 className="step-title">Commit Your Changes</h3>
                <p className="step-description">
                  Scroll down to the "Commit changes" section. Add a commit message like 
                  "Add song: [Your Song Title]" and click "Propose changes" to create a pull request.
                </p>
              </div>
            </div>

            <div className="instruction-step">
              <div className="step-number">7</div>
              <div className="step-content">
                <h3 className="step-title">Wait for Review</h3>
                <p className="step-description">
                  Your contribution will be reviewed by the maintainers. Once approved, 
                  your song will be added to the collection and visible to all users!
                </p>
              </div>
            </div>
          </div>

          <div className="instructions-note">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="note-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <div>
              <strong>Note:</strong> You'll need a GitHub account to contribute. 
              If you don't have one, you can create a free account at{' '}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a>.
            </div>
          </div>
        </div>
      <div className="contribute-container">
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
            <p className="code-output-description">
              Your song has been formatted and is ready to be added to the repository.
              Follow the steps below to complete your contribution.
            </p>
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
                Copied to clipboard! Now click "Go to Source Code" below.
              </div>
            )}
            <div className="code-block">
              <pre>{generatedJson}</pre>
            </div>
            <div className="code-actions">
              <button onClick={handleCopy} className="btn btn-primary" disabled={copied}>
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
                {copied ? 'Copied!' : 'Step 1: Copy to Clipboard'}
              </button>
              {copied && (
                <a
                  href="https://github.com/dariogeorge21/voices-of-lord/edit/main/data/songs.ts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary source-code-btn"
                >
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
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  Step 2: Go to Source Code
                </a>
              )}
            </div>
          </div>
        )}

        
      </div>

      <footer className="contribute-footer">
        <div className="contribute-footer-content">
          
          <p className="footer-text">
            Voices of Lord © {new Date().getFullYear()} - Spreading the message of Christ through music
          </p>
          <p className="footer-tagline">
            Building tools to spread the message of Christ through music
          </p>
          <p className="footer-owner">
            Created by <strong><a href='https://linkedin.com/in/dariogeorge21'>Dario George</a></strong><br /> Visit <strong><a href='https://github.com/dariogeorge21'>Github</a></strong>
          </p>
        </div>
      </footer>
    </main>
  );
}

