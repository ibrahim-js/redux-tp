export function Heading({ className, children }) {
  return (
    <h1
      className={`text-3xl font-bold tracking-tighter md:text-4xl text-center ${className}`}
    >
      {children}
    </h1>
  );
}
