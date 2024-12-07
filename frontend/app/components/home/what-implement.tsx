"use client";
import SectionTitle from "../common/sec-ttl";
import imgone from "@/assets/imgs/default-img-01.png";
import imgtwo from "@/assets/imgs/default-img-02.png";
import imgthree from "@/assets/imgs/default-img-03.png";
import imgfour from "@/assets/imgs/default-img-04.png";
import imgfive from "@/assets/imgs/default-img-05.jpeg";
import Image from "next/image";
import { useState } from "react";
const steps = [
  {
    title: "Assessment and Planning",
    description:
      "We work closely with healthcare facilities to understand their challenges and design tailored solutions.",
  },
  {
    title: "System Setup and Configuration",
    description:
      "We assess infrastructure, customize the system, and securely migrate data.",
  },
  {
    title: "Integration and Testing",
    description:
      "We ensure smooth integration and thoroughly test the system for reliability.",
  },
  {
    title: "Training and Support",
    description:
      "Comprehensive training and support help staff confidently use the new system.",
  },
  {
    title: "Post-Implementation Review and Maintenance",
    description:
      "We review performance and provide ongoing support for optimal functionality.",
  },
];
const images = [imgfour, imgtwo, imgthree, imgfour, imgfive];
const WhatImplement = () => {
  const [idx, setIdx] = useState(-1);
  return (
    <div className="container">
      <div className="relative mx-auto flex aspect-square max-w-[500px] flex-col justify-between bg-main py-10">
        <SectionTitle
          label="How Do We Implement"
          className="text-white before:bg-white"
        />

        <div className="absolute left-1/2 top-[120px] z-10 flex w-max -translate-x-1/2 gap-5">
          {images.map((img, idx) => {
            return (
              <div
                key={idx}
                className="aspect-square w-[170px] duration-300 hover:opacity-85"
                onMouseEnter={() => setIdx(idx)}
                onMouseLeave={() => setIdx(-1)}
              >
                <Image
                  src={img}
                  alt={"image" + idx}
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}
        </div>
        <div
          key={steps[idx]?.title}
          className="spacey-5 animate-fadeIn mx-auto w-[90%] text-center text-white"
        >
          <p className="text-xl md:text-2xl">{steps[idx]?.title}</p>
          <p className="text-sm md:text-base">{steps[idx]?.description}</p>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default WhatImplement;
