import FinancialDashboards from "../components/management-perspective/financial-dashboards";
import Perspective from "../components/management-perspective/perspective";
import ReportGenerator from "../components/management-perspective/report-generator";

const Page = () => {
  return (
    <div className="container space-y-8 md:space-y-16">
      <Perspective />
      <FinancialDashboards />
      <ReportGenerator />
    </div>
  );
};
export default Page;
