import PageContainer from "@/components/common/page-container";
import HistoryAnzer from "../components/about/history";
import WhatDriveUs from "../components/about/what-drive";
import WhatWeStandFor from "../components/about/what-we-stand";

const AboutPage = () => {
  return (
    <PageContainer>
      <HistoryAnzer />
      <WhatWeStandFor />
      <WhatDriveUs />
    </PageContainer>
  );
};

export default AboutPage;
