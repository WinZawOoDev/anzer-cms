import { clinicalManagementDataUrl } from "@/lib/constants";
import CommercialFeatures from "../components/clinical-management/commercial-features";
import DocumentManagerSvg from "../components/clinical-management/document-manager";
import HealthCareSvg from "../components/clinical-management/health-care";
import MessageBubble from "../components/common/bubble";
import KeyBenefits from "../components/common/key-benefits";
import SectionTitle from "../components/common/sec-ttl";
import SvgWithBubbles from "../components/common/svg-with-bubbles";

const Page = async () => {
  const res = await fetch(clinicalManagementDataUrl, {
    cache: "no-cache",
  });
  const data = (await res.json()).data as ClinicalManagementSectionsType;
  const secondSec = data.second_section;
  const thirdSec = data.third_section;
  return (
    <div className="container space-y-8 py-5 md:space-y-16 md:py-10">
      <CommercialFeatures
        data={{
          first_section: data.first_section,
        }}
      />
      <div className="md:space-y-20">
        <SectionTitle label={secondSec.title} />
        <div className="h-[100px] md:h-[30px]"></div>
        <SvgWithBubbles
          SvgComponent={<HealthCareSvg />}
          leftBubble={
            <MessageBubble
              dir={"right"}
              message={secondSec.conversation_1}
              className="absolute left-0 top-0 max-w-[150px] -translate-x-[50%] -translate-y-[100%] md:max-w-[200px] md:-translate-x-[100%]"
            />
          }
          rightBubble={
            <MessageBubble
              dir={"left"}
              message={secondSec.conversation_2}
              className="absolute right-0 top-0 max-w-[150px] -translate-y-[100%] translate-x-[50%] md:max-w-[200px] md:translate-x-[100%]"
            />
          }
        />
        <KeyBenefits
          className="-mt-6 md:mt-0"
          title={secondSec.benefits_title}
          benefits={secondSec.text}
          image={secondSec.image.formats.large}
        />
      </div>

      <div className="md:space-y-20">
        <SectionTitle label={thirdSec.title} />
        <div className="h-[100px] md:h-[30px]"></div>
        <SvgWithBubbles
          SvgComponent={<DocumentManagerSvg />}
          // className="max-w-[600px]"
          leftBubble={
            <MessageBubble
              dir={"right"}
              message={thirdSec.conversation_1}
              className="absolute left-0 top-0 max-w-[150px] -translate-x-[50%] -translate-y-[100%] md:max-w-[200px] md:-translate-x-[100%]"
            />
          }
          rightBubble={
            <MessageBubble
              dir={"left"}
              message={thirdSec.conversation_2}
              className="absolute right-0 top-0 max-w-[150px] -translate-y-[100%] translate-x-[50%] md:max-w-[200px] md:translate-x-[100%]"
            />
          }
        />
        {/* <div className="hidden md:block md:h-[30px]"></div> */}
        <KeyBenefits
          reverse={true}
          className="-mt-6 md:mt-0"
          title={thirdSec.benefits_title}
          benefits={thirdSec.text}
          image={thirdSec.image.formats.large}
        />
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
