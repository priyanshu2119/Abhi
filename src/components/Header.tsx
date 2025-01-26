import React from 'react';
import { Coffee, Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-green-600">Sustainable Cups</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-green-600">Home</Link>
            <Link to="/track" className="text-gray-600 hover:text-green-600">Track Cup Usage</Link>
            <Link to="/impact" className="text-gray-600 hover:text-green-600">Impact Dashboard</Link>
            <Link to="/rewards" className="text-gray-600 hover:text-green-600">Rewards</Link>
            <Link to="/distributors" className="text-gray-600 hover:text-green-600">Distributors</Link>
            
            <div className="relative">
              <button
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                className="flex items-center space-x-1 text-gray-600 hover:text-green-600"
              >
                <User className="h-5 w-5" />
                <span>Login</span>
              </button>

              {isLoginOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link 
                    to="/track" 
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50"
                    onClick={() => setIsLoginOpen(false)}
                  >
                    Distributor Login
                  </Link>
                  <Link 
                    to="/track" 
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50"
                    onClick={() => setIsLoginOpen(false)}
                  >
                    User Login
                  </Link>
                  <Link 
                    to="/track" 
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50"
                    onClick={() => setIsLoginOpen(false)}
                  >
                    Admin Login
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block text-gray-600 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/track" className="block text-gray-600 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>Track Cup Usage</Link>
            <Link to="/impact" className="block text-gray-600 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>Impact Dashboard</Link>
            <Link to="/rewards" className="block text-gray-600 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>Rewards</Link>
            <Link to="/distributors" className="block text-gray-600 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>Distributors</Link>
            <div className="pt-4 border-t border-gray-200">
              <Link to="/track" className="block text-gray-600 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>Distributor Login</Link>
              <Link to="/track" className="block text-gray-600 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>User Login</Link>
              <Link to="/track" className="block text-gray-600 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>Admin Login</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}