import React from 'react';
import { Coffee, Pizza, ShoppingBag, Sparkles, Gift, Crown } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
            🎁 Rewards Center
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Your sustainable actions deserve amazing rewards! Redeem your points for exclusive offers.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 -mt-8">
        {/* Points Display */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Your Reward Points
              </h2>
              <p className="text-gray-600 text-lg">Redeem your points for exciting rewards and exclusive offers!</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Crown className="h-8 w-8 text-white" />
                  <span className="text-3xl font-bold text-white">{points}</span>
                  <span className="text-purple-100 font-medium">pts</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-orange-400 to-pink-400 px-6 py-4 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-white font-bold">Level 3</div>
                  <div className="text-orange-100 text-sm">Gold Member</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Points Progress */}
          <div className="mt-6 bg-gray-100 rounded-full p-1">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3 text-center text-white font-bold transition-all duration-500" 
              style={{width: `${Math.min((points / 300) * 100, 100)}%`}}
            >
              {Math.round((points / 300) * 100)}%
            </div>
          </div>
          <p className="text-center text-gray-600 mt-2 font-medium">
            {300 - points > 0 ? `${300 - points} points until next level!` : 'Max level reached! 🎉'}
          </p>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rewards.map((reward) => {
            const Icon = reward.icon;
            const canRedeem = points >= reward.pointsRequired;
            const progress = Math.min((points / reward.pointsRequired) * 100, 100);

            return (
              <div key={reward.id} className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={reward.imageUrl}
                    alt={reward.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                    <Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  {canRedeem && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full font-bold text-sm animate-pulse">
                      <Sparkles className="h-4 w-4 inline mr-1" />
                      Ready!
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {reward.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{reward.description}</p>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="text-gray-600 font-medium">Progress</span>
                      <span className="font-bold text-purple-600">{progress.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-3 transition-all duration-500 shadow-sm"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Gift className="h-5 w-5 text-purple-500" />
                      <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {reward.pointsRequired} pts
                      </span>
                    </div>
                    <button
                      onClick={() => handleRedeem(reward.id)}
                      disabled={!canRedeem}
                      className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 ${
                        canRedeem
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-purple-300 active:scale-95'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {canRedeem ? '🎉 Redeem Now!' : 'Not Enough Points'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* How it Works Section */}
        <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            🌟 How Rewards Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Scan Cups</h3>
              <p className="text-gray-600">Use sustainable cups and scan QR codes to earn points</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Earn Points</h3>
              <p className="text-gray-600">Accumulate points with every sustainable action you take</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-400 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Redeem Rewards</h3>
              <p className="text-gray-600">Exchange your points for amazing rewards and offers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}