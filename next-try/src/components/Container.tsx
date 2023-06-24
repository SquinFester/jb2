const Container = ({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) => {
  return <div className={`mx-auto w-3/4 max-w-6xl ${styles} `}>{children}</div>;
};
export default Container;
