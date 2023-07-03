import React from "react";
import twitter  from "../assets/icons8-twitter.svg";
import facebook from "../assets/icons8-facebook.svg";
import youtube  from "../assets/icons8-youtube-logo.svg";
import instagram  from "../assets/icons8-instagram.svg";
import  pintrest  from "../assets/icons8-pinterest.svg";


function Footer() {
  return (
    <footer className="bg-[rgb(7,47,84)] md:h-[400px]">
      <div className="flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white">
            Copyright &copy; 2023, All Rights Reserved
          </div>
          
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img src={twitter} className="h-8" alt="twitter" />
            </a>
            <a href="#">
              <img
                src={youtube}
                className="h-8 bg-white rounded-full"
                alt="youtube"
              />
            </a>
            <a href="#">
              <img src={facebook} className="h-8" alt="facebook" />
            </a>
            <a href="#">
              <img src={pintrest} className="h-8" alt="pinterest" />
            </a>
            <a href="#">
              <img src={instagram} className="h-8" alt="instagram" />
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Prayer
            </a>
            <a href="#" className="hover:text-brightRed">
              Donate
            </a>
            <a href="#" className="hover:text-brightRed">
              View Cart
            </a>
            <a href="#" className="hover:text-brightRed">
              About Us
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="hidden text-white md:block">
            Copyright &copy; 2023 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
