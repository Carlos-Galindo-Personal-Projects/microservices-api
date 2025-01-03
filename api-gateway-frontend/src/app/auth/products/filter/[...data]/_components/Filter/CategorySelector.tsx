import { CategorySelectorProps } from "@/types/components";

export default function CategorySelector({ categories, currentCategoryId, setCurrentCategoryId }: CategorySelectorProps) {
    return (
        <div className="mb-6">
            <label
                htmlFor="categoryId"
                className="block text-sm font-medium"
            >
                Category
            </label>
            <select
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-[#ffb300] focus:border-[#ffb300]"
                name="categoryId"
                id="categoryId"
                value={currentCategoryId}
                onChange={(e) => setCurrentCategoryId(Number(e.target.value))}
            >
                <option value="" disabled>
                    Select a category
                </option>
                {
                    categories && categories.length > 0 ? (
                        categories.map((category, key) => (
                            <option value={category.id} key={key}>{category.name}</option>
                        ))
                    ) : (
                        <option value="" disabled>No hay categorias</option>
                    )
                }
            </select>
        </div>
    );
}
