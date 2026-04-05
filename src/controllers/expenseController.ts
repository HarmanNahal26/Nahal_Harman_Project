import { Request, Response } from "express";

let expenses: any[] = [];

export const createExpense = (req: Request, res: Response) => {
  const expense = { id: Date.now(), ...req.body };
  expenses.push(expense);
  res.status(201).json(expense);
};

export const getExpenses = (req: Request, res: Response) => {
  res.json(expenses);
};