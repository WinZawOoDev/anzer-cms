import img from "@/assets/imgs/default-img-013.png";
import Image from "next/image";
const NewsCard = () => {
  return (
    <div className="cursor-pointer space-y-4 hover:opacity-80">
      <div className="aspect-video">
        <Image
          src={img}
          alt="card image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="space-y-2 md:space-y-3">
        <p className="text-lg font-bold uppercase md:text-xl">
          HOW TO TAKE CARE OF HEART HEALTH?
        </p>
        <span>
          The medical Experts carefully Transplant the Heart You are ...
        </span>
      </div>
    </div>
  );
};

export default NewsCard;
