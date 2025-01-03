import { headers } from "next/headers";
import ProductIcon from "./Icons/Product";
import Link from "next/link";

export default async function Header() {

    const head = await headers();

    const name = head.get('User-Name');

    return (
        <header
            className="bg-[#ffb300] dark:bg-[#940533] flex flex-col md:flex-row justify-between items-center px-10 py-6 shadow-lg"
        >
            <div className="flex items-center space-x-8">
                <Link href="/auth" className="hidden md:block" aria-label="Products Manager Dashboard">
                    <ProductIcon width={50} height={50} />
                </Link>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-bold text-4xl text-center">
                        Products Manager
                    </h2>
                    <p className="text-xl mt-4 mb-4 md:mb-0 text-center">
                        Hello, <span className="font-bold">{name}</span>
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <nav className="p-0">
                    <ul className="flex space-x-10 text-xl">
                        <li className="group text-center">
                            <Link
                                href="/auth/products/add"
                            >
                                Add Product
                            </Link>
                        </li>
                        <li className="group text-center">
                            <a
                                href="#"
                            >
                                Filter Products
                            </a>
                        </li>
                        <li className="group text-center">
                            <a
                                href="#"
                            >
                                About
                            </a>
                        </li>
                        <li className="group text-center">
                            <a
                                href="#"
                            >
                                Logout
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
