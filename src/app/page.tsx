import Link from 'next/link'
import { Users, Target, Lightbulb, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-primary-600" />
              <h1 className="ml-2 text-xl font-bold text-gray-900">Networking Survey</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">
                About
              </a>
              <a href="#benefits" className="text-gray-600 hover:text-primary-600 transition-colors">
                Benefits
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Help Us Improve Your
            <span className="text-primary-600"> Networking Experience</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Share your networking activities, challenges, and ideas for solutions. 
            Your feedback will help us create better networking tools and experiences for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/survey" 
              className="btn-primary inline-flex items-center justify-center text-lg px-8 py-4"
            >
              Start Survey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="#about" 
              className="btn-secondary inline-flex items-center justify-center text-lg px-8 py-4"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Your Input Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your responses will directly influence the development of networking solutions 
              that address real challenges faced by professionals like you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <Target className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Identify Key Problems
              </h3>
              <p className="text-gray-600">
                Help us understand the most pressing challenges you face in your networking activities.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <Lightbulb className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Shape Solutions
              </h3>
              <p className="text-gray-600">
                Your ideas and preferences will guide the development of new networking tools and features.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Build Community
              </h3>
              <p className="text-gray-600">
                Contribute to a better networking ecosystem that benefits professionals across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              About This Survey
            </h2>
            <p className="text-lg text-gray-600">
              This survey takes approximately 5-7 minutes to complete and covers topics including:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">What We'll Ask:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Your current networking frequency and platforms
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Main challenges you face in networking
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Solutions that would improve your experience
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Your industry and experience level
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Your Privacy:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  All responses are anonymous and confidential
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Data is used only for research and development
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  You can skip any question you prefer not to answer
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  No personal information is required
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Share Your Experience?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Your feedback will help create better networking experiences for everyone.
          </p>
          <Link 
            href="/survey" 
            className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
          >
            Start the Survey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Networking Survey. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
} 