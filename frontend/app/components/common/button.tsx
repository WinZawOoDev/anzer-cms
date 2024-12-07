import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PropsWithChildren, ReactElement, ReactNode } from "react";

const ButtonRed: React.FC<
  PropsWithChildren<{
    className?: string;
    Icon?: ReactElement;
    onClick?: () => void;
  }>
> = ({ children, className, Icon, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "flex gap-2 bg-main text-white transition-all hover:bg-main hover:opacity-85",
        className,
      )}
    >
      {children}
      {Icon}
    </Button>
  );
};

export default ButtonRed;
