import { TBlog } from "./blog.interface";
import Blog from "./blog.model";
import { isValidObjectId } from "../../utils/isValidObjectId";
import AppError from "../../errors/AppError";

const createBlog = async (payload: TBlog) => {
    const blog = await Blog.create(payload);
    return blog;
};

const getAllBlogs = async () => {
    const blogs = await Blog.find({});
    return blogs;
};

const getBlogById = async (id: string) => {
    isValidObjectId(id);
    const isExist = await Blog.findById(id);
    if (!isExist) {
        throw new AppError(404, "Blog not found");
    }
    const blog = await Blog.findById(id);
    return blog;
};

const updateBlog = async (id: string, payload: Partial<TBlog>) => {
    isValidObjectId(id);
    const isExist = await Blog.findById(id);
    if (!isExist) {
        throw new AppError(404, "Blog not found");
    }
    const updatedBlog = await Blog.findByIdAndUpdate(id, payload, { new: true });
    return updatedBlog;
};

const deleteBlog = async (id: string) => {
    isValidObjectId(id);
    const isExist = await Blog.findById(id);
    if (!isExist) {
        throw new AppError(404, "Blog not found");
    }
    const blog = await Blog.findByIdAndDelete(id);
    return blog;
};

const deleteManyBlogs = async (ids: string[]) => {
    if (ids.length === 0) {
        throw new Error("No blog IDs provided");
    }
    const uniqueIds = [...new Set(ids)];
    const existingIds = await Blog.find({ _id: { $in: uniqueIds } }).select("_id");
    if (existingIds.length !== uniqueIds.length) {
        throw new Error("One or more blog IDs do not exist");
    }
    await Blog.deleteMany({ _id: { $in: uniqueIds } });
};

export const blogServices = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
    deleteManyBlogs,
};
