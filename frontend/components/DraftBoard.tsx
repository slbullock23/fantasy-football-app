import React from "react";
import { Player } from "../../shared/types";

interface DraftBoardProps {
  players: Player[];
}

const DraftBoard: React.FC<DraftBoardProps> = ({ players }) => (
  <div className="draft-board">
    {players.map((player) => (
      <div key={player.id} className="player-card">
        <p>{player.name}</p>
        <p>{player.position} - {player.team}</p>
        <p>Odds: {player.odds}</p>
      </div>
    ))}
  </div>
);

export default DraftBoard;
