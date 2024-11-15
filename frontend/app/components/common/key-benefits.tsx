import defaultImg from "@/assets/imgs/default-img-04.png";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  reverse?: boolean;
};
const benefits = [
  "Boosts patient engagement with easy access to health info",
  "24/7 access to medical records and appointments",
  "Secure communication with healthcare providers",
  "Improves health outcomes through better self-management",
];
const KeyBenefits: React.FC<Props> = ({ reverse }) => {
  return (
    <div className="relative aspect-video md:aspect-auto ">
      <div
        className={cn(
          `aspect-video bg-red-100 max-w-[900px]`,
          reverse && "ml-auto"
        )}
      >
        <Image
          src={defaultImg}
          alt={"default image one"}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={cn(
          `absolute aspect-video md:aspect-auto py-5 md:py-10 px-5 right-0 top-1/2 -translate-y-1/2  bg-main text-white space-y-5`,
          reverse && "left-0 right-auto"
        )}
      >
        <p className="uppercase  text-lg md:text-xl">Key Benefits</p>
        <ul className="text-sm list-disc pl-5  space-y-2 md:space-y-3">
          {benefits.map((text, idx) => {
            return <li key={idx}>{text}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default KeyBenefits;
