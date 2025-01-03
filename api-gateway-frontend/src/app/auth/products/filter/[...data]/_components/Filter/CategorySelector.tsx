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
                className="mt-1 block w-full border border-[#ffb300] dark:border-[#940533] rounded-lg px-3 py-2 dark:bg-[#e8e8e8] dark:text-[#333333] text-[#e8e8e8] bg-[#333333] dark:focus:ring-[#940533] dark:focus:border-[#940533] focus:ring-[#ffb300] focus:border-[#ffb300] sm:text-sm"
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
