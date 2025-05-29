'use client';
import React from "react";
// import ProjectCard from "../sub/ProjectCard";
import Spectexarenda from "../../public/spectexarenda.png"
import Image from "next/image";
import IproWeb from "@/assets/images/IproWeb.png"
import Clinick from "@/assets/images/clinick.png"
import Qshostel from "@/assets/images/qshostel.png"
import Commoncountry from "@/assets/images/CommonCountry.png"
import Chipdip from "@/assets/images/Chip-dip.png"
import Ecomerence from "@/assets/images/E-comerence.png"
import Exploreasia from "@/assets/images/ExploreAsia.png"
import Gifpro from "@/assets/images/GifPro.png"
import Hajjumrah from "@/assets/images/Hajj-umrah.png"
import Island from "@/assets/images/Island.png"
import valuecommon from "@/assets/images/valuecommon.png"
import weather from "@/assets/images/WeatherPro.png"
import zetmarket from "@/assets/images/Zetmarket.png"

const Projects = () => {

  const projectsData = [
    {
      title: 'Projects',
      description: 'webApps',
      images: [
        { img: IproWeb, link: 'https://iproweb.netlify.app/' },
        { img: Clinick, link: 'https://clinic78.netlify.app/' },
        { img: Qshostel, link: 'https://hotelweb77.netlify.app/' },
        { img: Commoncountry, link: 'https://countrycommon.netlify.app/' },
        { img: Chipdip, link: 'https://chip-dip-project.netlify.app/' },
      ],
    },
    {
      title: 'Projects',
      description: 'eCommerce',
      images: [
        { img: Ecomerence, link: 'https://ecomerence12.netlify.app/' },
        { img: Exploreasia, link: 'https://exploreasia.netlify.app/' },
        { img: Gifpro, link: 'https://gifproject2.netlify.app/' },
        { img: Hajjumrah, link: 'https://reacthajj.netlify.app/' },
        { img: Island, link: 'https://beatiful-island02.netlify.app/' },
      ],
    },
    {
      title: 'Projects',
      description: 'utilities',
      images: [
        { img: valuecommon, link: 'https://valuecurrency.netlify.app/' },
        { img: weather, link: 'https://weatherdash0.netlify.app/' },
        { img: zetmarket, link: 'https://zetmarket1122.netlify.app/' },
        { img: Spectexarenda, link: 'https://kranuz.netlify.app/' },
        { img: Clinick, link: '#' },
      ],
    },
  ];


  return (
    <>
      <div className="container mx-auto mb-44 px-5 xl:px-14 z-40" id="projects">
        <h1
          className="text-white md:text-[108px] text-[48px] uppercase font-black ml-5 mb-10 text-center md:text-left"
        >
          projects
        </h1>

        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex items-center justify-between mb-7 flex-col md:flex-row overflow-hidden rounded-[8px] py-20 md:py-5 bg-transparent border border-blue-600 md:px-5 -space-x-16"
          >
            <div className="relative">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-[40px] text-center md:text-left">
                {project.title}
              </h1>
              <button className="relative top-44 md:top-0 rounded-md xl:w-[150px] bg-white text-blue-600 py-2 uppercase text-xs w-full font-bold shadow-lg drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)] hover:bg-slate-300">
                viewProjects
              </button>
            </div>

            <div className="flex items-center gap-0 overflow-hidden -space-x-14 md:-space-x-36">
              {project.images.map((item, i) => (
                <div
                  key={i}
                  onClick={() => window.open(item.link, '_blank')}
                  className="relative w-full md:h-[198px] left-20 shadow-lg rounded-[20px] transition-transform duration-300 cursor-pointer hover:translate-x-6 group"
                >
                  <Image
                    src={item.img}
                    className="md:h-full h-28 w-full object-cover rounded-[20px]"
                    alt={`${project.title} ${i}`}
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-300 rounded-[20px]"></div>
                </div>
              ))}
            </div>
          </div>
        ))}


      </div>
    </>
  );
};

export default Projects;
