import express from "express";
import { SkillController } from "./skills.controller";
import authenticate from "../../middlewares/authenticate";
const router = express.Router();
router.post("/create", authenticate(), SkillController.addSkill);
router.get("/all", SkillController.getSkills);
router.delete("/delete/:id", authenticate(), SkillController.deleteSkill);


export const skillRoutes = router;