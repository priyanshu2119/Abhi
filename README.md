# Sustainable Cups 컵

**Save the Planet, One Cup at a Time.**

Sustainable Cups is a modern, responsive web application designed to reduce paper cup waste on college campuses. It leverages technology to create an engaging ecosystem where students are motivated to use reusable cups through a system of tracking, rewards, and gamification.

![Sustainable Cups Screenshot](https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=1200)
*(Image placeholder: A screenshot of the application's home page would be perfect here.)*

---

## 🚀 About The Project

The project aims to tackle the environmental problem of single-use cup waste. By creating a closed-loop system within a campus, we encourage a behavioral shift towards sustainability. The application serves as the central hub for users, distributors, and administrators to participate in this green initiative.

### Core Concepts
*   **Track:** Users scan a QR code on their cup each time they use it.
*   **Reward:** Each scan earns points that can be redeemed for real-world rewards like free coffee or discounts at partner vendors.
*   **Impact:** The collective effort is visualized on an impact dashboard, showing cups saved, carbon footprint reduced, and celebrating top contributors.

---

## ✨ Features

*   **QR Code Scanning:** Real-time QR code scanning directly in the browser using the device's camera.
*   **Impact Dashboard:** Dynamic charts and statistics showing the positive environmental impact of the program.
*   **Rewards System:** A catalog of redeemable rewards from participating distributors.
*   **Gamification:** A leaderboard to foster friendly competition and user badges for achieving milestones.
*   **Distributor Directory:** A list of all participating locations with contact information and stats.
*   **Responsive Design:** A beautiful and intuitive user interface that works seamlessly on desktops, tablets, and mobile devices.
*   **Multiple User Roles:** (Inferred) Separate login and dashboard functionalities for regular users, distributors, and administrators.

---

## 🛠️ Tech Stack

This project is built with a modern and robust technology stack:

*   **Frontend:** [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Routing:** [React Router](https://reactrouter.com/)
*   **Charting:** [Chart.js](https://www.chartjs.org/) & [react-chartjs-2](https://react-chartjs-2.js.org/)
*   **QR Scanning:** [@zxing/library](https://github.com/zxing-js/library)
*   **Icons:** [Lucide React](https://lucide.dev/)

---

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
*   [Node.js](https://nodejs.org/) (which includes npm)

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
    This will start the application in development mode. Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser.

*   **Build for production:**
    ```sh
    npm run build
    ```
    This will build the app for production to the `dist` folder.

---

## 📂 Project Structure

The codebase is organized logically to maintain a clean and scalable structure.

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

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🙏 Acknowledgments

*   Icons by [Lucide](https://lucide.dev/)
*   Inspiration for a greener planet.

