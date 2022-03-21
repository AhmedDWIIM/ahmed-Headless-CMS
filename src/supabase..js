import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.BDDURL;
const supabasePass = import.meta.env.BDDPASS;

export const supabase = createClient(supabaseUrl, supabasePass);
