import { db } from "../config/firebase";

const collection = db.collection("categories");

// CREATE
export const create = async (data: any) => {
  const snapshot = await collection.get();

  const nextId = (snapshot.size + 1).toString();

  await collection.doc(nextId).set({
    ...data
  });

  return {
    id: nextId,
    ...data
  };
};

// GET ALL
export const getAll = async () => {
  const snapshot = await collection.get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
};

// UPDATE
export const update = async (id: string, data: any) => {
  await collection.doc(id).update({
    ...data
  });

  return {
    id,
    ...data
  };
};

// DELETE
export const deleteCategory = async (id: string) => {
  await collection.doc(id).delete();
};