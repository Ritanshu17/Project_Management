const roadmap = [
  {
    quarter: "Q1",
    release: "Authentication",
  },
  {
    quarter: "Q2",
    release: "Realtime Collaboration",
  },
  {
    quarter: "Q3",
    release: "AI Project Manager",
  },
];

export default function RoadmapPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Product Roadmap
      </h1>

      <div className="space-y-4">
        {roadmap.map((item) => (
          <div
            key={item.release}
            className="border rounded-xl p-5"
          >
            <h2 className="font-semibold">
              {item.quarter}
            </h2>

            <p>{item.release}</p>
          </div>
        ))}
      </div>
    </div>
  );
}