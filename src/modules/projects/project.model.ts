import { model, Schema } from "mongoose";

const projectSchema = new Schema({
    thumbnail: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    technologies: {
        type: [String],
        required: true,
    },
    liveLink: {
        type: String,
        default: '',
    },
    githubLink: {
        type: String,
        default: '',
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        required: true,
    },
    contributors: {
        type: [String],
        default: [],
    },
    projectType: {
        type: String,
        enum: ['personal', 'collaborative', 'open-source'],
        default: 'personal',
    },
    featured: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

const Project = model('Project', projectSchema);

export default Project;
