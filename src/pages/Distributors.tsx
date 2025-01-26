import React from 'react';
import { MapPin, Phone, Mail, Coffee, Pizza, ShoppingBag } from 'lucide-react';

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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Participating Distributors</h1>
        <p className="text-gray-600">Find locations where you can use your sustainable cup</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {distributors.map((distributor) => {
          const Icon = distributor.icon;

          return (
            <div key={distributor.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={distributor.imageUrl}
                  alt={distributor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                  <Icon className="h-6 w-6 text-green-600" />
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{distributor.name}</h2>
                <p className="text-gray-600 mb-4">{distributor.type}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    <span>{distributor.address}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="h-5 w-5" />
                    <span>{distributor.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="h-5 w-5" />
                    <span>{distributor.email}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-3">Impact Statistics</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Cups</p>
                      <p className="text-lg font-bold text-green-600">
                        {distributor.stats.cupsDistributed}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Users</p>
                      <p className="text-lg font-bold text-green-600">
                        {distributor.stats.activeUsers}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Rewards</p>
                      <p className="text-lg font-bold text-green-600">
                        {distributor.stats.rewardsRedeemed}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}