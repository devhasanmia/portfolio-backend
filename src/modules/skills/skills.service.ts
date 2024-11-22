import { isValidObjectId } from "mongoose";
import AppError from "../../errors/AppError";
import { TSkills } from "./skills.interface";
import Skill from "./skills.model";

const addSkill = async (payload: TSkills) => {
    const skill = await Skill.create(payload);
    return skill;
}

const getAllSkills = async () => {
    const skills = await Skill.find({}).sort({ createdAt: -1 })
    return skills;
}

const deleteSkill = async (id: string) => {
    try {
        isValidObjectId(id)
        const skill = await Skill.findByIdAndDelete(id);
        if (!skill) {
            throw new AppError(404, "Skill not found");
        }
        return skill;
    } catch (error) {
        throw new AppError(400, "Failed to delete skill");
    }
}


export const skillService = {
    addSkill,
    getAllSkills,
    deleteSkill,
}
