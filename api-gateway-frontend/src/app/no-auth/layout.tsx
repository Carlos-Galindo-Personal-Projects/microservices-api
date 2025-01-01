export default function NoAuthLayout ({children}: {children: React.ReactNode}) {
    return (
        <div
            className="flex items-center justify-center h-screen bg-gradient-to-r dark:from-[#ff8800] dark:via-[#c0012a] dark:to-[#940533] from-[#ffb300] to-[#c0012a] via-[#ff8800]">
            {children}
        </div>
    )
}
