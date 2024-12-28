import { newDataUrl } from "@/lib/constants";
import { getAvailableImgFirst } from "@/lib/utils";
import Image from "next/image";
import parse from "html-react-parser";
import ButtonRed from "@/app/components/common/button";
import Link from "next/link";
const BlogPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(newDataUrl);
  const data = (await res.json()).data as NewSectionsType;
  const blogPosts = data.third_section?.blogs || [];
  const blog = blogPosts.find((post) => post.id === Number(params.id));
  return (
    <div className="container py-10 md:py-16">
      <div className="space-y-5 md:space-y-10">
        <div className="aspect-video w-[min(350px,100%)]">
          <Image
            //   @ts-ignore
            src={getAvailableImgFirst(blog?.image)}
            //   @ts-ignore
            alt={blog?.title}
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold md:text-2xl">{blog?.title}</h2>
        <p className="indent-10">
          {parse(blog?.description.replace(/\n/g, "<br>") || "")}
        </p>

        <div className="flex justify-end">
          <Link href={"/news"} className="block">
            <ButtonRed>Back</ButtonRed>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
