import { createClient } from '@supabase/supabase-js'

// Reads Supabase credentials from Vite environment variables.
// Define these in a local .env.local file (never commit real keys):
// VITE_SUPABASE_URL=...
// VITE_SUPABASE_ANON_KEY=...
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  // eslint-disable-next-line no-console
  console.warn('[supabaseClient] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Add them to .env.local')
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')
