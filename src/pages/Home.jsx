import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiInstagram,
  FiMessageCircle,
  FiMail,
  FiStar,
  FiShoppingBag,
} from "react-icons/fi";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Home/Hero";
import Products from "./Products";
import ProductsHome from "../components/Home/ProductsHome";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products - Staggered Grid */}
      <ProductsHome />

      {/* About Section */}
      <About />

      {/* Contact Section - Floating Cards */}
      <Contact />
    </div>
  );
};

export default Home;
