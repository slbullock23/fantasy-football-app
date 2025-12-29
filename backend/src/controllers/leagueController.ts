import { Request, Response } from "express";
import { League } from "../../../shared/types";

let mockLeagues: League[] = [
  { id: 1, name: "Friends League", creatorId: 1, members: [1] },
];

export const createLeague = (req: Request, res: Response) => {
  const { name, creatorId } = req.body;
  const newLeague: League = {
    id: mockLeagues.length + 1,
    name,
    creatorId,
    members: [creatorId],
  };
  mockLeagues.push(newLeague);
  res.json(newLeague);
};

export const getLeagues = (_req: Request, res: Response) => {
  res.json(mockLeagues);
};
