import { patientEngagementDataUrl } from "@/lib/constants";
import MessageBubble from "../components/common/bubble";
import ConsentFormSvg from "../components/patient-engagement/consent-form-svg";
import ConversationWithBenefits from "../components/patient-engagement/conversation-benefits";
import PatientManagerSVG from "../components/patient-engagement/patient-manager-svg";
import HomeCareSvg from "../components/patient-engagement/home-care";
const Page = async () => {
  const res = await fetch(patientEngagementDataUrl);
  const data = (await res.json()).data as PatientEngagementSectionsType;
  const firstSec = data.first_section;
  const secondSec = data.second_section;
  const thirdSec = data.third_section;
  return (
    <div className="space-y-8 py-10 pb-36 md:space-y-16 md:py-24">
      <div className="container">
        <ConversationWithBenefits
          SvgComponent={<PatientManagerSVG />}
          title={firstSec.title}
          leftBubble={
            <MessageBubble
              dir={"right"}
              message={firstSec.conversation_1}
              className="absolute left-0 top-0 max-w-[150px] -translate-x-[50%] -translate-y-[100%] md:max-w-[200px] md:-translate-x-[100%]"
            />
          }
          rightBubble={
            <MessageBubble
              dir={"left"}
              message={firstSec.conversation_2}
              className="absolute right-0 top-0 max-w-[150px] -translate-y-[100%] translate-x-[50%] md:max-w-[200px] md:translate-x-[100%]"
            />
          }
          benefits={firstSec.text}
        />

        <div className="h-[200px] md:h-[100px]"></div>
        <ConversationWithBenefits
          SvgComponent={<ConsentFormSvg />}
          title={secondSec.title}
          reverse={true}
          benefitsclass="-translate-y-full"
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
          benefits={secondSec.text}
        />

        <div className="h-[150px] md:h-[100px]"></div>

        <ConversationWithBenefits
          SvgComponent={<HomeCareSvg />}
          title={thirdSec.title}
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
          benefits={thirdSec.text}
        />
      </div>
    </div>
  );
};

export default Page;
