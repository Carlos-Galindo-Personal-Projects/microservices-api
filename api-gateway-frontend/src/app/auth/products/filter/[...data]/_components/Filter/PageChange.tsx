"use client"

import { PageChangeProps } from "@/types/components";
import { useRouter } from "next/navigation";

export default function PageChange({ currentCategoryId, setCurrentPage, currentPage }: PageChangeProps) {

    const router = useRouter();

    const handleDecrease = () => {
        if (currentPage > 1) {
            const pastPage = currentPage - 1;
            setCurrentPage(pastPage);
            router.push(`/auth/products/filter/${pastPage}/${currentCategoryId}`);
        }
    };

    const handleIncrease = () => {
        const nextValue = currentPage + 1;
        setCurrentPage(nextValue);
        router.push(`/auth/products/filter/${nextValue}/${currentCategoryId}`);
    };


    return (
        <div className="flex justify-center space-x-4">
            <button
                onClick={() => handleDecrease()}
            >
                Previous
            </button>
            <button
                onClick={() => handleIncrease()}
            >
                Next
            </button>
        </div>
    )
}
