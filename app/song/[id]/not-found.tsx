import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="main-container">
      <div className="empty-state" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="empty-state-icon"
          style={{ width: '5rem', height: '5rem' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
        <h1 className="empty-state-title" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
          Song Not Found
        </h1>
        <p className="empty-state-text" style={{ marginBottom: '2rem' }}>
          The song you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/" className="btn btn-primary">
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
  );
}

