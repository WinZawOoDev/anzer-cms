import Image from "next/image";
import ButtonRed from "../common/button";
import { oswald } from "@/lib/font";
import { imgHostUrl } from "@/lib/constants";
const HighInter: React.FC<{
  data: Pick<ProductSectionsType, "third_section">;
}> = ({ data }) => {
  const secData = data.third_section;
  return (
    <div className="py-10 text-black md:py-16">
      <div className="container relative space-y-5 px-5">
        <div className="img-bg aspect-video md:block md:aspect-video">
          <Image
            src={`${secData.image.formats.large.url}`}
            alt="bg image"
            className="h-full w-full object-cover object-bottom"
            width={1600}
            height={900}
          />
        </div>
        <div className="static left-5 top-10 space-y-5 md:absolute md:[left:55%]">
          <h6 className={`text-2xl font-bold md:text-3xl ${oswald.className}`}>
            {secData.title}
          </h6>
          <ul className="list-disc space-y-3 pl-5">
            {secData.list.map((item) => {
              return <li key={item.text}>{item.text}</li>;
            })}
          </ul>
          <ButtonRed>Book Demo</ButtonRed>
        </div>
      </div>
    </div>
  );
};

export default HighInter;
