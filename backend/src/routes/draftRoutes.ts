import { Router } from "express";
import { getDraftBoard } from "../controllers/draftController";

const router = Router();

router.get("/:leagueId", getDraftBoard);

export default router;
