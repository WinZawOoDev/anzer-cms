import Image from "next/image";
import SectionTitle from "../common/sec-ttl";
import perspectiveImg from "@/assets/imgs/default-img-07.png";

const data = [
  {
    title: "DATA-DRIVEN INSIGHTS",
    description: "Easily identify trends and patterns.",
  },
  {
    title: "PERFORMANCE TRACKING",
    description: "Monitor KPIs to assess business health.",
  },
  {
    title: "FASTER DECISION-MAKING",
    description: "Real-time data accelerates responses.",
  },
  {
    title: "ENHANCED FORECASTING",
    description: "Use historical data for better future predictions.",
  },
];
const Perspective = () => {
  return (
    <div className="space-y-5 pb-0 md:space-y-10 md:pb-20">
      <SectionTitle label="management perspective" />
      <div className="relative">
        <div className="mr-auto hidden max-w-[800px] md:block">
          <Image
            src={perspectiveImg}
            alt="Perspective image"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="static right-0 top-1/2 aspect-auto md:absolute md:aspect-square">
          <div className="grid grid-cols-2 gap-[2px]">
            {data.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="relative space-y-5 bg-grey px-5 py-5 text-white before:absolute before:left-0 before:top-1/2 before:h-full before:w-[4px] before:origin-center before:-translate-y-1/2 before:scale-y-0 before:bg-white before:duration-500 before:content-[''] hover:before:scale-75 md:py-8"
                >
                  <p className="max-w-[200px] text-base font-extrabold uppercase md:text-lg">
                    {item.title}
                  </p>
                  <span className="block text-sm leading-tight">
                    {item.description}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perspective;
