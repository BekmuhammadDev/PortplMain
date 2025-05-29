import React from 'react'
import { FaStar } from "react-icons/fa";


const testimonials = [
  {
    name: "Javohir",
    image: "/images/javlonbek.jpg",
    text: "Bekmuhammad bilan birgalikda ishlash katta zavq. U doimo yangilikka ochiq va jamoa bilan yaxshi ishlaydi.",
    rating: 5,
  },
  {
    name: "E'zoza",
    image: "/images/dilnoza.jpg",
    text: "Uning frontendga bo‘lgan yondashuvi juda professional. Har doim toza va optimallashtirilgan kod yozadi.",
    rating: 5,
  },
  {
    name: "Dostonbek",
    image: "/images/shahzod.jpg",
    text: "Bekmuhammad jamoa ichidagi aloqa va hamkorlikda juda kuchli. Mas'uliyatli va halol inson.",
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
