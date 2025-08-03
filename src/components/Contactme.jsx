import ContactForm from "./ContactForm";

function Contactme() {
  return (

  <div className="page">
    <div id="contact" className="contact-container">
      <h1 className="contact-title">Let’s Connect</h1>

      <div className="contact-form-wrapper">
        <ContactForm />
      </div>

      <div className="contact-info">
        <p>
          I’m always open to new opportunities, freelance projects, or simply
          connecting with other developers and creatives. Don’t hesitate to
          reach out!
        </p>
        <div className="social-icons">
          <a href="https://github.com/gzuca" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/gzubieta/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Contactme;

