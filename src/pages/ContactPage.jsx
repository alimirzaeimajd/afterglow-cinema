import { useState } from "react";
import "../contact.css";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to an email service (Formspree, EmailJS, etc.) later.
    setSubmitted(true);
  }

  return (
    <div className="page-wrapper contact-page">
      <header className="page-header">
        <div className="page-header__left">
          <div className="page-header__eyebrow">Get in touch</div>
          <h1 className="page-header__title">
            Say <span>Hello</span>
          </h1>
          <p className="page-header__subtitle">
            Recommendations, corrections, or just want to talk about a film — I'm listening.
          </p>
        </div>
      </header>

      {submitted ? (
        <div className="contact-success">
          <p>Thanks for reaching out — I'll get back to you soon.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="contact-form__field">
            <span>Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>

          <label className="contact-form__field">
            <span>Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>

          <label className="contact-form__field">
            <span>Message</span>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="contact-form__submit">
            Send message
          </button>
        </form>
      )}
    </div>
  );
}
