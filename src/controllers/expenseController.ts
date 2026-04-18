import { Request, Response } from "express";
import Joi from "joi";
import * as expenseService from "../services/expenseService";

const schema = Joi.object({
  amount: Joi.number().required(),
  category: Joi.string().required(), // ✅ keep this
  note: Joi.string().optional(),
  date: Joi.string().optional(),
  userId: Joi.string().optional()
});

// CREATE
export const createExpense = async (req: Request, res: Response): Promise<void> => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).json({ message: error.message });
    return;
  }

  try {
    const data = await expenseService.createExpense(req.body);
    res.status(201).json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL
export const getExpenses = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await expenseService.getExpenses();
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// SUMMARY
export const getSummary = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await expenseService.getExpenses();

    const total = data.reduce(
      (sum: number, e: any) => sum + (e.amount || 0),
      0
    );

    res.json({
      total,
      count: data.length
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
export const updateExpense = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await expenseService.updateExpense(req.params.id, req.body);
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
export const deleteExpense = async (req: Request, res: Response): Promise<void> => {
  try {
    await expenseService.deleteExpense(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};