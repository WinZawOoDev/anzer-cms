import { cn } from "@/lib/utils";

type Props = {
  dir: "right" | "left";
  message: string;
  className?: string;
};

const MessageBubble: React.FC<Props> = ({ dir, message, className }) => {
  return (
    <div
      className={cn(
        `bg-red-200  text-[10px] md:text-sm  md:px-5 px-4 py-2 md:py-5 rounded-xl max-w-[200px] md:max-w-[300px] relative before:content-[''] before:absolute before:w-5 before:h-8 before:bg-inherit before:-bottom-3 md:before:-bottom-5`,
        dir === "right" &&
          "before:right-0  before:[clip-path:polygon(100%_0,0_0,100%_100%)]",
        dir === "left" &&
          "before:left-0  before:[clip-path:polygon(100%_0,0_0,0_100%)]",
        className
      )}
    >
      <p>{message}</p>
    </div>
  );
};
export default MessageBubble;
