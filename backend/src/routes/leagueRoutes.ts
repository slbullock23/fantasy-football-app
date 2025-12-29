import { Router } from "express";
import { createLeague, getLeagues } from "../controllers/leagueController";

const router = Router();

router.post("/", createLeague);
router.get("/", getLeagues);

export default router;
