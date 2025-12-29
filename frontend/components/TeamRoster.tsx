import { Player } from "../../shared/types";

interface Props {
  players: Player[];
}

const TeamRoster = ({ players }: Props) => (
  <div>
    <h2>Team Roster</h2>
    <ul>
      {players.map(p => (
        <li key={p.id}>{p.name} ({p.position})</li>
      ))}
    </ul>
  </div>
);

export default TeamRoster;
