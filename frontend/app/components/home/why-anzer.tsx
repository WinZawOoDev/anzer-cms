import Image from "next/image";
import SectionTitle from "../common/sec-ttl";
import { hostUrl } from "@/lib/constants";

const WhyAnzer: React.FC<{
  data: Pick<HomeSectionsType, "second_section">;
}> = ({ data }) => {
  const secData = data.second_section;
  console.log("sec Data", data.second_section.contents);
  return (
    <section className="container">
      <div className="space-y-8 md:space-y-14">
        <SectionTitle label={secData.title} />
        <div className="grid grid-cols-1 gap-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {secData.contents.map((reason, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center before:absolute before:-bottom-2 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-main before:duration-500 before:content-[''] hover:before:scale-x-100"
            >
              <div className="overflow-hiddens mb-4 transition-transform duration-500 ease-in-out group-hover:scale-x-125">
                <Image
                  // @ts-ignore
                  src={`${hostUrl}/${reason?.image?.formats?.thumbnail?.url}`}
                  alt={reason.title}
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800 text-grey md:text-2xl">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-600 md:text-base">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyAnzer;
