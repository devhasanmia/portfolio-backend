import jwt from "jsonwebtoken";
import Admin from "../seeds/seed.model";
import bcrypt from "bcryptjs";
import config from "../../config";
import { TAdminAuth } from "./auth.interface";

const login = async ({ email, password }: TAdminAuth) => {
    const admin = await Admin.findOne({ email });
    if (!admin) {
        throw new Error("Invalid email address or password");
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        throw new Error("Invalid email address or password");
    }
    const token = jwt.sign({ id: admin._id, email: admin.email, }, config.JWT_SECRET as string,
        { expiresIn: "1d" }
    );
    return token;
};

export const adminAuthService = {
    login,
};
