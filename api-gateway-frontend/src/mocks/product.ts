import { ResponseProducts } from "@/types/response";

const product: ResponseProducts = {
    id: 1,
    name: "Producto 1",
    price: 100,
    description: "Descripción del producto 1",
    amount: 10,
    category: {
        name: "Categoría 1"
    }
}

export { product }
