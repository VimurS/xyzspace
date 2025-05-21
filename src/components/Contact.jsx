import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

function Contact() {
  useScrollReveal();
  const formRef = useRef();

  const handleMailTo = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const countryCode = form.countryCode.value;
    const phone = form.phone.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    const fullPhone = phone ? `${countryCode} ${phone}` : "Not provided";

    const mailtoLink = `mailto:yourname@gmail.com?subject=New Contact from ${name}&body=
Name: ${name}%0D%0A
Email: ${email}%0D%0A
Phone: ${fullPhone}%0D%0A
Message: ${message}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="contact reveal" id="contact">
      {/* <h3>Contact Us</h3> */}
      <form ref={formRef}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />

        <div className="phone-group">
  <input
    type="text"
    name="countryCode"
    placeholder="+91"
    defaultValue="+91"
    className="country-code-input"
  />
  <input
    type="tel"
    name="phone"
    placeholder="Phone Number (optional)"
    className="phone-number-input"
  />
</div>


        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        <button type="submit" onClick={handleMailTo}>
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
