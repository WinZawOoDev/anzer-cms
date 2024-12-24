import React from "react";
import Resources from "./resources";
import Social from "./social";
import SearchForm from "./search-form";
import Map from "./map";
import Address from "./address";
import FooterContextProvider from "@/context/footer-context";
import Flags from "./flags";

export default function Footer() {
  return (
    <FooterContextProvider>
      <footer className="bg-[#414040] mt-10 md:mt-16 py-3 ">
        <div className="mx-5 space-y-2">
          <div className="grid md:grid-cols-3 md:gap-12 w-full">
            <div className="">
              <Flags />
              <Address />
            </div>
            <div className="md:order-first px-3 py-1 rounded-lg">
              <Map />
            </div>

            <div className="flex md:flex-col md:justify-between md:h-ful py-4 md:py-0">
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
