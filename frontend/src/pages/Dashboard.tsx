import React, { useEffect, useState } from "react";
import LeagueCard from "../../components/LeagueCard";
import DraftBoard from "../../components/DraftBoard";
import { apiFetch } from "../utils/api";
import { Player, League } from "../../../shared/types";

const Dashboard = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [leagues, setLeagues] = useState<League[]>([
    {
      id: 1, name: "Friends League", members: [1, 2],
      creatorId: 0
    }
  ]);

  useEffect(() => {
    apiFetch<Player[]>("/draft").then(setPlayers).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <h2>Draft Board</h2>
      <DraftBoard players={players} />

      <h2>Leagues</h2>
      {leagues.map((league) => (
        <LeagueCard key={league.id} league={league} />
      ))}
    </div>
  );
};

export default Dashboard;
