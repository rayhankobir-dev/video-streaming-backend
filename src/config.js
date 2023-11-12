import {} from "dotenv/config";

export const port = process.env.PORT || 8000;
export const db = {
  uri: process.env.MONGODB_URI,
  name: process.env.DB_NAME,
};

export const corsConfig = {
  corsUrl: process.env.CORS_ORIGIN || "*",
};

export const tokenInfo = {
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || "secret",
  refreshTokenSecret: process.env.ACCESS_TOKEN_SECRET || "secret",
  accessTokenValidity: parseInt(process.env.ACCESS_TOKEN_VALIDITY || "1d"),
  refreshTokenValidity: parseInt(process.env.REFRESH_TOKEN_VALIDITY || "10d"),
};

export const cloudinaryConfig = {
  cloud: process.env.CLOUD_NAME,
  apiKey: process.env.CLOUDINAY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
};
