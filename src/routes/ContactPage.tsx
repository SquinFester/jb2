import { useState } from "react";

import Container from "../layouts/Container";
import ContactForm from "../components/ContactForm";
import EmailStatus from "../components/EmailStatus";

export type Status = null | "Sukces" | "Błąd";

const ContactPage = () => {
  const [sendingStatus, setSendingStatus] = useState<Status>(null);

  return (
    <>
      {sendingStatus && (
        <EmailStatus status={sendingStatus} onSetStatus={setSendingStatus} />
      )}

      <Container title="kontakt">
        <section>
          <ContactForm onSetStatus={setSendingStatus} />
        </section>
      </Container>
    </>
  );
};

export default ContactPage;
