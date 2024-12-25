import Image from "next/image";
import SectionTitle from "../common/sec-ttl";
import { imgHostUrl } from "@/lib/constants";
import { getAvailableImgFirst } from "@/lib/utils";

const Perspective: React.FC<{
  data: Pick<ManagementPerspectiveSectionsType, "first_section">;
}> = ({ data }) => {
  const secData = data.first_section;
  return (
    <div className="space-y-5 pb-0 md:space-y-10 md:pb-20">
      <SectionTitle label={secData.title} />
      <div className="relative">
        <div className="mr-auto hidden max-w-[800px] md:block">
          <Image
            // src={`${secData.image.formats.large.url}`}
            src={getAvailableImgFirst(secData.image) as string}
            alt="Perspective image"
            className="h-full w-full object-contain"
            width={1600}
            height={900}
          />
        </div>
        <div className="static right-0 top-1/2 aspect-auto md:absolute md:aspect-square">
          <div className="grid grid-cols-2 gap-[2px]">
            {secData.infos.map((item, idx) => {
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
