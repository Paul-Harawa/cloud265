import React from "react";
import aboutImage from "../assets/about.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import {motion} from "framer-motion"
import { fadeIn } from "../Utilis/animationVariants";

function About() {
  return (
    <div id="about" className="h-auto bg-[#f7f8fc] pb-16 pt-28">
      <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"} 
              viewport={{once: false, amount: 0.7}}
      
      
      
      className="container mx-auto">
        <div className="py-0 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          

          <div className="md:w-1/2 w-full">
            <h1 className="text-3xl font-secondary font-bold mb-4 leading-snug">
              ABOUT US{" "}
            </h1>

            <br />

            <p className="text-lg mb-12 md:pr-8 font-secondary">
              We are an information technology company based in Maawi, Africa. We specialize in cloud based services, and these services range from website hosting, virtual servers, data backup and recovery, and many more. We are here to help you with all your IT needs.
              <br />
              <br />
              <span className="text-green-600 text-lg font-bold font-primary">
                Get In Touch with Us Now.
              </span>
            </p>

            <button className="bg-green-500 text-white px-8 py-3.5 rounded-full hover:bg-green-600">
              <a href="#contact" className="flex gap-1 items-center">
                <span>Contact Us </span>
                <FaArrowCircleRight />
              </a>
            </button>
          </div>

          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            <img
              src={aboutImage}
              alt="about"
              className="rounded-r-full w-full object-cover"
            />
          </div>


        </div>
      </motion.div>
    </div>
  );
}

export default About;
