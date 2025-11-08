import { createClient } from '@supabase/supabase-js'

// TODO: Replace with your project's URL and anon key.
// Consider using environment variables for production.
export const supabase = createClient(
  'YOUR_SUPABASE_URL_HERE',
  'YOUR_SUPABASE_ANON_KEY_HERE'
)
