"use client";
import SectionTitle from "../common/sec-ttl";
import imgOne from "@/assets/imgs/default-img-08.png";
import imgTwo from "@/assets/imgs/default-img-09.png";
import imgThree from "@/assets/imgs/default-img-010.png";
import { useEffect, useState } from "react";
import Image from "next/image";
const data = [
  {
    title: "CONSISTENCY",
    description: "Ensures standartized data presentation.",
    img: imgOne,
  },
  {
    title: "TIME-SAVING",
    description: "Automates report creation.",
    img: imgTwo,
  },
  {
    title: "REAL-TIME DATA",
    description: "Generates up-to-date reports instantly.",
    img: imgThree,
  },
];
const ReportGenerator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [data.length]);
  console.log("currentIndex", currentIndex);
  return (
    <div className="space-y-5 md:space-y-10">
      <SectionTitle label="report generator" />
      <div className="flex w-full flex-col gap-5 md:flex-row">
        <div className="flex-1 space-y-5 py-5 md:w-full md:space-y-10 md:[flex:1]">
          {data.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={idx}
                className={`relative space-y-2 px-5 before:absolute before:left-0 before:top-1/2 before:h-full before:w-[4px] before:origin-center before:-translate-y-1/2 before:scale-y-0 before:bg-main before:duration-500 before:content-[''] md:space-y-3 ${isActive && "before:scale-y-125"}`}
              >
                <p className="text-xl font-bold md:text-2xl">{item.title}</p>
                <span>{item.description}</span>
              </div>
            );
          })}
        </div>
        <div className="md:w-fullflex-1 md:[flex:2]">
          <div className="aspect-video w-full">
            <Image
              key={currentIndex}
              src={data[currentIndex]?.img}
              className="h-full w-full animate-fadeIn object-cover"
              alt={data[currentIndex].title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportGenerator;
