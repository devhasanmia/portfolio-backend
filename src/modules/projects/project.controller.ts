import { RequestHandler } from "express";
import { projectService } from "./project.service";
import { projectValidator } from "./project.validation";

const createProject: RequestHandler = async (req, res, next) => {
    try {
        const payload = await projectValidator.create.parseAsync(req.body);
        const project = await projectService.createProject(payload);
        res.status(201).json({
            success: true,
            message: "Project created successfully!",
            data: project,
        });
    } catch (error: any) {
        next(error)
    }
}

const getAllProjects: RequestHandler = async (req, res, next) => {
    try {
        const projects = await projectService.getAllProjects();
        res.status(200).json({
            success: true,
            message: "All projects retrieved successfully!",
            data: projects,
        });
    } catch (error: any) {
        next(error);
    }
}

const getProjectById: RequestHandler = async (req, res, next) => {
    try {
        const id = req.params.id;
        const project = await projectService.getProjectById(id);
        res.status(200).json({
            success: true,
            message: "Project retrieved successfully!",
            data: project,
        });
    } catch (error: any) {
        next(error);
    }
}

const updateProjectById: RequestHandler = async (req, res, next) => {
    try {
        const id = req.params.id;
        const payload = req.body;
        const updatedProject = await projectService.updateProjectById(id, payload);
        res.status(200).json({
            success: true,
            message: "Project updated successfully!",
            data: updatedProject,
        });
    } catch (error: any) {
        next(error);
    }
}

const deleteProjectById: RequestHandler = async (req, res, next) => {
    try {
        const id = req.params.id;
        await projectService.deleteProjectById(id);
        res.status(200).json({
            success: true,
            message: "Project deleted successfully!",
        });
    } catch (error: any) {
        next(error);
    }
}


export const projectController = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProjectById,
    deleteProjectById,
}