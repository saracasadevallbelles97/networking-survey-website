import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface SurveyResponse {
  id?: string
  created_at?: string
  email?: string
  networking_frequency: string
  networking_platforms: string[]
  main_problems: string[]
  desired_solutions: string[]
  additional_comments?: string
  industry?: string
  experience_level: string
}

export interface SurveyQuestion {
  id: string
  question: string
  type: 'text' | 'multiple_choice' | 'checkbox' | 'radio' | 'textarea'
  options?: string[]
  required: boolean
  order: number
} 