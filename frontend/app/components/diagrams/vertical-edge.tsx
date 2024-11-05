import { cn } from "@/lib/utils";

const VerticalEdge: React.FC<{
  hasArrow?: boolean;
  className?: string;
  arrDir?: "top" | "bottom";
}> = ({ hasArrow, className, arrDir }) => {
  return (
    <div
      className={cn(
        `h-full `,
        arrDir === "top" && "pt-1",
        arrDir === "bottom" && "pb-1"
      )}
    >
      <div
        className={cn(
          `h-full w-[2px] edge-vertical bg-black relative `,
          hasArrow &&
            "before:content-[''] before:w-2 before:h-2 before:absolute before:bg-inherit ",
          arrDir === "top" &&
            "before:-top-[3px] before:-right-[3px] before:[clip-path:polygon(100%_100%,50%_0,0_100%)]",
          arrDir === "bottom" &&
            "before:-bottom-[3px] before:-right-[3px] before:[clip-path:polygon(50%_100%,100%_0,0_0)]",
          className
        )}
      ></div>
    </div>
  );
};

export default VerticalEdge;
