import Image from "next/image";
import defaultImg from "@/assets/imgs/default-img-03.png";
import SectionTitle from "../common/sec-ttl";
import ButtonRed from "../common/button";

const HighInter = () => {
  return (
    <div className=" text-black py-10 md:py-16">
      <div className="container px-5">
        <div className="flex flex-col md:flex-row  md:items-start gap-8">
          <div className="md:w-1/2 space-y-6">
            <SectionTitle
              label="We are High Interoperable Products "
              className="text-left md:text-5xl"
            />

            <ul className="list-disc px-5">
              <li>Benefits of this product (Recommended)</li>
              <li>Benefits of this product (Recommended)</li>
              <li>Benefits of this product (Recommended)</li>
              <li>Benefits of this product (Recommended)</li>
            </ul>

            <ButtonRed>Book Demo</ButtonRed>
          </div>
          <div className=" w-full md:w-1/2 aspect-video ">
            <Image
              src={defaultImg}
              alt="high iteroperable"
              //   width={600}
              //   height={400}
              className="w-full h-full object-cover rounded-3xl aspect-video"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighInter;
