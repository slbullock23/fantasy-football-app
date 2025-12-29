import { Router } from "express";
import { getTeam } from "../controllers/teamController";

const router = Router();

router.get("/:teamId", getTeam);

export default router;
