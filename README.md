# Sustainable Cups 컵


Currently working on this so you may see updates...
**Save the Planet, One Cup at a Time.**

Sustainable Cups is a web application designed to reduce paper cup waste on college campuses. Students are motivated to use reusable cups through a system of tracking, rewards, and gamification.

![Sustainable Cups Screenshot](https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=1200)


---

## About The Project

This project tackles the environmental problem of single-use cup waste. By creating a system within a campus, we encourage sustainable practices. The application serves as the central hub for users, distributors, and administrators to participate in this initiative.

### Core Concepts
*   **Track:** Users scan a QR code on their cup each time they use it.
*   **Reward:** Each scan earns points that can be redeemed for real-world rewards like free coffee or discounts at partner vendors.
*   **Impact:** The collective effort is visualized on an impact dashboard, showing cups saved, carbon footprint reduced, and celebrating top contributors.

---

## Features

*   **QR Code Scanning:** QR code scanning using the device's camera
*   **Impact Dashboard:** Charts and statistics showing environmental impact
*   **Rewards System:** Redeemable rewards from participating distributors
*   **Gamification:** Leaderboard and user badges for achieving milestones
*   **Distributor Directory:** List of participating locations with contact information
*   **Responsive Design:** User interface that works on desktop, tablet, and mobile devices
*   **Multiple User Roles:** Support for regular users, distributors, and administrators

---

## Tech Stack

This project uses the following technologies:

*   **Frontend:** React, TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Routing:** React Router
*   **Charting:** Chart.js & react-chartjs-2
*   **QR Scanning:** @zxing/library
*   **Icons:** Lucide React

---

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
*   Node.js (which includes npm)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your_username/sustainable-cups.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd sustainable-cups
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

### Running the Application

*   **Run the development server:**
    ```sh
    npm run dev
    ```
    This will start the application in development mode. Open http://localhost:5173 to view it in the browser.

*   **Build for production:**
    ```sh
    npm run build
    ```
    This will build the app for production to the `dist` folder.

---

## Project Structure

The codebase is organized as follows:

```
/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components (Header, Footer, etc.)
│   ├── pages/            # Page components corresponding to routes (Home, Track, etc.)
│   ├── types.ts          # TypeScript type definitions
│   ├── App.tsx           # Main app component with routing setup
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles and Tailwind directives
├── package.json          # Project dependencies and scripts
└── vite.config.ts        # Vite configuration
└── README.md             # You are here!
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

*   Icons by Lucide
*   Inspiration for a greener planet.

