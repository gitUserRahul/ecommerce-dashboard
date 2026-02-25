import React from "react";
import { FaSpinner } from "react-icons/fa";

const LoadingSpinner = ({ message = "Loading" }: { message?: string }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <FaSpinner className="animate-spin text-2xl mr-2" />
      <span>{message}</span>
    </div>
  );
};

export default LoadingSpinner;
