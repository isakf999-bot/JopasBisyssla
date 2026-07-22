import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

/** Rot-layout: sticky navbar, sidinnehåll via <Outlet>, footer. */
export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Hoppa till innehåll
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
