import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/services";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="font-primary overflow-x-hidden">

        <Navbar />
        <Hero />
        <Services />
        <About />
        <Pricing />
        <Contact />
        <Footer />

      </div>
    </>
  );
}

export default App;
