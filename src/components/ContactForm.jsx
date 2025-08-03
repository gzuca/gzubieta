import {useState} from "react";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setSubmitted(false);
    setError(false);

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mrbllkov", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>

        <label>
          Email:
          <input type="email" name="email" required />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            pattern="^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$"
            placeholder="e.g. (512) 123-4567"
          />
        </label>

        <label>
          Message:
          <textarea name="message" required />
        </label>

        <button type="submit">Send Message</button>
      </form>

        {submitted && <p style={{ color: "green" }}>✅ Thank you for your message! I will get back to you as soon as possible.</p>}
        {error && <p style={{ color: "red" }}>❌ Something went wrong. Please try again.</p>}

    </div>
  );
}
export default ContactForm;