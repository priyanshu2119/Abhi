import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Award, Users } from 'lucide-react';

export function Home() {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  const cupParts = [
    { id: 'lid', title: 'Recyclable Lid', description: 'Made from sustainable materials' },
    { id: 'body', title: 'Insulated Body', description: 'Keeps drinks at optimal temperature' },
    { id: 'base', title: 'Anti-slip Base', description: 'Prevents spills and accidents' },
    { id: 'qr', title: 'QR Code', description: 'Tracks usage and rewards' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-green-600 to-green-400">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-5xl font-bold mb-6">
              Save the Planet, One Cup at a Time
            </h1>
            <p className="text-xl mb-8">
              Track, reward, and reduce paper cup usage on our campus.
              Join the movement towards a sustainable future.
            </p>
            <div className="space-x-4">
              <Link
                to="/track"
                className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition inline-block"
              >
                Get Started
              </Link>
              <Link
                to="/impact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition inline-block"
              >
                View Impact
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block w-1/2 relative">
            <div className="relative w-[300px] h-[400px] mx-auto">
              <img
                src="https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=600"
                alt="Reusable Cup"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
              {cupParts.map((part, index) => (
                <div
                  key={part.id}
                  className="absolute cursor-pointer transform transition-all duration-300"
                  style={{
                    top: `${25 * index}%`,
                    right: hoveredPart === part.id ? '120%' : '110%',
                  }}
                  onMouseEnter={() => setHoveredPart(part.id)}
                  onMouseLeave={() => setHoveredPart(null)}
                >
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h3 className="font-bold text-green-600">{part.title}</h3>
                    <p className="text-sm text-gray-600">{part.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Track Usage Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Track Usage</h3>
              <p className="text-gray-600 mb-4">
                Scan QR codes and log your impact. Watch your contribution to sustainability grow with every scan.
              </p>
              <Link to="/track" className="text-green-600 font-semibold flex items-center hover:text-green-700">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Earn Rewards Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Earn Rewards</h3>
              <p className="text-gray-600 mb-4">
                Turn your sustainable choices into exciting rewards. Redeem points for free drinks and exclusive perks.
              </p>
              <Link to="/rewards" className="text-green-600 font-semibold flex items-center hover:text-green-700">
                View Rewards <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Join Mission Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Join the Mission</h3>
              <p className="text-gray-600 mb-4">
                Be part of a community dedicated to reducing waste. Connect with eco-conscious peers and distributors.
              </p>
              <Link to="/distributors" className="text-green-600 font-semibold flex items-center hover:text-green-700">
                Join Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}