import Link from "next/link"
const Footer = () => {
  return (
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
            Would you like to contribute?
          </Link>
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
        </div>
      </footer>
  )
}

export default Footer
