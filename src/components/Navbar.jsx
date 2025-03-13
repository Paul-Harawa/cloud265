import React, { useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  const handleScroll = () => {
    const sections = ["home", "services","about", "purchase"];
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTo = (targetID) => {
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const navLinks = (
    <ul className="flex flex-col md:flex-row  lg:space-x-8 sm:space-x-4 space-y-0 md:space-y-0 p-4 md:p-0">
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("home");
          }}
          href="#home"
          className={` hover:text-green-700 text-white ${
            activeSection === "home" ? "isActive" : ""
          }`}
        >
          Home
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#services"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("services");
          }}
          className={` hover:text-green-700 text-white ${
            activeSection === "services" ? "isActive" : ""
          }`}
        >
          Services
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("about");
          }}
          className={` hover:text-green-700 text-white ${
            activeSection === "about" ? "isActive" : ""
          }`}
        >
          About
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#purchase"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("purchase");
          }}
          className={` hover:text-green-700 text-white ${
            activeSection === "purchase" ? "isActive" : ""
          }`}
        >
          Purchase
        </motion.a>
      </li>
    </ul>
  );

  return (
    <header className="bg-heroBG text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div>
          <a href="#">
            <h1 className="text-xl font-bold">
              Cloud<span className="text-green-700">265</span>
            </h1>
          </a>
        </div>

        <div className="hidden md:flex flex-grow justify-center">
          <nav>{navLinks}</nav>
        </div>

        <div className="hidden md:block">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              handleCloseMenu();
              handleScrollTo("contact");
            }}
            href="#contact"
            className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-full"
          >
            Contact Us
          </motion.a>
        </div>

        <div className="block md:hidden">
          <button
            onClick={handleToggle}
            className={`text-white focus:outline-none ${
              isOpen ? "border border-white" : "block"
            }`}
          >
            <HiMenuAlt3 className="size-6" />
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full h-screen bg-heroBG bg-opacity-95 z-20">
          <ul className="flex flex-col p-4 space-y-5">
            {navLinks.props.children}

            <li className="py-3 ">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleCloseMenu();
                  handleScrollTo("contact");
                }}
                className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-full cursor-pointer"
              >
                Contact Us
              </motion.a>
              
            </li>
            
          </ul>
        </nav>
        
      )}
    </header>
  );
};

export default Navbar;
