import Image from "next/image";
import defaultImg from "@/assets/imgs/default-img-03.png";
import SectionTitle from "../common/sec-ttl";
import ButtonRed from "../common/button";
import img from "@/assets/imgs/default-img-06.png";
import { oswald } from "@/lib/font";

const features = [
  "User Friendly Interface",
  "All In One Feature",
  "Time Savings",
  "Efficient Care Management",
];

const HighInter = () => {
  return (
    <div className="py-10 text-black md:py-16">
      <div className="container relative space-y-5 px-5">
        <div className="img-bg aspect-video md:block md:aspect-video">
          <Image
            src={img}
            alt="bg image"
            className="h-full w-full object-cover object-bottom"
          />
        </div>
        <div className="static left-5 top-10 space-y-5 md:absolute md:[left:55%]">
          <h6 className={`text-2xl font-bold md:text-3xl ${oswald.className}`}>
            We are High Interoperable Products
          </h6>
          <ul className="list-disc space-y-3 pl-5">
            {features.map((text) => {
              return <li key={text}>{text}</li>;
            })}
          </ul>
          <ButtonRed>Book Demo</ButtonRed>
        </div>
      </div>
    </div>
  );
};

export default HighInter;
