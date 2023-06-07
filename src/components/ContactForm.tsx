import React, { useState, useRef } from "react";

import { Status } from "../routes/ContactPage";

import emailjs from "@emailjs/browser";

const ContactForm = ({
  onSetStatus,
}: {
  onSetStatus: React.Dispatch<React.SetStateAction<Status>>;
}) => {
  const [loading, setLoading] = useState(false);

  const statusHandler = (status: Status) => {
    onSetStatus(() => status);
  };

  const form = useRef() as React.MutableRefObject<HTMLFormElement>;

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(() => true);

    const inputs = form.current.elements;
    const name = inputs[0] as HTMLInputElement;
    const email = inputs[1] as HTMLInputElement;
    const message = inputs[2] as HTMLInputElement;

    if (
      name.value.trim().length > 0 &&
      email.value.trim().length > 0 &&
      email.value.includes("@") &&
      message.value.trim().length > 0
    ) {
      emailjs
        .sendForm(
          "service_stqbg3s",
          "template_289gshc",
          form.current,
          "-Bz90bhoChewjmhy0"
        )
        .then(
          () => {
            statusHandler("Sukces");
          },
          () => {
            statusHandler("Błąd");
          }
        );

      name.value = "";
      email.value = "";
      message.value = "";
      setLoading(() => false);
    } else {
      statusHandler("Błąd");
      setLoading(() => false);
      return;
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="mx-auto flex max-w-lg flex-col gap-5"
    >
      <section className="flex flex-col gap-2">
        <label htmlFor="from_name">Imię:</label>
        <input
          type="text"
          name="from_name"
          id="from_name"
          className="p-1 text-black"
          required
        />
        <label htmlFor="from_email">Email:</label>
        <input
          type="email"
          name="from_email"
          id="from_email"
          className="p-1  text-black"
          required
        />
        <label htmlFor="message">Wiadomość:</label>
        <textarea
          name="message"
          id="message"
          className="p-1 text-black"
          rows={10}
          required
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
