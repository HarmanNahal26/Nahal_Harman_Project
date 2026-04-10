import * as repo from "../repositories/categoryRepository";

export const createCategory = async (data: any) => {
  return await repo.create(data);
};

export const getCategories = async () => {
  return await repo.getAll();
};

export const updateCategory = async (id: string, data: any) => {
  return await repo.update(id, data);
};

export const deleteCategory = async (id: string) => {
  return await repo.deleteCategory(id);
};