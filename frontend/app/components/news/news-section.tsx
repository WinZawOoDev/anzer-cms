import SectionTitle from "../common/sec-ttl";
import NewsCard from "./news-card";

const NewsSection = () => {
  return (
    <div className="space-y-5 md:space-y-8">
      <SectionTitle label="news" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 5 }, (v) => v).map((_, idx) => {
          return <NewsCard key={idx} />;
        })}
      </div>
    </div>
  );
};
export default NewsSection;
