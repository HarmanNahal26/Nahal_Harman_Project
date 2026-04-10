import { Request, Response } from "express";
import Joi from "joi";
import * as categoryService from "../services/categoryService";

// VALIDATION SCHEMA
const schema = Joi.object({
  name: Joi.string().required()
});

// CREATE CATEGORY
export const createCategory = async (req: Request, res: Response): Promise<void> => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).json({ message: error.message });
    return;
  }

  try {
    const data = await categoryService.createCategory(req.body);
    res.status(201).json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL CATEGORIES
export const getCategories = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await categoryService.getCategories();
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE CATEGORY
export const updateCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await categoryService.updateCategory(req.params.id, req.body);
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE CATEGORY
export const deleteCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    await categoryService.deleteCategory(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};