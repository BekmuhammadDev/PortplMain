import React from 'react'
import { FaStar } from "react-icons/fa";


const testimonials = [
  {
    name: "Javohir",
    image: "/images/javlonbek.jpg",
    text: "Bekmuhammad bilan biz, hazilashardik,bir birimizga yordam berar edik,maslaxatlashardik, va jamoa bo'lib ishlar edik.",
    rating: 5,
  },
  {
    name: "E'zoza",
    image: "/images/dilnoza.jpg",
    text: "Bekmuhammadning frontendga bo‘lgan yondashuvi juda yaxshi. Biz birgalikda juda ko'p loyihalarda Frontend va Beckendni muvafaqiyatli integratsiya qilganmiz",
    rating: 5,
  },
  {
    name: "Dostonbek",
    image: "/images/shahzod.jpg",
    text: "Bekmuhammad aka bilan biz huddi aka-ukadek bo'lib qolganmiz,biz birgalikda ko'plab loyihalarda muvafaqiyatli qatnashdik.",
    rating: 5,
  },
];

const Testimonials = () => {
    return (
        <section className="bg-transparent border border-blue-600 text-white py-20 px-6 z-30">
            <div className="text-center mb-16">
                <h2 className="inline-block border-2 border-blue-600 text-white px-10 py-2 text-lg tracking-widest font-bold">
                    TESTIMONIALS
                </h2>
                <p className="text-white mt-4 max-w-xl mx-auto">
                    Hamkasblarimning men haqimdagi fikrlari
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {testimonials.map((person, i) => (
                    <div
                        key={i}
                        className="bg-transparent border-2 border-blue-600 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition duration-300 p-8 text-center transform hover:-translate-y-2 hover:scale-105"
                    >
                        <img
                            src={person.image}
                            alt={person.name}
                            className="w-24 h-24 rounded-full object-cover border-4 border-blue-600 mx-auto mb-4"
                        />
                        <h4 className="text-xl font-semibold mb-2">{person.name}</h4>

                        {/* Yulduzlar */}
                        <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                            {[...Array(person.rating)].map((_, idx) => (
                                <FaStar key={idx} className="transition transform hover:scale-125" />
                            ))}
                        </div>

                        {/* Fikr */}
                        <p className=" text-sm leading-relaxed">{person.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials
