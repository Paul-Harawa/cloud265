import React from "react";
import heroImg from "../assets/image5.png";
import heroBackgroundImg from "../assets/bgdark.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import {motion} from "framer-motion"
import{fadeIn} from "../Utilis/animationVariants"

function Hero() {
  return (
    <section
      id="home"
      className='bg-[url(./assets/bgdark.jpg)] bg-contain text-white flex items-center pt-28 md:h-screen'
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 overflow-y-hidden gap-12 h-full">


        <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"} 
        viewport={{once: false, amount: 0.7}}

        



        className="md:w-1/2 h-full">
          <h1 className="text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug">
            ALWAYS BE ONLINE.{" "}
          </h1>

          <br />

          <p className="text-lg mb-12 md:pr-8">
            With our affordable and reliable cloud hosting solutions, you are
            guaranteed to have an online presence everytime and everywhere
            accross the globe.
            <br />
            <br />
            <span className="text-yellow-300 text-lg font-bold">
              24/7 Customer Support Services.
            </span>
          </p>

          <button className="bg-yellow-500 text-white px-8 py-3.5 rounded-full hover:bg-yellow-600">
            <a href="#contact" className="flex gap-1 items-center">
              <span>Get Started </span>
              <FaArrowCircleRight />
            </a>
          </button>
        </motion.div>

        <div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"} 
        viewport={{once: false, amount: 0.7}}
        
        
        
        className="md:w-1/2 h-full">
          <img
            className="rounded-t-full w-full object-cover"
            src={heroImg}
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
