import { Database } from "./supabase";

export type UserType = Database['public']['Tables']['User']['Row']