import React from "react";
import FooterImage from "../assets/image4.png";
import { FaEnvelope, FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTrademark, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-12 bg-gray-100 px-8">

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8">
        <div className="space-y-6 mr-14">
          <div className="flex items-center space-x-2">
            <a href="#">
              <h1 className="text-md font-bold">
                Cloud<span className="text-green-700">265</span>
              </h1>
            </a>
          </div>

            <p className="text-para text-sm">
               With cloud265 hosts, your business will be online always, and you will get the required support when needed. 
            </p>

            <div className="flex items-center space-x-5 ">
                <a href="#" className="text-primary bg-gray-200 rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white">
                    <FaFacebookF className="text-xl" />
                </a>
                <a href="#" className="text-primary bg-gray-200 rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white">
                    <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="text-primary bg-gray-200 rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white">
                    <FaInstagram className="text-xl" />
                </a>
                <a href="#" className="text-primary bg-gray-200 rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white">
                    <FaLinkedin className="text-xl" />
                </a>
            </div>


        </div>

        <div className="space-y-6">
            <h1 className="text-md font-bold  mb-4 ">
                Quick Links
            </h1>
            
            <ul className="text-sm space-y-3">
                <li><a href="#home" className="text-para hover:text-primary">Home</a></li>
                <li><a href="#services" className="text-para hover:text-primary">Services</a></li>                
                <li><a href="#about" className="text-para hover:text-primary">About Us</a></li>
                <li><a href="#purchase" className="text-para hover:text-primary">Purchase</a></li>
                <li><a href="#contact" className="text-para hover:text-primary">Contact Us</a></li>    
            </ul>

        </div>

        <div className="space-y-6">
            <h1 className="text-md font-bold  mb-4 ">
                Support 
            </h1>
            
            <ul className="text-sm space-y-3">
                <li><a href="#" className="text-para hover:text-primary">FAQa</a></li>
                <li><a href="#" className="text-para hover:text-primary">Terms and Conditions</a></li>                
                <li><a href="#" className="text-para hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="text-para hover:text-primary">Support Center</a></li> 
            </ul>

        </div>



        
        <div className="space-y-6">
            <h1 className="text-md font-bold  mb-4 ">
                Contact Information 
            </h1>
            
            <ul className="text-sm space-y-3">
                <li className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-primary" />
                    <p className="text-para">  Blantyre, Malawi</p>
                </li>
                <li className="flex items-center space-x-2">
                    <FaPhoneAlt className="text-primary" />
                    <p className="text-para">  +265 884 954 208</p>
                </li>
                <li className="flex items-center space-x-2">
                    <FaEnvelope className="text-primary" />
                    <p className="text-para">  info@cloud265.com</p>
                </li> 
            </ul>

        </div>





      </div>


      <div className="flex items-center justify-between mt-8 border-t border-gray-300 pt-4">
        <div className="font-bold flex items-center ">
            Cloud<span className="text-green-700">265</span>
            <FaTrademark className="text-sm pb-1.5" />
        </div>

        <div>
            Developed By <span className="font-bold">UnoBit Systems </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
