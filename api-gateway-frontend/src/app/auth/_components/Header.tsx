import ProductIcon from "./Icons/Product";

export default function Header() {
    return (
        <header
            className="bg-[#e8e8e8] dark:bg-[#333333] flex flex-col md:flex-row justify-between items-center px-10 py-6 shadow-lg"
        >
            <div className="flex items-center space-x-8">
                <ProductIcon width={60} height={60} />
                <h2 className="font-bold text-4xl">
                    Hola
                </h2>
            </div>
            <nav className="p-8 md:p-0">
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
        </header>
    )
}
