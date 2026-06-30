const projects = [
  {
    id: "ENG-1",
    name: "Workspace Platform",
    progress: 72,
  },
  {
    id: "ENG-2",
    name: "AI Assistant",
    progress: 35,
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Projects
        </h1>

        <button className="bg-black text-white px-5 py-2 rounded-lg">
          New Project
        </button>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-xl p-5"
          >
            <div className="flex justify-between">
              <span>{project.name}</span>

              <span>{project.progress}%</span>
            </div>

            <div className="mt-3 bg-gray-200 h-2 rounded">
              <div
                className="bg-black h-2 rounded"
                style={{
                  width: `${project.progress}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}