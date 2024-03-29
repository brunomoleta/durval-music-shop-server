import {Router} from "express";
import {
    createProductController,
    deleteProductController,
    getProductByIdController,
    getAllProductsIdController,
    getAllProductsController,
    updateProductController,
    getAllCategoriesController,
    getAllBrandsController,
    getProductsByCategoryController,
    getProductsByBrandController,
    searchProductInfoController,
} from "../controllers/products.controller";
import {
    bodyValidator,
    verifyPermissions,
    verifyToken,
} from "../middlewares/globals.middleware";
import {
    createProductSchema,
    updateProductSchema,
} from "../schemas/products.schema";
import {verifyBrandName, verifyCategoryName, verifyProductId} from "../middlewares/products.middleware";
import {paginationMiddleware} from "../middlewares/pagination.middleware";

export const productRouter: Router = Router();

productRouter.get("/all", paginationMiddleware, getAllProductsController)

productRouter.get("/:id", verifyProductId, getProductByIdController);

productRouter.get("/category/:categoryName", paginationMiddleware, verifyCategoryName, getProductsByCategoryController);
productRouter.get('/brand/:brandName', paginationMiddleware, verifyBrandName, getProductsByBrandController);
productRouter.get('/search/:productInfo', searchProductInfoController);

productRouter.use(verifyToken);

productRouter.get("/", getAllProductsIdController);
productRouter.post(
    "/",
    bodyValidator(createProductSchema),
    createProductController,
);

productRouter.use("/:id", verifyProductId, verifyPermissions("product"));

productRouter.patch("/:id", bodyValidator(updateProductSchema), updateProductController);
productRouter.delete("/:id", deleteProductController);

productRouter.get("/categories", getAllCategoriesController);
productRouter.get("/brands", getAllBrandsController)
