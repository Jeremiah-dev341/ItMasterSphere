import React from "react";
import { FaCheck } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="relative bg-white pt-15 md:pt-15 lg:py-5 pb-5 px-4 md:px-5 lg:px-6">
      <div className="max-w-6xl mx-auto -mt-10 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1 mt-0 md:mt-0 lg:mt-10">
          <img
            src="/src/assets/aboutus.jpg"
            alt="IT Solutions"
            className="rounded-xl shadow-lg"
          />
        </div>
        {/* Content */}
        <div className="flex-1 mt-0 md:mt-0 lg:mt-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight text-[35px] md:text-[37px] lg:text-[40px]">
            We build smart IT <br /> solutions for your success
          </h2>
          <p className="text-black mt-4 mb-8 max-w-md text-[12px] md:text-[14px] lg:text-[16px] md:flex md:justify-center md:items-center">
            At IT MasterSpace, we empower businesses through cloud services,
            automation, and digital innovation designed to scale your vision.
          </p>

             {/* List of Services */}
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <div>
                <div className="flex items-center space-x-2 justify-center md:justify-center lg:justify-start">
                    <FaCheck className="w-6 h-6 text-orange-500 mt-1" />
                  <h3 className="text-lg font-semibold text-black text-[16px] md:text-[18px] lg:text-[20px]">
                    System Integration
                  </h3>
                </div>
                <p className="text-black text-sm text-[12px] md:text-[14px] lg:text-[16px] text-center md:text-center lg:text-left lg:pl-10">
                  Seamlessly connect your tools and platforms into one efficient
                  ecosystem.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div>
                <div className="flex items-center space-x-2 justify-center md:justify-center lg:justify-start">
                    <FaCheck className="w-6 h-6 text-orange-500 mt-1" />
                  <h3 className="text-lg font-semibold text-black text-[16px] md:text-[18px] lg:text-[20px]">
                    Cloud & Network Solutions
                  </h3>
                </div>
                <p className="ttext-black text-sm text-[12px] md:text-[14px] lg:text-[16px] text-center md:text-center lg:text-left lg:pl-10">
                  Secure, scalable, and optimized IT environments for modern
                  business needs.
                </p>
              </div>
            </li>
          </ul>
        </div>

        
      </div>
    </section>
  );
};

export default AboutUs;
