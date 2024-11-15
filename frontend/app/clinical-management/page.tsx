import MessageBubble from "../components/common/bubble";
import KeyBenefits from "../components/common/key-benefits";

const Page = () => {
  return (
    <div className="space-y-8 md:space-y-16 container">
      <MessageBubble
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
      <KeyBenefits reverse={true} />
    </div>
  );
};

export default Page;
