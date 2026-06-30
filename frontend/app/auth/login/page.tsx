"use client";

import {useState} from "react";
// import {userRouter} from "next/navigation";

export default function LoginPage(){
    // const router = userRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();
        try{
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
                {
                    method: "POST",
                    header: {
                        "content-Type": "application/json",
                    },
                    body : JSON.stringify({
                        email,
                        password,
                    }),

                }
            );

            if(!response.ok){
                throw new Error("Login failed");

            }

            const data =  await response.json();

            localStorage.setItem(
                "access_token",
                data.access_token
            );

            router.push("/dashboard");
        } catch (error) {
            console.error(error);
            alert("Invalid crendentials");
        }
    }
    return(
        <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-6">
                Login
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    className="w-full border rounded-lg p-3"
                />
                <button
                    type="submit"
                    className="w-full bg-black text-white rounded-lg py-3"
                >
                    Login
                </button>
            </form>
        </div>
    );
}