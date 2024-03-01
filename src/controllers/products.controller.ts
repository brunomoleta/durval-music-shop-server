import {Request, Response} from "express";
import {
    createProductService,
    deleteProductService,
    getAllBrandsService,
    getAllCategoriesService,
    formatProductReturn,
    formatProductsReturn,
    getAllProductsIdService,
    getAllProductsService,
    updateProductService,
    getProductsByCategoryService,
    getProductsByBrandService,
    searchProductInfoService,
} from "../services/products.service";
import {ProductBrute, ProductReturn} from "../interfaces/products.interface";
import {ReadProduct} from "../interfaces/products.interface";

export const createProductController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const userId = Number(res.locals.decoded.sub);

    const product = await createProductService(req.body, userId)

    return res
        .status(201)
        .json(product);
};

export const getAllProductsController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const {pagination} = res.locals;
    const allProducts: ReadProduct = await getAllProductsService(pagination);

    return res.status(200).json(allProducts);
};

export const getAllProductsIdController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const userId = Number(res.locals.decoded.sub);

    const allProducts: ProductBrute[] = await getAllProductsIdService(userId);

    const formattedProducts: ProductReturn[] = formatProductsReturn(allProducts);

    return res.status(200).json(formattedProducts);
};

export const getProductByIdController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const product: ProductBrute = res.locals.product;

    return res.status(200).json(product);
};

export const updateProductController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const id = Number(req.params.id);

    const product: ProductBrute = await updateProductService(id, req.body);

    const formattedProduct: ProductReturn = formatProductReturn(product);

    return res
        .status(200)
        .json(formattedProduct);
};

export const deleteProductController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const id = Number(req.params.id);

    await deleteProductService(id);

    return res.status(204).json();
};

export const getAllBrandsController = async (req: Request, res: Response): Promise<Response> => {
    const productsList = await getAllBrandsService();

    return res.status(200).json(productsList);
}

export const getAllCategoriesController = async (req: Request, res: Response): Promise<Response> => {
    const categoriesList = await getAllCategoriesService();

    return res.status(200).json(categoriesList);
}

export const getProductsByCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const {pagination, categoryName} = res.locals;
    const productsList = await getProductsByCategoryService(categoryName, pagination);

    return res.status(200).json(productsList);
}

export const getProductsByBrandController = async (req: Request, res: Response): Promise<Response> => {
    const {pagination, brandName} = res.locals;
    const productsList = await getProductsByBrandService(brandName, pagination);

    return res.status(200).json(productsList);
}

export const searchProductInfoController = async (req: Request, res: Response): Promise<Response> => {
    const productsList = await searchProductInfoService(req.params.productInfo);

    return res.status(200).json(productsList);
}