"use client";

import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import EmailStatus from "@/components/EmailStatus";
import Heading from "@/components/Heading";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<Status>(null);

  return (
    <main className="relative pt-10">
      {status && <EmailStatus status={status} onSetStatus={setStatus} />}
      <Heading>Kontakt</Heading>
      <Container>
        <ContactForm onSetStatus={setStatus} />
      </Container>
    </main>
  );
}
