"use client";
import { useMediaQuery } from "usehooks-ts";
import SectionTitle from "../common/sec-ttl";
import imgOne from "@/assets/imgs/default-img-014.jpg";
import imgTwo from "@/assets/imgs/default-img-015.jpg";
import imgThree from "@/assets/imgs/default-img-016.jpg";
import imgFour from "@/assets/imgs/default-img-017.jpg";
import { useState } from "react";

const data = [
  {
    title: "real-time overview",
    description: "Instant cash flow and expense tracking",
  },
  {
    title: "buguest control",
    description: "Monitor spending vs. budgets.",
  },
  {
    title: "SMARTER DECISIONS",
    description: "Financial data guides strategy.",
  },
  {
    title: " ACCURATE FORECASTS",
    description: "Predict future trends effectively.",
  },
];
const images = [imgOne, imgTwo, imgThree, imgFour];
const FinancialDashboards = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [currentIdx, setCurrentIdx] = useState(0);
  return (
    <div className="space-y-5 md:space-y-10" key={currentIdx}>
      <SectionTitle label="Financial dashboard benefits" />
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {data.map((item, idx) => {
          return (
            <div
              style={{
                backgroundImage: `url(${images[currentIdx].src})`,
                backgroundSize: isMobile ? "200% 200%" : "400% 100%",
                backgroundPosition: isMobile
                  ? `${(idx % 2) * 100}% ${Math.floor(idx / 2) * 100}%`
                  : `${idx * 33.33}% 0%`,
                transition: "background-position .5s linear",
              }}
              key={item.title}
              onMouseEnter={() => setCurrentIdx(idx)}
              className="group relative flex aspect-[16/20] flex-col justify-end px-5 py-5 text-white"
            >
              <div className="mt-auto">
                <p className="text-lg font-bold uppercase opacity-0 group-hover:opacity-100 md:text-2xl">
                  {item.title}
                </p>
                <span className="text-sm opacity-0 group-hover:opacity-100 md:text-base">
                  {item.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FinancialDashboards;
