import SectionTitle from "../common/sec-ttl";

const texts = [
  {
    id: 1,
    label: "Consultant Dashboard",
  },
  {
    id: 2,
    label: "Radiologist Dashboard",
  },
  {
    id: 3,
    label: "Pathologist Dashboard",
  },
  {
    id: 4,
    label: " Microbiologist Dashboard",
  },
  {
    id: 5,
    label: "Clinical Mo Dahboard",
  },
];
const CommercialFeatures = () => {
  return (
    <div className="space-y-5 md:space-y-10">
      <SectionTitle label="Commercial Features" />
      <div className="relative mx-auto grid max-w-[500px] grid-cols-6 gap-2 overflow-hidden rounded-md">
        {texts.map((text, idx) => {
          const isExpand = idx === 1 || idx === 0;

          return (
            <div
              key={text.id}
              className={`${isExpand ? "col-span-3" : "col-span-2"} bg-red-pale flex min-h-[80px] cursor-pointer items-center justify-center px-5 py-10 text-sm font-bold transition-all hover:bg-main hover:text-white md:text-base`}
            >
              <p className="w-[100px]">{text.label}</p>
            </div>
          );
        })}
        <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-main px-5 py-2 text-sm uppercase text-white md:px-10 md:py-4">
          special dashboards
        </button>
      </div>
    </div>
  );
};
export default CommercialFeatures;
