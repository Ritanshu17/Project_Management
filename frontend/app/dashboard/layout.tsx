import {
    FolderKanban,
    CheckCircle,
    AlertTriangle,
    Users,
    Bot,
    Calendar,
} from "lucide-react";

export default async function DashboardPage() {
    return (
        <div className="Space-y-8">
            {/* Header */}

            <div>
            <h1 className="text-4xl font-bold">
                Dashboard
            </h1>

            <p className="text-muted-foreground mt-2">
                Welcome back. Here's what's happening
                across your workspace.
            </p>
            </div>

            {/* Metrics */}

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <MetricCard
                title="projects"
                value="12"
                icon={<FolderKanban size={22} />}
                />

                <MetricCard
                title="Tasks Completed"
                value="438"
                icon={<CheckCircle size={22} />}
                />
                <MetricCard
                title="Incidents"
                value="3"
                icon={<AlertTriangle size={22} />}
                />

                <MetricCard
                title="Team Members"
                value="24"
                icon={<Users size={22} />}
                />
            </section>

            {/* Main Grid */}
            <section className="grid gap-6 xl:grid-cols-3">
                {/* Left */}

                <div className="xl:col-span-2 space-y-6">
                    <ProjectOverview />

                    <SprintOverview />

                    <RecentActivity />
                </div>

                {/* Right */}

                <div className="space-y-6">
                    <AIInsights />

                    <UpcomingMeetings />

                    <Notification />
                </div>
            </section>
        </div>
    );
}

function MetricCard({
    title,
    value,
    icon,
}: {
    title: string;
    value: string;
    icon: React.ReactNode;
}) {
    return(
        <div className="rounded-xl border p-5 bg-card">
            <div className="flex items-center justify-between">
                {icon}

                <span className="text-sm text-muted-foregorund">
                    {title}
                </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold">
                {value}
            </h2>
        </div>
    );
}

function ProjectOverview(){
    return(
        <div className="rounded-xl border p-6">
            <h2 className="text-xl font-semibold mb-4">
                Active Projects
            </h2>

            <div className="space-y-4">
                <ProjectRow
                    name="Engineering Workspace"
                    progress={72}
                />

                <ProjectRow
                    name="Mobile Application"
                    progress={54}
                />

                <ProjectRow
                    name = "AI Risk Manager"
                    progress={31}
                />
            </div>
        </div>
    );
}

function ProjectRow({
    name,
    progress,
}: {
    name : string;
    progress : number;
}) {
    return(
        <div>
            <div className="flex justify-between">
                <span>{name}</span>

                <span>{progress}</span>
            </div>

            <div className="mt-2 h-2 rounded bg-muted">
                <div
                    className="h-2 rounded bh-black"
                    style={{
                        width: `${progress}%`,

                    }}
                />
            </div>

        </div>

    );
}

function SprintOverview(){
    return (
        <div className="rounded-xl border p-6">
            <h2 className="TEXT-XL FONT-SEMIBOLD MN-4">
                Sprint Health
            </h2>

            <div  className="grid mf:grid-cols-3 gap-4">
                <Stat label="velocity" value="82" />
                <Stat label="Completed" value="56" />
                <Stat label="remaining" value="18" />

            </div>
        </div>
    );
}

function Stat({
    label,
    value,

}: {
    label: string;
    value: string;
})  {
    return (
        <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">
                {label}

            </p>

            <h3 className="text-2xl font-bold">
                {value}
            </h3>
        </div>
    );
}



function AIInsights(){
    return(
        <div className="rounded-xl border p-6">
            <div className="flex items-center gap-2 mb-4">
                <Bot size={28} />

                <h2 className="font-semibold">
                    AI Insights
                </h2>
            </div>

            <ul className="space-y-3 text-sm">
                <li>
                    Release has 76% chance of completing on
                    time.
                </li>

                <li>
                    Backend team workload exceeds capacity.
                </li>
                <li>
                    Authentication module is blocking 3
                    tasks.
                </li>
            </ul>
        </div>
    );
}

function UpcomingMeetings(){
    return(
        <div className="rounded-xl border p-6">
            <div className="flex items-center gap-2 mb-4">
                <Calendar size={20} />

                <h2 className="font-semibold">
                    Upcoming Meetings
                </h2>
            </div>

            <div className="space-y-3">
                <Meeting
                    title="Sprint Planning"
                    time="10:00 AM"
                />

                <Meeting
                    title="Architecture Review"
                    time="02:00 PM"
                />
            </div>
        </div>
    );

}

function Meeting({
    title,
    time,
}: {
    title: string;
    time: string;

}) {
    return(
        <div className="border rounded-lg p-3">
            <h3>{title}</h3>

            <p className="text-sm text-muted-foreground">
                {time}
            </p>
        </div>
    );
}


function RecentActivity(){
    return(
        <div className="rounded-xl border p-6">
            <h2 className="font-semibold mb-4">
                Recent Activity
            </h2>

            <div className="space-y-3">
                <p>Task @234 moved to Review</p>

                <p>Incident 42 resolved</p>

                <p>New project created </p>
            </div>
        </div>

    );

}


function Notification(){
    return(
        <div className="rounded-xl border p-6">
            <h2 className="font-semibold mb-4">
                Notifications
            </h2>

            <div className="space-y-3">
                <p>5 tasks assigned to you</p>

                <p>i sprint ending tomorrow</p>

                <p>2 unresolved blockers</p>
            </div>
        </div>

    );
}