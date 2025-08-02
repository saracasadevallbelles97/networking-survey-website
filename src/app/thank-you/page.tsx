import Link from 'next/link'
import { CheckCircle, Share2, Heart } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="card">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Your Feedback!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Your responses have been successfully submitted. Your insights will help us create 
            better networking experiences for professionals like you.
          </p>

          {/* What Happens Next */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              What Happens Next?
            </h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                  1
                </div>
                <p className="text-gray-700">
                  We'll analyze all responses to identify common patterns and challenges
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                  2
                </div>
                <p className="text-gray-700">
                  Your feedback will guide the development of new networking tools and features
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                  3
                </div>
                <p className="text-gray-700">
                  We'll share insights and updates on how your input is being used
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <p className="text-gray-600">
              Help us reach more professionals by sharing this survey:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Networking Survey',
                      text: 'Help improve networking experiences by taking this quick survey!',
                      url: window.location.origin
                    })
                  } else {
                    navigator.clipboard.writeText(window.location.origin)
                    alert('Survey link copied to clipboard!')
                  }
                }}
                className="btn-primary inline-flex items-center justify-center"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share Survey
              </button>
              
              <Link 
                href="/" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                Back to Home
              </Link>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 flex items-center justify-center">
              <Heart className="w-4 h-4 mr-1 text-red-500" />
              Made with care for the networking community
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 