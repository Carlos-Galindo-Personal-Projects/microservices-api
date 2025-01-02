import Product from "./_components/Product";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <div>
            <Product id={id} />
        </div>
    );
}
