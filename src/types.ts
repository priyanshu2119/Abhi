export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'distributor' | 'admin';
  points: number;
  cupsScanned: number;
  badges: string[];
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  pointsRequired: number;
  distributorId: string;
  imageUrl: string;
}

export interface CupScan {
  id: string;
  userId: string;
  cupId: string;
  timestamp: Date;
  location: string;
}

export interface ImpactStats {
  cupsSavedToday: number;
  cupsSavedMonth: number;
  carbonFootprint: number;
  leaderboard: {
    userId: string;
    name: string;
    cupsSaved: number;
    points: number;
  }[];
}