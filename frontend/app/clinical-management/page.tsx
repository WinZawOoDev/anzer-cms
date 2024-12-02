import CommercialFeatures from "../components/clinical-management/commercial-features";
import DocumentManagerSvg from "../components/clinical-management/document-manager";
import HealthCareSvg from "../components/clinical-management/health-care";
import MessageBubble from "../components/common/bubble";
import KeyBenefits from "../components/common/key-benefits";
import SectionTitle from "../components/common/sec-ttl";
import SvgWithBubbles from "../components/common/svg-with-bubbles";

const Page = () => {
  return (
    <div className="container space-y-8 py-5 md:space-y-16 md:py-10">
      <CommercialFeatures />
      <div className="md:space-y-20">
        <SectionTitle label="health care mobile app" />
        <div className="h-[30px] md:h-[30px]"></div>
        <SvgWithBubbles
          SvgComponent={<HealthCareSvg />}
          leftBubble={
            <MessageBubble
              dir={"right"}
              message={
                "Imm, I am not feeling well. I don’t know how to book the appointment."
              }
              className="absolute -left-[0vw] -top-[0vw] max-w-[150px] md:-left-12 md:-top-[5vw] md:max-w-[200px]"
            />
          }
          rightBubble={
            <MessageBubble
              dir={"left"}
              message={
                " I got ANZER Patient Portal App to make appointment, do you want to book it?"
              }
              className="absolute -right-[5vw] -top-[0vw] max-w-[150px] md:-right-28 md:-top-[8vw] md:max-w-[200px]"
            />
          }
        />
        <KeyBenefits className="-mt-6 md:mt-0" />
      </div>

      <div className="md:space-y-20">
        <SectionTitle label="document manager" />
        <div className="h-[30px] md:h-[30px]"></div>
        <SvgWithBubbles
          SvgComponent={<DocumentManagerSvg />}
          className="max-w-[600px]"
          leftBubble={
            <MessageBubble
              dir={"right"}
              message={
                "Imm, I am not feeling well. I don’t know how to book the appointment."
              }
              className="absolute -left-[0vw] -top-[0vw] max-w-[150px] md:-left-12 md:-top-[5vw] md:max-w-[200px]"
            />
          }
          rightBubble={
            <MessageBubble
              dir={"left"}
              message={
                " I got ANZER Patient Portal App to make appointment, do you want to book it?"
              }
              className="absolute -right-[5vw] -top-[0vw] max-w-[150px] md:-right-28 md:-top-[8vw] md:max-w-[200px]"
            />
          }
        />
        <KeyBenefits reverse={true} className="-mt-6 md:mt-0" />
      </div>
      {/* <MessageBubble
        dir="right"
        message="If you are tired of using laptop and 
looking mobile friendly app for 
my consultation."
      />
      <MessageBubble
        dir="left"
        message="If you are tired of using laptop and 
looking mobile friendly app for 
my consultation."
      />
      <KeyBenefits />
      <KeyBenefits reverse={true} /> */}
    </div>
  );
};

export default Page;
