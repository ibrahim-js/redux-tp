export function Button({ className, children, ...props }) {
  return (
    <button
      className={`bg-black/90 text-white px-6 py-2 rounded-md text-sm font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
