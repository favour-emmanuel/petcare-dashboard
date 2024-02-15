import React from "react";
interface Props {
  message: string | null;
}

const ErrorMessage = ({ message }: Props) => {
  return (
    <div>
      <p className="text-sx text-red-500 my-1">{message}</p>
    </div>
  );
};

export default ErrorMessage;
