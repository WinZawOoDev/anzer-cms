import SectionTitle from "../common/sec-ttl";

const CommercialFeatures: React.FC<{
  data: Pick<ClinicalManagementSectionsType, "first_section">;
}> = ({ data }) => {
  const secData = data.first_section;
  return (
    <div className="space-y-5 md:space-y-10">
      <SectionTitle label={secData.title} />
      <div className="relative mx-auto grid max-w-[500px] grid-cols-6 gap-2 overflow-hidden rounded-md">
        {secData.text.map((text, idx) => {
          const isExpand = idx === 1 || idx === 0;

          return (
            <div
              key={text.id}
              className={`${isExpand ? "col-span-3" : "col-span-2"} flex min-h-[80px] cursor-pointer items-center justify-center bg-red-pale px-5 py-10 text-sm font-bold transition-all hover:bg-main hover:text-white md:text-base`}
            >
              <p className="w-[100px]">{text.text}</p>
            </div>
          );
        })}
        <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-main px-5 py-2 text-sm uppercase text-white md:px-10 md:py-4">
          {secData.sub_title}
        </button>
      </div>
    </div>
  );
};
export default CommercialFeatures;
