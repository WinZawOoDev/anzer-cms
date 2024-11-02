import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

const ButtonRed: React.FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <Button
      className={cn(
        "bg-main text-white hover:bg-main hover:opacity-85 transition-all",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default ButtonRed;
