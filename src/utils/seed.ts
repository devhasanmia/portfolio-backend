import config from "../config";
import Admin from "../modules/seeds/seed.model";
var bcrypt = require('bcryptjs');
export const seed = async () => {
    try {
        const admin = await Admin.findOne({ email: config.adminEmail });
        const hash = await bcrypt.hash(config.adminPassword, 10);
        if (!admin) {
            await Admin.create({
                name: config.adminName,
                role: "admin",
                email: config.adminEmail,
                password: hash,
            });
            console.log('Admin created successfully...');
            console.log('Seeding completed...');
        }
    } catch (error) {
        console.error('Seeding failed:', error);
    }
}