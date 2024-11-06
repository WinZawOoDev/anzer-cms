"use client";

import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart, Sector } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SectionTitle from "../common/sec-ttl";

const chartData = [
  { browser: "chrome", visitors: 300, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 300, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 300, fill: "var(--color-firefox)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
};

const renderActiveShape = (props) => {
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

export default function Component() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });
  const [selectedSegment, setSelectedSegment] = useState(null);

  const handlePieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const handlePieLeave = () => {
    setActiveIndex(-1);
  };

  const handlePieClick = (data, index, event) => {
    setSelectedSegment(data);
    setPopoverPosition({ x: event.clientX, y: event.clientY });
    setPopoverOpen(true);
  };

  return (
    <Card className="flex flex-col relative shadow-none border-none">
      <CardHeader className="items-center pb-0">
        <SectionTitle label="Products" />
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[400px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
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
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value) => chartConfig[value]?.label}
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
            className="w-64"
            style={{
              position: "fixed",
              left: `${popoverPosition.x + 10}px`, // Offset to the right of the cursor
              top: `${popoverPosition.y + 10}px`, // Offset slightly below the cursor
            }}
          >
            <div>
              <h3 className="font-medium mb-2">
                {chartConfig[selectedSegment.browser].label}
              </h3>
              <p>Visitors: {selectedSegment.visitors}</p>
              <p>
                Percentage:{" "}
                {(
                  (selectedSegment.visitors /
                    chartData.reduce((sum, d) => sum + d.visitors, 0)) *
                  100
                ).toFixed(2)}
                %
              </p>
            </div>
          </PopoverContent>
        </Popover>
      )}
    </Card>
  );
}
