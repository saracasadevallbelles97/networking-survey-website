export interface SurveyFormData {
  email?: string
  networking_frequency: string
  networking_platforms: string[]
  main_problems: string[]
  desired_solutions: string[]
  additional_comments?: string
  industry?: string
  experience_level: string
}

export interface SurveyStep {
  id: string
  title: string
  description: string
  questions: SurveyQuestion[]
}

export interface SurveyQuestion {
  id: string
  question: string
  type: 'text' | 'multiple_choice' | 'checkbox' | 'radio' | 'textarea'
  options?: string[]
  required: boolean
  order: number
}

export interface SurveyProgress {
  currentStep: number
  totalSteps: number
  completedSteps: number[]
} 