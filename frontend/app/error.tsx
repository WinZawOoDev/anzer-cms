"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const [errorType, setErrorType] = useState<"404" | "500">("500");

  useEffect(() => {
    // Check if the error is a 404 (Not Found) error
    if (error && typeof error === "object" && "message" in error) {
      const errorMessage = error.message as string;
      if (
        errorMessage.includes("ENOENT") ||
        errorMessage.includes("not found")
      ) {
        setErrorType("404");
      }
    }
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          {errorType === "404"
            ? "Page Not Found"
            : "Oops! Something went wrong"}
        </h1>
        <p className="mb-8 text-gray-600">
          {errorType === "404"
            ? "We couldn't find the page you're looking for."
            : "We're sorry, but there was an error processing your request."}
        </p>
        <div className="space-y-4">
          <Button onClick={() => router.push("/")} className="w-full">
            Return to Homepage
          </Button>
          {errorType === "500" && (
            <Button
              onClick={() => reset()}
              variant="outline"
              className="w-full"
            >
              Try Again
            </Button>
          )}
        </div>
        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 rounded bg-gray-100 p-4 text-left">
            <h2 className="mb-2 text-lg font-semibold">Error Details:</h2>
            <p className="text-sm text-gray-700">
              {error && typeof error === "object" && "message" in error
                ? error.message
                : "An unknown error occurred"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
