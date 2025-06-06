import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Lightbulb, 
  Users, 
  Zap, 
  ArrowRight, 
  Sparkles, 
  Brain,
  Target,
  Rocket,
  Star,
  Play,
  ChevronDown
} from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const [roomName, setRoomName] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCreateRoom = () => {
    if (roomName.trim()) {
      const roomId = roomName.toLowerCase().replace(/\s+/g, '-');
      navigate(`/room/${roomId}`);
    }
  };

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Ideas",
      description: "Get intelligent suggestions and expand your creative thinking with AI assistance.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Real-time Collaboration",
      description: "Work together seamlessly with your team in real-time brainstorming sessions.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Organized Thinking",
      description: "Categorize and structure your ideas for maximum clarity and impact.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Instant Results",
      description: "Transform brainstorming sessions into actionable plans and concrete outcomes.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Logo Animation */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-8 shadow-2xl shadow-purple-500/25 animate-bounce">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-6 leading-tight tracking-tight">
              Mind<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Spark</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Ignite your team's creativity with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">AI-powered brainstorming</span>
            <br />
            Transform ideas into innovation through intelligent collaboration
          </p>

          {/* Room Creation Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 mb-20 max-w-lg mx-auto border border-white/20 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <Play className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Start Your Journey</h3>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your room name..."
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  className="w-full px-8 py-5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-400 transition-all text-lg backdrop-blur-sm"
                  onKeyPress={(e) => e.key === 'Enter' && handleCreateRoom()}
                />
              </div>
              
              <button
                onClick={handleCreateRoom}
                disabled={!roomName.trim()}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-5 px-8 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <Zap className="w-6 h-6" />
                Create Room 
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
            {[
              { number: "10K+", label: "Ideas Generated" },
              { number: "500+", label: "Teams Active" },
              { number: "99%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60 mx-auto" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">MindSpark</span>?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Experience the future of collaborative thinking with our cutting-edge features designed for modern teams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-3xl p-16 border border-white/20 shadow-2xl">
            <Star className="w-20 h-20 text-yellow-400 mx-auto mb-8 animate-pulse" />
            <h2 className="text-5xl font-black text-white mb-8">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Spark Innovation</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of teams who have transformed their brainstorming process with MindSpark's intelligent collaboration platform
            </p>
            <button
              onClick={() => {
                setRoomName('innovation-hub');
                handleCreateRoom();
              }}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-6 px-12 rounded-2xl text-xl inline-flex items-center gap-4 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25"
            >
              <Zap className="w-8 h-8" />
              Get Started Now
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}