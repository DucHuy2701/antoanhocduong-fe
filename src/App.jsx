import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Loading from "./components/Loading";
import AppRouter from "./pages/admin/AppRouter";
import NotFound from "./components/NotFound";
import Activity from "./pages/Activity";

// Component layout cho các trang công khai
const PublicLayout = () => {
  return (
    <>
      <div className="site-background"></div>
      <Navbar />
      <main className="flex-grow-1">
        <Outlet /> {/* Render các route con */}
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Routes>
        {/* Route cho trang loading */}
        <Route path="/" element={<Loading />} />

        {/* Route cho các trang công khai với layout */}
        <Route element={<PublicLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 cho các route công khai không hợp lệ */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Route cho các trang quản trị */}
        <Route path="/admin/*" element={<AppRouter />} />

        {/* 404 cho các route gốc không hợp lệ */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
