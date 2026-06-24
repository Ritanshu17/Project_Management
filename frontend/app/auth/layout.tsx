import type { ReactNode } from "react";

export default function AuthLayout({
    children;

}: {
    children: ReactNode;
}) {
    return (
        <div className="min-screen flex iterms-center justify-center bg-muted/30">
            <div className="w-full nax-w-md px-6">
                {children}
            </div>
        </div>
    );
}