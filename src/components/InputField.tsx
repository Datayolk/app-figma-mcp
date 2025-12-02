import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
}

export default function InputField({ 
  label, 
  placeholder, 
  className,
  ...props 
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-[5px] items-start w-full" data-name="Input Field" data-node-id="1975:165">
      {label && (
        <label 
          className="font-space-grotesk font-normal leading-[28px] text-dark text-base whitespace-nowrap"
          data-node-id="341:586"
        >
          {label}
        </label>
      )}
      <div 
        className="bg-white border border-dark border-solid rounded-[14px] w-full"
        data-name="Input" 
        data-node-id="341:602"
      >
        <input
          type="text"
          placeholder={placeholder || label}
          className={`box-border flex gap-[10px] items-start overflow-clip px-[30px] py-[18px] rounded-[inherit] w-full font-space-grotesk font-normal text-lg text-placeholder bg-transparent border-none outline-none ${className || ''}`}
          data-node-id="341:582"
          {...props}
        />
      </div>
    </div>
  );
}

