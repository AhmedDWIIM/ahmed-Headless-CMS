import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mgyzbqxzbicuukedgjsw.supabase.co" ;
const supabasePass = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1neXpicXh6YmljdXVrZWRnanN3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0Nzg1ODA0NCwiZXhwIjoxOTYzNDM0MDQ0fQ.vWY22qSWmht121FS-l7Dn3B35MUJyE9IGfeWp5Gutf4";

export const supabase = createClient(supabaseUrl, supabasePass);
