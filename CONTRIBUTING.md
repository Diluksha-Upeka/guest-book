# Contributing

Thanks for helping improve the Guest Book App!

## Workflow
1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Write code + tests (if applicable)
4. Run `npm run lint` and ensure build passes `npm run build`
5. Open a Pull Request describing changes

## Coding Guidelines
- Keep components small and focused
- Prefer hooks for shared logic
- Use environment variables for secrets (never commit keys)
- Keep accessibility in mind (labels, focus states)

## Folder Conventions
- `src/components` reusable UI pieces
- `src/pages` route-level components
- `src/styles` global or utility styles

## Supabase
Do not commit actual service keys to version control. Use placeholders or `.env`.
