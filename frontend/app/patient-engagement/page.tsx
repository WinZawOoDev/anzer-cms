import FadeX from "../components/common/animation/fade-x";
import MessageBubble from "../components/common/bubble";
import ConsentFormSvg from "../components/patient-engagement/consent-form-svg";
import ConversationWithBenefits from "../components/patient-engagement/conversation-benefits";
import PatientManagerSVG from "../components/patient-engagement/patient-manager-svg";

const Page = () => {
  return (
    <div className="space-y-8 py-10 pb-36 md:space-y-16 md:py-24">
      <div className="container">
        <ConversationWithBenefits
          SvgComponent={<PatientManagerSVG />}
          title="patient manager"
          leftBubble={
            <MessageBubble
              dir={"right"}
              message={
                "Imm, I am not feeling well. I don’t know how to book the appointment."
              }
              className="absolute left-[2vw] top-[3vw] max-w-[150px] md:left-2 md:top-0 md:max-w-[200px]"
            />
          }
          rightBubble={
            <MessageBubble
              dir={"left"}
              message={
                " I got ANZER Patient Portal App to make appointment, do you want to book it?"
              }
              className="absolute right-[2vw] top-[1vw] max-w-[150px] md:-top-5 md:right-2 md:max-w-[200px]"
            />
          }
        />

        <div className="h-[200px] md:h-[100px]"></div>

        <ConversationWithBenefits
          SvgComponent={<ConsentFormSvg />}
          title="consent form"
          reverse={true}
          benefitsclass="-translate-y-full"
          leftBubble={
            <MessageBubble
              dir={"right"}
              message={
                "Imm, I am not feeling well. I don’t know how to book the appointment."
              }
              className="absolute -top-[12vw] left-[0vw] max-w-[150px] md:-top-[10vw] md:left-0 md:max-w-[200px]"
            />
          }
          rightBubble={
            <MessageBubble
              dir={"left"}
              message={
                " I got ANZER Patient Portal App to make appointment, do you want to book it?"
              }
              className="absolute -top-[14vw] right-[0vw] max-w-[150px] md:-top-[10vw] md:right-2 md:max-w-[200px]"
            />
          }
        />

        <div className="h-[150px] md:h-[100px]"></div>

        <ConversationWithBenefits
          SvgComponent={<PatientManagerSVG />}
          title="home care monitoring"
          leftBubble={
            <MessageBubble
              dir={"right"}
              message={
                "I am not feeling well. I want to get treatment without going hospital."
              }
              className="absolute left-[2vw] top-[3vw] max-w-[150px] md:left-2 md:top-0 md:max-w-[200px]"
            />
          }
          rightBubble={
            <MessageBubble
              dir={"left"}
              message={
                "that is simple. Here ANZER Patient Portal, you can get your home care monitoring service."
              }
              className="absolute right-[2vw] top-[1vw] max-w-[150px] md:-top-5 md:right-2 md:max-w-[200px]"
            />
          }
        />
      </div>
    </div>
  );
};

export default Page;
