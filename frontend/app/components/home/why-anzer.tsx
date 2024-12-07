import Image from "next/image";
import defaultImg from "@/assets/imgs/default-img-05.jpeg";
import SectionTitle from "../common/sec-ttl";
const reasons = [
  {
    title: "Comprehensive Healthcare IT Solutions",
    description:
      "ANZER offers integrated solutions like EHR, PACS, LIS, and mobile apps, ensuring seamless operations without third-party integration.",
    image: defaultImg,
  },
  {
    title: "Proven Experience and Reliability",
    description:
      "Since 1994, ANZER has established itself as a trusted healthcare IT provider, with systems used across hospitals and clinics in Asia.",
    image: defaultImg,
  },
  {
    title: "Enhanced Integration and Efficiency",
    description:
      "Our all-in-one solution boosts efficiency, allowing healthcare providers to focus on patient care instead of IT challenges.",
    image: defaultImg,
  },
  {
    title: "Localized Support and Service",
    description:
      "With headquarters in Singapore and branches across Asia, ANZER provides tailored, timely support to meet regional needs.",
    image: defaultImg,
  },
  {
    title: "Proven Track Record of Success",
    description:
      "In just seven years, ANZER's solutions have been widely adopted in healthcare, reflecting our effectiveness.",
    image: defaultImg,
  },
  {
    title: "No Third-Party Reliance",
    description:
      "ANZER's integrated systems ensure seamless operations, demonstrated by use in over 80 healthcare facilities across Asia.",
    image: defaultImg,
  },
];

const WhyAnzer = () => {
  return (
    <section className="container ">
      <div className="space-y-8 md:space-y-14">
        <SectionTitle label="Why choose ANZER IT Healthcare?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center relative before:content-[''] before:absolute before:w-full before:h-[2px]  before:-bottom-2 before:left-0 before:bg-main before:scale-x-0 hover:before:scale-x-100 before:duration-500"
            >
              <div className="mb-4  overflow-hiddens transition-transform duration-500 ease-in-out group-hover:scale-x-125">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl text-grey md:text-2xl font-semibold mb-2 text-gray-800">
                {reason.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyAnzer;
