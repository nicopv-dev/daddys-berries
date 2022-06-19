import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />

      {/* This is the main content of the page */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
