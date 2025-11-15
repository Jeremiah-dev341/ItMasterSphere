import React from "react";

const AllServices = () => {
  const products = [
    {
      name: "Cloud Integration Suite",
      price: "$250",
      oldPrice: "$300",
      image: "/src/assets/cloudproduct.png",
    },
    {
      name: "AI Automation Toolkit",
      price: "$320",
      oldPrice: "$380",
      image: "/src/assets/aiautomation.jpg",
    },
    {
      name: "Cybersecurity Shield",
      price: "$290",
      oldPrice: "$350",
      image: "/src/assets/cybersecurity.png",
    },
    {
      name: "Web Maintenance Plan",
      price: "$180",
      oldPrice: "$220",
      image: "/src/assets/webmaintenance.jpg",
    },
    {
      name: "Business Analytics",
      price: "$400",
      oldPrice: "$470",
      image: "/src/assets/analytics.jpg",
    },
    {
      name: "Cloud Backup & Recovery",
      price: "$280",
      oldPrice: "$330",
      image: "/src/assets/cloudbackup.jpg",
    },
    {
      name: "Server Optimization Kit",
      price: "$310",
      oldPrice: "$360",
      image: "/src/assets/server.jpg",
    },
    {
      name: "Full Stack Development",
      price: "$500",
      oldPrice: "$580",
      image: "/src/assets/fullstack.jpg",
    },
  ];

  return (
    <section className="bg-white py-5">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-black mb-2 text-[35px] md:text-[37px] lg:text-[40px]">Our Services</h2>
        <p className="text-black mb-10 text-sm text-[12px] md:text-[14px] lg:text-[16px]">
          Explore our latest digital solutions. They are crafted to simplify, secure, and scale
          your business in today’s tech-driven world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mx-0 md:gap-0 lg:gap-2 shadow-md shadow-orange-300 p-0 md:p-0 lg:p-4">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white transition p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-50 h-50 ml-10 mr-0 object-cover-lg rounded-lg mb-3"
              />
              <h3 className="text-base font-semibold text-black mb-1 text-[12px] md:text-[14px] lg:text-[16px]">
                {item.name}
              </h3>
              <div className="text-black text-sm text-[12px] md:text-[14px] lg:text-[16px]">
                <span className="font-semibold mr-2">{item.price}</span>
                <span className="line-through text-black text-xs text-[10px] md:text-[12px] lg:text-[14px]">
                  {item.oldPrice}
                </span>
                
              </div>
              <button className="bg-[#FF5A09] hover:bg-orange-600 text-white text-[12px] md:text-[14px] lg:text-[16px] py-2 px-5 rounded-xl text-sm hover:bg-orange-700 transition mt-4">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-600"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-orange-300"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-orange-300"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-orange-300"></span>
        </div>
      </div>
    </section>
  );
};

export default AllServices;
