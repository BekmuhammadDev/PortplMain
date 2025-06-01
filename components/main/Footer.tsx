import React from "react";
import { FaInstagram, FaGithub, FaTelegramPlane, FaLinkedin } from "react-icons/fa";


import { FaYoutube } from "react-icons/fa";

const Footer = () => {

    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[999999]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

                    {/* Community */}
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>

                        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaInstagram />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </a>

                        <a href="https://github.com/BekmuhammadDev" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaGithub />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </a>

                        <a href="https://t.me/BekMuhammad88" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaTelegramPlane />
                            <span className="text-[15px] ml-[6px]">Telegram</span>
                        </a>
                    </div>

                    {/* Social Media */}
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>

                        <a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">YouTube</span>
                        </a>

                        <a href="https://github.com/BekmuhammadDev" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaGithub />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </a>

                        <a href="https://www.linkedin.com/in/bekmuhammad-aripov-857ba0311/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaLinkedin />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </a>
                    </div>

                    {/* About */}
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>

                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">Become Sponsor</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">Learning about me</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">aripovbekmuhammad2@gmail.com</span>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; WebChain Dev 2025 Inc. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer