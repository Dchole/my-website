const IconButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`p-3 rounded-full bg-transparent text-gray-700 hover:bg-gray-500 hover:bg-opacity-10 focus:outline-none focus:bg-gray-500 focus:bg-opacity-10 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-30 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
