import React from "react";

const AboutUs = () => {
  return (
    <section className="relative bg-white px-10 py-5 my-0 md:my-0 lg:my-[-15px]">
      <div className="max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">

        {/* Content */}
        <div className="flex-1 mb-[-60px] md:mb-[-60px] lg:mb-10">
          <h2 className="font-bold text-black leading-tight text-[35px] md:text-[37px] lg:text-[40px]">
            Empowering Your Digital Growth
          </h2>
          <p className="text-black mt-4 mb-8 max-w-md text-[12px] md:text-[14px] lg:text-[16px]">
            ItMasterSphere is your all-in-one technology partner, offering modern solutions for web development, automation, and IT management. Whether you're a startup or an enterprise, we help you build, secure, and scale your digital presence with ease.
          </p>

        </div>
        {/* Image */}
        <div className="flex-1 object-contain">
          <img
            src="/moreaboutus.png"
            alt="IT Solutions"
            className="rounded-xl shadow-lg"
          />
        </div>
        
      </div>
    </section>
  );
};

export default AboutUs;
