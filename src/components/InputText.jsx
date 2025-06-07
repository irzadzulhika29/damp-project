import { useState } from 'react';

const InputText = ({ placeholder, className }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`border-2 rounded-md p-3 focus:outline-none ${className} ${
        isFocused ? 'border-blue' : 'border-sky'
      }`}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default InputText;
