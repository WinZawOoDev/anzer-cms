import NewsWithAccrodion from "../components/news/news-accrodion";
import NewsSection from "../components/news/news-section";
import { newDataUrl } from "@/lib/constants";

const Page = async () => {
  const res = await fetch(newDataUrl);
  const data = (await res.json()).data as NewSectionsType;
  return (
    <div className="space-y-8 py-10 pb-36 md:space-y-16 md:py-24">
      <div className="container">
        <NewsWithAccrodion data={{ first_section: data.first_section }} />

        <div className="h-[400px]"></div>

        <NewsWithAccrodion
          data={{
            second_section: data.second_section,
          }}
          reverse={true}
        />
        <div className="h-[400px]"></div>
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
