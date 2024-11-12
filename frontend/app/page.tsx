import { CarouselDemo } from "@/components/common/carousel-demo";
import { Button } from "@/components/ui/button";
import WhyAnzer from "./components/home/why-anzer";
import BannerSlider from "./components/home/banner-slider";
import WhatWeImplement from "./components/home/what-we-implement";

export default function Home() {
  return (
    <div className="space-y-10 md:space-y-16">
      <BannerSlider />
      <WhyAnzer />
      <WhatWeImplement />
    </div>
  );
}
