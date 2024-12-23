import HorizontalEdge from "./horizontal-edge";
import RectNode from "./rect-node";
import VerticalEdge from "./vertical-edge";

const DiagramThree = () => {
  const upNodes = ["Node 1", "Node 2", "Node 3"];
  const leftNode = "Node Left";
  const rightNode = "Node Right";
  const dowmNodea = ["Node 4", "Node 5", "Node 6"];
  const arrowHeight = 80;
  const arrowWidth = 80;
  const nodeWidth = 87;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" w-[min(500px,100%)] p-5 aspect-video  flex flex-col items-center">
        <div className="nodes flex items-center justify-between w-[80%]">
          {upNodes.map((node, idx) => {
            return <RectNode label={node} key={idx} />;
          })}
        </div>
        <div
          className="arrows flex flex-row  w-[80%] justify-between"
          style={{
            paddingInline: `${nodeWidth / 2}px`,
            height: `${arrowHeight}px`,
          }}
        >
          {upNodes.map((node, idx) => {
            return <VerticalEdge hasArrow arrDir="top" />;
          })}
        </div>
        <div
          className="w-[80%]"
          style={{
            paddingInline: `${nodeWidth / 2}px`,
          }}
        >
          <div className="line bg-black h-[2px] w-full"></div>
        </div>
        <div
          className="arr"
          style={{
            height: `${arrowHeight}px`,
          }}
        >
          <VerticalEdge hasArrow={false} />
        </div>
        <div className="center-div flex flex-row w-full items-center justify-between">
          <div className="node">
            <RectNode label={leftNode} />
          </div>
          <div className="arr flex-1">
            <HorizontalEdge />
          </div>
          <div className="main-node">
            <RectNode label="MainNode" />
          </div>
          <div
            className="arr flex-1"
            // style={{
            //   width: `${arrowWidth}px`,
            // }}
          >
            <HorizontalEdge />
          </div>
          <div className="node">
            <RectNode label={rightNode} />
          </div>
        </div>
        <div
          className="arr"
          style={{
            height: `${arrowHeight}px`,
          }}
        >
          <VerticalEdge />
        </div>
        <div
          className="w-[80%]"
          style={{
            paddingInline: `${nodeWidth / 2}px`,
          }}
        >
          <div className="line bg-black h-[2px] w-full"></div>
        </div>
        <div
          className="arrows flex flex-row  w-[80%] justify-between"
          style={{
            paddingInline: `${nodeWidth / 2}px`,
            height: `${arrowHeight}px`,
          }}
        >
          {dowmNodea.map((node, idx) => {
            return <VerticalEdge hasArrow arrDir="bottom" key={idx} />;
          })}
        </div>
        <div className="nodes flex items-center justify-between w-[80%]">
          {dowmNodea.map((node, idx) => {
            return <RectNode label={node} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DiagramThree;
