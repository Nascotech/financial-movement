import { app } from "./app.js";
import { logger } from "./src/libs/logger/logger.js";

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 5005
const PORT = process.env.PORT || 5006;
// Middleware

app
  .listen(PORT, () => {
    logger.info(`Server listening on http://localhost:${PORT}`);
  })
  .on("error", (error) => logger.error(error));