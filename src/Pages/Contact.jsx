import { useState } from "react";
import emailjs from "emailjs-com"
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    emailjs
      .send(
        "service_75mxb79",       // 🔁 Replace with your service ID
        "template_wthbofo",      // 🔁 Replace with your template ID
        form,                    // 💡 Object with name, email, message
        "OszIGWpTmbyOL2_7R"        // 🔁 Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setSubmitted(true);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email failed to send:", error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        {submitted ? (
          <div className="success-message">
            Thank you! Your message has been sent.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your message..."
              />
            </label>

            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
}
