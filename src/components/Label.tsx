interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  text: string;
  htmlFor: string;
}

export const Label: React.FC<LabelProps> = ({ text, htmlFor, ...props }) => {
  return (
    <label htmlFor={htmlFor} className="text-sm text-gray-800" {...props}>
      {text}
    </label>
  );
};
