import SectionTitle from "../common/sec-ttl";
import NewsCard from "./news-card";

const NewsSection: React.FC<{
  data: Pick<NewSectionsType, "third_section">;
}> = ({ data }) => {
  return (
    <div className="space-y-5 md:space-y-8">
      <SectionTitle label={data.third_section.title} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.third_section.blogs.map((blog, idx) => {
          return <NewsCard key={idx} {...blog} />;
        })}
      </div>
    </div>
  );
};
export default NewsSection;
