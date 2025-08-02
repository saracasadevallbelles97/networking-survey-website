'use client'

import Link from 'next/link'
import { CheckCircle, Share2, Heart, Sparkles, Snowflake } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center py-12 relative overflow-hidden">
      {/* Decorative snowflakes */}
      <div className="absolute inset-0 pointer-events-none">
        <Snowflake className="absolute top-20 left-10 snowflake animate-pulse" size={20} />
        <Snowflake className="absolute top-40 right-20 snowflake animate-pulse delay-1000" size={16} />
        <Snowflake className="absolute bottom-20 left-1/4 snowflake animate-pulse delay-2000" size={24} />
        <Snowflake className="absolute bottom-40 right-1/3 snowflake animate-pulse delay-1500" size={18} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="winter-card">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-14 h-14 text-green-600" />
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl font-bold winter-text mb-6">
            Thank You for Your Feedback!
          </h1>
          
          <p className="text-xl winter-subtitle mb-10 leading-relaxed">
            Your responses have been successfully submitted. Your insights will help us create 
            better networking experiences for professionals like you.
          </p>

          {/* What Happens Next */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-10 border border-blue-100">
            <h2 className="text-2xl font-semibold winter-text mb-6 flex items-center justify-center">
              <Sparkles className="w-6 h-6 mr-3 text-blue-500" />
              What Happens Next?
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5 shadow-md">
                  1
                </div>
                <p className="winter-subtitle leading-relaxed">
                  We'll analyze all responses to identify common patterns and challenges
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5 shadow-md">
                  2
                </div>
                <p className="winter-subtitle leading-relaxed">
                  Your feedback will guide the development of new networking tools and features
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5 shadow-md">
                  3
                </div>
                <p className="winter-subtitle leading-relaxed">
                  We'll share insights and updates on how your input is being used
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <p className="winter-subtitle text-lg">
              Help us reach more professionals by sharing this survey:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
                className="btn-primary inline-flex items-center justify-center text-lg px-8 py-4 group"
              >
                <Share2 className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                Share Survey
              </button>
              
              <Link 
                href="/" 
                className="btn-secondary inline-flex items-center justify-center text-lg px-8 py-4"
              >
                Back to Home
              </Link>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-sm winter-subtitle flex items-center justify-center">
              <Heart className="w-5 h-5 mr-2 text-red-500" />
              Made with care for the networking community
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 