import { model, Schema } from "mongoose";
import { TBlog } from "./blog.interface";

const blogSchema = new Schema<TBlog>({
    thumbnail: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        default: "Uncategorized",
    },
    author: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["published", "draft"],
        default: "draft",
    },
}, { timestamps: true });

const Blog = model<TBlog>("Blog", blogSchema);

export default Blog;