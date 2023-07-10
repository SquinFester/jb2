import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Image
        src="/images/loadingSpinner.svg"
        alt="loading..."
        width={50}
        height={50}
        className="text-white"
      />
    </div>
  );
};
export default Loading;
