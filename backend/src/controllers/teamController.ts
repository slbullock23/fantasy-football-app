import { Request, Response } from "express";
import { Team } from "../../../shared/types";

const mockTeams: Team[] = [
  { id: 1, name: "Niy's Team", userId: 1, players: [] },
];

export const getTeam = (req: Request, res: Response) => {
  const team = mockTeams.find(t => t.id === parseInt(req.params.teamId));
  if (!team) return res.status(404).json({ message: "Team not found" });
  res.json(team);
};
