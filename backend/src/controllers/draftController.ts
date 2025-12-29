import { Request, Response } from "express";
import { Player } from "../../../shared/types"; 

const mockPlayers: Player[] = [
  { id: 1, name: "Patrick Mahomes", position: "QB", team: "KC", odds: 1.5 },
  { id: 2, name: "Derrick Henry", position: "RB", team: "TEN", odds: 2.0 },
  { id: 3, name: "Davante Adams", position: "WR", team: "LV", odds: 1.8 },
];

export const getDraftBoard = (_req: Request, res: Response) => {
  res.json(mockPlayers);
};
