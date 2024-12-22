import { productDataUrl } from "@/lib/constants";
import ProductPieChart from "../components/diagrams/pie-chart";
import EssentialModules from "../components/products/essential-modules";
import HighInter from "../components/products/high-inter";
import PageContainer from "@/components/common/page-container";

const ProductPage = async () => {
  const res = await fetch(productDataUrl, {
    cache: "no-cache",
  });
  const data = (await res.json()).data as ProductSectionsType;
  return (
    <PageContainer>
      <ProductPieChart
        data={{
          first_section: data.first_section,
        }}
      />
      <EssentialModules />
      <HighInter
        data={{
          third_section: data.third_section,
        }}
      />
    </PageContainer>
  );
};

export default ProductPage;
