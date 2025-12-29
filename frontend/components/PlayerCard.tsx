import { Player } from "../../shared/types";

interface Props {
  player: Player;
}

const PlayerCard = ({ player }: Props) => (
  <div>
    <h3>{player.name}</h3>
    <p>{player.position} - {player.team}</p>
    <p>Odds: {player.odds}</p>
  </div>
);

export default PlayerCard;
