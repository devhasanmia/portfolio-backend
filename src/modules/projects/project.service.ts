import { TProject } from "./project.interface";
import Project from "./project.model";


const createProject = async (payload: TProject) => {
    const project = await Project.create(payload);
    return project;
}

const getAllProjects = async() => {
    const projects = await Project.find({}).sort({ createdAt: -1 });
    return projects;
}

const getProjectById = async(id: string) => {
    const project = await Project.findById(id);
    return project;
}

const updateProjectById = async(id: string, payload: Partial<TProject>) => {
    const project = await Project.findByIdAndUpdate(id, payload, { new: true });
    return project;
}

const deleteProjectById = async(id: string) => {
    await Project.findByIdAndDelete(id);
}




export const projectService = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProjectById,
    deleteProjectById,
}