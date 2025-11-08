# Guest Book App

## Project Goal
A live guest book app for the exhibition zone. Visitors can leave comments, star ratings, and see updates in real time.

## Tech Stack
- React (Vite)
- Supabase (DB + Realtime)

## Quick Start

Prerequisites: Node 20+

```powershell
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Supabase Setup
- Create a new Supabase project.
- Copy `.env.example` to `.env.local` and fill in your keys.
	```powershell
	Copy-Item .env.example .env.local
	```
- `src/supabaseClient.js` reads from `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
- Follow `database/README.md` to create the `reviews` table and enable Realtime.

## Project Structure
```
src/
	App.jsx               # Minimal shell
	main.jsx              # React DOM render
	supabaseClient.js     # Supabase client (placeholders)
	components/           # Team components (Form, EntryList, RatingStars)
	pages/                # Optional pages (Submit, Wall)
	styles/               # CSS or Tailwind configs
database/
	README.md             # Supabase table setup
```

## How to Contribute
1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Implement your feature
4. Push and open a Pull Request
