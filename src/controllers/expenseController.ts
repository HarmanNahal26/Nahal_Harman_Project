import { Request, Response } from "express";
import Joi from "joi";

const schema = Joi.object({
  amount: Joi.number().required(),
  category: Joi.string().required()
});

let expenses: any[] = [];

export const createExpense = (req: Request, res: Response): void => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).json({
      message: error.message
    });
    return;
  }

  const expense = { id: Date.now(), ...req.body };
  expenses.push(expense);

  res.status(201).json(expense);
};

export const getExpenses = (req: Request, res: Response): void => {
  res.json(expenses);
};

export const getSummary = (req: Request, res: Response): void => {
  const total = expenses.reduce((sum, e) => sum + (e.amount || 0), 0);

  res.json({
    total,
    count: expenses.length
  });
};