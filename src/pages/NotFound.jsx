import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center px-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-8 shadow-2xl shadow-purple-500/25">
            <Sparkles className="w-12 h-12 text-white animate-spin" />
          </div>
          <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            The page you're looking for seems to have vanished into the digital void. 
            Don't worry, even the best ideas sometimes take unexpected paths!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl inline-flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-2xl inline-flex items-center justify-center gap-3 transition-all duration-300 border border-white/20 hover:border-white/30"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Fun Message */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <p className="text-slate-400 text-sm">
            💡 <strong>Pro Tip:</strong> While you're here, why not start a new brainstorming session? 
            Great ideas can come from unexpected detours!
          </p>
        </div>
      </div>
    </div>
  );
}