const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`py-2 px-4 text-sm leading-relaxed tracking-wider uppercase text-white font-body font-medium bg-purple-600 hover:bg-purple-500 shadow-md hover:shadow-lg active:bg-purple-700 active:shadow-none transform transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
