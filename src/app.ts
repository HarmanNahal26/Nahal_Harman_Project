import express from "express";
import cors from "cors";
import helmet from "helmet";
import expenseRoutes from "./routes/expenseRoutes";

const app = express();

app.use("/expenses", expenseRoutes);
app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("API Running");
});

export default app;