"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const steps = [
  {
    title: "Assessment and Planning",
    description:
      "We work closely with healthcare facilities to understand their challenges and design tailored solutions.",
  },
  {
    title: "System Setup and Configuration",
    description:
      "We assess infrastructure, customize the system, and securely migrate data.",
  },
  {
    title: "Integration and Testing",
    description:
      "We ensure smooth integration and thoroughly test the system for reliability.",
  },
  {
    title: "Training and Support",
    description:
      "Comprehensive training and support help staff confidently use the new system.",
  },
  {
    title: "Post-Implementation Review and Maintenance",
    description:
      "We review performance and provide ongoing support for optimal functionality.",
  },
];

const WhatWeImplement = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className=" mx-auto px-4 py-6 sm:py-8 max-w-3xl">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
        How do we implement?
      </h1>
      <Card className="mb-6 sm:mb-8">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-base sm:text-lg">
            <span>
              Step {currentStep + 1}: {steps[currentStep].title}
            </span>
            <span className="text-xs sm:text-sm font-normal text-muted-foreground">
              {currentStep + 1} of {steps.length}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress
            value={((currentStep + 1) / steps.length) * 100}
            className="mb-4 "
          />
          <CardDescription className="text-sm sm:text-base">
            {steps[currentStep].description}
          </CardDescription>
        </CardContent>
      </Card>
      <div className="flex justify-between mb-6 sm:mb-8">
        <Button
          onClick={prevStep}
          disabled={currentStep === 0}
          variant="outline"
          className="text-xs sm:text-sm"
        >
          <ChevronLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
          Previous
        </Button>
        <Button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className="text-xs sm:text-sm bg-main hover:bg-main"
        >
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
          <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>
      <div className="space-y-2">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center mr-2 sm:mr-3 ${
                index <= currentStep
                  ? "bg-main border-main text-primary-foreground"
                  : "border-muted-foreground"
              }`}
            >
              {index < currentStep ? (
                <Check className="h-3 w-3 sm:h-5 sm:w-5" />
              ) : (
                <span className="text-xs sm:text-sm">{index + 1}</span>
              )}
            </div>
            <span
              className={`text-xs sm:text-sm ${
                index <= currentStep ? "font-medium" : "text-muted-foreground"
              }`}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>
      <Card className="mt-6 sm:mt-8">
        <CardContent className="p-3 sm:p-4">
          <p className="text-base sm:text-lg font-semibold text-primary">
            Feedback and Continuous Improvement
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            We gather feedback and continuously enhance our system to meet
            evolving needs.
          </p>
        </CardContent>
      </Card>
      <footer className="mt-6 sm:mt-8 text-center text-lg sm:text-xl font-semibold">
        We give the best of us to the customer
      </footer>
    </div>
  );
};

export default WhatWeImplement;
