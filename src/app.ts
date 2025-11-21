import express from "express";
import bookRoutes from "./modules/book/book.routes";
import publisherRoutes from "./modules/publisher/publisher.routes";

const app = express();
app.use(express.json());
app.use("/books", bookRoutes);
app.use("/publisher", publisherRoutes);

export default app;
