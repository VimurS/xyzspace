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
   <section className="contact-section" id="contact">
  <div className="form-card">
    <h3>Let's Create Together</h3>
    <form ref={formRef} onSubmit={handleMailTo}>
      <div className="form-group">
        <input type="text" placeholder="Your Name" name="name" required />
        {/* <label>Your Name</label> */}
      </div>
      <div className="form-group">
        <input type="email" placeholder="Your Email" name="email" required />
        {/* <label>Your Email</label> */}
      </div>
      <div className="form-group phone-combo">
        <input type="text" name="countryCode" defaultValue="+91" />
        <input type="tel" name="phone" placeholder="Phone (optional)" />
      </div>
      <div className="form-group">
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        {/* <label>Your Message</label> */}
      </div>
      <button type="submit" className="btn-send">Send ✉️</button>
    </form>
  </div>
</section>

  );
}

export default Contact;
