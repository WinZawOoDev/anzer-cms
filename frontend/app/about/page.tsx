import PageContainer from "@/components/common/page-container";
import HistoryAnzer from "../components/about/history";
import WhatDriveUs from "../components/about/what-drive";
import WhatWeStandFor from "../components/about/what-we-stand";
import { aboutDataUrl } from "@/lib/constants";

const AboutPage = async () => {
  const res = await fetch(aboutDataUrl, {
    cache: "no-cache",
  });
  const data = (await res.json()).data as AboutSectionsType;
  return (
    <PageContainer>
      <HistoryAnzer
        data={{
          first_section_content: data.first_section_content,
          first_section_info_list: data.first_section_info_list,
        }}
      />
      <WhatWeStandFor
        data={{
          second_section: data.second_section,
        }}
      />
      <WhatDriveUs
        data={{
          third_section: data.third_section,
        }}
      />
    </PageContainer>
  );
};

export default AboutPage;
