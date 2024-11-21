import express from "express";
import { blogController } from "./blog.controller";

const router = express.Router();

router.post("/create", blogController.createBlog);
router.get("/all", blogController.getAllBlogs);
router.get("/:id", blogController.getBlogById);
router.put("/update/:id", blogController.updateBlogById);
router.delete("/delete/:id", blogController.deleteBlogById);
router.delete("/delete-many", blogController.delteManyBlogs);


export const blogRouter = router;