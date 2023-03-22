import { config } from "dotenv";
config();

export const PORT = process.env.PORT;
export const MONGOOSE_URI = process.env.MONGOOSE_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
