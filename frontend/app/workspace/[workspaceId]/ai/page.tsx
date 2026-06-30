export default function AIPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        AI Assistant
      </h1>

      <div className="border rounded-xl p-6">
        <h2 className="font-semibold mb-4">
          AI Project Manager
        </h2>

        <textarea
          placeholder="Ask anything..."
          className="w-full border rounded-lg p-4"
          rows={5}
        />

        <button className="mt-4 bg-black text-white px-5 py-2 rounded-lg">
          Ask AI
        </button>
      </div>

      <div className="border rounded-xl p-6">
        <h3 className="font-semibold mb-4">
          Suggested Insights
        </h3>

        <ul className="space-y-3">
          <li>
            What is blocking release?
          </li>

          <li>
            Predict sprint completion.
          </li>

          <li>
            Generate roadmap for Q4.
          </li>

          <li>
            Summarize current project.
          </li>
        </ul>
      </div>
    </div>
    );
}