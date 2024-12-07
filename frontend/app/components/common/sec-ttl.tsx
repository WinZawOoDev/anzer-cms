import { cn } from "@/lib/utils";
import { oswald } from "@/lib/font";
type Props = {
  label: string;
  className?: string;
};
const SectionTitle: React.FC<Props> = ({ label, className }) => {
  return (
    <div className="flex items-center justify-center">
      <h2
        className={cn(
          "text-2xl md:text-4xl text-center font-bol w-max text-grey uppercase relative before:content-[''] before:absolute  before:h-[2px]  before:-bottom-2 before:left-0 before:bg-main before:w-0 hover:before:w-full before:duration-500",
          oswald.className,
          className
        )}
      >
        {label}
      </h2>
    </div>
  );
};

export default SectionTitle;
