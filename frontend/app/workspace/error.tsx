"use client";

export default function Error({
    error,
}: {
    error: Error;
}) {
    return(
        <div className="flex flex-col items-center justify-center h-full gap-4">
            <h1 className="text-2xl font-bold">
                Workspace Error
            </h1>
        </div>
    );
}