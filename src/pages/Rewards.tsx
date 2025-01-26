import React from 'react';
import { Gift, Coffee, Pizza, ShoppingBag } from 'lucide-react';

export function Rewards() {
  const [points, setPoints] = React.useState(150);

  const rewards = [
    {
      id: '1',
      name: 'Free Coffee',
      description: 'Get a free coffee at any participating location',
      pointsRequired: 100,
      icon: Coffee,
      distributorId: 'cafe1',
      imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400'
    },
    {
      id: '2',
      name: 'Pizza Discount',
      description: '50% off any pizza order',
      pointsRequired: 200,
      icon: Pizza,
      distributorId: 'pizza1',
      imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400'
    },
    {
      id: '3',
      name: 'Eco Shopping Bag',
      description: 'Stylish reusable shopping bag',
      pointsRequired: 150,
      icon: ShoppingBag,
      distributorId: 'shop1',
      imageUrl: 'https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&w=400'
    }
  ];

  const handleRedeem = (rewardId: string) => {
    const reward = rewards.find(r => r.id === rewardId);
    if (reward && points >= reward.pointsRequired) {
      setPoints(prev => prev - reward.pointsRequired);
      alert(`Reward redeemed! Check your email for the voucher.`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Points Display */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Your Points</h2>
            <p className="text-gray-600">Redeem your points for exciting rewards</p>
          </div>
          <div className="bg-green-100 px-6 py-3 rounded-full">
            <span className="text-2xl font-bold text-green-600">{points} pts</span>
          </div>
        </div>
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward) => {
          const Icon = reward.icon;
          const canRedeem = points >= reward.pointsRequired;
          const progress = Math.min((points / reward.pointsRequired) * 100, 100);

          return (
            <div key={reward.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={reward.imageUrl}
                  alt={reward.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                  <Icon className="h-6 w-6 text-green-600" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{reward.name}</h3>
                <p className="text-gray-600 mb-4">{reward.description}</p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{progress.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 rounded-full h-2 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">
                    {reward.pointsRequired} pts
                  </span>
                  <button
                    onClick={() => handleRedeem(reward.id)}
                    disabled={!canRedeem}
                    className={`px-4 py-2 rounded-lg font-semibold ${
                      canRedeem
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {canRedeem ? 'Redeem' : 'Not Enough Points'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}