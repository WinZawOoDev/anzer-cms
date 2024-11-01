import Image from "next/image";
import defaultImg from "@/assets/imgs/default-img-02.png";
import SectionTitle from "../common/sec-ttl";
import ButtonRed from "../common/button";

const HistoryAnzer = () => {
  return (
    <div className="bg-grey text-white py-10 md:py-16">
      <div className="container px-5">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

          <div className="w-full md:w-1/2 space-y-6">
            <SectionTitle
              label="History of ANZER IT Healthcare Asia"
              className="text-3xl md:text-5xl text-left"
            />

            <p className="text-base indent-10">
              ANZER IT Healthcare Asia, founded in 1984 and headquartered in
              Singapore, has become a leading provider of integrated healthcare
              IT solutions across Asia. With over 100 hospitals and clinics
              using its systems, ANZER ensures seamless operations without the
              need for third-party integration, helping healthcare providers
              focus on delivering quality patient care.
            </p>
            <ButtonRed>Expand</ButtonRed>
          </div>
          <div className=" w-full md:w-1/2 aspect-video ">
            <Image
              src={defaultImg}
              alt="Healthcare professionals working"
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

export default HistoryAnzer;
