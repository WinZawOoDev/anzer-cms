import { getAvailableImgFirst } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
const NewsCard: React.FC<Blog> = ({ description, image, title, id }) => {
  return (
    <div className="cursor-pointer space-y-4 hover:opacity-80">
      <div className="aspect-video">
        <Image
          // @ts-ignore
          // src={`${image.formats.thumbnail.url}`}
          src={getAvailableImgFirst(image)}
          width={400}
          height={400}
          alt="card image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="space-y-2 md:space-y-3">
        <Link href={`/news/${id}`} className="block">
          <h5 className="text-lg font-bold uppercase underline md:text-xl">
            {title}
          </h5>
        </Link>

        <p className="line-clamp-4 indent-10">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
