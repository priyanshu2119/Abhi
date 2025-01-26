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
import { Trophy, Leaf, Recycle } from 'lucide-react';

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
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        tension: 0.4,
      }
    ]
  };

  const pieChartData = {
    labels: ['Reusable Cups', 'Disposable Cups'],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: [
          'rgb(34, 197, 94)',
          'rgb(239, 68, 68)',
        ],
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Leaf className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-600">Cups Saved Today</p>
              <h3 className="text-2xl font-bold">{stats.cupsSavedToday}</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Recycle className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-600">Cups Saved This Month</p>
              <h3 className="text-2xl font-bold">{stats.cupsSavedMonth}</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Trophy className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-600">Carbon Footprint Reduced (kg)</p>
              <h3 className="text-2xl font-bold">{stats.carbonFootprint}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Cups Saved Over Time</h2>
          <Line data={lineChartData} />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Cup Usage Distribution</h2>
          <Pie data={pieChartData} />
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-6">Top Contributors</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cups Saved</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {stats.leaderboard.map((user, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">#{index + 1}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{user.name}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{user.cupsSaved}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{user.points}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}