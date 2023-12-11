import multer from "multer";

// multer middleware configuration
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/temp/");
  },
  filename: function (req, file, callback) {
    const prefix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    callback(null, file.fieldname + "-", prefix);
  },
});

export const upload = multer({ storage });
