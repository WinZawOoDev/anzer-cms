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

type CarouselApi = {
  scrollNext: () => void;
  scrollPrev: () => void;
  scrollTo: (index: number) => void;
  selectedScrollSnap: () => number;
  scrollSnapList: () => number[];
};
const BannerSlider = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    // @ts-ignore
    api.on?.("select", onSelect);

    return () => {
      // @ts-ignore
      api.off?.("select", onSelect);
    };
  }, [api]);

  const scrollTo = React.useCallback(
    (index: number) => api && api.scrollTo(index),
    [api]
  );

  return (
    <div className="flex flex-col items-center gap-4 relative">
      <Carousel
        className="container !px-0"
        // @ts-ignore
        setApi={setApi}
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

      <div className="flex space-x-2  absolute bottom-5 left-1/2 -translate-x-1/2">
        {Array.from({ length: count }).map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={`h-2 rounded-full transition-all ${
              index === current ? "w-4 bg-white" : "w-2 bg-primary/50"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="sr-only">{`Slide ${index + 1}`}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
