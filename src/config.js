import {} from "dotenv/config";

export const port = process.env.PORT || 8000;
export const db = {
  uri: process.env.MONGODB_URI,
  name: process.env.DB_NAME,
};

export const corsConfig = {
  origin: process.env.CORS_ORIGIN || "*",
};
