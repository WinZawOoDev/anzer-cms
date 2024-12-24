"use client";
import Image from "next/image";
import SectionTitle from "../common/sec-ttl";
import ButtonRed from "../common/button";
import { ArrowDownFromLine, ArrowUpFromLine } from "lucide-react";
import { useState } from "react";

const HistoryAnzer: React.FC<{
  data: Pick<
    AboutSectionsType,
    "first_section_content" | "first_section_info_list"
  >;
}> = ({ data }) => {
  const [expand, setExpaned] = useState(false);
  return (
    <div className="bg-grey py-10 text-white md:py-16">
      <div className="container px-5">
        <div className="space-y-5">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="w-full space-y-6 md:w-1/2">
              <SectionTitle
                label={data.first_section_content.title}
                className="text-white"
              />

              <p className="indent-10 text-base">
                {data.first_section_content.description}
              </p>
            </div>
            <div className="aspect-video w-full md:w-1/2">
              <Image
                src={`${data.first_section_content.image.formats.large.url}`}
                alt="Healthcare professionals working"
                width={600}
                height={400}
                className="aspect-video h-full w-full rounded-3xl object-cover"
              />
            </div>
          </div>
          <div className="space-y-5">
            {expand && (
              <div className="space-y-5 pt-10">
                <h6 className="text-xl font-bold md:text-2xl">
                  {data.first_section_info_list.title}
                </h6>
                <ul className="list-disc pl-5 text-sm md:text-base">
                  {data.first_section_info_list.list.map((item, idx) => {
                    return <li key={idx}>{item.text}</li>;
                  })}
                </ul>
              </div>
            )}

            <ButtonRed
              onClick={() => setExpaned((prev) => !prev)}
              Icon={
                expand ? (
                  <ArrowUpFromLine size={16} />
                ) : (
                  <ArrowDownFromLine size={16} />
                )
              }
            >
              {expand ? "Collapse" : "Expand"}
            </ButtonRed>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryAnzer;
