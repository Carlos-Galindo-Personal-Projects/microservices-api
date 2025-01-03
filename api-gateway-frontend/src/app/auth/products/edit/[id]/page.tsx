import { Suspense } from "react";
import Product from "./_components/Product";
import FormEditSkeleton from "./_components/Skeleton/FormEditSkeleton";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <Suspense fallback={<FormEditSkeleton />}>
            <Product id={id} />
        </Suspense>
    );
}
