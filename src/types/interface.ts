import { ratingType } from "./types";

export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: ratingType;
  title: string;
}
