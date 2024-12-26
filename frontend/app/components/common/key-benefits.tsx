import defaultImg from "@/assets/imgs/default-img-04.png";
import { imgHostUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  reverse?: boolean;
  className?: string;
  benefits: TextItem[];
  title?: string;
  image: string;
};

const KeyBenefits: React.FC<Props> = ({
  reverse,
  className,
  benefits,
  title,
  image,
}) => {
  return (
    <div className={`relative aspect-video md:aspect-auto ${className}`}>
      <div
        className={cn(
          `aspect-video max-w-[900px] bg-red-100`,
          reverse && "ml-auto",
        )}
      >
        <Image
          src={`${image}`}
          alt={"default image one"}
          className="h-full w-full object-cover"
          width={1600}
          height={900}
        />
      </div>
      <div
        className={cn(
          `absolute right-0 top-1/2 aspect-video w-[min(450px,100%)] -translate-y-1/2 space-y-5 bg-main px-5 py-5 text-white md:aspect-auto md:py-10`,
          reverse && "left-0 right-auto",
        )}
      >
        <p className="text-lg uppercase md:text-xl">
          {title || "Key Benefits"}
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm md:space-y-3">
          {benefits.map((text, idx) => {
            return <li key={idx}>{text.text}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default KeyBenefits;
