import { ResponseMessage, ResponseEditProduct } from "@/types/response";
import { cookies } from "next/headers";
import EditProduct from "./Form";

export default async function Product({id}: {id: string}) {
    const cookieStore = await cookies();
    const authCookie = cookieStore.get("auth-token");

    let msg;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}products/one/edit/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Cookie": `auth-token=${authCookie?.value}`
        }
    })

    if (!response.ok) {
        const message: ResponseMessage = await response.json()
        msg = message.message
        return (
            <div className="flex flex-col my-36">
                <div className="flex-grow container m-auto">
                    <h2 className="text-5xl font-bold dark:text-[#e8e8e8] text-[#333333] text-center mt-12">
                        {msg}
                    </h2>
                </div>
            </div>
        )
    }

    const product: ResponseEditProduct = await response.json();

    return (
        <EditProduct product={product} />
    );
}