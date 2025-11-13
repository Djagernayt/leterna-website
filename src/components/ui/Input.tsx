import React from 'react';

interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  name?: string;
  id?: string;
  rows?: number;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  name,
  id,
  rows = 4,
  className = '',
}) => {
  const baseStyles = 'w-full border rounded-[12px] px-5 py-3 font-body transition-all duration-300';
  const normalStyles = 'border-primary-sand focus:border-primary-taupe focus:ring-2 focus:ring-primary-taupe/20 focus:outline-none';
  const errorStyles = error ? 'border-red-500 focus:ring-red-500/20' : normalStyles;
  const placeholderStyles = 'placeholder:text-primary-taupe/60';
  
  const inputClasses = `${baseStyles} ${errorStyles} ${placeholderStyles} ${className}`;
  
  if (type === 'textarea') {
    return (
      <div className="w-full">
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          className={inputClasses}
        />
        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
      </div>
    );
  }
  
  return (
    <div className="w-full">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={inputClasses}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};
