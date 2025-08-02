import Link from 'next/link'
import { Users, Target, Lightbulb, ArrowRight, Snowflake, Sparkles, Heart } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="winter-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="relative">
                <Users className="h-8 w-8 text-white" />
                <Snowflake className="h-4 w-4 text-blue-200 absolute -top-1 -right-1" />
              </div>
              <h1 className="ml-3 text-xl font-bold text-white">Networking Survey</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-blue-100 hover:text-white transition-colors duration-200">
                About
              </a>
              <a href="#benefits" className="text-blue-100 hover:text-white transition-colors duration-200">
                Benefits
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="winter-hero py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative snowflakes */}
        <div className="absolute inset-0 pointer-events-none">
          <Snowflake className="absolute top-20 left-10 snowflake animate-pulse" size={20} />
          <Snowflake className="absolute top-40 right-20 snowflake animate-pulse delay-1000" size={16} />
          <Snowflake className="absolute bottom-20 left-1/4 snowflake animate-pulse delay-2000" size={24} />
          <Snowflake className="absolute bottom-40 right-1/3 snowflake animate-pulse delay-1500" size={18} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
              <Sparkles className="inline-block w-4 h-4 mr-2" />
              Help Shape the Future
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold winter-text mb-8 leading-tight">
            Improve Your
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Networking Experience</span>
          </h1>
          
          <p className="text-xl winter-subtitle mb-10 max-w-3xl mx-auto leading-relaxed">
            Share your networking activities, challenges, and ideas for solutions. 
            Your feedback will help us create better networking tools and experiences for everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/survey" 
              className="btn-primary inline-flex items-center justify-center text-lg px-10 py-4 group"
            >
              Start Survey
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <a 
              href="#about" 
              className="btn-secondary inline-flex items-center justify-center text-lg px-10 py-4"
            >
              Learn More
            </a>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-sm winter-subtitle">
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-2 text-red-400" />
              <span>100% Anonymous</span>
            </div>
            <div className="flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
              <span>5-7 minutes</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-green-400" />
              <span>Help Others</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="winter-section py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold winter-text mb-6">
              Why Your Input Matters
            </h2>
            <p className="text-xl winter-subtitle max-w-3xl mx-auto leading-relaxed">
              Your responses will directly influence the development of networking solutions 
              that address real challenges faced by professionals like you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="winter-card text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold winter-text mb-4">
                Identify Key Problems
              </h3>
              <p className="winter-subtitle leading-relaxed">
                Help us understand the most pressing challenges you face in your networking activities.
              </p>
            </div>
            
            <div className="winter-card text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold winter-text mb-4">
                Shape Solutions
              </h3>
              <p className="winter-subtitle leading-relaxed">
                Your ideas and preferences will guide the development of new networking tools and features.
              </p>
            </div>
            
            <div className="winter-card text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold winter-text mb-4">
                Build Community
              </h3>
              <p className="winter-subtitle leading-relaxed">
                Contribute to a better networking ecosystem that benefits professionals across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold winter-text mb-6">
              About This Survey
            </h2>
            <p className="text-xl winter-subtitle leading-relaxed">
              This survey takes approximately 5-7 minutes to complete and covers topics including:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="winter-card">
              <h3 className="text-2xl font-semibold winter-text mb-6 flex items-center">
                <Sparkles className="w-6 h-6 mr-3 text-blue-500" />
                What We'll Ask:
              </h3>
              <ul className="space-y-4 winter-subtitle">
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                  Your current networking frequency and platforms
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                  Main challenges you face in networking
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                  Solutions that would improve your experience
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</div>
                  Your industry and experience level
                </li>
              </ul>
            </div>
            
            <div className="winter-card">
              <h3 className="text-2xl font-semibold winter-text mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-red-500" />
                Your Privacy:
              </h3>
              <ul className="space-y-4 winter-subtitle">
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</div>
                  All responses are anonymous and confidential
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</div>
                  Data is used only for research and development
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</div>
                  You can skip any question you prefer not to answer
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</div>
                  No personal information is required
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="winter-cta py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <Snowflake className="absolute top-10 left-20 snowflake animate-pulse" size={24} />
          <Snowflake className="absolute bottom-10 right-20 snowflake animate-pulse delay-1000" size={20} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Share Your Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Your feedback will help create better networking experiences for everyone.
          </p>
          <Link 
            href="/survey" 
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center text-lg group"
          >
            Start the Survey
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center mb-4">
            <Snowflake className="h-6 w-6 text-blue-300 mr-2" />
            <p className="text-gray-400">
              © 2024 Networking Survey. All rights reserved.
            </p>
            <Snowflake className="h-6 w-6 text-blue-300 ml-2" />
          </div>
        </div>
      </footer>
    </div>
  )
} 