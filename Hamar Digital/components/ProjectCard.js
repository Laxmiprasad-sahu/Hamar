export default function ProjectCard({ project }) {
  return (
    <div className="glass p-4 rounded-lg">
      <h3 className="font-heading font-bold text-xl mb-1">{project.name}</h3>
      <p className="text-sm mb-2">Client: {project.client}</p>
      <p className="mb-4">{project.description}</p>
      {project.reel && (
        <a
          href={project.reel}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary font-bold hover:underline"
        >
          Watch Reel
        </a>
      )}
    </div>
  );
}