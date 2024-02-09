import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jmxdrbfwttnrfvsmkcad.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpteGRyYmZ3dHRucmZ2c21rY2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ2NTI1NTEsImV4cCI6MjAxMDIyODU1MX0.Dh5bvwIEbc_br0IuUv4X_BaYxKbBqBnwWBW43OsMNAo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
