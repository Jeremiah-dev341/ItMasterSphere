import React from "react";

const DiscountBanner = () => {
  return (
    <section className="bg-black flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-6 md:px-16 py-10 text-white">
      
      {/* Left Image */}
      <div className="flex justify-center md:w-1/2 mb-10 md:mb-0">
        <img
          src="/discount.png"
          alt="Tech Offer"
          className="w-60 md:w-80 lg:w-96 max-h-[260px] object-cover -mt-10 pt-0 lg:-mt-10"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="font-bold leading-tight text-[32px] md:text-[37px] lg:text-[40px]">
          Get Exclusive Deals <br /> on IT Solutions
        </h2>

        <p className="opacity-90 text-[13px] md:text-[14px] lg:text-[16px]">
          Subscribe to receive the latest offers, tools, and updates from
          ItMasterSphere.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-2/3 px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-[#FF5A09] hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition-all duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;
