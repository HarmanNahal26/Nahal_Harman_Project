import { Request, Response } from "express";

let categories: any[] = [];

export const createCategory = (req: Request, res: Response) => {
  const category = {
    id: (categories.length + 1).toString(),
    ...req.body
  };

  categories.push(category);
  res.status(201).json(category);
};

export const getCategories = (req: Request, res: Response) => {
  res.json(categories);
};