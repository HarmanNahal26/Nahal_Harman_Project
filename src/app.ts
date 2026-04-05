import express from "express";
import cors from "cors";
import helmet from "helmet";
import expenseRoutes from "./routes/expenseRoutes";
import categoryRoutes from "./routes/categoryRoutes";



const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/expenses", expenseRoutes);
app.use("/categories", categoryRoutes);


app.get("/", (req, res) => {
  res.send("API Running");
});

export default app;