export function Input({ className, ...props }) {
  return (
    <input
      type="text"
      className={`py-2 px-4 border rounded-md w-full max-w-lg outline-none text-black/80 ${className}`}
      placeholder="Prénom..."
      {...props}
    />
  );
}
