import { useState, useEffect } from 'react';
import { ScanBarcode, Award, AlertCircle, Trophy, Target, TrendingUp, Star, Zap, Camera } from 'lucide-react';
import { BrowserMultiFormatReader } from '@zxing/library';

export function Track() {
  const [scanning, setScanning] = useState(false);
  const [points, setPoints] = useState(150);
  const [totalScans, setTotalScans] = useState(15);
  const [badges] = useState(['Eco Starter', 'Weekly Champion']);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    let codeReader: BrowserMultiFormatReader | null = null;

    const initializeScanner = async () => {
      if (scanning) {
        codeReader = new BrowserMultiFormatReader();
        try {
          const videoElement = document.getElementById('video') as HTMLVideoElement;
          await codeReader.decodeFromVideoDevice(null, videoElement, (result) => {
            if (result) {
              handleSuccessfulScan();
            }
          });
        } catch {
          setMessage({ type: 'error', text: 'Error accessing camera. Please check permissions.' });
        }
      }
    };

    initializeScanner();

    return () => {
      if (codeReader) {
        codeReader.reset();
      }
    };
  }, [scanning]);

  const handleSuccessfulScan = () => {
    setPoints(prev => prev + 10);
    setTotalScans(prev => prev + 1);
    setMessage({ type: 'success', text: 'Cup scanned successfully! You earned 10 points!' });
    setScanning(false);
  };

  const cupJourney = [
    {
      title: 'Manufacturer',
      description: 'Cups are produced with sustainable materials',
      status: 'completed'
    },
    {
      title: 'Distributor',
      description: 'QR codes are assigned and cups are distributed',
      status: 'completed'
    },
    {
      title: 'Restaurant',
      description: 'Cups are used in participating locations',
      status: 'active'
    },
    {
      title: 'Customer',
      description: 'Track usage and earn rewards',
      status: 'pending'
    },
    {
      title: 'Recycling',
      description: 'Cups are collected and recycled properly',
      status: 'pending'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
            🌱 Track Your Impact
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Every scan makes a difference. Track your sustainable cup usage and earn rewards!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 -mt-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Scanner Section */}
          <div className="xl:col-span-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Scan Your Cup
                </h2>
                <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
                  <Camera className="h-5 w-5 text-green-600" />
                  <span className="text-green-700 font-medium">Ready to Scan</span>
                </div>
              </div>
              
              <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-8 shadow-inner">
                {scanning ? (
                  <video
                    id="video"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="relative">
                      <ScanBarcode className="h-24 w-24 text-gray-400 animate-bounce" />
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1">
                        <Zap className="h-4 w-4" />
                      </div>
                    </div>
                    <p className="text-gray-600 mt-4 font-medium">Position your cup's QR code here</p>
                  </div>
                )}
              </div>

              <button
                onClick={() => setScanning(!scanning)}
                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  scanning 
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg hover:shadow-red-300' 
                    : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg hover:shadow-green-300'
                } active:scale-95`}
              >
                {scanning ? '🛑 Stop Scanning' : '📸 Start Scanning'}
              </button>

              {message && (
                <div className={`mt-6 p-6 rounded-2xl border-2 transition-all duration-500 ${
                  message.type === 'success' 
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-800' 
                    : 'bg-gradient-to-r from-red-50 to-pink-50 border-red-200 text-red-800'
                }`}>
                  <div className="flex items-center space-x-3">
                    {message.type === 'success' ? (
                      <div className="bg-green-500 p-2 rounded-full">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                    ) : (
                      <div className="bg-red-500 p-2 rounded-full">
                        <AlertCircle className="h-6 w-6 text-white" />
                      </div>
                    )}
                    <span className="text-lg font-medium">{message.text}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Stats Section */}
          <div className="space-y-6">
            {/* Impact Stats */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Impact ✨
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold opacity-90">Points Earned</h3>
                      <p className="text-4xl font-bold">{points}</p>
                    </div>
                    <Trophy className="h-12 w-12 opacity-80" />
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold opacity-90">Cups Scanned</h3>
                      <p className="text-4xl font-bold">{totalScans}</p>
                    </div>
                    <Target className="h-12 w-12 opacity-80" />
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-6 bg-gray-100 rounded-full p-1">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full p-3 text-center text-white font-bold" style={{width: `${Math.min((points / 200) * 100, 100)}%`}}>
                  {Math.round((points / 200) * 100)}%
                </div>
              </div>
              <p className="text-center text-gray-600 mt-2 font-medium">Progress to next reward</p>
            </div>

            {/* Badges */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Badges Earned 🏆
              </h3>
              <div className="space-y-3">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-3 rounded-xl font-semibold flex items-center space-x-2 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <Star className="h-5 w-5" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Quick Stats 📊
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">This Week</span>
                  <span className="font-bold text-green-600">5 scans</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Streak</span>
                  <span className="font-bold text-orange-600">3 days 🔥</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Rank</span>
                  <span className="font-bold text-purple-600">#12</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cup Journey Section */}
        <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            🌍 Sustainable Cup Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {cupJourney.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className={`p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  step.status === 'completed'
                    ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg'
                    : step.status === 'active'
                    ? 'bg-gradient-to-br from-blue-400 to-cyan-500 text-white shadow-lg animate-pulse'
                    : 'bg-gradient-to-br from-gray-200 to-gray-300 text-gray-600'
                }`}>
                  <div className="text-center">
                    <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg ${
                      step.status === 'completed' || step.status === 'active'
                        ? 'bg-white/20 text-white'
                        : 'bg-white text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm opacity-90">{step.description}</p>
                  </div>
                </div>
                
                {/* Connection Line */}
                {index < cupJourney.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-gray-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}