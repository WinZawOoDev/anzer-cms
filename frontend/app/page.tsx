import { CarouselDemo } from "@/components/common/carousel-demo";
import { Button } from "@/components/ui/button";
import WhyAnzer from "./components/home/why-anzer";
import BannerSlider from "./components/home/banner-slider";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <div className="space-y-8 md:space-y-16">
      <BannerSlider />
      <WhyAnzer />
    </div>
  );
}
