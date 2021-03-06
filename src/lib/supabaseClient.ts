import { createClient } from '@supabase/supabase-js';
// add envdata to vercel
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
