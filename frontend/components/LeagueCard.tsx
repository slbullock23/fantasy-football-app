import React from "react";
import { League } from "../../shared/types";

interface LeagueCardProps {
  league: League;
}

const LeagueCard: React.FC<LeagueCardProps> = ({ league }) => (
  <div className="league-card">
    <h3>{league.name}</h3>
    <p>Members: {league.members.length}</p>
  </div>
);

export default LeagueCard;
