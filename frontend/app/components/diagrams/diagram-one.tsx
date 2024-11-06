"use client";
import HorizontalEdge from "./horizontal-edge";
import RectNode from "./rect-node";
import { useMediaQuery } from "usehooks-ts";
const DiagramOne = () => {
  const isSmallScreen = useMediaQuery("(min-width: 600px)");
  const Nodes = [
    "Consultant Dashboard",
    "Radiologist Dashboard",
    "Pathologist Dashboard",
    "Microbiologist Dashboard",
    "Clinical MO Dashboard",
  ];

  const height = isSmallScreen ? 46 : 66;
  const space = 30;
  const totalHeight = Nodes.length * height + (Nodes.length - 1) * space;

  return (
    <div className="grid place-items-center">
      <div className={`w-[min(800px,100%)] px-5 py-5`}>
        <div
          className={` w-full flex items-center justify-center gap-0 `}
          style={{
            height: `${totalHeight}px`,
          }}
        >
          <div className="flex-1">
            <RectNode label="Specialist Dashboards" />
          </div>
          <div className="[flex:0.5]  ">
            <HorizontalEdge className="h-[2px]" />
          </div>
          <div
            className={`w-[2px] h-full `}
            style={{
              paddingBlock: `${height / 2}px`,
            }}
          >
            <div className="line w-full h-full bg-black"></div>
          </div>
          <div
            className="[flex:0.5] h-full flex flex-col justify-between "
            style={{
              paddingBlock: `${height / 2}px`,
            }}
          >
            {Nodes.map((_, idx) => {
              return <HorizontalEdge arrDir="right" hasArrow key={idx} />;
            })}
          </div>
          <div className="flex-1 h-full flex flex-col   justify-between ">
            {Nodes.map((node, idx) => {
              return <RectNode label={node} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DiagramOne;
