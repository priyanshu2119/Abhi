import React from 'react';
import { MapPin, Phone, Mail, Coffee, Pizza, ShoppingBag, Star, TrendingUp, Users, Award } from 'lucide-react';

export function Distributors() {
  const distributors = [
    {
      id: 'cafe1',
      name: 'Green Bean Café',
      type: 'Coffee Shop',
      icon: Coffee,
      address: '123 Campus Drive',
      phone: '(555) 123-4567',
      email: 'contact@greenbean.com',
      imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400',
      stats: {
        cupsDistributed: 1200,
        activeUsers: 450,
        rewardsRedeemed: 89
      }
    },
    {
      id: 'pizza1',
      name: 'Eco Pizza',
      type: 'Restaurant',
      icon: Pizza,
      address: '456 University Ave',
      phone: '(555) 234-5678',
      email: 'hello@ecopizza.com',
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400',
      stats: {
        cupsDistributed: 800,
        activeUsers: 320,
        rewardsRedeemed: 65
      }
    },
    {
      id: 'shop1',
      name: 'Campus Market',
      type: 'Convenience Store',
      icon: ShoppingBag,
      address: '789 College Blvd',
      phone: '(555) 345-6789',
      email: 'info@campusmarket.com',
      imageUrl: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=400',
      stats: {
        cupsDistributed: 950,
        activeUsers: 380,
        rewardsRedeemed: 72
      }
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
            🏪 Partner Locations
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover amazing locations where you can use your sustainable cup and earn rewards!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 -mt-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-white/20">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {distributors.length}+
            </div>
            <div className="text-gray-600 font-medium">Partner Locations</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-white/20">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              2.9k+
            </div>
            <div className="text-gray-600 font-medium">Cups Distributed</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-white/20">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              1.1k+
            </div>
            <div className="text-gray-600 font-medium">Active Users</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-white/20">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              226
            </div>
            <div className="text-gray-600 font-medium">Rewards Redeemed</div>
          </div>
        </div>

        {/* Distributors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {distributors.map((distributor) => {
            const Icon = distributor.icon;

            return (
              <div key={distributor.id} className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={distributor.imageUrl}
                    alt={distributor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                    ⭐ Featured
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h2 className="text-2xl font-bold mb-1">{distributor.name}</h2>
                    <p className="text-white/90 font-medium">{distributor.type}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <MapPin className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="font-medium">{distributor.address}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600 hover:text-green-600 transition-colors">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Phone className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="font-medium">{distributor.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 transition-colors">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <Mail className="h-4 w-4 text-purple-600" />
                      </div>
                      <span className="font-medium">{distributor.email}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <h3 className="font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      📊 Impact Statistics
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-3 rounded-xl mb-2">
                          <TrendingUp className="h-5 w-5 text-white mx-auto" />
                        </div>
                        <p className="text-xs text-gray-600 mb-1">Cups</p>
                        <p className="text-lg font-bold text-green-600">
                          {distributor.stats.cupsDistributed}
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-blue-400 to-cyan-500 p-3 rounded-xl mb-2">
                          <Users className="h-5 w-5 text-white mx-auto" />
                        </div>
                        <p className="text-xs text-gray-600 mb-1">Users</p>
                        <p className="text-lg font-bold text-blue-600">
                          {distributor.stats.activeUsers}
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-3 rounded-xl mb-2">
                          <Award className="h-5 w-5 text-white mx-auto" />
                        </div>
                        <p className="text-xs text-gray-600 mb-1">Rewards</p>
                        <p className="text-lg font-bold text-purple-600">
                          {distributor.stats.rewardsRedeemed}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-gray-600 text-sm ml-2">4.9 (127 reviews)</span>
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                      Visit Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* How to Participate Section */}
        <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🤝 How to Participate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Partners</h3>
              <p className="text-gray-600">Find participating locations near you and bring your sustainable cup</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Scan & Earn</h3>
              <p className="text-gray-600">Scan the QR code on your cup and earn points for each use</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-400 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Get Rewards</h3>
              <p className="text-gray-600">Redeem your points for discounts and exclusive offers at partner locations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}