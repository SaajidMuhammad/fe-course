import { BASE_URL } from "../config";

export const fetchCategories = async () => {
  const res = await fetch(BASE_URL + "products/categories");

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res?.json();
};

export const fetchAllProducts = async () => {
  const res = await fetch(BASE_URL + "products");

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res?.json();
};

export const fetchSingleProduct = async (id: string) => {
  const res = await fetch(BASE_URL + "products/" + id);

  console.log(res, "resresres");

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res?.json();
};
