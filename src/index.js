import app from "./app.js";
import { port } from "./config.js";
import connectDB from "./db/index.js";

// database connection
connectDB()
  .then(() => {
    // app listner
    app.listen(port, () => {
      console.log(`Server is running at ${port}`);
    });
  })
  .catch((err) => {
    console.log("");
  });
