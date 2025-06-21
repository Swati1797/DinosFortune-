import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rllglohbdevnaplsbguu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsbGdsb2hiZGV2bmFwbHNiZ3V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0MjA1MzUsImV4cCI6MjA1NTk5NjUzNX0.Crr8stpP38PnaZlhpxHliMNIMM934Semskzp3_-oHOA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
