export const PageTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300">
      {children}
    </div>
  );
};
