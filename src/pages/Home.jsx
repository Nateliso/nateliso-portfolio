import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 sm:py-32 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-900 dark:text-neutral-100 tracking-tight text-outline-white dark:text-shadow-none">
          Welcome, <span className="text-outline-white dark:text-shadow-none">I’m</span>{" "}
          <span className="text-blue-700 dark:text-blue-400 text-outline-dark dark:text-shadow-none">
            Liso Mhlana
          </span>
        </h1>
        <div className="p-container mt-6 max-w-3xl mx-auto">
          <p className="text-xl sm:text-2xl">
            A Full-Stack Developer crafting modern, responsive web apps with{" "}
            <span className="font-semibold">
              React
            </span>{" "}
            and{" "}
            <span className="font-semibold">
              Vanilla CSS & Tailwind
            </span>
            . Explore my work, including my full-stack e-commerce app, Tech
            Haven.
          </p>
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/projects"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-300 shadow-lg"
          >
            View My Projects
          </Link>
          <Link
            to="/contact"
            className="inline-block bg-transparent border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-8 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-12 text-outline-white dark:text-shadow-none">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "Python",
            "React",
            "Redux.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Git & GitHub",
            "PostgreSQL",
            "REST APIs",
            "CRUD",
            "JSON Web Token(JWT)",
            "Postman API",
            "Linux Command Line",
            "Tailwind CSS",
            "Bootstrap",
            "SASS",
            "Responsive Design",
            "Web Performance Optimization",
            "Problem Solving",
            "Fast learner",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center text-neutral-700 dark:text-neutral-200 font-medium hover:scale-105 transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Preview */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50 dark:bg-gray-700">
        <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-12 text-outline-white dark:text-shadow-none">
          Featured Project
        </h2>
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 text-outline-white dark:text-shadow-none">
            Tech Haven
          </h3>
          <div className="p-container mt-4 max-w-2xl mx-auto">
            <p className="text-lg">
              A full-stack MERN e-commerce application for buying, renting, and returning tech products. Built with React, Node.js, Express, and MongoDB, it offers dynamic product listings, user interaction, and inventory control.
            </p>
          </div>
          <div className="mt-6">
            <Link
              to="/projects"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-300"
            >
              See All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;