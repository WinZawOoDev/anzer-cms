import Image, { StaticImageData } from "next/image";
import AccordtionContainer from "../common/accordions";
import { imgHostUrl } from "@/lib/constants";
import { getAvailableImgFirst } from "@/lib/utils";

type H = Pick<NewSectionsType, "first_section" | "second_section">;
const NewsWithAccrodion: React.FC<{
  data: Partial<Pick<NewSectionsType, "first_section" | "second_section">>;
  reverse?: boolean;
}> = ({ data, reverse }) => {
  const secData = data?.first_section || data?.second_section;
  return (
    <div
      className={`relative flex gap-5 ${reverse ? "flex-row-reverse" : "flex-row"}`}
    >
      <div
        className={`absolute top-5 w-[300px] text-white md:static md:w-auto md:flex-1 md:text-black ${reverse ? "right-5 text-right" : "left-5"}`}
      >
        <h6 className="text-2xl font-bold md:text-3xl">{secData?.title}</h6>
      </div>
      <div className="aspect-video flex-1 md:aspect-[16/10] md:[flex:3]">
        <Image
          // src={`${secData?.image.formats.large.url}`}
          src={getAvailableImgFirst(secData!.image) as string}
          alt={secData?.title || "image"}
          className="h-full w-full object-cover"
          width={1600}
          height={900}
        />
      </div>
      <div
        className={`absolute top-2/3 w-[min(450px,100%)] ${reverse ? "right-1/2 translate-x-1/2 md:right-0 md:translate-x-0" : "left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0"}`}
      >
        <AccordtionContainer
          data={secData?.infos as unknown as MedicalFeature[]}
        />
      </div>
    </div>
  );
};

export default NewsWithAccrodion;
