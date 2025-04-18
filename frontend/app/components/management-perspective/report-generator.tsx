"use client";
import SectionTitle from "../common/sec-ttl";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getAvailableImgFirst } from "@/lib/utils";

const ReportGenerator: React.FC<{
  data: Pick<ManagementPerspectiveSectionsType, "third_section">;
}> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const secData = data.third_section;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % secData.contents.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [secData.contents.length]);
  return (
    <div className="space-y-5 md:space-y-10">
      <SectionTitle label="report generator" />
      <div className="flex w-full flex-col gap-5 md:flex-row">
        <div className="flex-1 space-y-5 py-5 md:w-full md:space-y-10 md:[flex:1]">
          {secData.contents.map((item, idx) => {
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
              width={1600}
              height={900}
              key={currentIndex}
              // @ts-ignore
              // src={`${secData.contents[currentIndex]?.image?.formats?.thumbnail?.url}`}
              src={getAvailableImgFirst(secData.contents[currentIndex]?.image)}
              className="h-full w-full animate-fadeIn object-cover"
              alt={secData.contents[currentIndex].title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportGenerator;
