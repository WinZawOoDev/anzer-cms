import { Card } from "@/components/ui/card";
import { Users, Shield, Lightbulb, Heart } from "lucide-react";
import SectionTitle from "../common/sec-ttl";

const cards = [
  {
    title: "Collaborative",
    description:
      "Foster teamwork and partnership to enhance service delivery and outcomes.",
  },
  {
    title: "Integrity",
    description:
      "Upholds high ethical standards and transparency in all operations.",
  },
  {
    title: "Innovative",
    description:
      "Committed to developing cutting-edge solutions that advance healthcare technology.",
  },
  {
    title: "Customer Centric",
    description:
      "Prioritizes the needs and satisfaction of healthcare providers and patients.",
  },
];

const WhatWeStandFor = () => {
  return (
    <div className="container">
      <div className="mx-auto max-w-[800px] space-y-5 md:space-y-10">
        <SectionTitle label="What we stand for ?" />

        <div className="relative">
          {/* Center line */}
          {/* <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border"˝ /˝> */}

          <div className="relative grid gap-8 md:grid-cols-2">
            {cards.map((card, idx) => {
              const styles = [
                {
                  container: "rounded-2xl md:rounded-none md:rounded-tl-3xl",
                  content: "",
                },
                {
                  container: "rounded-2xl md:rounded-none md:rounded-tr-3xl",
                  content: "",
                },
                {
                  container: "rounded-2xl md:rounded-none md:rounded-bl-3xl",
                  content: "flex flex-col-reverse ",
                },
                {
                  container: "rounded-2xl md:rounded-none md:rounded-br-3xl",
                  content: "flex flex-col-reverse ",
                },
              ];
              return (
                <div
                  key={card.title}
                  className={`group bg-gray-100 p-6 transition-transform hover:bg-grey hover:text-white md:translate-x-4 ${styles[idx].container}`}
                >
                  <div className={`${styles[idx]?.content}`}>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="mt-2 opacity-0 duration-300 group-hover:text-white group-hover:opacity-100">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
            {/* Collaborative */}
            {/* <Card className="p-6 transition-transform md:translate-x-4">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-orange-100 p-3 dark:bg-orange-900">
                  <Users className="h-6 w-6 text-orange-600 dark:text-orange-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-200">
                    Collaborative
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Foster teamwork and partnership to enhance service delivery
                    and outcomes.
                  </p>
                </div>
              </div>
            </Card> */}

            {/* Integrity */}
            {/* <Card className="p-6 transition-transform md:-translate-x-4">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-blue-100 p-3 dark:bg-blue-900">
                  <Shield className="h-6 w-6 text-blue-600 dark:text-blue-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-200">
                    Integrity
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Upholds high ethical standards and transparency in all
                    operations.
                  </p>
                </div>
              </div>
            </Card> */}

            {/* Innovative */}
            {/* <Card className="p-6 transition-transform md:translate-x-4">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-green-100 p-3 dark:bg-green-900">
                  <Lightbulb className="h-6 w-6 text-green-600 dark:text-green-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-600 dark:text-green-200">
                    Innovative
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Committed to developing cutting-edge solutions that advance
                    healthcare technology.
                  </p>
                </div>
              </div>
            </Card> */}

            {/* Customer Centric */}
            {/* <Card className="p-6 transition-transform md:-translate-x-4">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-red-100 p-3 dark:bg-red-900">
                  <Heart className="h-6 w-6 text-red-600 dark:text-red-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-600 dark:text-red-200">
                    Customer Centric
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Prioritizes the needs and satisfaction of healthcare
                    providers and patients.
                  </p>
                </div>
              </div>
            </Card> */}
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="p rounded-full border-2 border-white bg-main px-5 py-4 text-white">
              <div className="whitespace-nowrap text-center font-semibold">
                ANZER EHR SYSTEM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeStandFor;
