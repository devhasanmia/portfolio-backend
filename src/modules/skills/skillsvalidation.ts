import { z } from "zod";
const create = z.object({
    title: z.string({
        invalid_type_error: "Title must be a string",
        required_error: "Title is required",
    }),
    shortDescription: z.string({
        invalid_type_error: "Short description must be a string",
        required_error: "Short description is required",
    }),
    experienceMonths: z.number({
        invalid_type_error: "Experience months must be a number",
        required_error: "Experience months is required",
    }).max(11, "Experience months must be between 0 and 11"),
    experienceYears: z.number({
        invalid_type_error: "Experience years must be a number",
        required_error: "Experience years is required",
    }).max(100, "Experience years must be between 0 and 100"),
});

export const skillValidator = {
    create,
};