import { ReactNode } from "react";
import KeyBenefits from "./key-benefits";
import SectionTitle from "../common/sec-ttl";
import FadeX from "../common/animation/fade-x";
const ConversationWithBenefits: React.FC<{
  className?: string;
  SvgComponent: ReactNode;
  title: string;
  leftBubble?: ReactNode;
  rightBubble?: ReactNode;
  reverse?: boolean;
  benefitsclass?: string;
  benefits: TextItem[];
}> = ({
  className,
  SvgComponent,
  title,
  leftBubble,
  rightBubble,
  reverse,
  benefitsclass,
  benefits,
}) => {
  return (
    <div className="space-y-8 py-6 md:space-y-20 md:py-10">
      <SectionTitle label={title} />
      <div className="h-[20px] md:h-[50px]"></div>
      <div
        className={`flex items-center gap-5 ${reverse && "flex-row-reverse"} relative ${className}`}
      >
        <div className="conversation basis-[650px]">
          <div className="relative mx-auto max-w-[200px] md:max-w-[300px]">
            {SvgComponent}
            {leftBubble}
            {rightBubble}
          </div>
        </div>

        <div
          className={`benefits absolute -bottom-[135%] h-min w-full flex-1 -translate-y-1/2 md:right-0 md:top-2/3 md:w-[min(500px,100%)] md:-translate-y-1/2 md:translate-x-0 ${reverse ? "left-0" : "right-0"} ${benefitsclass}`}
        >
          <FadeX dir={reverse ? "left" : "right"}>
            <KeyBenefits benefits={benefits} />
          </FadeX>
        </div>
      </div>
    </div>
  );
};

export default ConversationWithBenefits;
