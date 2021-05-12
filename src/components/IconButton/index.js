const IconButton = ({ children, className = "", ...props }) => {
  return (
    <>
      <button
        className={`no_highlight p-3 rounded-full bg-transparent text-gray-700 dark:text-gray-200 hover:bg-gray-500 hover:bg-opacity-10 focus:outline-none focus:bg-gray-500 focus:bg-opacity-10 focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-opacity-30 dark:focus:ring-opacity-70 transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
      <style jsx>{`
        .no_highlight {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </>
  );
};

export default IconButton;
