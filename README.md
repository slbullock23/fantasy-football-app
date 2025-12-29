# Fantasy Football Web App

## Project Description
This is a fantasy football web application that allows private groups of friends to create leagues, draft players, assemble teams, and compete using fantasy points derived from sports betting data. Users can also place friendly bets within their private group, ensuring secure and private gameplay.

The app emphasizes real-time updates, friendly competition, and modern web technologies.

## Features
- Create and join private leagues
- Host custom drafts
- Select real-life players and assemble teams
- Compete using fantasy points (mocked player props and odds-based scoring)
- Optional private group betting
- Authentication via email/password or OAuth
- Responsive, interactive UI

## Tech Stack
- **Frontend:** React + TypeScript
- **Backend:** Node.js + Express (or Next.js API routes)
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** JWT-based
- **Mock Data:** Player stats, odds, and fantasy scoring

## Architecture Overview
Frontend (React) <--> Backend API (Node.js/Express) <--> PostgreSQL Database (Prisma ORM)

- Frontend communicates with backend via REST API endpoints
- Shared TypeScript types for type safety
- Mock sports/fantasy data for development

## Pages / Screens Overview
- **Home:** Overview of leagues and quick access
- **League Creation:** Create or join private leagues
- **Draft Board:** Draft players in real-time
- **Team View:** See your assembled roster and points

## Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/your-username/fantasy-football-app.git
cd fantasy-football-app

2. Backend Setup

cd backend
npm install
cp .env.example .env
# Fill in database URL and JWT secret in .env
npx prisma migrate dev --name init
npm run seed
npm run dev

3. Frontend Setup
cd frontend
npm install
npm run dev

4. Run Locally
Backend: http://localhost:4000
Frontend: http://localhost:5173 (Vite default)

5. Environment Variables (.env)
DATABASE_URL=postgresql://user:password@localhost:5432/fantasydb
JWT_SECRET=your_jwt_secret
PORT=4000

Future Improvements
- Real sports API integration
- Real-time updates using WebSockets
- Advanced scoring algorithms
- Betting ledger and history
- Mobile-responsive design
