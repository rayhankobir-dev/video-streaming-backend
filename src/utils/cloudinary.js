import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { cloudinaryConfig } from "../config.js";

cloudinary.config({
  cloud_name: cloudinaryConfig.cloud,
  api_key: cloudinaryConfig.apiKey,
  api_secret: cloudinaryConfig.apiSecret,
});

export const uploadToCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // upload file to cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // file has been uploaded successfully
    console.log(response.url);
    return response.url;
  } catch (error) {
    console.log("Failed to upload on cloudinary");
    fs.unlinkSync(localFilePath); // remove locally temp file as the upload operation failed
    return null;
  }
};
