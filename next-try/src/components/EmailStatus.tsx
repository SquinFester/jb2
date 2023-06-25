import { useEffect } from "react";

import { FaRegTimesCircle, FaRegCheckCircle } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const EmailStatus = ({
  status,
  onSetStatus,
}: {
  status: Status;
  onSetStatus: React.Dispatch<React.SetStateAction<Status>>;
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onSetStatus(() => null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [status]);

  let bgColor =
    status === "Sukces"
      ? "bg-green-500"
      : status === "Wysłanie"
      ? "bg-yellow-500"
      : "bg-red-500";

  const content = () => {
    if (status === "Sukces") {
      return (
        <p className="flex items-center justify-center gap-2">
          Sukces <FaRegCheckCircle />
        </p>
      );
    } else if (status === "Błąd") {
      return (
        <p className="flex items-center justify-center gap-2">
          Błąd <FaRegTimesCircle />
        </p>
      );
    } else if (status == "Wysłanie") {
      return (
        <p className="flex items-center justify-center gap-2">
          Wysłanie <FiSend />
        </p>
      );
    }
  };

  return (
    <section
      className={`fixed top-[72px] z-30 w-full text-xl font-semibold ${bgColor}`}
    >
      {content()}
    </section>
  );
};

export default EmailStatus;
