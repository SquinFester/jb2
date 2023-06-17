import { useEffect } from "react";

import { Status } from "../routes/ContactPage";

import { FaRegTimesCircle, FaRegCheckCircle } from "react-icons/fa";

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

  const content =
    status === "Sukces" ? (
      <p className="flex items-center justify-center gap-2">
        Sukces <FaRegCheckCircle />
      </p>
    ) : (
      <p className="flex items-center justify-center gap-2">
        Błąd <FaRegTimesCircle />
      </p>
    );

  const classSecton = status === "Sukces" ? "bg-green-500" : "bg-red-500";

  return (
    <section
      className={`fixed z-10 w-full py-2 text-xl font-semibold ${classSecton}`}
    >
      {content}
    </section>
  );
};

export default EmailStatus;
