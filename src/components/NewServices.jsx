import React, { useState } from "react";
import {ArrowRight} from "lucide-react";

const NewServices = () => {
  const initialServices = [
    {
      title: "Cloud Integration",
      image: "/cloud.png",
      checked: false,
    },
    {
      title: "AI Automation",
      image: "/ai.jpg",
      checked: false,
    },
    {
      title: "Cybersecurity Setup",
      image: "/cybersec.webp",
      checked: false,
    },
    {
      title: "Web Maintenance",
      image: "/webmain.png",
      checked: false,
    },
  ];

  const [services, setServices] = useState(initialServices);
  
   const toggleAll = () => {
    const allChecked = services.every(s => s.checked);
    setServices(services.map(s => ({ ...s, checked: !allChecked })));
  };

  return (
    <section className="bg-white pb-5 md:py-2 lg:py-5 lg:pl-10 m-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start px-6 gap-10">
        {/* Left text block */}
        <div className="lg:w-1/3 space-y-4 text-center md:text-center lg:text-left py-[-10px] lg:py-0 mb-[-50px] lg:mb-0">
          <h2 className="text-4xl font-bold text-black">
            New on <span className="text-orange-500 text-[35px] md:text-[37px] lg:text-[40px]">ItMasterSphere</span>
          </h2>
          <p className="text-black text-[12px] md:text-[14px] lg:text-[16px] text-center md:text-center lg:text-left">
            Get the latest services and updates with promotional offers.
          </p>
          <button
            onClick={toggleAll}
            className="hidden lg:flex items-center gap-2 text-orange-600 font-semibold hover:underline text-[12px] md:text-[14px] lg:text-[16px]"
          >
            Check All <ArrowRight size={18} />
          </button>
        </div>

        {/* Right service cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-2 lg:gap-4 py-[-5px] lg:py-0">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden transition-all ${
                service.checked ? "" : "shadow shadow-orange-500"
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-50 lg:h-60 object-contain "
              />
              <div className="w-full absolute bottom-0 left-0 p-4">
                <h3 className="font-semibold text-black text-[12px] md:text-[14px] lg:text-[16px]  text-center  p-4 whitespace-nowrap absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 text-center">{service.title}</h3>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewServices;
