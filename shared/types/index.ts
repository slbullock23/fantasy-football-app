export interface Player {
  id: number;
  name: string;
  position: string;
  team: string;
  odds: number; // mock betting odds
}

export interface Team {
  id: number;
  name: string;
  userId: number;
  players: Player[];
}

export interface League {
  id: number;
  name: string;
  creatorId: number;
  members: number[]; // user IDs
}
