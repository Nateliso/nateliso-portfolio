import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
        formData,
        `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`
      )
      .then(
        () => setStatus("Message sent successfully!"),
        () => setStatus("Failed to send message. Please try again.")
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-8 text-outline-white dark:text-shadow-none">
        Contact Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Email Form */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4 text-outline-white dark:text-shadow-none">
            Send an Email
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
          {status && (
            <div className="p-container mt-4 text-center">
              <p className="text-lg">{status}</p>
            </div>
          )}
        </div>
        {/* Social Links */}
        <div>
          <div className="p-container mb-6">
            <p className="text-lg">
              Prefer another platform? Reach out on LinkedIn, or X:
            </p>
          </div>
          <div className="space-y-4">
            <a
              href="https://www.linkedin.com/in/liso-mhlana-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 dark:text-gray-300 hover:underline"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-9.5 15.5V12H7v6.5h2.5zm0-8.75c0-.69-.56-1.25-1.25-1.25S7 9.06 7 9.75 7.56 11 8.25 11s1.25-.56 1.25-1.25zm2.5 8.75V13.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5h2.5v-5c0-2.21-1.79-4-4-4s-4 1.79-4 4v5h2.5z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://x.com/Nateliso16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 dark:text-gray-300 hover:underline"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;