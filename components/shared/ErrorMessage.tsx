interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => {
  return (
    <div className="flex items-center justify-center h-screen flex-col ">
      <div className="text-red-500 flex items-center flex-col">
        <p>{message}</p>
        <span>Please try Again</span>
      </div>
      <button
        onClick={onRetry}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded text-center"
      >
        Retry
      </button>
    </div>
  );
};

export default ErrorMessage;
