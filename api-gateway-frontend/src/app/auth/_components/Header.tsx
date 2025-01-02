import { headers } from "next/headers";
import ProductIcon from "./Icons/Product";

export default async function Header() {

    const head = await headers();

    const name = head.get('User-Name');

    return (
        <header
            className="bg-[#ffb300] dark:bg-[#940533] flex flex-col md:flex-row justify-between items-center px-10 py-6 shadow-lg"
        >
            <div className="flex items-center space-x-8">
                <ProductIcon width={60} height={60} />
                <h2 className="font-bold text-4xl">
                    Products Manager
                </h2>
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <p className="text-xl mr-0 my-8 md:mr-16 text-center">
                    Hello, <span className="font-extrabold">{name}</span>
                </p>
                <nav className="p-0">
                    <ul className="flex space-x-10 font-semibold text-xl">
                        <li className="group">
                            <a
                                href="#"
                            >
                                Sí
                            </a>
                        </li>
                        <li className="group">
                            <a
                                href="#"
                            >
                                No
                            </a>
                        </li>
                        <li className="group">
                            <a
                                href="#"
                            >
                                ¿?
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
