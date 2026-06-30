export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Analytics
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Metric
          title="Velocity"
          value="82"
        />

        <Metric
          title="Cycle Time"
          value="4.3 Days"
        />

        <Metric
          title="Lead Time"
          value="7.1 Days"
        />

        <Metric
          title="Sprint Completion"
          value="91%"
        />
      </div>

      <div className="border rounded-xl p-6">
        Burndown Chart Placeholder
      </div>
    </div>
  );
}

function Metric({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border rounded-xl p-4">
      <p>{title}</p>

      <h2 className="text-2xl font-bold">
        {value}
      </h2>
    </div>
  );
}