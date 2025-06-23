import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Award, Users, Sparkles, Globe, Heart } from 'lucide-react';

export function Home() {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  const cupParts = [
    { id: 'lid', title: 'Recyclable Lid', description: 'Made from sustainable materials' },
    { id: 'body', title: 'Insulated Body', description: 'Keeps drinks at optimal temperature' },
    { id: 'base', title: 'Anti-slip Base', description: 'Prevents spills and accidents' },
    { id: 'qr', title: 'QR Code', description: 'Tracks usage and rewards' },
  ];

  return (    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  Save the
                  <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
                    Planet
                  </span>
                  One Cup at a Time
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
                  🌱 Track, reward, and reduce paper cup usage on our campus.
                  Join the movement towards a sustainable future and earn amazing rewards!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/track"
                  className="group bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl"
                >
                  <Sparkles className="h-6 w-6" />
                  <span>Get Started</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/impact"
                  className="group bg-transparent border-3 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Globe className="h-6 w-6" />
                  <span>View Impact</span>
                </Link>
              </div>

              {/* Stats Preview */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">5,678</div>
                  <div className="text-white/80">Cups Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-300">1,234</div>
                  <div className="text-white/80">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">789kg</div>
                  <div className="text-white/80">CO₂ Reduced</div>
                </div>
              </div>
            </div>
              <div className="relative lg:block animate-slide-in-right">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Main Cup Image */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 group">
                  <img
                    src="https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=600"
                    alt="Sustainable Cup"
                    className="w-full h-96 object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Interactive Hotspots */}
                  <div className="absolute top-6 left-6 w-4 h-4 bg-green-400 rounded-full animate-pulse cursor-pointer hover:scale-150 transition-transform duration-300" 
                       onMouseEnter={() => setHoveredPart('lid')}
                       onMouseLeave={() => setHoveredPart(null)}>
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                  
                  <div className="absolute top-1/3 right-6 w-4 h-4 bg-blue-400 rounded-full animate-pulse cursor-pointer hover:scale-150 transition-transform duration-300" 
                       onMouseEnter={() => setHoveredPart('body')}
                       onMouseLeave={() => setHoveredPart(null)}>
                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping"></div>
                  </div>
                  
                  <div className="absolute bottom-20 left-6 w-4 h-4 bg-purple-400 rounded-full animate-pulse cursor-pointer hover:scale-150 transition-transform duration-300" 
                       onMouseEnter={() => setHoveredPart('base')}
                       onMouseLeave={() => setHoveredPart(null)}>
                    <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping"></div>
                  </div>
                  
                  <div className="absolute bottom-6 right-6 w-4 h-4 bg-yellow-400 rounded-full animate-pulse cursor-pointer hover:scale-150 transition-transform duration-300" 
                       onMouseEnter={() => setHoveredPart('qr')}
                       onMouseLeave={() => setHoveredPart(null)}>
                    <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping"></div>
                  </div>
                </div>
                
                {/* Tooltip that appears on hover - positioned below the image */}
                {hoveredPart && (
                  <div className="mt-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/20 transform transition-all duration-500 animate-fade-in">
                    {cupParts.map((part) => {
                      if (part.id === hoveredPart) {
                        return (
                          <div key={part.id} className="text-center">
                            <h3 className="font-bold text-gray-800 text-lg mb-2">{part.title}</h3>
                            <p className="text-gray-600">{part.description}</p>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4 animate-fade-in">
              ✨ Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
              Discover how our platform makes sustainability fun, rewarding, and impactful
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Track Usage Card */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-white/20 hover-glow animate-fade-in">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                  <Leaf className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-white rounded-full p-2 group-hover:animate-spin">
                  <Sparkles className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-green-600 transition-colors">Track Usage</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                🔍 Scan QR codes and log your impact. Watch your contribution to sustainability grow with every scan and become an eco-hero!
              </p>
              <Link to="/track" className="group/link inline-flex items-center text-green-600 font-bold hover:text-green-700 transition-colors">
                Learn More 
                <ArrowRight className="ml-2 h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Earn Rewards Card */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-white/20 hover-glow animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-orange-400 text-white rounded-full p-2 group-hover:animate-bounce">
                  <Heart className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">Earn Rewards</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                🎁 Turn your sustainable choices into exciting rewards. Redeem points for free drinks, exclusive perks, and amazing prizes!
              </p>
              <Link to="/rewards" className="group/link inline-flex items-center text-purple-600 font-bold hover:text-purple-700 transition-colors">
                View Rewards
                <ArrowRight className="ml-2 h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Join Mission Card */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-white/20 hover-glow animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-green-400 text-white rounded-full p-2 group-hover:animate-pulse">
                  <Globe className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">Join the Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                🤝 Be part of a community dedicated to reducing waste. Connect with eco-conscious peers and make a real difference together!
              </p>
              <Link to="/distributors" className="group/link inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors">
                Join Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-12 animate-fade-in">🌍 Our Global Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2 transform hover:scale-110 transition-all duration-300 hover-glow">
              <div className="text-5xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-bounce-in">50k+</div>
              <div className="text-white/80 text-lg">Cups Saved</div>
            </div>
            <div className="space-y-2 transform hover:scale-110 transition-all duration-300 hover-glow" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent animate-bounce-in">12k+</div>
              <div className="text-white/80 text-lg">Active Users</div>
            </div>
            <div className="space-y-2 transform hover:scale-110 transition-all duration-300 hover-glow" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl font-bold bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent animate-bounce-in">2.5T</div>
              <div className="text-white/80 text-lg">CO₂ Reduced</div>
            </div>
            <div className="space-y-2 transform hover:scale-110 transition-all duration-300 hover-glow" style={{animationDelay: '0.3s'}}>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent animate-bounce-in">100+</div>
              <div className="text-white/80 text-lg">Partner Locations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}