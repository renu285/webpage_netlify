import React from 'react';
import { Clock, Settings, Shield, Brain, Heart, Timer, ArrowRight } from 'lucide-react';

const Card = ({ children, className = "" }) => (
  <div className={`bg-white/40 backdrop-blur-lg p-8 rounded-2xl hover:shadow-xl transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Floating Shapes Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <header className="relative container mx-auto px-4 pt-24 pb-32 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white/30 backdrop-blur-lg p-4 rounded-2xl">
            <Clock className="w-12 h-12 text-indigo-600" />
          </div>
        </div>
        <h1 className="text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          MindfulWatch
        </h1>
        <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Transform your digital habits with intelligent time management
        </p>
        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto">
          Add to Chrome
          <ArrowRight className="w-5 h-5" />
        </button>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center text-center">
            <Timer className="w-10 h-10 text-indigo-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Smart Timers</h3>
            <p className="text-gray-600 leading-relaxed">
              Customize your viewing limits with intelligent timers that adapt to your browsing patterns.
            </p>
          </Card>
          <Card className="flex flex-col items-center text-center">
            <Shield className="w-10 h-10 text-indigo-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Mindful Blocking</h3>
            <p className="text-gray-600 leading-relaxed">
              Gentle site blocking that helps you maintain healthy digital boundaries.
            </p>
          </Card>
          <Card className="flex flex-col items-center text-center">
            <Settings className="w-10 h-10 text-indigo-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Seamless Control</h3>
            <p className="text-gray-600 leading-relaxed">
              Intuitive interface for effortless management of your digital wellness journey.
            </p>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-5 skew-y-3"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16">Digital Wellness Impact</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <Brain className="w-10 h-10 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-6">Why Mindful Usage Matters</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Enhanced focus and mental clarity
                </p>
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Improved sleep quality
                </p>
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Reduced digital anxiety
                </p>
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Better work-life balance
                </p>
              </div>
            </Card>
            <Card>
              <Heart className="w-10 h-10 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-6">Transform Your Digital Life</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Mindful content consumption
                </p>
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Increased productivity
                </p>
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  More meaningful offline connections
                </p>
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Healthier digital habits
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Simple Steps to Digital Wellness
        </h2>
        <div className="max-w-3xl mx-auto space-y-12">
          <Card className="flex items-start gap-8">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Quick Installation</h3>
              <p className="text-gray-600 leading-relaxed">
                Add MindfulWatch to Chrome with a single click and set your preferred time limits for specific websites.
              </p>
            </div>
          </Card>
          <Card className="flex items-start gap-8">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Mindful Browsing</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse with awareness as the intelligent timer tracks your viewing time across different sites.
              </p>
            </div>
          </Card>
          <Card className="flex items-start gap-8">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Smart Breaks</h3>
              <p className="text-gray-600 leading-relaxed">
                Take refreshing breaks when the timer suggests, allowing you to reset and maintain digital balance.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
    <footer className="bg-white/80 backdrop-blur-sm py-6">
      <div className="container mx-auto text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} MindfulWatch. All rights reserved.</p>
        <div className="space-x-8">
          <button 
            className="text-gray-600 hover:text-gray-800 transition-colors"
            onClick={() => console.log('Privacy Policy clicked')}
          >
            Privacy Policy
          </button>
          <button 
            className="text-gray-600 hover:text-gray-800 transition-colors"
            onClick={() => console.log('Terms clicked')}
          >
            Terms of Service
          </button>
          <button 
            className="text-gray-600 hover:text-gray-800 transition-colors"
            onClick={() => console.log('Contact clicked')}
          >
            Contact
          </button>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default LandingPage;