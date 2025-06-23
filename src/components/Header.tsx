import React from 'react';
import { Coffee, Menu, User, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-xl border-b border-white/20 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Coffee className="h-10 w-10 text-green-600 group-hover:scale-110 transition-transform duration-300" />
              <Sparkles className="h-4 w-4 text-yellow-500 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Sustainable Cups
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/track" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 relative group">
              Track Cup Usage
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/impact" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 relative group">
              Impact Dashboard
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/rewards" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 relative group">
              Rewards
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/distributors" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 relative group">
              Distributors
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <User className="h-5 w-5" />
                <span>Login</span>
              </button>

              {isLoginOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl py-2 z-50 border border-white/20 animate-fade-in">
                  <Link 
                    to="/track" 
                    className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 hover:text-green-700 transition-all duration-300 font-medium"
                    onClick={() => setIsLoginOpen(false)}
                  >
                    🏢 Distributor Login
                  </Link>
                  <Link 
                    to="/track" 
                    className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 hover:text-green-700 transition-all duration-300 font-medium"
                    onClick={() => setIsLoginOpen(false)}
                  >
                    👤 User Login
                  </Link>
                  <Link 
                    to="/track" 
                    className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 hover:text-green-700 transition-all duration-300 font-medium"
                    onClick={() => setIsLoginOpen(false)}
                  >
                    🔧 Admin Login
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-green-600 p-2 rounded-lg hover:bg-green-50 transition-all duration-300"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-white/20 animate-fade-in">
            <div className="space-y-3">
              <Link to="/" className="block text-gray-700 hover:text-green-600 font-medium py-2 px-4 rounded-lg hover:bg-green-50 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                🏠 Home
              </Link>
              <Link to="/track" className="block text-gray-700 hover:text-green-600 font-medium py-2 px-4 rounded-lg hover:bg-green-50 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                📱 Track Cup Usage
              </Link>
              <Link to="/impact" className="block text-gray-700 hover:text-green-600 font-medium py-2 px-4 rounded-lg hover:bg-green-50 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                📊 Impact Dashboard
              </Link>
              <Link to="/rewards" className="block text-gray-700 hover:text-green-600 font-medium py-2 px-4 rounded-lg hover:bg-green-50 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                🎁 Rewards
              </Link>
              <Link to="/distributors" className="block text-gray-700 hover:text-green-600 font-medium py-2 px-4 rounded-lg hover:bg-green-50 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                🏪 Distributors
              </Link>
              
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link to="/track" className="block text-gray-600 hover:text-green-600 py-2 px-4 rounded-lg hover:bg-green-50 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                  🏢 Distributor Login
                </Link>
                <Link to="/track" className="block text-gray-600 hover:text-green-600 py-2 px-4 rounded-lg hover:bg-green-50 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                  👤 User Login
                </Link>
                <Link to="/track" className="block text-gray-600 hover:text-green-600 py-2 px-4 rounded-lg hover:bg-green-50 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                  🔧 Admin Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}