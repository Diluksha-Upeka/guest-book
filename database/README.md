# Supabase Setup

Create a `reviews` table with the following columns:

- id: uuid, primary key, default `uuid_generate_v4()`
- created_at: timestamp with time zone, default `now()`
- name: text, nullable
- rating: int2 or int4, not null, check 1..5
- comment: text, nullable

Example SQL:

```sql
-- Enable extension (if not enabled)
create extension if not exists "uuid-ossp";

create table if not exists public.reviews (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  name text,
  rating int2 not null check (rating between 1 and 5),
  comment text
);

-- (Optional) Row Level Security
alter table public.reviews enable row level security;
create policy "Allow anonymous insert" on public.reviews
  for insert to anon with check (true);
create policy "Allow anonymous read" on public.reviews
  for select to anon using (true);

-- Realtime
-- In Supabase Dashboard, go to Realtime and enable for the 'reviews' table
```

Update `src/supabaseClient.js` with your project URL and anon key.
