'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ProgressBar from '@/components/ProgressBar'
import QuestionField from '@/components/QuestionField'
import { SurveyFormData, SurveyStep } from '@/types/survey'
import { supabase } from '@/lib/supabase'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'

const surveySteps: SurveyStep[] = [
  {
    id: 'basic-info',
    title: 'Basic Information',
    description: 'Tell us a bit about yourself and your networking habits.',
    questions: [
      {
        id: 'email',
        question: 'Email address (optional - for follow-up insights)',
        type: 'text',
        required: false,
        order: 1
      },
      {
        id: 'networking_frequency',
        question: 'How often do you engage in networking activities?',
        type: 'radio',
        options: [
          'Daily',
          'Weekly',
          'Monthly',
          'Quarterly',
          'Rarely',
          'Never'
        ],
        required: true,
        order: 2
      },
      {
        id: 'experience_level',
        question: 'What is your professional experience level?',
        type: 'radio',
        options: [
          'Student/Entry Level',
          'Mid-level (2-5 years)',
          'Senior Level (5-10 years)',
          'Executive/Leadership (10+ years)',
          'Entrepreneur/Founder'
        ],
        required: true,
        order: 3
      }
    ]
  },
  {
    id: 'platforms',
    title: 'Networking Platforms',
    description: 'Which platforms do you use for networking?',
    questions: [
      {
        id: 'networking_platforms',
        question: 'Which networking platforms do you currently use? (Select all that apply)',
        type: 'checkbox',
        options: [
          'LinkedIn',
          'Twitter/X',
          'Instagram',
          'Facebook',
          'Meetup',
          'Eventbrite',
          'Slack communities',
          'Discord',
          'Reddit',
          'Professional conferences',
          'Local networking events',
          'Alumni networks',
          'Industry associations',
          'Other'
        ],
        required: true,
        order: 1
      }
    ]
  },
  {
    id: 'problems',
    title: 'Challenges & Problems',
    description: 'What are the main challenges you face in networking?',
    questions: [
      {
        id: 'main_problems',
        question: 'What are the biggest challenges you face in networking? (Select all that apply)',
        type: 'checkbox',
        options: [
          'Finding relevant people to connect with',
          'Starting conversations',
          'Maintaining relationships',
          'Following up after initial contact',
          'Finding time for networking',
          'Overcoming social anxiety',
          'Knowing what to talk about',
          'Building genuine relationships',
          'Measuring networking ROI',
          'Finding networking opportunities',
          'Cultural/language barriers',
          'Geographic limitations',
          'Industry-specific challenges',
          'Other'
        ],
        required: true,
        order: 1
      }
    ]
  },
  {
    id: 'solutions',
    title: 'Desired Solutions',
    description: 'What solutions would improve your networking experience?',
    questions: [
      {
        id: 'desired_solutions',
        question: 'What solutions or features would most improve your networking experience? (Select all that apply)',
        type: 'checkbox',
        options: [
          'AI-powered conversation starters',
          'Automated follow-up reminders',
          'Smart matching algorithms',
          'Networking event recommendations',
          'Relationship tracking tools',
          'Ice-breaker suggestions',
          'Networking goal setting',
          'Progress analytics',
          'Mentorship matching',
          'Industry-specific networking groups',
          'Virtual networking tools',
          'Networking skill training',
          'Community building features',
          'Other'
        ],
        required: true,
        order: 1
      }
    ]
  },
  {
    id: 'additional',
    title: 'Additional Information',
    description: 'Any other thoughts or suggestions?',
    questions: [
      {
        id: 'industry',
        question: 'What industry do you work in? (Optional)',
        type: 'text',
        required: false,
        order: 1
      },
      {
        id: 'additional_comments',
        question: 'Any additional comments, suggestions, or specific problems you\'d like to share?',
        type: 'textarea',
        required: false,
        order: 2
      }
    ]
  }
]

export default function SurveyPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<SurveyFormData>({
    networking_frequency: '',
    networking_platforms: [],
    main_problems: [],
    desired_solutions: [],
    experience_level: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const currentStepData = surveySteps[currentStep]

  const validateStep = () => {
    const newErrors: Record<string, string> = {}
    
    currentStepData.questions.forEach((question) => {
      if (question.required) {
        const value = formData[question.id as keyof SurveyFormData]
        
        if (!value || (Array.isArray(value) && value.length === 0)) {
          newErrors[question.id] = 'This field is required'
        }
      }
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < surveySteps.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        handleSubmit()
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    if (!validateStep()) return
    
    setIsSubmitting(true)
    
    try {
      // Check if Supabase is configured
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        // For demo purposes, just redirect to thank you page
        console.log('Survey data (demo mode):', formData)
        router.push('/thank-you')
        return
      }

      const { error } = await supabase
        .from('survey_responses')
        .insert([formData])
      
      if (error) throw error
      
      router.push('/thank-you')
    } catch (error) {
      console.error('Error submitting survey:', error)
      alert('There was an error submitting your survey. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleQuestionChange = (questionId: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [questionId]: value
    }))
    
    // Clear error when user starts typing
    if (errors[questionId]) {
      setErrors(prev => ({
        ...prev,
        [questionId]: ''
      }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {currentStepData.title}
          </h1>
          <p className="text-lg text-gray-600">
            {currentStepData.description}
          </p>
        </div>

        {/* Progress Bar */}
        <ProgressBar 
          currentStep={currentStep + 1} 
          totalSteps={surveySteps.length} 
        />

        {/* Survey Form */}
        <div className="card">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-8">
              {currentStepData.questions.map((question) => (
                <QuestionField
                  key={question.id}
                  question={question}
                  value={formData[question.id as keyof SurveyFormData]}
                  onChange={(value) => handleQuestionChange(question.id, value)}
                  error={errors[question.id]}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={isSubmitting}
                className="btn-primary flex items-center"
              >
                {currentStep === surveySteps.length - 1 ? (
                  <>
                    {isSubmitting ? 'Submitting...' : 'Submit Survey'}
                    <Check className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Step Indicators */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            {surveySteps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentStep
                    ? 'bg-primary-600'
                    : index < currentStep
                    ? 'bg-primary-300'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 