import {useState} from 'react';
import {ArrowLeft, ArrowRight} from "lucide-react";


const Testimonials = () => {
  const testimonials = [
    {
      name: "Steph Potter",
      role: "CEO, Tech Innovators",
      image: "/steph.jpg",
      text: "IT MasterSpace transformed our IT infrastructure, boosting efficiency and security. Their team is knowledgeable and responsive.",
      photo: "/julia.jpg",
    },
    {
      name: "Michael Smith",
      role: "CTO, Future Solutions",
      image: "/michael.jpg",
      text: "The cloud integration services provided by IT MasterSpace have been a game-changer for our business operations.",
      photo: "/michael.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((current + 1) % testimonials.length);
  const prevSlide = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-5 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-bold mb-5 md:mb-5 lg:mb-12 text-center text-[35px] md:text-[37px] lg:text-[40px]">
          What People Are Saying About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div className="flex flex-col items-center md:items-center text-center md:text-center mt">
            <div className="flex flex-col items-center md:items-center mb-4">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-14 h-14 rounded-full mr-3 object-cover"
              />
              <div>
                <h3 className="font-semibold text-[12px] md:text-[14px] lg:text-[16px]">{testimonials[current].name}</h3>
                <p className="text-black text-sm text-[12px] md:text-[14px] lg:text-[16px]">{testimonials[current].role}</p>
              </div>
            </div>
            <p className="text-black italic mb-6 text-[12px] md:text-[14px] lg:text-[16px]">
              “{testimonials[current].text}”
            </p>

            <div className="flex space-x-3 justify-center md:justify-start">
              <button
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF5A09] hover:bg-orange-600  text-white"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/testimonials.jpg"
              alt="testimonial visual"
              className="rounded-2xl shadow-lg w-full h-auto object-cover mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;