import { Request, Response } from "express";
import { createProductService, deleteProductService, getAllProductsService, updateProductService } from "../services/products.service";
import { Product } from "@prisma/client";

export const createProductController = async (req: Request, res: Response): Promise<Response> => {
    const userId = Number(res.locals.decoded.sub);

    const address: Product = await createProductService(req.body, userId);

    return res.status(201).json({message: "Produto cadastrado com sucesso!", address});
};

export const getAllProductsController = async (req: Request, res: Response): Promise<Response> => {
    const userId = Number(res.locals.decoded.sub);

    const allProducts: Product[] = await getAllProductsService(userId);

    return res.status(200).json(allProducts);
};

export const getProductByIdController = async (req: Request, res: Response): Promise<Response> => {
    const address: Product = res.locals.address;

    return res.status(200).json(address);
};

export const updateProductController = async (req: Request, res: Response): Promise<Response> => {
    const id = Number(req.params.id);

    const address: Product = await updateProductService(id, req.body);

    return res.status(200).json({message: "Produto atualizado com sucesso!", address});
};

export const deleteProductController = async (req: Request, res: Response): Promise<Response> => {
    const id = Number(req.params.id);

    await deleteProductService(id);

    return res.status(204).json();
};