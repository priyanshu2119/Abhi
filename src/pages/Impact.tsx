import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Trophy, Leaf, Recycle, TrendingUp, Users, Award, Globe } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export function Impact() {
  const stats = {
    cupsSavedToday: 234,
    cupsSavedMonth: 5678,
    carbonFootprint: 789,
    leaderboard: [
      { name: 'Sarah Johnson', cupsSaved: 156, points: 1560 },
      { name: 'Mike Chen', cupsSaved: 143, points: 1430 },
      { name: 'Emily Davis', cupsSaved: 128, points: 1280 },
      { name: 'Alex Kim', cupsSaved: 112, points: 1120 },
      { name: 'Lisa Brown', cupsSaved: 98, points: 980 },
    ]
  };
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Cups Saved',
        data: [1200, 1900, 3000, 3500, 4200, 5678],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        borderWidth: 3,
        pointBackgroundColor: 'rgb(16, 185, 129)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        fill: true,
      }
    ]
  };

  const pieChartData = {
    labels: ['Reusable Cups', 'Disposable Cups'],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: [
          'rgb(16, 185, 129)',
          'rgb(239, 68, 68)',
        ],
        borderColor: [
          'rgb(16, 185, 129)',
          'rgb(239, 68, 68)',
        ],
        borderWidth: 3,
        hoverOffset: 10,
      }
    ]
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
            🌍 Impact Dashboard
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            See the real-time environmental impact of our sustainable cup initiative!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 -mt-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="flex items-center space-x-6">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-gray-600 font-medium mb-1">Cups Saved Today</p>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {stats.cupsSavedToday}
                </h3>
                <p className="text-green-600 text-sm font-medium">+12% from yesterday</p>
              </div>
            </div>
          </div>

          <div className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="flex items-center space-x-6">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Recycle className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-gray-600 font-medium mb-1">Cups Saved This Month</p>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {stats.cupsSavedMonth}
                </h3>
                <p className="text-blue-600 text-sm font-medium">+25% from last month</p>
              </div>
            </div>
          </div>

          <div className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="flex items-center space-x-6">
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-gray-600 font-medium mb-1">Carbon Footprint Reduced</p>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stats.carbonFootprint}kg
                </h3>
                <p className="text-purple-600 text-sm font-medium">Equivalent to 3.2 trees</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                📈 Cups Saved Over Time
              </h2>
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Growth Trend
              </div>
            </div>
            <div className="h-80">
              <Line data={lineChartData} options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false
                  }
                },
                scales: {
                  y: {
                    grid: {
                      color: 'rgba(0,0,0,0.1)'
                    }
                  },
                  x: {
                    grid: {
                      display: false
                    }
                  }
                }
              }} />
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                🥤 Cup Usage Distribution
              </h2>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Sustainability Ratio
              </div>
            </div>
            <div className="h-80">
              <Pie data={pieChartData} options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom'
                  }
                }
              }} />
            </div>
          </div>
        </div>

        {/* Global Impact Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-12 border border-white/20">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            🌱 Environmental Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🌳</span>
              </div>
              <div className="text-3xl font-bold text-green-600">15.2</div>
              <div className="text-gray-600 font-medium">Trees Worth of CO₂</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💧</span>
              </div>
              <div className="text-3xl font-bold text-blue-600">2.8k</div>
              <div className="text-gray-600 font-medium">Liters Water Saved</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">♻️</span>
              </div>
              <div className="text-3xl font-bold text-purple-600">1.2k</div>
              <div className="text-gray-600 font-medium">Kg Waste Reduced</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="text-3xl font-bold text-orange-600">890</div>
              <div className="text-gray-600 font-medium">kWh Energy Saved</div>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              🏆 Top Contributors
            </h2>
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Hall of Fame
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider rounded-l-2xl">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Contributor</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Cups Saved</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider rounded-r-2xl">Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {stats.leaderboard.map((user, index) => (
                  <tr key={index} className="hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        {index < 3 ? (
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                            index === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                            index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-500' :
                            'bg-gradient-to-r from-orange-400 to-red-500'
                          }`}>
                            {index + 1}
                          </div>
                        ) : (
                          <span className="text-lg font-bold text-gray-600">#{index + 1}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                          {user.name.charAt(0)}
                        </div>
                        <span className="text-lg font-medium text-gray-900">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-lg font-bold text-emerald-600">{user.cupsSaved}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <Trophy className="h-5 w-5 text-yellow-500" />
                        <span className="text-lg font-bold text-gray-900">{user.points}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}