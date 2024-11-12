import DiagramOne from "../components/diagrams/diagram-one";
import DiagramThree from "../components/diagrams/diagram-three";
import DiagramTwo from "../components/diagrams/diagram-two";
import ProductPieChart from "../components/diagrams/pie-chart";
import BannerSlider from "../components/home/banner-slider";
import EssentialModules from "../components/products/essential-modules";
import HighInter from "../components/products/high-inter";

const ProductPage = () => {
  return (
    <div className="space-y-8 md:space-y-16 ">
      <ProductPieChart />
      <EssentialModules />
      <HighInter />
      <BannerSlider />
      <DiagramOne />
      <DiagramTwo />
      <DiagramThree />
    </div>
  );
};

export default ProductPage;
