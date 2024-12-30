import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getProductsByCategory = async (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params;

        const products = await prisma.product.findMany({
            where: categoryId ? { categoryId: parseInt(categoryId) } :  undefined,
            select: {
                id: true,
                name: true,
                price: true
            }
        });

        if (products.length === 0) {
            return res.status(204).json({ message: "No hay productos" });
        }

        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

const getProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "El parametro id es obligatorio" });
        }

        const intId = parseInt(id);

        if (isNaN(intId)) {
            return res.status(400).json({ message: "El id debe ser un número" });
        }

        const product = await prisma.product.findFirst({
            where: {
                id: intId
            }
        });

        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

const createProduct = async (req: Request, res: Response) => {
    try {
        let { name, price, description, amount, categoryId } = req.body;

        if (!name || !price || !amount || !categoryId) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        price = parseFloat(price);
        amount = parseInt(amount);
        categoryId = parseInt(categoryId);

        if (isNaN(price) || isNaN(amount) || isNaN(categoryId)) {
            return res.status(400).json({ message: "El precio, la cantidad y el id de la categoría deben ser números" });
        }

        const categoryExist = await prisma.category.findFirst({
            select: {
                id: true
            },
            where: {
                id: categoryId
            }
        });

        if (categoryExist === null) {
            return res.status(404).json({ message: "La categoría no existe" });
        }

        await prisma.product.create({
            data: {
                name,
                price: parseFloat(price),
                description,
                amount: parseInt(amount),
                categoryId: parseInt(categoryId)
            }
        });

        return res.status(201).json({ message: "Producto creado exitosamente" });
    } catch (error) {
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "El parametro id es obligatorio" });
        }

        const product = await prisma.product.findFirst({
            where: {
                id: parseInt(id)
            }
        });

        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        let { price, amount } = req.body;

        if (!price && !amount) {
            return res.status(400).json({ message: "Debe enviar al menos un campo a actualizar" });
        }

        if (price) {
            price = parseFloat(price);

            if (isNaN(price)) {
                return res.status(400).json({ message: "El precio debe ser un número" });
            }
        }

        if (amount) {
            amount = parseInt(amount);

            if (isNaN(amount)) {
                return res.status(400).json({ message: "La cantidad debe ser un número" });
            }
        }

        await prisma.product.update({
            where: {
                id: parseInt(id)
            },
            data: {
                price: price ? price : product.price,
                amount: amount ? amount : product.amount
            }
        });

        return res.status(200).json({ message: "Producto actualizado exitosamente" });
    } catch (error) {
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "El parametro id es obligatorio" });
        }

        const product = await prisma.product.findFirst({
            where: {
                id: parseInt(id)
            }
        });

        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        await prisma.product.delete({
            where: {
                id: parseInt(id)
            }
        });

        return res.status(200).json({ message: "Producto eliminado exitosamente" });
    } catch (error) {
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

export {
    getProductsByCategory,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
