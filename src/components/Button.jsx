import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  type = 'button', 
  onClick, 
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '' 
}) => {
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-maroon text-white hover:bg-maroon-dark shadow hover:shadow-md',
    secondary: 'bg-olive text-white hover:bg-olive-dark shadow hover:shadow-md',
    outline: 'border-2 border-maroon text-maroon hover:bg-maroon hover:text-white',
    'outline-olive': 'border-2 border-olive text-olive hover:bg-olive hover:text-white',
    ghost: 'text-gray-700 hover:bg-gray-100 hover:text-olive'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${fullWidth ? 'w-full' : ''}
        rounded-lg font-medium transition-all duration-200
        active:scale-95 focus:outline-none focus:ring-2 focus:ring-olive focus:ring-opacity-50
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

export default Button;