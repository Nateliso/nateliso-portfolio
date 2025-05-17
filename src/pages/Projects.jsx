import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";
import { projectImages } from "../data/projectImages";

function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-8 text-outline-white dark:text-shadow-none">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
            image={projectImages[project.title]}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;