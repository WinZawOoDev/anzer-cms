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
    <div
      className={`relative mx-auto aspect-square max-w-[200px] px-1 py-1 md:aspect-video md:max-w-[400px] ${className}`}
    >
      {leftBubble}
      {SvgComponent}
      {rightBubble}
    </div>
  );
};

export default SvgWithBubbles;
