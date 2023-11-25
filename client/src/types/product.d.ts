import React from "react";

export interface IProductContext {
  id: number;
  brandName: string;
  categories: string[];
  createdAt: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  stock: number;
  color?: string;
  condition: string;
  deletedAt?: string;
  ownerId: number;
  owner: Owner;
}

export interface productsPage {
  prevPage: string
  nextPage: string
}

export interface CardProductProps {
  item: IProductContext;
}

export interface IFullProductContext {
  allProducts: IProductContext[] | null;
  setAllProducts: React.Dispatch<React.SetStateAction<IProductContext[]>>;

  singleProduct: IProductContext;
  changeActiveProduct: (number) => void;

  productsPage: productsPage;

  getProductById: (id: number | undefined) => Promise<void>;

  getAllProducts: (page: number, perPage: number) => Promise<void>;
}
