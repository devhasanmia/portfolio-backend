import express from "express";
import { projectController } from "./project.controller";
const router = express.Router();
router.post("/create", projectController.createProject);
router.get("/all", projectController.getAllProjects);
router.get("/:id", projectController.getProjectById);
router.put("/update/:id", projectController.updateProjectById);
router.delete("/delete/:id", projectController.deleteProjectById);

export const projectRoutes = router;