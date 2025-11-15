import React from "react";

const Stats = () => {
  const stats = [
    { number: "7+", label1: "Years", label2: "of Service" },
    { number: "1.2k+", label1: "Verified", label2: "Tech Experts" },
    { number: "15k+", label1: "Successful", label2: "Service Requests" },
    { number: "98%", label1: "Client", label2: "Satisfaction Rate" },
  ];

  return (
    <section className="relative z-20 -mt-10 md:-mt-15 lg:-mt-25 -pb-4">
      <div className="max-w-6xl mx-auto bg-black shadow-xl rounded-2xl py-6 px-2 md:py-8 md:px-4 lg:py-10 lg:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, index) => (
          <div key={index}>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-[35px] md:text-[37px] lg:text-[40px] mb-2">
              {item.number}
            </h2>
            <p className="text-white font-semibold text-[12px] md:text-[14px] lg:text-[16px] mb-2">{item.label1}</p>
            <p className="text-white text-[12px] md:text-[14px] lg:text-[16px]">{item.label2}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;