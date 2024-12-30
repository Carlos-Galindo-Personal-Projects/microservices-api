import { Request, Response, Router } from "express";
import { createProduct, deleteProduct, getProduct, getProductsByCategory, updateProduct } from "../controllers/product.controller";

const router = Router();

router.get('/all/:categoryId', (req: Request, res: Response) => {
    getProductsByCategory(req, res);
})

router.get('/:id', (req: Request, res: Response) => {
    getProduct(req, res);
})

router.post('/', (req: Request, res: Response) => {
    createProduct(req, res);
})

router.put('/:id', (req: Request, res: Response) => {
    updateProduct(req, res);
})

router.delete('/:id', (req: Request, res: Response) => {
    deleteProduct(req, res);
})

export default router;
