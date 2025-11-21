import React from 'react';

export default function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="bg-dark-charcoal disabled:bg-opacity-50 text-white font-space-grotesk text-xl leading-[28px] px-[35px] py-[20px] rounded-[14px] whitespace-nowrap w-full sm:w-auto"
      {...props}
    >
      {children || "Book a consultation"}
    </button>
  );
}

