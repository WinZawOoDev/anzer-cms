import { Card } from "@/components/ui/card";
import { Users, Shield, Lightbulb, Heart } from "lucide-react";

const WhatWeStandFor = () => {
  return (
    <div className="w-full px-4 py-12 md:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-12">
          What we Stand For?
        </h2>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-border -translate-x-1/2" />

          <div className="relative grid gap-12 md:grid-cols-2">
            {/* Collaborative */}
            <Card className="p-6 md:translate-x-4 transition-transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-orange-100 p-3 dark:bg-orange-900">
                  <Users className="h-6 w-6 text-orange-600 dark:text-orange-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-orange-600 dark:text-orange-200">
                    Collaborative
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Foster teamwork and partnership to enhance service delivery
                    and outcomes.
                  </p>
                </div>
              </div>
            </Card>

            {/* Integrity */}
            <Card className="p-6 md:-translate-x-4 transition-transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-blue-100 p-3 dark:bg-blue-900">
                  <Shield className="h-6 w-6 text-blue-600 dark:text-blue-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-blue-600 dark:text-blue-200">
                    Integrity
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Upholds high ethical standards and transparency in all
                    operations.
                  </p>
                </div>
              </div>
            </Card>

            {/* Innovative */}
            <Card className="p-6 md:translate-x-4 transition-transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-green-100 p-3 dark:bg-green-900">
                  <Lightbulb className="h-6 w-6 text-green-600 dark:text-green-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-green-600 dark:text-green-200">
                    Innovative
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Committed to developing cutting-edge solutions that advance
                    healthcare technology.
                  </p>
                </div>
              </div>
            </Card>

            {/* Customer Centric */}
            <Card className="p-6 md:-translate-x-4 transition-transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-red-100 p-3 dark:bg-red-900">
                  <Heart className="h-6 w-6 text-red-600 dark:text-red-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-red-600 dark:text-red-200">
                    Customer Centric
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Prioritizes the needs and satisfaction of healthcare
                    providers and patients.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-full bg-background border-4 border-border p-4 shadow-lg">
              <div className="text-center whitespace-nowrap font-semibold">
                ANZER EHR
                <br />
                SYSTEM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeStandFor;
