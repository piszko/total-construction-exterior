const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-gray-900 focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-total-red font-poppins font-medium"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
