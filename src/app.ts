import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import expenseRoutes from "./routes/expenseRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import budgetRoutes from "./routes/budgetRoutes";
import adminRoutes from "./routes/adminRoutes";
import itemRoutes from "./routes/itemRoutes";



import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";


const app = express();


app.use(express.json());
app.use(cors());
app.use(helmet());


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again later."
});

app.use(limiter);

const swaggerspecs = swaggerJsdoc({
  definition: {
  openapi: "3.0.0",
  info: {
    title: "Expense API",
    version: "1.0.0",
    description: "Expense Tracker API Documentation"
  }
},
  apis: ["./src/routes/*.ts"]
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerspecs));


app.use("/expenses", expenseRoutes);
app.use("/categories", categoryRoutes);
app.use("/budgets", budgetRoutes);
app.use("/api", adminRoutes);
app.use("/api/items", itemRoutes);

app.get("/", (_req, res) => {
  res.send("API Running");
});

export default app;