import Image from "next/image";

const Loading = () => {
  return (
    <div>
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
