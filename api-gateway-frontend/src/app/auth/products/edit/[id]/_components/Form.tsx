"use client"

import { productSchema } from "@/schemas/product.schema";
import { RequestProducts } from "@/types/request";
import { ResponseProducts } from "@/types/response";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, useForm } from "react-hook-form";

export default function EditProduct({ product }: { product: ResponseProducts }) {

    const { register, handleSubmit } = useForm<RequestProducts>({
        resolver: zodResolver(productSchema)
    });

    const onSuccess = async (data: RequestProducts) => {
        console.log(data);
        alert("oc")
    }

        const onError = (errors: FieldErrors<RequestProducts>) => {
            console.log(errors);
            let stringErrors = '';
            Object.entries(errors).forEach(([, value]) => {
                stringErrors += value.message + '\n' || '';
            });
            alert(stringErrors);
        };

    return (
        <div className="flex items-center justify-center p-4 mt-8">
            <div className="bg-[#333333] dark:bg-[#e8e8e8] rounded-lg shadow-lg p-6 w-full max-w-md">
                <form onSubmit={handleSubmit(onSuccess, onError)} >
                    <div className="mb-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#e8e8e8] dark:text-[#333333]">Edit Product</h2>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-[#e8e8e8] dark:text-[#333333]">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            defaultValue={product.name}
                            {...register("name")}
                            placeholder="correo@correo.com"
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-[#ffb300] focus:border-[#ffb300]"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block text-sm font-medium text-[#e8e8e8] dark:text-[#333333]">
                            Description
                        </label>
                        <input
                            id="description"
                            type="text"
                            placeholder="Description"
                            defaultValue={product.description}
                            {...register("description")}
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-[#ffb300] focus:border-[#ffb300]"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="price" className="block text-sm font-medium text-[#e8e8e8] dark:text-[#333333]">
                            Price
                        </label>
                        <input
                            id="price"
                            type="number"
                            placeholder="Price"
                            defaultValue={product.price}
                            min={1}
                            step={0.5}
                            {...register("price", {setValueAs: (value: string) => Number(value)})}
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-[#ffb300] focus:border-[#ffb300]"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="amount" className="block text-sm font-medium text-[#e8e8e8] dark:text-[#333333]">
                            Amount
                        </label>
                        <input
                            id="amount"
                            type="number"
                            placeholder="Amount"
                            defaultValue={product.amount}
                            min={1}
                            {...register("amount", {setValueAs: (value: string) => Number(value)})}
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-[#ffb300] focus:border-[#ffb300]"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="categoryId" className="block text-sm font-medium text-[#e8e8e8] dark:text-[#333333]">
                            Category
                        </label>
                        <select
                            id="category"
                            defaultValue={1}
                            {...register("categoryId", {setValueAs: (value: string) => Number(value), required: true})}
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-[#ffb300] focus:border-[#ffb300]"
                        >
                            <option value="" disabled>Select a category</option>
                            <option value="1">Category 1</option>
                            <option value="2">Category 2</option>
                            <option value="3">Category 3</option>
                        </select>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full dark:bg-[#ffb300] bg-[#c0012a] dark:hover:bg-[#e0a000] hover:bg-[#940533] dark:text-black font-medium rounded-lg px-4 py-2 transition duration-200 text-white"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
