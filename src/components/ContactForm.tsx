import React, { useState } from "react";

import { Status } from "../routes/ContactPage";

import emailjs from "@emailjs/browser";

const ContactForm = ({
  onSetStatus,
}: {
  onSetStatus: React.Dispatch<React.SetStateAction<Status>>;
}) => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const statusHandler = (status: Status) => {
    onSetStatus(() => status);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(() => true);

    const { from_name, from_email, message } = values;

    if (
      from_name.trim().length === 0 &&
      from_email.trim().length === 0 &&
      !from_email.includes("@") &&
      message.trim().length === 0
    ) {
      statusHandler("Błąd");
      return;
    }

    emailjs
      .sendForm(
        "service_stqbg3s",
        "template_289gshc",
        e.target as HTMLFormElement,
        "-Bz90bhoChewjmhy0"
      )
      .then(
        () => {
          statusHandler("Sukces");
          setValues(() => ({
            from_name: "",
            from_email: "",
            message: "",
          }));
        },
        () => {
          statusHandler("Błąd");
        }
      );
    setLoading(() => false);
  };

  const changeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={sendEmail} className="mx-auto flex max-w-lg flex-col gap-5">
      <section className="flex flex-col gap-2">
        <label htmlFor="from_name">Imię:</label>
        <input
          id="from_name"
          name="from_name"
          value={values.from_name}
          onChange={changeHandler}
          className="p-1  text-black"
        />

        <label htmlFor="from_email">Email:</label>
        <input
          id="from_email"
          name="from_email"
          value={values.from_email}
          onChange={changeHandler}
          className="p-1  text-black"
        />

        <label htmlFor="message">Wiadomość:</label>
        <textarea
          name="message"
          id="message"
          className="p-1 text-black"
          rows={10}
          required
          onChange={changeHandler}
          value={values.message}
        />
      </section>
      <button
        type="submit"
        className={`bg-red-500 py-2 transition 
        ${
          loading
            ? "cursor-not-allowed focus:bg-red-600"
            : "bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-600"
        }
        `}
        disabled={loading}
      >
        {loading ? "Wysłanie..." : "Wyślij"}
      </button>
    </form>
  );
};

export default ContactForm;
