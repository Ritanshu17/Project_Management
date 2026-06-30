interface Props {
    params: {
        workspaceId: string;
    };
}

export default function SettingsPage({
    params,
}: Props) {
    return(
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">
                Workspace Settings
            </h1>

            <div className="border rounded-xl p-6">
                <h2 className=" font-semibold mb-4">
                    General Settings
                </h2>

                <div className="space-y-4">
                    <input
                        defaultValue={params.workspaceId}
                        className="border p-3 rounded-lg w-full"
                    />

                    <textarea
                        placeholder="Workspace Description"
                        className="border p-3 rounded-lg w-full"
                    />

                    <button className="bg-black text-white px-5 py-2 rounded-lg">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}