import { Router } from "express";
import { adminAuthRouter } from "../modules/auth/auth.routs";
import { blogRouter } from "../modules/blog/blog.routs";
const router = Router();

const moduleRoutes = [
  {
    path: "/",
    route: adminAuthRouter,
  },
  {
    path: "/blog",
    route: blogRouter,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
