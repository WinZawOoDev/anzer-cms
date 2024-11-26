import { CarouselDemo } from "@/components/common/carousel-demo";
import { Button } from "@/components/ui/button";
import WhyAnzer from "./components/home/why-anzer";
import BannerSlider from "./components/home/banner-slider";
import WhatWeImplement from "./components/home/what-we-implement";
import WhatImplement from "./components/home/what-implement";

export default function Home() {
  return (
    <div className="space-y-10 md:space-y-16">
      <BannerSlider />
      <WhyAnzer />
      {/* <WhatWeImplement /> */}
      <WhatImplement />
    </div>
  );
}
