const Container = ({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) => {
  return (
    <div
      className={`mx-auto flex w-3/4 max-w-6xl flex-col items-center ${styles} `}
    >
      {children}
    </div>
  );
};
export default Container;
