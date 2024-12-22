"use client";

import { useEffect, useState } from "react";
import { LabelList, Pie, PieChart, Sector } from "recharts";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SectionTitle from "../common/sec-ttl";
import { useMediaQuery } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const chartData = [
  {
    category: "clinicalManagement",
    visitors: 300,
    fill: "#949430",
  },
  {
    category: "managementPerspective",
    visitors: 300,
    fill: "#209b74",
  },
  {
    category: "patientEngagement",
    visitors: 300,
    fill: "#4c2db3",
  },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  clinicalManagement: {
    label: "Clinical Management",
    color: "hsl(var(--chart-1))",
  },
  managementPerspective: {
    label: "Management Perspective",
    color: "hsl(var(--chart-2))",
  },
  patientEngagement: {
    label: "Patient Engagement",
    color: "hsl(var(--chart-3))",
  },
};

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 5}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const Component: React.FC<{
  data: Pick<ProductSectionsType, "first_section">;
}> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });
  const [selectedSegment, setSelectedSegment] = useState<any>(null);
  const [fontSize, setFontSize] = useState(12);

  const isSmallScreen = useMediaQuery("(max-width: 400px)");
  const secData = data.first_section;

  const firstBtns = secData.first.list.map((item) => item.text);
  const secondBtns = secData.second.list.map((item) => item.text);
  const thirdBtns = secData.third.list.map((item) => item.text);
  const buttons = {
    clinicalManagement: firstBtns,
    managementPerspective: thirdBtns,
    patientEngagement: secondBtns,
  };

  useEffect(() => {
    if (isSmallScreen) {
      setFontSize(6);
    }
  }, [isSmallScreen]);
  console.log("fontsise", fontSize);
  const handlePieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const handlePieLeave = () => {
    setActiveIndex(-1);
  };

  const handlePieClick = (data: any, _: number, event: React.MouseEvent) => {
    setSelectedSegment(data);
    setPopoverPosition({ x: event.clientX, y: event.clientY });
    setPopoverOpen(true);
  };
  console.log("selected segment", selectedSegment);

  return (
    <Card className="relative flex flex-col border-none shadow-none">
      <CardHeader className="items-center pb-0">
        <SectionTitle label="Products" />
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[400px] [&_.recharts-text]:fill-background"
        >
          <PieChart className="">
            <Pie
              data={chartData}
              dataKey="visitors"
              onClick={handlePieClick}
              onMouseEnter={handlePieEnter}
              onMouseLeave={handlePieLeave}
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
            >
              <LabelList
                dataKey="category"
                className="fill-background"
                stroke="none"
                key={fontSize}
                fontSize={fontSize}
                // @ts-ignore
                formatter={(value: string) => chartConfig[value]?.label}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

      {selectedSegment && (
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <PopoverTrigger asChild>
            <div className="sr-only">Open popover</div>
          </PopoverTrigger>
          <PopoverContent
            className="hidden w-64 border-none bg-transparent md:block"
            style={{
              position: "fixed",
              left: `${popoverPosition.x}px`,
              top: `${popoverPosition.y - 150}px`,
            }}
          >
            <div className="flex flex-col justify-center space-y-5 px-10">
              {/* @ts-ignore */}
              {buttons[selectedSegment?.category].map((text: string) => {
                const href =
                  selectedSegment?.category === "clinicalManagement"
                    ? "clinical-management"
                    : selectedSegment?.category === "managementPerspective"
                      ? "management-perspective"
                      : "patient-engagement";

                return (
                  <Link href={`/${href}`} className="block">
                    <Button
                      className="block w-[200px] bg-main text-[10px] text-white !shadow-none hover:bg-main"
                      key={text}
                    >
                      {text}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </PopoverContent>
        </Popover>
      )}

      <div className="x-5 flex flex-col items-center gap-5 py-5 md:hidden">
        {/* @ts-ignore */}
        {buttons[selectedSegment?.category]?.map((text: string) => {
          const href =
            selectedSegment?.category === "clinicalManagement"
              ? "clinical-management"
              : selectedSegment?.category === "managementPerspective"
                ? "management-perspective"
                : "patient-engagement";

          return (
            <Link href={`/${href}`} className="block w-[min(300px,100%)]">
              <Button
                className="block w-full bg-main text-[10px] text-white !shadow-none hover:bg-main"
                key={text}
              >
                {text}
              </Button>
            </Link>
          );
        })}
      </div>
    </Card>
  );
};

export default Component;
