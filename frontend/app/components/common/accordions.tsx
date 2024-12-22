"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordtionContainer: React.FC<{ data: MedicalFeature[] }> = ({
  data,
}) => {
  const defaultOpenItem = data[0]?.id || "";

  return (
    <Accordion
      type="single"
      collapsible
      className="bg-[#F8F9FF]"
      defaultValue={defaultOpenItem}
    >
      {data.map((feature: MedicalFeature) => (
        <AccordionItem
          key={feature.id}
          value={feature.id}
          className="mt-1 border-none first:mt-0"
        >
          <AccordionTrigger className="px-6 py-4 text-black hover:bg-main hover:text-white hover:no-underline data-[state=open]:bg-main data-[state=open]:text-white">
            <span className="text-base font-medium uppercase md:text-xl">
              {feature.title}
            </span>
          </AccordionTrigger>
          <AccordionContent className="bg-white px-6 py-4 text-sm text-gray-700 md:text-base">
            {feature.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default AccordtionContainer;
