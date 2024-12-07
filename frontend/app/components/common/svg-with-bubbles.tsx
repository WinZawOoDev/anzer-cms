import { svg } from "leaflet";
import { ReactNode } from "react";

type Props = {
  SvgComponent: ReactNode;
  leftBubble?: ReactNode;
  rightBubble?: ReactNode;
  className?: string;
};

const SvgWithBubbles: React.FC<Props> = ({
  SvgComponent,
  leftBubble,
  rightBubble,
  className,
}) => {
  return (
    <div className={`relative mx-auto max-w-[350px] ${className}`}>
      {leftBubble}
      {SvgComponent}
      {rightBubble}
    </div>
  );
};

export default SvgWithBubbles;
