"use client";

import ErrorMessage from "@/components/shared/ErrorMessage";

const error = (reset: () => void) => {
  return (
    <ErrorMessage message="Failed to load product details." onRetry={reset} />
  );
};

export default error;
