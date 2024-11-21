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
    }),
    experienceYears: z.number({
        invalid_type_error: "Experience years must be a number",
        required_error: "Experience years is required",
    })
});

export const skillValidator = {
    create,
};