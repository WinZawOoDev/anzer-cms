
import { hostUrl } from "@/lib/constants";
import Image from "next/image";
const NewsCard: React.FC<Blog> = ({ description, image, title }) => {
  return (
    <div className="cursor-pointer space-y-4 hover:opacity-80">
      <div className="aspect-video">
        <Image
          // @ts-ignore
          src={`${hostUrl}/${image.formats.thumbnail.url}`}
          width={400}
          height={400}
          alt="card image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="space-y-2 md:space-y-3">
        <p className="text-lg font-bold uppercase md:text-xl">{title}</p>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default NewsCard;
