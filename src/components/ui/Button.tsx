import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  href,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  // Базовые стили
  const baseStyles = 'font-body font-semibold transition-all duration-300 inline-flex items-center justify-center';
  
  // Варианты
  const variants = {
    primary: 'bg-primary-taupe text-white hover:opacity-90 disabled:opacity-50',
    secondary: 'bg-primary-sand text-primary-espresso hover:bg-primary-rose disabled:opacity-50',
    outline: 'border-2 border-primary-taupe text-primary-taupe hover:bg-primary-taupe hover:text-white disabled:opacity-50',
  };
  
  // Размеры
  const sizes = {
    small: 'px-6 py-3 text-sm rounded-[12px]',
    medium: 'px-8 py-4 text-base rounded-[24px]',
    large: 'px-10 py-5 text-lg rounded-[24px]',
  };
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  // Если есть href - рендерим как Link
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  // Иначе - обычная кнопка
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};
