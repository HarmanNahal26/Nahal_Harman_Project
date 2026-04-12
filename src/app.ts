import express from "express";
import cors from "cors";
import helmet from "helmet";
import expenseRoutes from "./routes/expenseRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import budgetRoutes from "./routes/budgetRoutes";
import swaggerUi from "swagger-ui-express";         
import swaggerJsdoc from "swagger-jsdoc";            


const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

const specs = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Expense API",
      version: "1.0.0"
    }
  },
  apis: ["./src/routes/*.ts"]
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));


app.use("/expenses", expenseRoutes);
app.use("/categories", categoryRoutes);
app.use("/budgets", budgetRoutes);


app.get("/", (req, res) => {
  res.send("API Running");
});

export default app;