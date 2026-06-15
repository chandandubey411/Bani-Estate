import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { PropertyProvider } from "./context/PropertyContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home/Home";
import Properties from "./pages/Properties/Properties";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import ServiceApartments from "./pages/ServiceApartments/ServiceApartments";
import ServiceApartmentDetails from "./pages/ServiceApartments/ServiceApartmentDetails";
import About from "./pages/About/About";
import Agents from "./pages/Agents/Agents";
import AgentDetails from "./pages/Agents/AgentDetails";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/Blog/BlogDetails";
import Contact from "./pages/Contact/Contact";
import Wishlist from "./pages/Wishlist/Wishlist";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// A utility component to scroll the page to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <PropertyProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              {/* Core Landing Page */}
              <Route path="/" element={<Home />} />
              
              {/* Properties Pages */}
              <Route path="/properties" element={<Properties />} />
              <Route path="/properties/:id" element={<PropertyDetails />} />
              
              {/* Service Apartments Pages */}
              <Route path="/service-apartments" element={<ServiceApartments />} />
              <Route path="/service-apartments/:id" element={<ServiceApartmentDetails />} />
              
              {/* Corporate Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/agents/:id" element={<AgentDetails />} />
              
              {/* Editorial / Blog */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              
              {/* Contact Inquiry */}
              <Route path="/contact" element={<Contact />} />
              
              {/* Bookmarks */}
              <Route path="/wishlist" element={<Wishlist />} />
              
              {/* Auth Toggles */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </PropertyProvider>
  );
}

export default App;
