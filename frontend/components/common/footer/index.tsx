import React from "react";
import Resources from "./resources";
import Social from "./social";
import SearchForm from "./search-form";
import Map from "./map";
import Address from "./address";
import FooterContextProvider from "@/context/footer-context";
import Flags from "./flags";
import { footerDataUrl } from "@/lib/constants";

export default async function Footer() {

  const res = await fetch(footerDataUrl, {
    cache: "no-cache",
  });
  const data = (await res.json()).data as FooterContent

  console.log(data.FollowUp)


  return (
    <FooterContextProvider country={data.Country[0]}>
      <footer className="bg-[#414040] mt-10 md:mt-16 py-3 ">
        <div className="mx-5 md:mx-10 space-y-2">
          <div className="grid md:grid-cols-3 md:gap-12 w-full">
            <div className="">
              <Flags countries={data.Country} />
              <Address />
            </div>
            <div className="md:order-first px-3 py-1 rounded-lg">
              <Map />
            </div>

            <div className="flex md:flex-col md:justify-between md:h-ful md:pr-10 py-4 md:py-0">
              <Resources />
              <Social />
            </div>
          </div>
          <SearchForm />
          <p className="text-center text-sm py-3 border-t border-[#717171] text-gray-300">
            Copyright &copy; {new Date().getFullYear()} <b>ANZER</b> IT Healthcare
            Asia
          </p>
        </div>
      </footer>
    </FooterContextProvider>

  );
}
