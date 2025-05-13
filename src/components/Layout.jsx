import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-sky-400 to-white dark:from-[#0f172a] dark:via-sky-600 dark:to-[#1e3a8a] text-neutral-800 dark:text-neutral-100">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* Renders the current page */}
      </main>
      <Footer />
    </div>
  );
}
export default Layout;