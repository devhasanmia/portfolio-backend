import { z } from "zod";
const create = z.object({
    thumbnail: z.string({
        invalid_type_error: "Thumbnail must be a string",
        required_error: "Thumbnail is required",
    }),
    title: z.string({
        invalid_type_error: "Title must be a string",
        required_error: "Title is required",
    }).min(5, "Title must be at least 5 characters long"),
    description: z.string({
        invalid_type_error: "Description must be a string",
        required_error: "Description is required",
    }).min(15, "Description must be at least 15 characters long"),
    technologies: z.array(z.string(), {
        invalid_type_error: "Technologies must be an array of strings",
        required_error: "Technologies are required",
    }).min(1, "At least one technology is required"),
    liveLink: z.string({
        invalid_type_error: "Live link must be a valid URL",
    }).optional().default(''),
    githubLink: z.string({
        invalid_type_error: "GitHub link must be a valid URL",
    }).optional().default(''),
    status: z.enum(["active", "inactive"], {
        invalid_type_error: "Status must be 'active' or 'inactive'",
        required_error: "Status is required",
    }),
    contributors: z.array(z.string({
        invalid_type_error: "Contributors must be an array of strings",
        required_error: "Contributors are required",
    })).optional().default([]),
    projectType: z.enum(["personal", "collaborative", "open-source"]).optional().default("personal"),
    featured: z.boolean().optional().default(false),
});

export const projectValidator = {
    create,
};