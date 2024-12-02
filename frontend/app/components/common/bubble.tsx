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
        `relative max-w-[200px] rounded-xl bg-red-200 px-4 py-2 text-[10px] leading-tight before:absolute before:-bottom-3 before:h-8 before:w-5 before:bg-inherit before:content-[''] md:max-w-[300px] md:px-5 md:py-5 md:text-sm md:before:-bottom-5`,
        dir === "right" &&
          "before:right-0 before:[clip-path:polygon(100%_0,0_0,100%_100%)]",
        dir === "left" &&
          "before:left-0 before:[clip-path:polygon(100%_0,0_0,0_100%)]",
        className,
      )}
    >
      <p>{message}</p>
    </div>
  );
};
export default MessageBubble;
