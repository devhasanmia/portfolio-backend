import { NextFunction, Request, Response } from "express";
import { blogServices } from "./blog.service";
import { BlogValidation } from "./blog.validation";


const createBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = await BlogValidation.create.parseAsync(req.body);
        const blog = await blogServices.createBlog(payload);
        res.status(201).json({
            success: true,
            message: "Your blog was created successfully! 🎉",
            data: blog,
        })
    } catch (error: any) {
        next(error);
    }
};

const getAllBlogs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const blogs = await blogServices.getAllBlogs();
        res.status(200).json({
            success: true,
            message: "All blogs retrieved successfully!",
            data: blogs,
        })
    } catch (error: any) {
        next(error);
    }
}

const getBlogById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const blog = await blogServices.getBlogById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Blog retrieved successfully!",
            data: blog,
        })
    } catch (error: any) {
        next(error);
    }
}

const updateBlogById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = await BlogValidation.update.parseAsync(req.body);
        const updatedBlog = await blogServices.updateBlog(req.params.id, payload);
        res.status(200).json({
            success: true,
            message: "Blog updated successfully!",
            data: updatedBlog,
        })
    } catch (error: any) {
        next(error);
    }
}

const deleteBlogById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await blogServices.deleteBlog(req.params.id);
        res.status(200).json({
            success: true,
            message: "Blog deleted successfully!",
        })
    } catch (error: any) {
        next(error);
    }
}

const delteManyBlogs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await blogServices.deleteManyBlogs(req.body.ids);
        res.status(200).json({
            success: true,
            message: `Many Blog deleted successfully!`,
        })
    } catch (error: any) {
        next(error);
    }
}


export const blogController = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlogById,
    deleteBlogById,
    delteManyBlogs,
}

