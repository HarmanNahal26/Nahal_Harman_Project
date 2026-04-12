import { Request, Response } from "express";
import * as service from "../services/budgetService";
import Joi from "joi";

// Validation schema
const schema = Joi.object({
  category: Joi.string().required(),
  limit: Joi.number().required(),
  month: Joi.string().optional()
});
export const createBudget = async (req: Request, res: Response): Promise<void> => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }

  const budget = await service.createBudget(req.body);
  res.status(201).json(budget);
}
export const getBudgets = async (_req: Request, res: Response): Promise<void> => {
  const budgets = await service.getBudgets();
  res.json(budgets);
};


export const getBudgetById = async (req: Request, res: Response): Promise<void> => {
  const budget = await service.getBudgetById(req.params.id);

  if (!budget) {
    res.status(404).json({ message: "Budget not found" });
    return;
  }

  res.json(budget);
}
export const updateBudget = async (req: Request, res: Response): Promise<void> => {
  const updated = await service.updateBudget(req.params.id, req.body);

  if (!updated) {
    res.status(404).json({ message: "Budget not found" });
    return;
  }

  res.json(updated);
};


export const deleteBudget = async (req: Request, res: Response): Promise<void> => {
  const deleted = await service.deleteBudget(req.params.id);

  if (!deleted) {
    res.status(404).json({ message: "Budget not found" });
    return;
  }

  res.json({ message: "Budget deleted successfully" });
};