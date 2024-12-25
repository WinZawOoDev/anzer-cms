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
import { imgHostUrl } from "@/lib/constants";
import { getAvailableImgFirst } from "@/lib/utils";

type CarouselApi = {
  scrollNext: () => void;
  scrollPrev: () => void;
  scrollTo: (index: number) => void;
  selectedScrollSnap: () => number;
  scrollSnapList: () => number[];
};

const BannerSlider: React.FC<{
  data: Pick<HomeSectionsType, "first_section">;
}> = ({ data }) => {
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
    [api],
  );

  return (
    <div className="relative flex flex-col items-center gap-4">
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
          {data.first_section.map((item, index) => (
            <CarouselItem
              key={index}
              className="relative aspect-video md:[aspect-ratio:16/7]"
            >
              <div className="h-full w-full">
                <Image
                  // src={`${item.image.formats.large.url}`}
                  src={getAvailableImgFirst(item.image) as string}
                  alt={`banner ${index}`}
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 h-[min(200px,80%)] w-full space-y-5 bg-transparent p-5 px-12 text-white md:h-[min(200px,60%)] md:bg-black md:bg-opacity-25">
                <p>{item.description}</p>
                <ButtonRed>Book Demo</ButtonRed>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-2">
        {data.first_section.map((_, index) => (
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
