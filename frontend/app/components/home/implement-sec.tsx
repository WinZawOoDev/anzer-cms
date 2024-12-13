import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import imgtwo from "@/assets/imgs/default-img-02.png";

const implementationSteps = [
  {
    image: imgtwo,
    title: "Assessment and Planning",
    description:
      "We work closely with healthcare facilities to understand their challenges and design tailored solutions.",
  },
  {
    image: imgtwo,
    title: "Technical Implementation",
    description:
      "Our team implements secure and efficient solutions using cutting-edge technology.",
  },
  {
    image: imgtwo,
    title: "Team Collaboration",
    description:
      "We foster strong partnerships between healthcare professionals and technical experts.",
  },
  {
    image: imgtwo,
    title: "Quality Assurance",
    description:
      "Rigorous testing ensures all systems meet healthcare compliance standards.",
  },
  {
    image: imgtwo,
    title: "Training & Support",
    description:
      "Comprehensive training and ongoing support for healthcare staff.",
  },
  {
    image: imgtwo,
    title: "Continuous Improvement",
    description:
      "Regular assessments and updates to optimize healthcare delivery.",
  },
];

export default function ImplementationSection() {
  return (
    <section className="w-full bg-red-600 px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-4xl font-bold text-white md:mb-12 md:text-5xl">
          HOW DO WE IMPLEMENT?
        </h2>

        {/* Desktop Version - Show all items in a row */}
        <div className="hidden md:block">
          <div className="grid grid-cols-6 gap-4">
            {implementationSteps.map((step, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-0">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={200}
                    height={200}
                    className="h-auto w-full object-cover"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile Version - Carousel with single item */}
        <div className="md:hidden">
          <Carousel className="mx-auto w-full max-w-md">
            <CarouselContent>
              {implementationSteps.map((step, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-white">
                    <CardContent className="p-0">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={400}
                        height={400}
                        className="h-auto w-full object-cover"
                      />
                      <div className="p-6 text-center">
                        <h3 className="mb-2 text-xl font-semibold">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
            <div className="block sm:hidden">
              <button className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
