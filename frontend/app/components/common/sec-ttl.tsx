import { cn } from "@/lib/utils";
type Props = {
  label: string;
  className?: string;
};
const SectionTitle: React.FC<Props> = ({ label, className }) => {
  return (
    <h2 className={cn("text-2xl md:text-3xl text-center font-bold", className)}>
      {label}
    </h2>
  );
};

export default SectionTitle;
