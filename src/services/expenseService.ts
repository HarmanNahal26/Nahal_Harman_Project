import * as repo from "../repositories/expenseRepository";

export const createExpense = async (data: any) => {
  return await repo.create(data);
};

export const getExpenses = async () => {
  return await repo.getAll();
};

export const updateExpense = async (id: string, data: any) => {
  return await repo.update(id, data);
};

export const deleteExpense = async (id: string) => {
  return await repo.deleteExpense(id);
};