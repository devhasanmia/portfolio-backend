import { Schema, model } from "mongoose";
import { TSeed } from "./seeds.interface";

const seedUserSchema = new Schema<TSeed>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'admin',
    }
}, { timestamps: true });

const Admin = model<TSeed>("Admin", seedUserSchema);

export default Admin;