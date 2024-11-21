import { RequestHandler } from "express";
import { skillValidator } from "./skillsvalidation";
import { skillService } from "./skills.service";


const addSkill: RequestHandler = async (req, res, next) => {
    try {
        const payload = await skillValidator.create.parseAsync(req.body);
        const skill = await skillService.addSkill(payload);
        res.status(201).json({
            success: true,
            message: "Skill added successfully!",
            data: skill,
        });
    } catch (error: any) {
        next(error)
    }
}

const getSkills: RequestHandler = async (req, res, next) => {
    try {
        const skills = await skillService.getAllSkills();
        res.status(200).json({
            success: true,
            message: "All skills retrieved successfully!",
            data: skills,
        });
    } catch (error: any) {
        next(error);
    }
}

const deleteSkill: RequestHandler = async (req, res, next) => {
    try {
        const id = req.params.id;
        await skillService.deleteSkill(id);
        res.status(204).json({
            success: true,
            message: "Skill deleted successfully!",
        });
    } catch (error: any) {
        next(error);
    }
}


export const SkillController = {
    addSkill,
    getSkills,
    deleteSkill,
}