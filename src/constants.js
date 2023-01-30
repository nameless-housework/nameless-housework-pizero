import dotenv from "dotenv";
dotenv.config();

export const AMBIENT_CHANNEL_ID = process.env.AMBIENT_CHANNEL_ID;
export const AMBIENT_READ_KEY = process.env.AMBIENT_READ_KEY;
export const AMBIENT_WRITE_KEY = process.env.AMBIENT_WRITE_KEY;

export const INTERVAL_SECOND = process.env.INTERVAL_SECOND || 60;
