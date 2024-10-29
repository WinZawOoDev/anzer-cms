import { Button } from "@/components/ui/button";
import { PropsWithChildren } from "react";

const ButtonRed: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Button className="bg-main text-white hover:bg-main hover:opacity-85 transition-all">
      {children}
    </Button>
  );
};

export default ButtonRed;
