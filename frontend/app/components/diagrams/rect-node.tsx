import { cn } from "@/lib/utils";

type Props = {
  label: string;
  className?: string;
};

const RectNode: React.FC<Props> = ({ label, className }) => {
  return (
    <div
      className={cn(
        `px-5 py-3 border-none rounded-sm text-sm text-center bg-red-200`,
        className
      )}
    >
      <p>{label}</p>
    </div>
  );
};

export default RectNode;
