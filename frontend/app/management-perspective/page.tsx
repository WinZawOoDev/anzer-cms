import { managementPerspectiveDataUrl } from "@/lib/constants";
// import FinancialDashboards from "../components/management-perspective/financial-dashboards";
import Perspective from "../components/management-perspective/perspective";
import ReportGenerator from "../components/management-perspective/report-generator";
import dynamic from "next/dynamic";
const FinancialDashboards = dynamic(
  () => import("../components/management-perspective/financial-dashboards"),
  {
    ssr: false,
  },
);
const Page = async () => {
  const res = await fetch(managementPerspectiveDataUrl, {
    cache: "no-cache",
  });
  const data = (await res.json()).data as ManagementPerspectiveSectionsType;
  return (
    <div className="container space-y-8 md:space-y-16">
      <Perspective data={{ first_section: data.first_section }} />
      <FinancialDashboards data={{ second_section: data.second_section }} />
      <ReportGenerator data={{ third_section: data.third_section }} />
    </div>
  );
};
export default Page;
