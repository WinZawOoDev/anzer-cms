import { Card } from "@/components/ui/card";
import { Users, Shield, Lightbulb, Heart } from "lucide-react";
import SectionTitle from "../common/sec-ttl";

const cards = [
  {
    title: "Collaborative",
    description:
      "Foster teamwork and partnership to enhance service delivery and outcomes.",
  },
  {
    title: "Integrity",
    description:
      "Upholds high ethical standards and transparency in all operations.",
  },
  {
    title: "Innovative",
    description:
      "Committed to developing cutting-edge solutions that advance healthcare technology.",
  },
  {
    title: "Customer Centric",
    description:
      "Prioritizes the needs and satisfaction of healthcare providers and patients.",
  },
];

const WhatWeStandFor = () => {
  return (
    <div className="container">
      <div className="mx-auto max-w-[800px] space-y-5 md:space-y-10">
        <SectionTitle label="What we stand for ?" />

        <div className="relative">
          {/* Center line */}
          {/* <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border"˝ /˝> */}

          <div className="relative grid gap-8 md:grid-cols-2">
            {cards.map((card, idx) => {
              const styles = [
                {
                  container: "rounded-2xl md:rounded-none md:rounded-tl-3xl",
                  content: "",
                },
                {
                  container: "rounded-2xl md:rounded-none md:rounded-tr-3xl",
                  content: "",
                },
                {
                  container: "rounded-2xl md:rounded-none md:rounded-bl-3xl",
                  content: "flex flex-col-reverse ",
                },
                {
                  container: "rounded-2xl md:rounded-none md:rounded-br-3xl",
                  content: "flex flex-col-reverse ",
                },
              ];
              return (
                <div
                  key={card.title}
                  className={`group bg-gray-100 p-6 transition-transform hover:bg-grey hover:text-white md:translate-x-4 ${styles[idx].container}`}
                >
                  <div className={`${styles[idx]?.content}`}>
                    <h3 className="text-xl font-semibold text-main md:text-black md:group-hover:text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 opacity-100 duration-300 md:opacity-0 md:group-hover:text-white md:group-hover:opacity-100">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="p rounded-full border-2 border-white bg-main px-5 py-4 text-white">
              <div className="whitespace-nowrap text-center font-semibold">
                ANZER EHR SYSTEM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeStandFor;
