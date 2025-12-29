import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const MOCK_USERS = [{ id: 1, name: "Niy", email: "niy@example.com", password: "password" }];

export const register = (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const newUser = { id: MOCK_USERS.length + 1, name, email, password };
  MOCK_USERS.push(newUser);
  const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET || "secret");
  res.json({ user: newUser, token });
};

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = MOCK_USERS.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "secret");
  res.json({ user, token });
};
