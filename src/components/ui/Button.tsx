import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'whatsapp' | 'outlineWhite';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {

  const baseStyles = 'inline-flex items-center justify-center font-heading uppercase transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black-deep rounded-md cursor-pointer';

  const variants = {
    primary: 'bg-orange-brand text-white-soft hover:bg-orange-600 focus:ring-orange-brand',
    outline: 'border-2 border-orange-brand text-orange-brand hover:bg-orange-brand hover:text-white-soft focus:ring-orange-brand',
    ghost: 'text-white-soft hover:text-orange-brand hover:bg-gray-dark focus:ring-white-soft',
    whatsapp: 'bg-[#25D366] text-white-soft hover:bg-[#128C7E] focus:ring-[#25D366]',
    outlineWhite: 'border-2 border-white-soft text-white-soft hover:bg-white-soft hover:text-black-deep focus:ring-white-soft'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg tracking-wider'
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
