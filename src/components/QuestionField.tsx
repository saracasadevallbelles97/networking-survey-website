import { SurveyQuestion } from '@/types/survey'

interface QuestionFieldProps {
  question: SurveyQuestion
  value: any
  onChange: (value: any) => void
  error?: string
}

export default function QuestionField({ question, value, onChange, error }: QuestionFieldProps) {
  const handleChange = (newValue: any) => {
    onChange(newValue)
  }

  const renderField = () => {
    switch (question.type) {
      case 'text':
        return (
          <input
            type="text"
            value={value || ''}
            onChange={(e) => handleChange(e.target.value)}
            className="input-field"
            placeholder="Enter your answer..."
          />
        )

      case 'textarea':
        return (
          <textarea
            value={value || ''}
            onChange={(e) => handleChange(e.target.value)}
            className="input-field min-h-[120px] resize-vertical"
            placeholder="Enter your answer..."
            rows={5}
          />
        )

      case 'radio':
        return (
          <div className="space-y-4">
            {question.options?.map((option) => (
              <label key={option} className="flex items-center space-x-4 cursor-pointer group hover:bg-blue-50 p-4 rounded-xl transition-all duration-200">
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={value === option}
                  onChange={(e) => handleChange(e.target.value)}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="text-gray-700 group-hover:text-gray-900 font-medium">{option}</span>
              </label>
            ))}
          </div>
        )

      case 'checkbox':
        return (
          <div className="space-y-4">
            {question.options?.map((option) => (
              <label key={option} className="flex items-center space-x-4 cursor-pointer group hover:bg-blue-50 p-4 rounded-xl transition-all duration-200">
                <input
                  type="checkbox"
                  value={option}
                  checked={Array.isArray(value) && value.includes(option)}
                  onChange={(e) => {
                    const currentValues = Array.isArray(value) ? value : []
                    if (e.target.checked) {
                      handleChange([...currentValues, option])
                    } else {
                      handleChange(currentValues.filter((v) => v !== option))
                    }
                  }}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-gray-700 group-hover:text-gray-900 font-medium">{option}</span>
              </label>
            ))}
          </div>
        )

      case 'multiple_choice':
        return (
          <select
            value={value || ''}
            onChange={(e) => handleChange(e.target.value)}
            className="input-field"
          >
            <option value="">Select an option...</option>
            {question.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )

      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      <label className="block text-xl font-semibold winter-text">
        {question.question}
        {question.required && <span className="text-red-500 ml-2">*</span>}
      </label>
      {renderField()}
      {error && (
        <p className="text-red-600 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-200">
          {error}
        </p>
      )}
    </div>
  )
} 