import { InputHTMLAttributes } from "react";

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return <input className="border rounded-sm px-2 py-2" {...props} />;
};
