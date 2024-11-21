import { z } from "zod";

const create = z.object({
    thumbnail: z.string({
        invalid_type_error: "Invalid thumbnail format",
        required_error: "Thumbnail is required",
    }),
    title: z.string({
        invalid_type_error: "Invalid title format",
        required_error: "Title is required",
    }).min(5, "Title must be at least 5 characters long"),
    category: z.string({
        invalid_type_error: "Invalid category format",
    }).optional().default("Uncategorized"),
    author: z.string({
        invalid_type_error: "Invalid author format",
        required_error: "Author is required",
    }),
    tags: z.array(z.string({
        invalid_type_error: "Invalid tag format",
        required_error: "Tag is required",
    })).min(2, "At least two tags are required"),
    description: z.string({
        invalid_type_error: "Invalid description format",
        required_error: "Description is required",
    }).min(15, "Description must be at least 15 characters long"),
    status: z.enum(["published", "draft"]).optional().default("draft"),
});



const update = z.object({
    thumbnail: z.string({
        invalid_type_error: "Invalid thumbnail format",
        required_error: "Thumbnail is required",
    }).optional(),
    title: z.string({
        invalid_type_error: "Invalid title format",
        required_error: "Title is required",
    }).min(5, "Title must be at least 5 characters long").optional(),
    category: z.string({
        invalid_type_error: "Invalid category format",
    }).optional().default("Uncategorized"),
    author: z.string({
        invalid_type_error: "Invalid author format",
        required_error: "Author is required",
    }).optional(),
    tags: z.array(z.string({
        invalid_type_error: "Invalid tag format",
        required_error: "Tag is required",
    })).min(2, "At least two tags are required").optional(),
    description: z.string({
        invalid_type_error: "Invalid description format",
        required_error: "Description is required",
    }).min(15, "Description must be at least 15 characters long").optional(),
    status: z.enum(["published", "draft"]).optional().default("draft"),
});




export const BlogValidation = {
    create,
    update
}

