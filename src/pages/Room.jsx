import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Lightbulb, 
  Users, 
  Settings, 
  ArrowLeft,
  Trash2,
  Edit3,
  Star,
  Clock,
  Tag,
  Send,
  Sparkles
} from 'lucide-react';

export default function Room() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [isAddingIdea, setIsAddingIdea] = useState(false);

  const categories = [
    { id: 'general', name: 'General', color: 'from-gray-500 to-gray-600', icon: '💡' },
    { id: 'creative', name: 'Creative', color: 'from-purple-500 to-pink-500', icon: '🎨' },
    { id: 'technical', name: 'Technical', color: 'from-blue-500 to-cyan-500', icon: '⚡' },
    { id: 'business', name: 'Business', color: 'from-green-500 to-emerald-500', icon: '💼' },
    { id: 'innovation', name: 'Innovation', color: 'from-orange-500 to-red-500', icon: '🚀' }
  ];

  const handleAddIdea = () => {
    if (newIdea.trim()) {
      const idea = {
        id: Date.now(),
        text: newIdea,
        category: selectedCategory,
        timestamp: new Date(),
        votes: 0,
        author: 'You'
      };
      setIdeas([...ideas, idea]);
      setNewIdea('');
      setIsAddingIdea(false);
    }
  };

  const handleVote = (ideaId) => {
    setIdeas(ideas.map(idea => 
      idea.id === ideaId 
        ? { ...idea, votes: idea.votes + 1 }
        : idea
    ));
  };

  const handleDeleteIdea = (ideaId) => {
    setIdeas(ideas.filter(idea => idea.id !== ideaId));
  };

  const getCategoryInfo = (categoryId) => {
    return categories.find(cat => cat.id === categoryId) || categories[0];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-white capitalize">
                  {id?.replace(/-/g, ' ')} Room
                </h1>
                <p className="text-slate-400 text-sm">Collaborative brainstorming session</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-green-400" />
                <span className="text-white text-sm">1 Active</span>
              </div>
              <button className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 sticky top-24">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-center gap-3 ${
                      selectedCategory === category.id
                        ? 'bg-white/20 text-white'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                    <span className="ml-auto text-xs bg-white/20 px-2 py-1 rounded-full">
                      {ideas.filter(idea => idea.category === category.id).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Add Idea Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-white">Share Your Ideas</h2>
              </div>
              
              {!isAddingIdea ? (
                <button
                  onClick={() => setIsAddingIdea(true)}
                  className="w-full p-4 border-2 border-dashed border-white/30 rounded-xl text-slate-300 hover:border-purple-400 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add a new idea...
                </button>
              ) : (
                <div className="space-y-4">
                  <textarea
                    value={newIdea}
                    onChange={(e) => setNewIdea(e.target.value)}
                    placeholder="What's your brilliant idea?"
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    rows="3"
                    autoFocus
                  />
                  <div className="flex items-center justify-between">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id} className="bg-slate-800">
                          {category.icon} {category.name}
                        </option>
                      ))}
                    </select>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setIsAddingIdea(false);
                          setNewIdea('');
                        }}
                        className="px-4 py-2 text-slate-300 hover:text-white transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleAddIdea}
                        disabled={!newIdea.trim()}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all"
                      >
                        <Send className="w-4 h-4" />
                        Add Idea
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Ideas Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">
                  Ideas ({ideas.length})
                </h3>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all text-sm">
                    Sort by Votes
                  </button>
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all text-sm">
                    Sort by Time
                  </button>
                </div>
              </div>

              {ideas.length === 0 ? (
                <div className="text-center py-16">
                  <Lightbulb className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-400 mb-2">No ideas yet</h3>
                  <p className="text-slate-500">Be the first to share a brilliant idea!</p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {ideas
                    .sort((a, b) => b.votes - a.votes)
                    .map((idea) => {
                      const categoryInfo = getCategoryInfo(idea.category);
                      return (
                        <div
                          key={idea.id}
                          className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all group"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-xl bg-gradient-to-r ${categoryInfo.color} text-white text-sm`}>
                                {categoryInfo.icon}
                              </div>
                              <div>
                                <span className="text-sm text-slate-400">{categoryInfo.name}</span>
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                  <Clock className="w-3 h-3" />
                                  {idea.timestamp.toLocaleTimeString()}
                                  <span>by {idea.author}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors">
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => handleDeleteIdea(idea.id)}
                                className="p-2 hover:bg-red-500/20 rounded-lg text-slate-400 hover:text-red-400 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          
                          <p className="text-white text-lg mb-4 leading-relaxed">
                            {idea.text}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <button
                              onClick={() => handleVote(idea.id)}
                              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all text-white hover:text-yellow-400"
                            >
                              <Star className="w-4 h-4" />
                              <span className="font-medium">{idea.votes}</span>
                            </button>
                            <div className="text-xs text-slate-500">
                              Click to vote for this idea
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}