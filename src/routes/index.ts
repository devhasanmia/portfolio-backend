import { Router } from "express";
import { adminAuthRouter } from "../modules/auth/auth.routes";
import { blogRouter } from "../modules/blog/blog.routes";
import { projectRoutes } from "../modules/projects/project.routes";
import { skillRoutes } from "../modules/skills/skills.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/",
    route: adminAuthRouter,
  },
  {
    path: "/blog",
    route: blogRouter,
  },
  {
    path: "/project",
    route: projectRoutes,
  },
  {
    path: "/skills",
    route: skillRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
