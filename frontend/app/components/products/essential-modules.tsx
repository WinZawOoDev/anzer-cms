import {
  Pill,
  ClipboardList,
  BadgeDollarSign,
  Heart,
  Baby,
  Activity,
  Code,
  Activity as PhysioIcon,
  Utensils,
  Ambulance,
  Droplet,
  Home,
  Package,
  Syringe,
  Network,
} from "lucide-react";
import SectionTitle from "../common/sec-ttl";

const modules = [
  { icon: Pill, label: "Pharmacy" },
  { icon: ClipboardList, label: "Inventory" },
  { icon: BadgeDollarSign, label: "Procurement" },
  { icon: Heart, label: "Nursing" },
  { icon: Baby, label: "Newborn" },
  { icon: Activity, label: "Health Care Validation" },
  { icon: Code, label: "ICD 10/11, SNOMED & LOINC codes" },
  { icon: PhysioIcon, label: "Physiotherapy" },
  { icon: Utensils, label: "Dietary" },
  { icon: Ambulance, label: "Ambulance" },
  { icon: Droplet, label: "Blood Bank" },
  { icon: Home, label: "House Keeping" },
  { icon: Package, label: "Porter" },
  { icon: Syringe, label: "Infection Prevention and Control" },
  { icon: Network, label: "Social Work" },
];

const EssentialModules = () => {
  return (
    <div className="container">
      <div className="space-y-5 md:space-y-10">
        <SectionTitle label="Other Essential Modules" />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group flex cursor-pointer flex-col items-center rounded-lg bg-white p-6 transition-all duration-300"
            >
              <div className="mb-4 rounded-full p-4 text-red-500 transition-colors duration-300 group-hover:bg-red-100">
                <module.icon className="h-12 w-12" />
              </div>
              <span className="text-center font-medium text-gray-600">
                {module.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EssentialModules;
