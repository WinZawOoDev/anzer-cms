import Image, { StaticImageData } from "next/image";
import AccordtionContainer from "../common/accordions";

const NewsWithAccrodion: React.FC<{
  title: string;
  img: StaticImageData;
  data: MedicalFeature[];
  reverse?: boolean;
}> = ({ title, img, data, reverse }) => {
  return (
    <div
      className={`relative flex gap-5 ${reverse ? "flex-row-reverse" : "flex-row"}`}
    >
      <div
        className={`absolute top-5 w-[300px] text-white md:static md:w-auto md:flex-1 md:text-black ${reverse ? "right-5 text-right" : "left-5"}`}
      >
        <h6 className="text-2xl font-bold md:text-3xl">{title}</h6>
      </div>
      <div className="aspect-video flex-1 md:aspect-[16/10] md:[flex:3]">
        <Image src={img} alt={title} className="h-full w-full object-cover" />
      </div>
      <div
        className={`absolute top-2/3 w-[min(450px,100%)] ${reverse ? "right-1/2 translate-x-1/2 md:right-0 md:translate-x-0" : "left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0"}`}
      >
        <AccordtionContainer data={data} />
      </div>
    </div>
  );
};

export default NewsWithAccrodion;
