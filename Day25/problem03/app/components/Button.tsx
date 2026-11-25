"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  const className = variant === 'primary' 
    ? 'bg-blue-500 text-white px-4 py-2 rounded' 
    : 'bg-gray-200 text-gray-800 px-4 py-2 rounded';
  
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
