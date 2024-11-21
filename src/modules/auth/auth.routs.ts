import express from "express";
import {adminLogin } from "./auth.controller";

const router = express.Router();

router.post("/login", adminLogin);

export const adminAuthRouter = router;