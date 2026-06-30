import Link from "next/link";

const workspaces = [
    {
        id: "1",
        name: "Engineering Workspace",
        members: 42,
    },
    {
        id: "2",
        name: "Product Team",
        members: 18,
    },
];

export default function WorkspacePage() {
    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold">
                    Workspaces
                </h1>

                <link
                    href="/workspace/create"
                    className="bg-black text-white px-5 py-2 rounded-lg"
                >
                    Create Workspace
                    </link>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {workspaces.map((workspace) => (
                    <link
                        key={workspace.id}
                        href={`/workspace/${workspace.id}`}
                    >
                        <div className="border rounded-xl p-6 hover:shadow-lg transition">
                            <h2 className="text-xl font-semibold">
                                {workspace.name}
                            </h2>

                            <p className="text-muted-foreground mt-2">
                                {workspace.members} Members
                            </p>
                        </div>
                    </link>
                ))}
            </div>
        </div>
    );
}