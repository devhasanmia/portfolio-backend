import express from "express";
import { SkillController } from "./skills.controller";
const router = express.Router();
router.post("/create", SkillController.addSkill);
router.get("/all", SkillController.getSkills);
router.delete("/delete/:id", SkillController.deleteSkill);


export const skillRoutes = router;