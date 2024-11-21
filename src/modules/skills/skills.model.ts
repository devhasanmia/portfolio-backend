import { model, Schema } from "mongoose";
import { TSkills } from './skills.interface';

const skillsSchema = new Schema <TSkills>({
    title: {
        type: String,
        required: true,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    experienceMonths: {
        type: Number,
        required: true,
    },
    experienceYears: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

const Skill = model('Skill', skillsSchema);

export default Skill;
