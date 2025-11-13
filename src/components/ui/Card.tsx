import React from 'react';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  hover = false,
  className = '',
}) => {
  const baseStyles = 'bg-white rounded-[16px] p-8 md:p-10 lg:p-12';
  const shadowStyles = 'shadow-[0_4px_20px_rgba(0,0,0,0.08)]';
  const hoverStyles = hover
    ? 'hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:transform hover:-translate-y-1 transition-all duration-300 cursor-pointer'
    : '';
  
  return (
    <div className={`${baseStyles} ${shadowStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
