import { Stethoscope, Users, Lightbulb, Handshake } from "lucide-react";
import SectionTitle from "../common/sec-ttl";
import ButtonRed from "../common/button";

const drivingFactors = [
  {
    icon: Stethoscope,
    title: "Enhance Patient Care",
    description:
      "We provide innovative healthcare IT solutions that improve patient safety and quality of care by ensuring real-time access to critical information.",
  },
  {
    icon: Users,
    title: "Empower Healthcare Providers",
    description:
      "We equip healthcare professionals with essential tools to make informed decisions, streamline operations, and enhance patient outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Drive Innovation",
    description:
      "We are committed to continuously advancing our technology and services, integrating cutting-edge solutions like AI and telemedicine to meet the evolving needs of the healthcare sector.",
  },
  {
    icon: Handshake,
    title: "Foster Collaboration",
    description:
      "We promote seamless communication and interoperability among healthcare teams, ensuring coordinated care and comprehensive patient management.",
  },
];
const WhatDriveUs = () => {
  return (
    <section className="container">
      <div className="space-y-5 md:space-y-10">
        <SectionTitle label="What Drive Us " />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {drivingFactors.map((factor, index) => (
            <div key={index} className="bg-white border-none">
              <div className="text-center pb-2">
                <div className="w-24 h-24 bg-red-50 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                  <factor.icon className="w-12 h-12 text-red-500" />
                </div>
                <h5 className="text-xl font-semibold text-gray-800 mb-2">
                  {factor.title}
                </h5>
              </div>
              <div>
                <p className="text-sm text-gray-600 text-center">
                  {factor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonRed>Find out more</ButtonRed>
        </div>
      </div>
    </section>
  );
};

export default WhatDriveUs;
