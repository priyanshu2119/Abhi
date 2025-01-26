import React, { useState, useEffect } from 'react';
import { ScanBarcode, Award, AlertCircle } from 'lucide-react';
import { BrowserMultiFormatReader } from '@zxing/library';

export function Track() {
  const [scanning, setScanning] = useState(false);
  const [lastScan, setLastScan] = useState<string | null>(null);
  const [points, setPoints] = useState(150);
  const [totalScans, setTotalScans] = useState(15);
  const [badges, setBadges] = useState(['Eco Starter', 'Weekly Champion']);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    let codeReader: BrowserMultiFormatReader | null = null;

    const initializeScanner = async () => {
      if (scanning) {
        codeReader = new BrowserMultiFormatReader();
        try {
          const videoElement = document.getElementById('video') as HTMLVideoElement;
          await codeReader.decodeFromVideoDevice(undefined, videoElement, (result) => {
            if (result) {
              handleSuccessfulScan(result.getText());
            }
          });
        } catch (err) {
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

  const handleSuccessfulScan = (qrData: string) => {
    setLastScan(qrData);
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
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Scanner Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Scan Your Cup</h2>
          
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-6">
            {scanning ? (
              <video
                id="video"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <ScanBarcode className="h-16 w-16 text-gray-400" />
              </div>
            )}
          </div>

          <button
            onClick={() => setScanning(!scanning)}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            {scanning ? 'Stop Scanning' : 'Start Scanning'}
          </button>

          {message && (
            <div className={`mt-4 p-4 rounded-lg ${
              message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              <div className="flex items-center space-x-2">
                {message.type === 'success' ? (
                  <Award className="h-5 w-5" />
                ) : (
                  <AlertCircle className="h-5 w-5" />
                )}
                <span>{message.text}</span>
              </div>
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Your Impact</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-600">Points</h3>
                <p className="text-3xl font-bold text-green-600">{points}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-600">Cups Scanned</h3>
                <p className="text-3xl font-bold text-green-600">{totalScans}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Badges Earned</h3>
              <div className="flex flex-wrap gap-2">
                {badges.map((badge, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Cup Journey */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Cup Journey</h2>
            <div className="space-y-4">
              {cupJourney.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.status === 'completed'
                      ? 'bg-green-600 text-white'
                      : step.status === 'active'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}