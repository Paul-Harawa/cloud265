import React from "react";
import { IoCart } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../Utilis/animationVariants";

const packages = [
  {
    name: "Bronze Package",
    price: "MWK 120, 000.00",
    description:
      "Ideal for individuals or small businesses looking to get started.",
    features: [
      "100 GB storage",
      "Free domain registration",
      "Free SSL",
      "10 email accounts",
      "2 GB mail storage",
      "Up to 10 websites",
      "24/7 support",
    ],
  },
  {
    name: "Silver Package",
    price: "MWK 250, 000.00",
    description:
      "Ideal for businesses that require considerate infrastructure.",
    features: [
      "1 TB GB storage",
      "Free domain registration",
      "Free SSL",
      "100 email accounts",
      "200 GB mail storage",
      "Up to 100 websites",
      "24/7 support",
    ],
  },
  {
    name: "Gold Package",
    price: "MWK 500, 000.00",
    description:
      "Ideal for large corporations and institutions that require dedicated infrastructure.",
    features: [
      "5 TB GB storage",
      "Free domain registration",
      "Free SSL",
      "1000 email accounts",
      "1 TB GB mail storage",
      "Up to 1000 websites",
      "24/7 support",
    ],
  },
];

function Pricing() {
  return (
    <div id="purchase" className="h-auto bg-white pt-32 font-primary">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-secondary mb-8">Purchase</h2>

          <p className="text-lg mb-12  md:w-2/3 mx-auto">
            View some of our recommended website hosting bundles below. You can
            send an enquirely if the service you are looking for is not
            included.
          </p>
        </div>

        <div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"} 
                viewport={{once: false, amount: 0.7}}
        
        
        className="flex flex-col md:w-5/6 mx-auto md:flex-row gap-8 pb-10">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 flex flex-col gap-4 shadow-lg"
            >
              <h3
                className={`text-xl font-bold ${
                  pkg.name === "Bronze Package" ? "text-orange-600" : ""
                } ${pkg.name === "Silver Package" ? "text-gray-600" : ""} ${
                  pkg.name === "Gold Package" ? "text-yellow-600" : ""
                } bg-green-200 py-4 px-2 text-center rounded-lg font-secondary`}
              >
                {pkg.name}
              </h3>
              <hr />
              <p className="text-sm font-bold">
                {pkg.price} <span className="font-light">/month</span>
              </p>
              <p className="text-sm">{pkg.description}</p>
              <ul className="text-sm list-disc list-inside">
                {pkg.features.map((feature, index) => (
                  <li className="flex justify-start" key={index}>
                    <span className="text-green-600 pr-2">
                      <FaCheckCircle />
                    </span>{" "}
                    {feature}{" "}
                  </li>
                ))}
              </ul>
              <button className="bg-primary text-white px-8 py-3.5 rounded-full hover:bg-primary/90 flex justify-between">
                Purchase <IoCart className="text-lg" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h4 className="text-lg font-bold font-secondary mb-8 pt-8 text-red-700">
            What you are looking for is not listed here?
          </h4>

          <button className="bg-yellow-500 text-white px-8 py-3.5 rounded-full hover:bg-yellow-600 flex justify-center md:w-1/2 mx-auto">
            Request for a quoate <FaThumbsUp className="text-lg mx-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
