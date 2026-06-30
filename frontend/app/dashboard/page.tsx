import { ReactNode } from "react";


export default function DashboardLayout({
    children,
}: {
    children : ReactNode;
}) {
    return(
        <div className="h-screen flex over-flow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-i">
                <Navbar />

                <main className="flex-i overflow-y-auto bg-background p-6">
                    {children}
                </main>
            </div>
        </div>

    );
}
