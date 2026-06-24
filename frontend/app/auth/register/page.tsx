"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] =
        useState("");

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
            {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        }
    );

    if (!response.ok) {
        throw new Error("Register failed");
    }

        router.push("/login");
    }   catch (error) {
        console.error(error);
    }
}

return (
    <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">
            Create Account
        </h1>

        <form
            onSubmit={handleSubmit}
            className="space-y-4"
        >
            <input
                placeholder="Full Name"
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
                className="w-full border rounded-lg p-3"
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
                className="w-full border rounded-lg p-3"
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
                className="w-full border rounded-lg p-3"
            />

            <button
                type="submit"
                className="w-full bg-black text-white rounded-lg py-3"
            >
                Register
            </button>
        </form>
    </div>
    );
}