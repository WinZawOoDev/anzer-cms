import WhyAnzer from "./components/home/why-anzer";
import BannerSlider from "./components/home/banner-slider";
import WhatWeImplement from "./components/home/what-we-implement";

import WhatImplement from "./components/home/what-implement";

import Container from "@/components/common/page-container";
import ImplementationSection from "./components/home/implement-sec";

export default function Home() {
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
