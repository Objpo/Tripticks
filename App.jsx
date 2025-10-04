import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar";
import BlogSection from "./pages/blogSection.jsx";
import HomePage from "./pages/homePage.jsx";

function App() {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Các tuyến đường */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogSection />} />
                {/* Thêm các route khác sau này */}
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
                {/* <Route path="/hotel" element={<Hotel />} /> */}
            </Routes>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-4">
                <p>© 2025 Tripticks. All rights reserved.</p>
            </footer>
        </>
    );
}
export default App;
