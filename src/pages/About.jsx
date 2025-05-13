function About() {
  const certifications = [
    {
      name: "Responsive Web Design",
      url: "https://freecodecamp.org/certification/NateLiso/responsive-web-design",
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      url: "https://freecodecamp.org/certification/NateLiso/front-end-development-libraries",
    },
    {
      name: "Front End Development Libraries",
      url: "https://freecodecamp.org/certification/NateLiso/front-end-development-libraries",
    },
    {
      name: "Data Visualization",
      url: "https://freecodecamp.org/certification/NateLiso/data-visualization",
    },
    {
      name: "Back End Development and APIs",
      url: "https://freecodecamp.org/certification/NateLiso/back-end-development-and-apis",
    },
    {
      name: "Scientific Computing with Python",
      url: "https://freecodecamp.org/certification/NateLiso/scientific-computing-with-python-v7",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-8 text-outline-white dark:text-shadow-none">
        About Me
      </h2>
      <div className="p-container max-w-3xl mx-auto text-center">
        <p className="text-lg">
          I’m Liso Mhlana aka Nateliso, a Front-End Developer with a growing full-stack skill set, building modern, responsive web applications with **React** and **Tailwind CSS**. My background includes completing multiple certifications through freeCodeCamp and deploying real-world projects — including a full-stack e-commerce app.
          I enjoy crafting intuitive user interfaces and solving complex logic with clean, scalable code. Alongside my frontend skills, I’ve worked with **Node.js**, **MongoDB**, and **PostgreSQL** to build dynamic backends and RESTful APIs.
          Beyond the code, I love learning new tools, refining my UI designs, structuring a backend database and collaborating on meaningful projects, I’m always exploring new ways to improve my craft.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-center text-neutral-800 dark:text-neutral-100 mb-6 text-outline-white dark:text-shadow-none">
          Certifications
        </h3>
        <div className="certification-container max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-item">
              <svg
                className="w-5 h-5 mr-2 text-blue-500 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cert.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default About;