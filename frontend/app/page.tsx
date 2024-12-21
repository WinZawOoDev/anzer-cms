import WhyAnzer from "./components/home/why-anzer";
import BannerSlider from "./components/home/banner-slider";

import WhatImplement from "./components/home/what-implement";

import Container from "@/components/common/page-container";
import { homeDataUrl } from "@/lib/constants";
export default function Home() {
  console.log("home Data Url", homeDataUrl);
  return (
    <Container>
      <BannerSlider />
      <WhyAnzer />

      {/* <WhatWeImplement /> */}
      <WhatImplement />

      {/* <ImplementationSection /> */}

      {/* <WhatWeImplement /> */}
    </Container>
  );
}
