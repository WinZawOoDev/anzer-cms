import NewsWithAccrodion from "../components/news/news-accrodion";
import imgOne from "@/assets/imgs/default-img-011.png";
import imgTwo from "@/assets/imgs/default-img-012.png";
import NewsSection from "../components/news/news-section";

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
const Page = () => {
  return (
    <div className="space-y-8 py-10 pb-36 md:space-y-16 md:py-24">
      <div className="container">
        <NewsWithAccrodion
          title="DICOM TECHNOLOGY FOR RADIOLOGY IMAGING"
          img={imgOne}
          data={medicalFeatures}
        />

        <div className="h-[250px]"></div>

        <NewsWithAccrodion
          title="LABORATORY INFORMATION SYSTEM"
          img={imgTwo}
          data={medicalFeatures}
          reverse={true}
        />
        <div className="h-[250px]"></div>
        <NewsSection />
      </div>
    </div>
  );
};

export default Page;
