"use client";

import { useState } from "react";
import CategorySelector from "./Filter/CategorySelector";
import { FilteredProductsProps } from "@/types/components";
import PageChange from "./Filter/PageChange";

export default function FilteredProducts({categories, page, categoryId}: FilteredProductsProps) {

    const [currentPage, setCurrentPage] = useState<number>(page);
    const [currentCategoryId, setCurrentCategoryId] = useState<number>(categoryId);

    return (
        <>
            <PageChange currentCategoryId={currentCategoryId} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            <CategorySelector categories={categories} currentCategoryId={currentCategoryId} setCurrentCategoryId={setCurrentCategoryId} currentPage={currentPage} />
        </>
    )
}
