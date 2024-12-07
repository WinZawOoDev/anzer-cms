"use client";
import Image from "next/image";
import defaultImg from "@/assets/imgs/default-img-02.png";
import SectionTitle from "../common/sec-ttl";
import ButtonRed from "../common/button";
import { ArrowDown, ArrowDownFromLine, ArrowUpFromLine } from "lucide-react";
import { useState } from "react";

const textArray = [
  "Founded in 1984, with headquarters in Singapore and branches across Asia.",
  "Expanded to over 100 hospitals and clinics in seven years.",
  "Offers integrated solutions: EHR, PACS, LIS, and Accounting systems.",
  "No third-party integration needed, ensuring smooth operations.",
  "Improves patient safety with real-time data, medication management, and automated alerts.",
  "Enhances care with better communication and coordination among healthcare teams.",
  "Boosts financial performance through optimized billing, claims, and data-driven revenue management.",
];
const HistoryAnzer = () => {
  const [expand, setExpaned] = useState(false);
  return (
    <div className="bg-grey py-10 text-white md:py-16">
      <div className="container px-5">
        <div className="space-y-5">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="w-full space-y-6 md:w-1/2">
              <SectionTitle
                label="History of ANZER IT Healthcare Asia"
                className="text-white"
              />

              <p className="indent-10 text-base">
                ANZER IT Healthcare Asia, founded in 1984 and headquartered in
                Singapore, has become a leading provider of integrated
                healthcare IT solutions across Asia. With over 100 hospitals and
                clinics using its systems, ANZER ensures seamless operations
                without the need for third-party integration, helping healthcare
                providers focus on delivering quality patient care.
              </p>
            </div>
            <div className="aspect-video w-full md:w-1/2">
              <Image
                src={defaultImg}
                alt="Healthcare professionals working"
                //   width={600}
                //   height={400}

                className="aspect-video h-full w-full rounded-3xl object-cover"
              />
            </div>
          </div>
          <div className="space-y-5">
            {expand && (
              <div className="space-y-5 pt-10">
                <h6 className="text-xl font-bold md:text-2xl">
                  Key Milestones and Achievements
                </h6>
                <ul className="list-disc pl-5 text-sm md:text-base">
                  {textArray.map((text, idx) => {
                    return <li key={idx}>{text}</li>;
                  })}
                </ul>
              </div>
            )}

            <ButtonRed
              onClick={() => setExpaned((prev) => !prev)}
              Icon={
                expand ? (
                  <ArrowUpFromLine size={16} />
                ) : (
                  <ArrowDownFromLine size={16} />
                )
              }
            >
              {expand ? "Collapse" : "Expand"}
            </ButtonRed>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryAnzer;
