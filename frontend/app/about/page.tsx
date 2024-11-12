import HistoryAnzer from "../components/about/history";
import WhatDriveUs from "../components/about/what-drive";
import WhatWeStandFor from "../components/about/what-we-stand";

const AboutPage = () => {
  return (
    <div className="space-y-8 md:space-y-16 ">
      <HistoryAnzer />
      <WhatWeStandFor />
      <WhatDriveUs />
    </div>
  );
};

export default AboutPage;
