let budgets: any[] = [];

export const create = async (data: any) => {
  budgets.push(data);
  return data;
};

export const getAll = async () => {
  return budgets;
};

export const getById = async (id: string) => {
  return budgets.find(b => b.id == id);
};

export const update = async (id: string, data: any) => {
  const index = budgets.findIndex(b => b.id == id);
  if (index === -1) return null;

  budgets[index] = { ...budgets[index], ...data };
  return budgets[index];
};

export const remove = async (id: string) => {
  const index = budgets.findIndex(b => b.id == id);
  if (index === -1) return null;

  const deleted = budgets[index];
  budgets.splice(index, 1);
  return deleted;
};