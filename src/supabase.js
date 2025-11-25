import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jugcdsqhgjubdpgfwmym.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1Z2Nkc3FoZ2p1YmRwZ2Z3bXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0ODQ1MzgsImV4cCI6MjA3NTA2MDUzOH0.05GdIDtRCMxrWpnJ2D49EB3GXEi89PdtVDvVfnJCKcA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
