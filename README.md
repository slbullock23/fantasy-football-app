# 🏈 Fantasy Football Web App

![Fantasy Football Banner](https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif)

![GitHub stars](https://img.shields.io/github/stars/slbullock23/fantasy-football-app?style=social)
![GitHub forks](https://img.shields.io/github/forks/slbullock23/fantasy-football-app?style=social)
![GitHub issues](https://img.shields.io/github/issues/slbullock23/fantasy-football-app)
![License](https://img.shields.io/github/license/slbullock23/fantasy-football-app)

Welcome to **Fantasy Football Web App** — where your private leagues, epic drafts, and friendly wagers come to life! Build your dream team, compete with friends, and track your fantasy points with mock sports betting data. No public gambling, just private group fun.  

---

## 🚀 Features

- 🏆 **Create & Join Leagues** – Start your private league and invite friends.  
- 🎯 **Custom Drafts** – Host real-time drafts and strategize your picks.  
- 🏈 **Assemble Teams** – Choose real-life players to dominate the leaderboard.  
- 📊 **Fantasy Points Scoring** – Points based on mock player stats, props, and odds.  
- 💸 **Private Bets** – Friendly wagers within your group only.  
- 🔒 **Secure Authentication** – Email/password or OAuth login.  
- 📱 **Responsive UI** – Works beautifully on desktop and mobile.  

---

## 🛠 Tech Stack

| Layer     | Technology                                |
|----------|-------------------------------------------|
| Frontend | React + TypeScript                        |
| Backend  | Node.js + Express (or Next.js API routes) |
| Database | PostgreSQL + Prisma ORM                   |
| Auth     | JWT-based                                 |
| Mock Data| Player stats, odds, and fantasy scoring   |

---

## 🏗 Architecture Overview
Frontend (React) <---> Backend API (Node.js/Express) <---> PostgreSQL Database (Prisma ORM)

- Frontend communicates via REST API endpoints.  
- Shared TypeScript types ensure type safety across the stack.  
- Mock sports/fantasy data makes development fast and fun.  

---

## 📄 Pages / Screens

- **Home:** Your leagues at a glance.  
- **League Creation:** Start or join a league instantly.  
- **Draft Board:** Draft players live with your friends.  
- **Team View:** Track your roster, points, and standings.  

---

## 🌟 Future Improvements

- 🔗 Real sports API integration for live stats  
- ⚡ Real-time updates using WebSockets  
- 🧠 Advanced scoring algorithms  
- 📜 Betting ledger and history  
- 📱 Fully mobile-responsive design  

---

## ⚡ Quick Setup Guide

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/fantasy-football-app.git
cd fantasy-football-app

2️⃣ Backend Setup
cd backend
npm install
cp .env.example .env
# Fill in DATABASE_URL and JWT_SECRET in .env
npx prisma migrate dev --name init
npm run seed
npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

4️⃣ Run Locally
Backend: http://localhost:4000
Frontend: http://localhost:5173

5️⃣ Environment Variables (.env)
DATABASE_URL=postgresql://user:password@localhost:5432/fantasydb
JWT_SECRET=your_jwt_secret
PORT=4000

🎉 Tips for Developers
Use mock data first to test drafts and scoring without hitting a live API.
Share TypeScript types between frontend and backend for safer development.
Start small: focus on a single league, then scale to multiple groups.

🌈 Contribution
Contributions are welcome! Feel free to submit issues or pull requests to improve the app. Let's make fantasy football even more fun!

📌 License
This project is licensed under the MIT License.