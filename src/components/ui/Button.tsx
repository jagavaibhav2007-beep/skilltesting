import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ variant = 'solid', children, className = '', ...props }: ButtonProps) => {
  const baseStyles = "px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300 active:scale-95";
  const variants = {
    solid: "bg-black text-white border border-black hover:bg-transparent hover:text-black",
    outline: "bg-transparent text-black border border-black hover:bg-black hover:text-white",
    ghost: "bg-transparent text-black hover:opacity-70"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
