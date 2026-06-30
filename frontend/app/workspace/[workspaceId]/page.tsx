interface Props {
    params: {
        workspaceId: string;

    };
}

export default function WorkspaceDetails({
    params,
}: Props) {
    return(
        <div className="p-8 space-y-8">
            <div>
                <h1 className="text-4xl font-bold">
                    Workspace {params.workspaceId}
                </h1>

                <p className="text-muted-foreground">
                    Central collaboration hub
                </p>
            </div>

            <section className="gid md:grid cols-2 xl:grid-cols-4 gap-4">
                <Card title="Projects" value="18" />
                <Card title="Members" value="42" />
                <Card title="Channels" value="15" />
                <Card title="Meetings" value="8" />
            </section>

        </div>
    );
}

function Card({
    title,
    value,
}: {
    title: string;
    value:string;
}) {
    return(
        <div className="border rounded-xl p-5">
            <h3 className="text-muted-foreground">
                {title}
            </h3>
            <p className="text-3xl font-bold mt-2">
                {value}
            </p>

        </div>

    );
}

function ActivityFeed(){
    return(
        <div className="border rounded-xl p-6">
            <h2 className="font-semibold mb-4">
                Recent Activity
            </h2>

            <ul className="space-y-3">
                <li>New task created</li>
                <li>Meeting started</li>
                <li>Incident resolved</li>
            </ul>

        </div>
    );
}

function AIWorkspaceInsights() {
    return(
        <div className="border rounded-xl p-6">
            <h2 className="font-semibold mb-4">
                AI Insights
            </h2>

            <ul className="space-y-3 text-sm">
                <li>
                    Sprint velocity increade by 12%
                </li>
                <li>
                    Backend team approaching capacity
                </li>
                <li>
                    Authentication project at risk
                </li>
            </ul>
        </div>
    );
}