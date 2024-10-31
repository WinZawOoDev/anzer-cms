import BannerSlider from "../components/home/banner-slider";
import EssentialModules from "../components/products/essential-modules";
import HighInter from "../components/products/high-inter";

const ProductPage = () => {
  return (
    <div className="space-y-8 md:space-y-16 ">
      <EssentialModules />
      <HighInter />
      <BannerSlider />
    </div>
  );
};

export default ProductPage;
