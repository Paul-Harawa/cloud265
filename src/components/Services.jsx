import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaArrowCircleRight } from "react-icons/fa";
import { MdCurrencyExchange } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi2";

import {motion} from "framer-motion"
import { fadeIn } from "../Utilis/animationVariants";

import serviceImage1 from "../assets/image3.jpg";
import serviceImage2 from "../assets/image3.jpg";
import serviceImage3 from "../assets/image3.jpg";

function Services() {
  return (
    <div id="services" className="bg-[#E4F0F4]">
      <div className="pt-28 px-4 container mx-auto">
        <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"} 
                viewport={{once: false, amount: 0.7}}
        
        
        className="text-center space-y-5">
          <h2 className="text-3xl font-bold font-secondary text-heroBG">
            Our Services
          </h2>
          <p className="md:w-1/2 mx-auto text-lg">
            We offer a wide range of services to meet your needs.
          </p>
        </motion.div>

        <div className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <motion.TabList 
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"} 
                    viewport={{once: false, amount: 0.7}}
            
            
            
            className="flex flex-wrap justify-evenly items-center md:gap-8 gap-4">
              <Tab>Web Hosting</Tab>
              <Tab>Virtual Servers</Tab>
              <Tab>Data Backup</Tab>
            </motion.TabList>

            <TabPanel>

              <div
                      variants={fadeIn("up", 0.2)}
                      initial="hidden"
                      whileInView={"show"} 
                      viewport={{once: false, amount: 0.7}}
              
              
              
              className="flex flex-col md:flex-row gap-8 mt-8">
              
              <div className="md:w-1/2 bg-white rounded-lg p-8 shadow-lg font-secondary">
                <h3 className="text-3xl font-semibold text-primary mb-4">
                  Web Hosting
                </h3>

                <p className="mb-8 text-lg">
                  Are you looking for a place to host your website? Look no
                  further, we are here to help you.
                </p>

                <h4 className="pb-3 font-semibold">Are you?</h4>

                <ul className="list-disc list-inside space-y-3 text-lg">
                  <li>A Developer who wants to deploy or manage clients' websites</li>
                  <li>A Business that wants to have an online presence.</li>
                  <li>An Institurion that wants to go didtal.</li>
                </ul>

                <p className="mb-8 pt-5 font-semibold text-yellow-500 text-lg">
                  We've got you covered.
                </p>


                <div className="w-full flex justify-between">

                <button className="bg-green-500 text-white px-8 py-3.5 rounded-full hover:bg-green-600">
                            <a href="#pricing" className="flex gap-1 items-center">
                              <span>Prices </span>
                              <HiCurrencyDollar  />
                            </a>
                          </button>


                          <button className="bg-yellow-500 text-white px-8 py-3.5 rounded-full hover:bg-yellow-600">
                            <a href="#pricing" className="flex gap-1 items-center">
                              <span>Enquire </span>
                              <FaArrowCircleRight />
                            </a>
                          </button>

                          </div>


              </div>

              <div className="md:w-1/2">
                <img
                  src={serviceImage1}
                  alt=""
                  className="w-full h-auto rounded-2xl object-cover shadow-lg"
                />
              </div>

              </div>
            </TabPanel>
            <TabPanel>

              <div
                      variants={fadeIn("up", 0.2)}
                      initial="hidden"
                      whileInView={"show"} 
                      viewport={{once: false, amount: 0.7}}
              
              
              
              className="flex flex-col md:flex-row gap-8 mt-8">
              
              <div className="md:w-1/2 bg-white rounded-lg p-8 shadow-lg font-secondary">
                <h3 className="text-3xl font-semibold text-primary mb-4">
                  Virtual Server
                </h3>

                <p className="mb-8">
                  Our virtual servers services have an uptime of almost a 100% and are priced at an affordable rate depending on your needs.
                </p>

                <h4 className="pb-3 font-semibold">What can you do?</h4>

                <ul className="list-disc list-inside space-y-3">
                  <li>Lease a virtual server space.</li>
                  <li>Deploy an existing local virtual server online.</li>
                  <li>Migrate virtual servers from another provider.</li>
                </ul>

                <p className="mb-8 pt-5 font-semibold text-yellow-500">
                  We've got you covered.
                </p>


                <div className="w-full flex justify-between">

                <button className="bg-green-500 text-white px-8 py-3.5 rounded-full hover:bg-green-600">
                            <a href="#pricing" className="flex gap-1 items-center">
                              <span>Prices </span>
                              <MdCurrencyExchange />
                            </a>
                          </button>


                          <button className="bg-yellow-500 text-white px-8 py-3.5 rounded-full hover:bg-yellow-600">
                            <a href="#pricing" className="flex gap-1 items-center">
                              <span>Enquire </span>
                              <FaArrowCircleRight />
                            </a>
                          </button>

                          </div>


              </div>

              <div className="md:w-1/2">
                <img
                  src={serviceImage1}
                  alt=""
                  className="w-full h-auto rounded-2xl object-cover shadow-lg"
                />
              </div>

              </div>
            </TabPanel>
            <TabPanel>

              <div
                      variants={fadeIn("up", 0.2)}
                      initial="hidden"
                      whileInView={"show"} 
                      viewport={{once: false, amount: 0.7}}
              
              className="flex flex-col md:flex-row gap-8 mt-8">
              
              <div className="md:w-1/2 bg-white rounded-lg p-8 shadow-lg font-secondary">
                <h3 className="text-3xl font-semibold text-primary mb-4">
                  Data Backup
                </h3>

                <p className="mb-8">
                  We offer data backup and recovery services to individuals, businesses, and corporations.
                </p>

                <h4 className="pb-3 font-semibold">What do you get?</h4>

                <ul className="list-disc list-inside space-y-3">
                  <li>Data availability - Your data will be accessible anytime you need it.</li>
                  <li>Data Integrity - Your data can and will not be altered unathorized.</li>
                  <li>Data Security - Your data will only be accessible to authorized users.</li>
                  <li>Business Continuity - You will never lose your data.</li>
                </ul>

                <p className="mb-8 pt-5 font-semibold text-yellow-500">
                  We've got you covered.
                </p>


                <div className="w-full flex justify-between">

                <button className="bg-green-500 text-white px-8 py-3.5 rounded-full hover:bg-green-600">
                            <a href="#pricing" className="flex gap-1 items-center">
                              <span>Prices </span>
                              <MdCurrencyExchange />
                            </a>
                          </button>


                          <button className="bg-yellow-500 text-white px-8 py-3.5 rounded-full hover:bg-yellow-600">
                            <a href="#pricing" className="flex gap-1 items-center">
                              <span>Enquire </span>
                              <FaArrowCircleRight />
                            </a>
                          </button>

                          </div>


              </div>

              <div className="md:w-1/2">
                <img
                  src={serviceImage1}
                  alt=""
                  className="w-full h-auto rounded-2xl object-cover shadow-lg"
                />
              </div>

              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Services;
