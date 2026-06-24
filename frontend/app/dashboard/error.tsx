"use client";

export default function Error({
    error,
}: {
    error: Error;
}) {
    return(
        <div className="flex flex-col items-center justify-center h-full gap-4">
            <h2 className="text-2xl font-bold">
                Something went wrong!
            </h2>

            <p>{error.message}</p>
        </div>
    );
}                              