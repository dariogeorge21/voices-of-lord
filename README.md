# Voices of Lord - Christian Malayalam Devotional Songs

🌐 **[Visit Live Site](https://voices-of-lord.vercel.app)** | 🎵 Browse Christian Malayalam Devotional Songs Online


A modern web application for browsing Christian Malayalam devotional songs with bilingual lyrics (Malayalam and English). Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

### Core Functionality
- **Song List Page**: Browse all devotional songs in a clean, scrollable list
- **Real-time Search**: Filter songs by title with instant results
- **Song Detail Page**: View individual songs with:
  - Embedded YouTube player
  - Bilingual lyrics (Malayalam and English)
  - Easy language toggle
  - Back navigation to song list

### Developer Features
- **Contribution Page**: Developer-friendly form to add new songs
  - Form validation for all fields
  - YouTube URL validation
  - JSON code generation
  - Copy-to-clipboard functionality
  - Step-by-step contribution instructions

### Theme System
- **Spiritual Theme** (Default): Bright, peaceful design with gold accents
- **Dark Theme**: Modern dark mode for comfortable viewing
- **Theme Persistence**: Your theme preference is saved using localStorage
- **Smooth Transitions**: Elegant theme switching animations

### Responsive Design
- Fully responsive layout (320px+)
- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly interface

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables
- **State Management**: React Context API + Hooks
- **Data Storage**: TypeScript file (`data/songs.ts`)

## Project Structure

```
voices-of-lord/
├── app/
│   ├── layout.tsx              # Root layout with theme provider
│   ├── page.tsx                # Main song list page
│   ├── globals.css             # Global styles and theme variables
│   ├── contribute/
│   │   └── page.tsx            # Developer contribution page
│   └── song/
│       └── [id]/
│           ├── page.tsx        # Song detail page
│           └── not-found.tsx   # 404 page for invalid songs
├── components/
│   ├── ClientLayout.tsx        # Client-side layout wrapper
│   ├── Header.tsx              # Application header
│   ├── ThemeToggle.tsx         # Theme switcher button
│   ├── SearchBar.tsx           # Search input component
│   ├── SongCard.tsx            # Song list item component
│   ├── YouTubePlayer.tsx       # YouTube embed component
│   └── LyricsDisplay.tsx       # Lyrics with language toggle
├── contexts/
│   └── ThemeContext.tsx        # Theme management context
├── data/
│   └── songs.ts                # Song data and helper functions
├── types/
│   └── song.ts                 # TypeScript interfaces
└── public/                     # Static assets
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd voices-of-lord
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Contributing Songs

### For Developers

1. Navigate to the "Contribute a Song" page (link in footer)
2. Fill out the form with:
   - Song title
   - YouTube URL
   - Malayalam lyrics
   - English lyrics
3. Click "Generate JSON" to create the song object
4. Copy the generated JSON code
5. Add it to `data/songs.ts`:
   - Open the file
   - Add a comma after the last song in the array
   - Paste your JSON code
6. Test locally with `npm run dev`
7. Create a pull request with your changes

### Song Data Structure

```typescript
{
  id: string;              // Unique identifier (auto-generated timestamp)
  title: string;           // Song title
  youtubeUrl: string;      // Full YouTube URL or video ID
  lyricsEnglish: string;   // English lyrics (line breaks preserved)
  lyricsMalayalam: string; // Malayalam lyrics (line breaks preserved)
}
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with default settings

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available for community contributions.

## Acknowledgments

- Built with ❤️ for spreading the message of Christ through music
- Thanks to all contributors who help grow this collection

---

**Voices of Lord** © 2025 - Spreading the message of Christ through music
