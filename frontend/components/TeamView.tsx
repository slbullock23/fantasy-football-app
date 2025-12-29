import { useEffect, useState } from "react";
import { Team } from "../../shared/types";

const TeamView = () => {
  const [team, setTeam] = useState<Team | null>(null);

  useEffect(() => {
    const fetchTeam = async () => {
      const res = await fetch("http://localhost:4000/api/teams/1");
      const data = await res.json();
      setTeam(data);
    };
    fetchTeam();
  }, []);

  if (!team) return <div>Loading...</div>;

  return (
    <div>
      <h1>{team.name}</h1>
      <ul>
        {team.players.map(p => (
          <li key={p.id}>{p.name} - {p.position}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamView;
