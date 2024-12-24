import { Stethoscope, Users, Lightbulb, Handshake } from "lucide-react";
import SectionTitle from "../common/sec-ttl";
import ButtonRed from "../common/button";

const Icons = [
  {
    icon: Stethoscope,
  },
  {
    icon: Users,
  },
  {
    icon: Lightbulb,
  },
  {
    icon: Handshake,
  },
];
const WhatDriveUs: React.FC<{
  data: Pick<AboutSectionsType, "third_section">;
}> = ({ data }) => {
  const secData = data.third_section;
  return (
    <section className="container">
      <div className="space-y-5 md:space-y-10">
        <SectionTitle label={secData.title} />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {secData.infos.map((factor, index) => {
            const Icon = Icons[index].icon;
            return (
              <div
                key={index}
                className="group relative origin-center border-none bg-white p-5 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:scale-y-0 before:bg-main before:duration-500 before:content-[''] hover:before:scale-y-100"
              >
                <div className="pb-2 text-center">
                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl">
                    <Icon className="h-12 w-12 duration-300 group-hover:text-main" />
                  </div>
                  <h5 className="mb-2 text-xl font-semibold text-gray-800">
                    {factor.title}
                  </h5>
                </div>
                <div>
                  <p className="text-center text-sm text-gray-600">
                    {factor.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 flex items-center justify-center text-center">
          <ButtonRed>Find out more</ButtonRed>
        </div>
      </div>
    </section>
  );
};

export default WhatDriveUs;
