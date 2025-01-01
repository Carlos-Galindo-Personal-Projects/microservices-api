export default function LoginPage() {
    return (
        <div className="flex items-center justify-center p-4">
            <div className="bg-white dark:bg-[#333333] rounded-lg shadow-lg dark:shadow-[#ffb300] shadow-[#940533] p-6 w-full max-w-md">
                <form>
                    <div className="mb-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">Login</h2>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                        </label>
                        <input
                            id="email"
                            type="text"
                            placeholder="correo@correo.com"
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-[#ffb300] focus:border-[#ffb300]"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="********"
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-[#ffb300] focus:border-[#ffb300]"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full dark:bg-[#ffb300] bg-[#c0012a] dark:hover:bg-[#e0a000] hover:bg-[#940533] dark:text-black font-medium rounded-lg px-4 py-2 transition duration-200 text-white"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}