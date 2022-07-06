import React from "react";

import logo from "../images/logo.png";

const Footer = () => (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
        <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
            <img src={logo} alt="logo" className="w-32" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
            <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
            <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
            <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
            <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
        </div>
        </div>

        <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center"></p>
        <p className="text-white text-sm text-center font-medium mt-2">
            Do you want to contact me or get to know me better?
                <a href="https://www.linkedin.com/in/santiagobarletta/" target="_blank" className="cursor-pointer hover:bg-[#66676b00]"> Click Here
                </a>
        </p>
        </div>

        <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

        <div className="sm:w-[90%] w-full flex items-center mt-3 ml">
            <p className="text-white text-sm text-center font-medium mr-1"> 
            Github:
            </p>
            <p className="text-white text-sm text-center font-medium"> 
                <a href="https://github.com/Sbaletta23/Sbaletta23" className="cursor-p" target="_blank">Santiago Barletta</a>
            </p>
        </div>
    </div>
);

export default Footer;