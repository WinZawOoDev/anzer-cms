import { cn } from "@/lib/utils";

const HorizontalEdge: React.FC<{
  hasArrow?: boolean;
  arrDir?: "left" | "right";
  className?: string;
}> = ({ className, hasArrow, arrDir }) => {
  return (
    <div
      className={cn(
        `h-[2px]`,
        arrDir === "right" && "pr-1",
        arrDir === "left" && "pl-1"
      )}
    >
      <div
        className={cn(
          `h-[2px] edge bg-black relative `,
          hasArrow &&
            "before:content-[''] before:w-2 before:h-2 before:absolute before:bg-inherit ",
          arrDir === "right" &&
            "before:-top-[3px] before:-right-0.5 before:[clip-path:polygon(100%_50%,0_0,0_100%)]",

          arrDir === "left" &&
            "before:-top-[3px] before:-left-0.5 before:[clip-path:polygon(100%_0,0_50%,_100%_100%)]",
          className
        )}
      ></div>
    </div>
  );
};

export default HorizontalEdge;
