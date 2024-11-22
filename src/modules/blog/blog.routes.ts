import express from "express";
import { blogController } from "./blog.controller";
import authenticate from "../../middlewares/authenticate";

const router = express.Router();

router.post("/create", authenticate(), blogController.createBlog);
router.get("/all", blogController.getAllBlogs);
router.get("/:id", blogController.getBlogById);
router.put("/update/:id", authenticate(), blogController.updateBlogById);
router.delete("/delete/:id", authenticate(), blogController.deleteBlogById);
router.delete("/delete-many", authenticate(), blogController.delteManyBlogs);


export const blogRouter = router;