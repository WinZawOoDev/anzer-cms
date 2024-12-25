"use client";
import SectionTitle from "../common/sec-ttl";
import imgone from "@/assets/imgs/default-img-01.png";
import imgtwo from "@/assets/imgs/default-img-02.png";
import imgthree from "@/assets/imgs/default-img-03.png";
import imgfour from "@/assets/imgs/default-img-04.png";
import imgfive from "@/assets/imgs/default-img-05.jpeg";
import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { imgHostUrl } from "@/lib/constants";
import { getAvailableImgFirst } from "@/lib/utils";

const WhatImplement: React.FC<{
  data: Pick<HomeSectionsType, "third_section">;
}> = ({ data }) => {
  const [idx, setIdx] = useState(-1);
  const secData = data.third_section;

  return (
    <div className="container">
      <div className="relative mx-auto flex aspect-[10/9] max-w-[500px] flex-col justify-between bg-main py-10">
        <SectionTitle
          label={secData.title}
          className="text-white before:bg-white"
        />

        <div className="absolute left-1/2 top-[120px] z-10 hidden w-max max-w-[100vw] -translate-x-1/2 gap-5 px-5 md:flex">
          {secData.contents.map((item, idx) => {
            return (
              <div
                key={idx}
                className="aspect-square w-[170px] duration-300 hover:opacity-85"
                onMouseEnter={() => setIdx(idx)}
                onMouseLeave={() => setIdx(-1)}
              >
                <Image
                  // @ts-ignore
                  // src={`${item.image.formats.large.url}`}
                  src={getAvailableImgFirst(item.image)}
                  alt={"image" + idx}
                  className="h-full w-full object-cover"
                  width={150}
                  height={150}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex items-center justify-center md:hidden">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {secData.contents.map((step, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="space-y-5">
                      <div className="aspect-video w-full">
                        <Image
                          // @ts-ignore
                          // src={`${step.image.formats.thumbnail.url}`}
                          src={getAvailableImgFirst(step.image)}
                          alt={step.title}
                          className="h-full w-full object-cover"
                          width={150}
                          height={150}
                        />
                      </div>
                      <div className="space-y-3 text-center text-white">
                        <p className="text-xl font-bold">{step.title}</p>
                        <span>{step.description}</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div
          key={secData.contents[idx]?.title}
          className="spacey-5 mx-auto w-[90%] animate-fadeIn text-center text-white"
        >
          <p className="text-xl md:text-2xl">{secData.contents[idx]?.title}</p>
          <p className="text-sm md:text-base">
            {secData.contents[idx]?.description}
          </p>
        </div>
      </div>

      {/* <div className="md:hidden">
        <Carousel className="mx-auto w-full max-w-md">
          <CarouselContent>
            {steps.map((step, index) => (
              <CarouselItem key={index}>
                <Card className="bg-white">
                  <CardContent className="p-0">
                    <Image
                      src={images[index]}
                      alt={step.title}
                      width={400}
                      height={400}
                      className="h-auto w-full object-cover"
                    />
                    <div className="p-6 text-center">
                      <h3 className="mb-2 text-xl font-semibold">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
          <div className="block sm:hidden">
            <button className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </Carousel>
      </div> */}

      <div></div>
    </div>
  );
};

export default WhatImplement;
