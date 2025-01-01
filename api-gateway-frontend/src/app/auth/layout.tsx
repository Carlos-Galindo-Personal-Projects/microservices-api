import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Header />
            <main
                className="w-11/12 h-full container m-auto shadow-lg shadow-[#e8e8e8]"
            >
                {children}
            </main>
            <Footer />
        </>
    )
}
