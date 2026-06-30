"use client";

import { useState } from "react";

export default function CreateWorkspace() {
    const [name, setName] = useState(" ");

    async function CreateWorkspace() {
        console.log(name);
    }


return (
    <div className="max-w-xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">
            Create Workspace
        </h1>

        <input
            placeholder="Workspace Name"
            value={name}
            onChange={(e) =>
                setName(e.target.value)
            }
            className="w-full border rounded-lg p-3"
        />

        <button
            onClick={CreateWorkspace}
            className="mt-4 bg-black text-white px-6 py-3 rounded-lg "
        >
            Create
        </button>
    </div>
    );
}