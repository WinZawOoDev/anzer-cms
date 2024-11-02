"use client";
import * as React from "react";
import defaulImg from "@/assets/imgs/default-banner-01.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ButtonRed from "../common/button";

const images = [defaulImg, defaulImg, defaulImg];

const BannerSlider = () => {
  return (
    <Carousel
      className="container !px-0"
      opts={{
        loop: true,
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem
            key={index}
            className="  aspect-video md:[aspect-ratio:16/7] relative "
          >
            <div className="w-full h-full">
              <Image
                src={img}
                alt={`banner ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute  text-white bottom-0 left-0 p-5 space-y-5 px-12  bg-transparent md:bg-black md:bg-opacity-25 w-full h-[min(200px,80%)] md:h-[min(200px,60%)]">
              <p>
                Are you looking the system to boost your hospital operations?
              </p>
              <ButtonRed>Book Demo</ButtonRed>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default BannerSlider;
