export function Heading({ children }) {
  return (
    <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] text-center pb-10 pt-2">
      {children}
    </h1>
  );
}
