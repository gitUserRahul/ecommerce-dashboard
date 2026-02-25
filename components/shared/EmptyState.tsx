import React from "react";
import Link from "next/link";

interface EmptyStateProps {
  message?: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
}

const EmptyState = ({
  message = "No items found",
  description,
  actionHref,
  actionLabel,
}: EmptyStateProps) => {
  return (
    <div className="text-center py-10 h-screen flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold">{message}</h2>
      <p className="text-gray-500 mt-2">{description}</p>
      <Link
        href={actionHref || "/"}
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
      >
        {actionLabel || "Go Home"}
      </Link>
    </div>
  );
};

export default EmptyState;
