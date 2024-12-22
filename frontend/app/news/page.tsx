import NewsWithAccrodion from "../components/news/news-accrodion";
import imgOne from "@/assets/imgs/default-img-011.png";
import imgTwo from "@/assets/imgs/default-img-012.png";
import NewsSection from "../components/news/news-section";
import { newDataUrl } from "@/lib/constants";

const medicalFeatures: MedicalFeature[] = [
  {
    id: "imaging",
    title: "STANDARDIZED IMAGING",
    description: "Ensures compatibility across medical imaging systems",
  },
  {
    id: "sharing",
    title: "EFFICIENT DATA SHARING",
    description:
      "Streamlines secure sharing of medical data between healthcare providers",
  },
  {
    id: "diagnostics",
    title: "ENHANCED DIAGNOSTICS",
    description: "Advanced tools and algorithms for improved medical diagnosis",
  },
  {
    id: "storage",
    title: "LONG-TERM STORAGE",
    description:
      "Secure, long-term storage solutions for medical records and imaging data",
  },
];
const Page = async () => {
  const res = await fetch(newDataUrl, {
    cache: "no-cache",
  });
  const data = (await res.json()).data as NewSectionsType;
  return (
    <div className="space-y-8 py-10 pb-36 md:space-y-16 md:py-24">
      <div className="container">
        <NewsWithAccrodion data={{ first_section: data.first_section }} />

        <div className="h-[250px]"></div>

        <NewsWithAccrodion
          data={{
            second_section: data.second_section,
          }}
          reverse={true}
        />
        <div className="h-[250px]"></div>
        <NewsSection
          data={{
            third_section: data.third_section,
          }}
        />
      </div>
    </div>
  );
};

export default Page;
