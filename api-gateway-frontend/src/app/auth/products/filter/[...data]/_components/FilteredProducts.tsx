"use client";

import { useEffect, useState } from "react";
import CategorySelector from "./Filter/CategorySelector";
import { FilteredProductsProps } from "@/types/components";
import PageChange from "./Filter/PageChange";
import { ResponseFilteredProducts, ResponseMessage, ResponseProducts } from "@/types/response";
import ProductCards from "./Filter/ProductCards";

export default function FilteredProducts({categories, page, categoryId}: FilteredProductsProps) {

    const [currentPage, setCurrentPage] = useState<number>(page);
    const [currentCategoryId, setCurrentCategoryId] = useState<number>(categoryId);
    const [products, setProducts] = useState<ResponseProducts[]>([]);
    const [message, setMessage] = useState<string>('');


    useEffect(() => {

        const filterProducts = async () => {

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}products/filter/${currentPage}/${currentCategoryId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            if (!response.ok) {
                const message: ResponseMessage = await response.json();
                setMessage(message.message);
                return;
            }

            try {
                const filteredProducts: ResponseFilteredProducts = await response.json();
                const products: ResponseProducts[] = filteredProducts.products;

                setProducts(products);
            } catch {
                setMessage("There are no products for showing");
            }

        }

        filterProducts();
    }, [currentPage, currentCategoryId]);

    return (
        <>
            <PageChange currentCategoryId={currentCategoryId} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            <CategorySelector categories={categories} currentCategoryId={currentCategoryId} setCurrentCategoryId={setCurrentCategoryId} currentPage={currentPage} />
            <ProductCards products={products} msg={message} />
        </>
    )
}
