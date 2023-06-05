import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef() as React.MutableRefObject<HTMLFormElement>;

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

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
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      name.value = "";
      email.value = "";
      message.value = "";
    } else {
      return;
    }
  };

  const inputClass = "";

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="mx-auto flex max-w-lg flex-col gap-5"
    >
      <section className="flex flex-col gap-2">
        <label htmlFor="user_name">Imię:</label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          className="p-1 text-black"
          required
        />
        <label htmlFor="user_email">Email:</label>
        <input
          type="email"
          name="user_email"
          id="user_email"
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
      <button type="submit" className="bg-red-500 py-2 ">
        Wyślij
      </button>
    </form>
  );
};

export default ContactForm;
