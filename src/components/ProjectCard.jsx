function ProjectCard({ title, description, tech, liveLink, repoLink, image }) {
  return (
    <div className="project-card max-w-sm m-4">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={`${title} screenshot`}
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-neutral-900 dark:text-neutral-100">
          {title}
        </h3>
        <div className="p-container">
          <p className="text-base">{description}</p>
        </div>
        <div className="p-container mt-2">
          <p className="text-sm">Tech: {tech.join(", ")}</p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={liveLink}
          className="live-link text-blue-500 dark:text-blue-400 hover:underline mr-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="live-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
          </svg>
          Live
        </a>
        <a
          href={repoLink}
          className="github-link text-blue-500 dark:text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="github-icon" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49v-1.71c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85 0 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.56.94.56 1.54v2.28c0 .27.16.58.67.49A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;