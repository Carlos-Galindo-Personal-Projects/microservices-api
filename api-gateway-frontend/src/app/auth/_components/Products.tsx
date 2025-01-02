import { ResponseMessage, ResponseProducts } from "@/types/response";
import { cookies } from "next/headers";

export default async function Products() {

    const cookieStore = await cookies();
    const authCookie = cookieStore.get("auth-token");

    let msg;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}products/all`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Cookie": `auth-token=${authCookie?.value}`
        },
        credentials: "include"
    })

    if (!response.ok) {
        const message: ResponseMessage = await response.json()
        msg = message.message
    }

    const products: ResponseProducts[] = await response.json();

    return (
        <div className={`grid ${products && products.length > 0 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'h-[300px] flex items-center justify-center'}`}>
            {
                products && products.length > 0 ? (
                    products.map((product, key) => (
                        <div key={key}
                            className={`bg-[#333333] dark:bg-[#e8e8e8] p-6 rounded-lg shadow-md flex flex-col space-y-4 ${key === products.length - 1 ? 'col-span-3 md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            <h2 className="text-2xl font-bold dark:text-[#333333] text-[#e8e8e8]">{product.name}</h2>
                            <p className="dark:text-[#333333] text-[#e8e8e8] text-sm">{product.category.name}</p>
                            <p className="dark:text-[#333333] text-[#e8e8e8]">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold dark:text-[#333333] text-[#e8e8e8]">${product.price}</span>
                                <span className="text-sm dark:text-[#333333] text-[#e8e8e8]">Stock: {product.amount}</span>
                            </div>
                            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                                Show details
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-2xl font-bold">
                        {msg}
                    </div>
                )
            }
        </div>
    )
}
