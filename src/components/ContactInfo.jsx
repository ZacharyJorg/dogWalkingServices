import { forwardRef } from "react";

const ContactInfo = forwardRef((props, ref) => {
  return (
    <section className="contact-info" ref={ref}>
      <h4>Contact me here:</h4>
      <p>Email: JorgensenZachary@gasdag.com</p>
      <br></br>
      <p>Phone: (951)-428-7522</p>
      <br></br>
      <p>
        Please feel free to email, call or text me to set up an appointment, I
        look forward to meeting you and your pet!
      </p>
    </section>
  );
});

export default ContactInfo;
