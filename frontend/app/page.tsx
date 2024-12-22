import WhyAnzer from "./components/home/why-anzer";
import BannerSlider from "./components/home/banner-slider";

import WhatImplement from "./components/home/what-implement";

import Container from "@/components/common/page-container";
import { homeDataUrl } from "@/lib/constants";
export default async function Home() {
  const res = await fetch(homeDataUrl, {
    cache: "no-cache",
  });
  const data = (await res.json()).data as HomeSectionsType;

  return (
    <Container>
      <BannerSlider data={{ first_section: data.first_section }} />
      <WhyAnzer data={{ second_section: data.second_section }} />
      <WhatImplement data={{ third_section: data.third_section }} />
    </Container>
  );
}

export const dynamic = "force-dynamic";
