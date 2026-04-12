import * as repo from "../repositories/budgetRepository";


let budgetId = 1;

export const createBudget = async (data: any) => {
  const budget = {
    id: budgetId++, 
    category: data.category,
    limit: data.limit,
    month: data.month || ""
  };

  return await repo.create(budget);
};


export const getBudgets = async () => {
  return await repo.getAll();
};

export const getBudgetById = async (id: string) => {
  return await repo.getById(id);
};


export const updateBudget = async (id: string, data: any) => {
  return await repo.update(id, data);
};

export const deleteBudget = async (id: string) => {
  return await repo.remove(id);
};