import express from "express";
import { projectController } from "./project.controller";
import authenticate from "../../middlewares/authenticate";
const router = express.Router();
router.post("/create", authenticate(),projectController.createProject);
router.get("/all", projectController.getAllProjects);
router.get("/:id", projectController.getProjectById);
router.put("/update/:id", authenticate(), projectController.updateProjectById);
router.delete("/delete/:id", authenticate(), projectController.deleteProjectById);

export const projectRoutes = router;